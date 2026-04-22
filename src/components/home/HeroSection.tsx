import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
        {/* Background */}
        <div
  aria-hidden="true"
  className="absolute inset-0 pointer-events-none"
  style={{
    background: `
      radial-gradient(ellipse 80% 100% at 35% 55%, rgba(107,39,55,0.22) 0%, transparent 65%),
      radial-gradient(ellipse 70% 80% at 65% 45%, rgba(212,175,55,0.07) 0%, transparent 60%)
    `,
  }}
/>
        {/* Grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── Left Content ── */}
            <div>
              {/* Eyebrow pill */}
              <div
                className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border"
                style={{
                  background: "rgba(212,175,55,0.08)",
                  borderColor: "rgba(212,175,55,0.35)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse"
                  style={{ flexShrink: 0 }}
                />
                <span
                  className="text-accent-gold font-bold tracking-[0.14em] uppercase"
                  style={{ fontSize: "10px" }}
                >
                  New Season Arrivals
                </span>
              </div>

              {/* Headline */}
              <h1
  className="font-heading font-black leading-[1.04] tracking-[-0.03em] mb-6 text-text-primary"
  style={{ fontSize: "clamp(2.6rem, 5vw, 4.4rem)" }}
>
  Where{" "}
  <span className="text-gradient">Luxury</span>
  <br />
  Meets Your{" "}
  <em className="italic" style={{ color: "var(--color-accent-warm-gold)" }}>
    Story
  </em>
</h1>

              {/* Subtext */}
              <p
                className="text-text-secondary leading-[1.8] max-w-110 mb-9"
                style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}
              >
                Discover handpicked fashion, fine timepieces, and rare lifestyle
                pieces from the world's most coveted ateliers — curated for the
                discerning few.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <Link href="/products" className="btn btn-primary btn-lg">
                  Shop the Collection
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/products?category=new-arrivals"
                  className="btn btn-secondary btn-lg"
                >
                  New Arrivals
                </Link>
              </div>

              {/* Stats */}
              <div
                className="flex gap-10 mt-12 pt-8"
                style={{ borderTop: "0.5px solid var(--border-secondary)" }}
              >
                {[
                  { value: "12K+", label: "Happy Clients" },
                  { value: "3K+", label: "Curated Pieces" },
                  { value: "50+", label: "Designer Brands" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="font-heading font-black text-accent-gold leading-none"
                      style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.02em" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-text-muted mt-1"
                      style={{ fontSize: "11px", letterSpacing: "0.04em" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Image Mosaic ── */}
            <div
              className="relative grid gap-2.5"
              style={{
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "350px 200px",
              }}
            >
              {/* Large main image */}
              <div
                className="relative overflow-hidden rounded-2xl border"
                style={{
                  gridColumn: "1",
                  gridRow: "1 / 3",
                  borderColor: "var(--border-secondary)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80"
                  alt="Luxury fashion editorial"
                  className="w-full h-full object-cover"
                />
                {/* Image badge */}
                <div
                  className="absolute bottom-4 left-4 rounded-xl px-4 py-3 border"
                  style={{
                    background: "rgba(10,10,10,0.88)",
                    backdropFilter: "blur(10px)",
                    borderColor: "var(--border-primary)",
                  }}
                >
                  <p
                    className="text-accent-gold font-bold uppercase tracking-[0.12em] mb-1"
                    style={{ fontSize: "9px" }}
                  >
                    Featured
                  </p>
                  <p className="text-text-primary font-semibold text-sm">
                    Spring Collection &apos;26
                  </p>
                </div>
              </div>

              {/* Top right image */}
              <div
                className="overflow-hidden rounded-2xl border"
                style={{ borderColor: "var(--border-secondary)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80"
                  alt="Luxury timepiece"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom right — sale tile */}
              <div
                className="overflow-hidden rounded-2xl border flex flex-col items-center justify-center gap-2 p-5 text-center"
                style={{
                  borderColor: "var(--border-secondary)",
                  background:
                    "linear-gradient(135deg, var(--bg-secondary) 0%, rgba(92,43,43,0.45) 100%)",
                }}
              >
                <p
  className="font-serif font-black leading-none text-gradient-white"
  style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
>
  30%
</p>
                <p className="text-text-secondary text-xs tracking-widest uppercase font-semibold">
                  Off Sale Items
                </p>
                <Link
                  href="/products?category=sale"
                  className="btn btn-primary btn-sm mt-1"
                >
                  Shop Sale
                </Link>
              </div>

              {/* Decorative gold bar */}
              <div
                aria-hidden="true"
                className="absolute rounded-full pointer-events-none"
                style={{
                  right: "-20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "3px",
                  height: "100px",
                  background:
                    "linear-gradient(180deg, transparent, var(--accent-gold), transparent)",
                }}
              />
            </div>
          </div>
        </div>
    </section>
  );
}