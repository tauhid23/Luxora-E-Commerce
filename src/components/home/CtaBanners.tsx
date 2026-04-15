import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="section text-center">
      <section
        className="section text-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%), linear-gradient(135deg, var(--bg-secondary) 0%, rgba(92,43,43,0.28) 50%, var(--bg-secondary) 100%)",
        }}
      >
        <div className="container relative z-10">
          {/* Gold rule */}
          <div
            className="mx-auto mb-5 rounded-full"
            style={{ width: "40px", height: "1px", background: "var(--accent-gold)" }}
          />

          <span
            className="text-accent-gold font-bold uppercase tracking-[0.14em] block mb-4"
            style={{ fontSize: "10px" }}
          >
            Spring / Summer 2026
          </span>

          <h2
            className="font-heading font-black mx-auto mb-5 leading-[1.06]"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              letterSpacing: "-0.03em",
              maxWidth: "690px",
            }}
          >
            The New Season Is{" "}
            <em
              className="italic text-gold-gradient"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Here
            </em>
          </h2>

          <p
            className="text-text-secondary mx-auto mb-11 leading-relaxed"
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              maxWidth: "500px",
            }}
          >
            Explore our Spring/Summer 2026 collection — where timeless elegance
            meets contemporary edge.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/products?category=new-arrivals"
              className="btn btn-primary btn-lg"
            >
              Shop New Arrivals <ArrowRight size={17} />
            </Link>
            <Link href="/products?category=sale" className="btn btn-ghost btn-lg">
              View Sale Items
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}