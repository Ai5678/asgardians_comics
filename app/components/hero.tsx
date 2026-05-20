import Image from "next/image";
import heroBackground from "../../images/hero-background_resize.jpg";
import blackPanther from "../../images/hero_black_panther.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBackground}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,18,18,0.65)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-28">

        {/* Left: Text */}
        <div className="flex flex-col gap-7">

          {/* Badge */}
          <div>
            <span
              className="inline-block px-4 py-1.5 text-xs font-bold italic uppercase tracking-widest text-white border-2 border-black shadow-[2px_2px_0px_black]"
              style={{ backgroundColor: "var(--primary)", fontFamily: "var(--font-headline)", transform: "skewX(-6deg)" }}
            >
              Exclusive Preview
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl xl:text-6xl font-bold uppercase leading-none tracking-tight text-white"
          >
            ignite the {" "}
            <br />
            <span style={{ color: "var(--primary)" }}>multiverse</span>
          </h1>

          {/* Body */}
          <p
            className="text-sm leading-relaxed max-w-sm"
            style={{ color: "#b0b0b0" }}
          >
            The definitive hub for modern collectors. Get first-look access to variant covers, rare trades, and the latest releases from the underground scene.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap mt-1">
            <button
              className="px-7 py-3 text-sm font-bold uppercase tracking-widest text-white border-4 border-black shadow-[4px_4px_0px_black] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Join The Asgard
            </button>
            <button
              className="px-7 py-3 text-sm font-bold uppercase tracking-widest text-white border-2 border-white transition-all hover:bg-white hover:text-[#121212] cursor-pointer"
            >
              Explore Archive
            </button>
          </div>
        </div>

        {/* Right: Character Panel */}
        <div className="flex justify-center lg:justify-end pb-10 pr-10">
          <div className="relative">

            {/* Yellow skewed slab */}
            <div
              className="absolute -inset-2 z-0"
              style={{
                backgroundColor: "var(--secondary)",
                transform: "skewX(-6deg)",
              }}
            />

            {/* Image with thick white border */}
            <Image
              src={blackPanther}
              alt="Black Panther — Out Now"
              width={420}
              height={520}
              className="relative z-10 block object-cover border-8 border-white"
              priority
            />
            
          </div>
        </div>

      </div>
    </section>
  );
}
