const items = [
  "SIGN UP FOR OUR SUBSCRIPTION SERVICE TODAY!",
  "WE OPEN EVERY DAY 10:00 AM - 8:00 PM",
  "NEW DROPS EVERY WEDNESDAY @ 9AM EST",
];

export default function Marquee() {
  return (
    <div className="bg-[var(--secondary)] py-3 border-b-4 border-black overflow-hidden">
      <div className="marquee">
        {/* Duplicated for seamless infinite loop */}
        {[0, 1].map((i) => (
          <div
            key={i}
            className="marquee-content font-bold italic uppercase tracking-widest text-black text-lg"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {items.map((text, j) => (
              <span key={j}>{text}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
