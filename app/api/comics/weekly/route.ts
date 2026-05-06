import { NextRequest, NextResponse } from "next/server";

const BASE = "https://metron.cloud/api";
const PER_PAGE = 12;

function getWeekRange(){
    const now = new Date();
    // gets day of the week as a number >> 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const day = now.getDay();
    // find this week Sunday by subtracting day days from today
    const sunday = new Date(now);
    sunday.setDate(now.getDate() - day);
    // find this week Saturday by adding 6 days to Sunday
    const saturday = new Date(sunday);
    saturday.setDate(sunday.getDate() + 6);

    const nextSunday = new Date(saturday);
    nextSunday.setDate(saturday.getDate() + 1);
    nextSunday.setHours(0,0,0,0);

    //calculate the seconds from now (first fetch) to next Sunday at minight for cache expiration
    const revalidate = Math.floor((nextSunday.getTime() - now.getTime()) / 1000);
    // format as YYYY-MM-DD
    const format = (date: Date) => date.toISOString().split("T")[0];

    return { after: format(sunday), before: format(saturday), revalidate };
}

function authHeader(){
    return "Basic " + btoa(`${process.env.METRON_USERNAME}:${process.env.METRON_PASSWORD}`);
}

async function metronFetch(url: string, revalidate: number){
    const response = await fetch(url,{
        headers:{
            "Authorization": authHeader(),
            "Accept": "application/json",
            "User-Agent": "AsgardianComics/1.0"
        },
        next: {
            revalidate
        }
    })
    if(!response.ok){
        throw new Error(`Metron API error: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

async function fetchAllWeekId(after: string, before: string, revalidate: number): Promise<number[]>{
    const ids: number[] = [];
    let url: string | null = `${BASE}/issue/?store_date_range_after=${after}&store_date_range_before=${before}`;
    while(url){
        const data = await metronFetch(url, revalidate);
        for (const item of data.results) ids.push(item.id);
        url = data.next ?? null;
    }
    return ids;
}

export async function GET(request: NextRequest) {
    try{
        const page = Math.max(1, parseInt(new URL(request.url).searchParams.get("page") ?? "1", 10));
        const { after, before, revalidate } = getWeekRange();
        const allIds = await fetchAllWeekId(after, before, revalidate);
        const pageIds = allIds.slice((page - 1) * PER_PAGE, page * PER_PAGE);
        const issues = await Promise.all(pageIds.map((id) => metronFetch(`${BASE}/issue/${id}/`, revalidate)));
        return NextResponse.json({ total: allIds.length, page, perPage: PER_PAGE, issues}, { status: 200 });
    }
    catch (err){
        return NextResponse.json({ error: err instanceof Error ? err.message : "Unknown error" }, { status: 500 });
    }
}