import { BadgeCheck, BookMarked } from "lucide-react";

export default function SubscriptionService() {
  return (
    <section className="bg-white text-black py-24 relative overflow-hidden">
      {/* Red diagonal slash on the right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 z-0"
        style={{
          backgroundColor: "var(--primary)",
          transform: "skewX(-15deg) translateX(5rem)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16">
        <div className="max-w-2xl">

          {/* Headline */}
          <h2
            className="text-4xl xl:text-5xl font-bold uppercase leading-none tracking-tight mb-8"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Never Miss A{" "}
            <span
              className="inline-block bg-black text-white px-2"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Single Panel
            </span>
          </h2>

          {/* Body */}
          <p
            className="text-zinc-700 text-base leading-relaxed mb-12 max-w-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Asgardians Comics carries thousands of titles — Marvel, DC, indie, and the finest manga in the city. Our subscription service guarantees your books are set aside every week, so you never miss a milestone issue, a rare variant, or that sell-out print run everyone is chasing.
          </p>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-100 p-8 border-4 border-black shadow-[4px_4px_0px_black]">
              <BookMarked
                size={40}
                className="mb-4"
                style={{ color: "var(--primary)" }}
              />
              <h4
                className="font-bold uppercase text-lg mb-2"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Pull List Pro
              </h4>
              <p
                className="text-zinc-600 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We reserve your titles every Wednesday drop. No more sold-out surprises or late-to-the-shelf regrets.
              </p>
            </div>

            <div className="bg-zinc-100 p-8 border-4 border-black shadow-[4px_4px_0px_black]">
              <BadgeCheck
                size={40}
                className="mb-4"
                style={{ color: "var(--primary)" }}
              />
              <h4
                className="font-bold uppercase text-lg mb-2"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Variant Elite
              </h4>
              <p
                className="text-zinc-600 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Get first access to 1:10, 1:25, and 1:100 incentive covers before they ever hit the floor.
              </p>
            </div>
          </div>

          {/* CTA */}
          <button
            className="bg-black text-white px-12 py-6 font-bold uppercase tracking-widest shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Start Your Subscription
          </button>

        </div>
      </div>
    </section>
  );
}
