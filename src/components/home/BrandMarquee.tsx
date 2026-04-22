const BRANDS = [
  "Maison Noir",
  "Chronos",
  "Belle Époque",
  "Atelier Sombre",
];

export default function BrandMarquee() {
  return (
    
      <section
        className="overflow-hidden py-6"
        style={{
          borderTop: "0.5px solid var(--border-secondary)",
          borderBottom: "0.5px solid var(--border-secondary)",
        }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 26s linear infinite" }}
        >
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={i}
              className="shrink-0 font-heading font-black italic px-8"
              style={{
                fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                color:
                  i % 3 === 0
                    ? "var(--accent-gold)"
                    : i % 3 === 1
                    ? "var(--text-muted)"
                    : "var(--accent-warm-gold)",
              }}
            >
              {brand}
              <span
                className="mx-6"
                style={{ color: "var(--border-primary)", fontStyle: "normal" }}
              >
                ✦
              </span>
            </span>
          ))}
        </div>

        {/* Inject marquee keyframes */}
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </section>
  );
}