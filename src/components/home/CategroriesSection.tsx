import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";

export default function CategoriesSection() {
  return (
    <section className="section">
        <div className="container">
          {/* Section header */}
          <div className="text-center mb-14">
            <span
              className="text-accent-gold font-bold uppercase tracking-[0.14em] block mb-3"
              style={{ fontSize: "10px" }}
            >
              Departments
            </span>
            <h2
              className="font-heading font-black tracking-tight mb-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.025em" }}
            >
              Shop by Category
            </h2>
            <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
              Explore our curated departments, each with hundreds of exclusive pieces.
            </p>
            <div
              className="mx-auto mt-5 rounded-full"
              style={{
                width: "40px",
                height: "1px",
                background: "var(--accent-gold)",
              }}
            />
          </div>

          {/* Top row — 2-col hero layout */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2.5 mb-2.5">
            {CATEGORIES.slice(0, 2).map((cat, i) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.slug}`}
                className="group relative block overflow-hidden rounded-2xl border"
                style={{
                  aspectRatio: i === 0 ? "16/7" : "4/3",
                  borderColor: "var(--border-secondary)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CATEGORY_IMAGES[i]}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 flex items-end p-6"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 55%)",
                  }}
                >
                  <div>
                    <h3
                      className="font-heading font-extrabold text-text-primary mb-2"
                      style={{ fontSize: i === 0 ? "1.4rem" : "1.15rem" }}
                    >
                      {cat.name}
                    </h3>
                    <span className="flex items-center gap-1.5 text-accent-gold font-bold uppercase tracking-widest transition-gap duration-200 group-hover:gap-2.5" style={{ fontSize: "10px" }}>
                      Explore
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom row — 3 equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {CATEGORIES.slice(2, 5).map((cat, i) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.slug}`}
                className="group relative block overflow-hidden rounded-2xl border"
                style={{
                  aspectRatio: "4/3",
                  borderColor: "var(--border-secondary)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CATEGORY_IMAGES[i + 2]}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 flex items-end p-5"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 55%)",
                  }}
                >
                  <div>
                    <h3 className="font-heading font-extrabold text-text-primary text-lg mb-1.5">
                      {cat.name}
                    </h3>
                    <span
                      className="flex items-center gap-1.5 text-accent-gold font-bold uppercase tracking-widest"
                      style={{ fontSize: "10px" }}
                    >
                      Explore
                      <ArrowRight
                        size={12}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
  );
}


const CATEGORY_IMAGES = [
  "https://i.ibb.co.com/DH7Z8Y3S/hunters-race-h-No-SCx-PWYII-unsplash-1.jpg",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80",
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80",
];