import Image from "next/image";
import { CheckCircle } from "lucide-react";
import comicsImage from "../../images/comics.jpg";

const perks = [
  "Instant digital appraisals via photo upload",
  "Free insured shipping on approved trades",
  "20% Bonus value for store credit exchanges",
];

export default function TradeAppraisal() {
  return (
    <section className="py-24 px-8 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black border-4 border-red-600 p-12 relative shadow-[6px_6px_0px_#000]">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <div>
              <h2
                className="text-4xl xl:text-5xl font-bold uppercase leading-none tracking-tight text-white mb-6"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                WE WANT YOUR{" "}
                <span style={{ color: "var(--secondary)" }}>GRAILS.</span>
              </h2>

              <p
                className="text-zinc-400 text-base leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Looking to cash out? Asgardians Comics offers industry-leading
                rates for Golden, Silver, and Bronze age classics. We buy single
                keys or entire collections.
              </p>

              <ul className="space-y-4 mb-10">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-4 text-white">
                    <CheckCircle size={22} className="text-green-500 shrink-0" />
                    <span style={{ fontFamily: "var(--font-body)" }}>{perk}</span>
                  </li>
                ))}
              </ul>

              <button
                className="px-7 py-3 text-sm font-bold uppercase tracking-widest text-white bg-transparent hover:bg-red-600 transition-colors border-4 border-[#2a2a2a] shadow-[4px_4px_0px_#2a2a2a] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                GET AN APPRAISAL
              </button>
            </div>

            {/* Right: Image */}
            <div className="relative flex justify-center">
              {/* Rotated image frame */}
              <div className="relative aspect-square w-full max-w-sm border-4 border-white shadow-[6px_6px_0px_#000] p-2 rotate-3 overflow-hidden bg-zinc-900">
                <Image
                  src={comicsImage}
                  alt="Stacked vintage comic books"
                  fill
                  className="object-cover grayscale"
                />
              </div>

              {/* "Cash for Comics" badge */}
              <div
                className="absolute -top-6 -left-6 bg-yellow-400 text-black px-5 py-3 font-black text-xl border-4 border-black"
                style={{
                  fontFamily: "var(--font-headline)",
                  transform: "skewX(-6deg)",
                }}
              >
                CASH FOR COMICS
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
