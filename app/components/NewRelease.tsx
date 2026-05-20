"use client";

import { ChevronRight, ChevronLeft, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface IssueDetail {
    id: number;
    publisher: { name: string };
    series: {name: string; year_began: number};
    number: string;
    image: string;
    name: string[];
    price_currency: string;
    price: number;
    desc: string;
    rating: { name: string };
    page: number;
}

interface WeekResponse {
    total: number;
    page: number;
    perPage: number;
    issues: IssueDetail[];
}

function SkeletonCard() {
  return (
    <div className="bg-[#1a1a1a] border-2 border-white/20 overflow-hidden flex flex-col animate-pulse">
      <div className="w-full aspect-[3/4] bg-white/10" />
      <div className="p-3 flex flex-col gap-2">
        <div className="h-4 bg-white/10 rounded w-3/4" />
        <div className="flex justify-between items-center mt-1">
          <div className="h-4 bg-white/10 rounded w-1/4" />
          <div className="h-6 w-6 bg-white/10 rounded" />
        </div>
      </div>
    </div>
  );
}

function ComicCard({
    issue,
    onImageClick,
    onTitleClick
} : {
    issue: IssueDetail; 
    onImageClick: (src: string) => void;
    onTitleClick: (issue: IssueDetail) => void;
}) {
    const title = `${issue.series.name} #${issue.number}`;
    return(
        <div className="bg-[#121212] border-2 border-white overflow-hidden flex flex-col">
            {/* Cover image — click to enlarge */}
            <button
                className="relative w-full aspect-[3/4] overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
                onClick={() => onImageClick(issue.image)}
                aria-label={`Enlarge cover of ${title}`}
            >
                <Image 
                    src = {issue.image}
                    alt={`Cover of ${title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
            </button>
            {/* Card Footer */}
            <div className="p-3 flex flex-col gap-1 flex-1">
                <button
                    className="text-left text-xs font-bold uppercase leading-tight text-white hover:text-[var(--secondary)] transition-colors truncate focus:outline-none focus-visible:underline"
                    style={{ fontFamily: "var(--font-headline)" }}
                    onClick={() => onTitleClick(issue)}
                    title={title}
                    aria-label={`View details for ${title}`}
                >
                    {title}
                </button>
                <div>
                    <span>
                        {issue.price_currency} {issue.price}
                    </span>
                    <button
                        className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white hover:text-[var(--secondary)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary)]"
                        aria-label={`Add ${title} to cart`}
                    >
                        <ShoppingCart size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if(e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler)}, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged comic cover"
        >
            <button
                className="absolute top-4 right-4 text-white hover:text-[var(--primary)] min-h-[44px] min-w-[44px] flex items-center justify-center z-10"
                aria-label="Close"
                onClick={onClose}
            >
                <X size={32} />
            </button>
            <div
                className="relative max-h-[90vh] max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={600}
                    height={800}
                    className="object-contain max-h-[90vh] w-auto border-4 border-white"
                />
            </div>
        </div>
    )
}

function IssueDetailModal({ issue, onClose }: { issue: IssueDetail; onClose: () => void }) {
    const modalRef = useRef<HTMLDivElement>(null);
    const title = `${issue.series.name} #${issue.number}`;

    useEffect(() => {
        const el = modalRef.current;
        if (!el) return;
        const focusable = el.querySelectorAll<HTMLElement>('button, [href], input, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        first?.focus();
        const trap = (e: KeyboardEvent) => {
            if (e.key === "Escape") { onClose(); return; }
            if (e.key !== "Tab") return;
            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
            } else {
                if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
            }
        };
        el.addEventListener("keydown", trap);
        return () => el.removeEventListener("keydown", trap);
    }, [onClose]);

    const DetailRow = ({label, value}: {label: string; value: string | number}) => (
        <div>
            <span>
                {label}
            </span>
            <span>
                {value}
            </span>
        </div>
    )

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="detail-modal-title"
        >
            <div
                ref={modalRef}
                tabIndex={-1}
                className="relative bg-[#121212] border-4 border-white w-full max-w-2xl max-h-[90vh] overflow-y-auto focus:outline-none"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    className="absolute top-3 right-3 text-white hover:text-[var(--primary)] min-h-[44px] min-w-[44px] flex items-center justify-center z-10"
                    aria-label="Close"
                    onClick={onClose}
                >
                    <X size={28}/>
                </button>

                <div className="flex flex-col sm:flex-row gap-6 p-6">
          {/* Cover */}
          <div className="flex-shrink-0 w-full sm:w-44">
            <div className="relative w-full aspect-[3/4] border-2 border-white">
              <Image src={issue.image} alt={`Cover of ${title}`} fill className="object-cover" />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-4 flex-1 pt-1">
            <h2
              id="detail-modal-title"
              className="text-lg font-bold uppercase leading-tight text-white pr-10"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              {title}
            </h2>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <DetailRow label="Publisher" value={issue.publisher.name} />
              <DetailRow label="Started" value={String(issue.series.year_began)} />
              <DetailRow label="Pages" value={String(issue.page)} />
              <DetailRow label="Rating" value={issue.rating.name} />
              <div>
                <span
                  className="block text-xs uppercase tracking-widest text-white/50"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Price
                </span>
                <span
                  className="font-bold text-sm"
                  style={{ color: "var(--secondary)", fontFamily: "var(--font-headline)" }}
                >
                  {issue.price_currency} {issue.price}
                </span>
              </div>
            </div>

            {issue.desc && (
              <p
                className="text-sm text-white/70 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {issue.desc}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
    )
}
export default function NewRelease() {
    const [data, setData] = useState<WeekResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    const [lightboxAlt, setLightboxAlt] = useState("");
    const [detailIssue, setDetailIssue] = useState<IssueDetail | null>(null);

    const fetchPage = useCallback(async (page: number) => {
        setLoading(true);
        setError(null);
        try{
            const response = await fetch(`/api/comics/weekly?page=${page}`);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            const data: WeekResponse = await response.json();
            setData(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load");
        } finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {fetchPage(page);}, [page, fetchPage]);
    const totalPages = data ? Math.ceil(data.total / 12) : 0;

    return (
        <section className="w-full max-w-7xl mx-auto px-8 lg:px-16 py-20">
            {/* Heading */}
            <div className="mb-12">
                <h2
                    className="text-4xl xl:text-5xl font-bold uppercase leading-none tracking-tight text-white"
                    style={{ fontFamily: "var(--font-headline)" }}
                >
                    New <span style={{ color: "var(--secondary)" }}>This </span>Week
                </h2>
                <div className="mt-3 w-24 h-1" style={{ backgroundColor: "var(--primary)" }} />
            </div>
            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {loading && 
                    Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)}

                    {!loading && error && (
                        <div className="col-span-full py-16 text-center">
                            <p className="text-[var(--primary)] font-bold uppercase text-lg" style={{ fontFamily: "var(--font-headline)" }}>Failed to load comics</p>
                            <p className="text-white/50 text-sm mt-2" style={{ fontFamily: "var(--font-body)" }}>{error}</p>
                            <button
                                onClick={() => fetchPage(page)}
                                className="mt-6 px-6 py-2 border-2 border-white text-white font-bold uppercase hover:bg-white hover:text-[#121212] transition-colors"
                                style={{ fontFamily: "var(--font-headline)" }}
                            >Retry</button>
                        </div>
                    )}

                    {!loading && !error && data?.issues.length === 0 && (
                        <div>
                            <p>No New Release This Week</p>
                            <p>Check back on Wednesday for new drops</p>
                        </div>
                    )}

                    {!loading && !error && data?.issues.map((issue) => (
                        <ComicCard 
                            key={issue.id}
                            issue={issue}
                            onImageClick={(src) => {
                                const t = `${issue.series.name} #${issue.number}`;
                                setLightboxAlt(t);
                                setLightboxSrc(src);
                            }}
                            onTitleClick={setDetailIssue}   
                        />
                    ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className="px-5 py-2 text-sm font-bold uppercase tracking-widest border-2 border-white text-white hover:bg-white hover:text-[#121212] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            <ChevronLeft size={18} className="inline -mt-0.5" /> Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={
                n === page
                  ? "px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#121212] border-4 border-black shadow-[4px_4px_0px_black]"
                  : "px-5 py-2 text-sm font-bold uppercase tracking-widest border-2 border-white text-white hover:bg-white hover:text-[#121212] transition-colors"
              }
              style={n === page ? { backgroundColor: "var(--secondary)", fontFamily: "var(--font-headline)" } : { fontFamily: "var(--font-headline)" }}
              aria-current={n === page ? "page" : undefined}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
            className="px-5 py-2 text-sm font-bold uppercase tracking-widest border-2 border-white text-white hover:bg-white hover:text-[#121212] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Next <ChevronRight size={18} className="inline -mt-0.5" />
          </button>
        </div>
      )}

      {/* Overlays */}
      {lightboxSrc && (
        <ImageLightbox src={lightboxSrc} alt={lightboxAlt} onClose={() => setLightboxSrc(null)} />
      )}
      {detailIssue && (
        <IssueDetailModal issue={detailIssue} onClose={() => setDetailIssue(null)} />
      )}
        </section>
    )
}