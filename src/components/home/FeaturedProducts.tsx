import Link from "next/link";
import StarRating from "../shared_components/StarRating";
import { ArrowRight} from "lucide-react";


export default function FeaturedProducts() {




  return (
   
        <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="container">
          {/* Section header */}
          <div className="flex items-end justify-between mb-11">
            <div>
              <span
                className="text-accent-gold font-bold uppercase tracking-[0.14em] block mb-2"
                style={{ fontSize: "10px" }}
              >
                Editor&apos;s Picks
              </span>
              <h2
                className="font-heading font-black tracking-tight"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  letterSpacing: "-0.025em",
                }}
              >
                Featured Collection
              </h2>
            </div>
            <Link
              href="/products"
              className="btn btn-secondary flex-shrink-0"
            >
              View All <ArrowRight size={15} />
            </Link>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {MOCK_PRODUCTS.map((product) => {
              const discount = product.originalPrice
                ? Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )
                : 0;

              return (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group block rounded-xl overflow-hidden border transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: "var(--bg-primary)",
                    borderColor: "var(--border-secondary)",
                    textDecoration: "none",
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      {product.isNew && (
                        <span
                          className="px-2.5 py-1 rounded text-[9px] font-extrabold uppercase tracking-[0.1em]"
                          style={{ background: "var(--color-accent-gold)", color: "#000" }}
                        >
                          New
                        </span>
                      )}
                      {discount > 0 && (
                        <span
                          className="px-2.5 py-1 rounded text-[9px] font-extrabold uppercase tracking-[0.1em] text-text-primary"
                          style={{ background: "var(--color-accent-burgundy)" }}
                        >
                          -{discount}%
                        </span>
                      )}
                      {product.isBestSeller && !product.isNew && (
                        <span
                          className="px-2.5 py-1 rounded text-[9px] font-extrabold uppercase tracking-[0.1em] text-text-primary border"
                          style={{
                            background: "rgba(255,255,255,0.1)",
                            borderColor: "rgba(255,255,255,0.2)",
                          }}
                        >
                          Best Seller
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4">
                    <p
                      className="font-bold uppercase tracking-[0.1em] mb-1"
                      style={{ fontSize: "9px", color: "var(--accent-warm-gold)" }}
                    >
                      {product.brand}
                    </p>
                    <StarRating rating={product.rating} />
                    <h3
                      className="font-heading font-bold text-text-primary mb-3 leading-tight"
                      style={{ fontSize: "14px", letterSpacing: "-0.01em" }}
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-extrabold text-accent-gold-light" style={{ fontSize: "15px" }}>
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span
                          className="line-through text-text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
  );
}


const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Obsidian Silk Blazer",
    slug: "obsidian-silk-blazer",
    price: 299,
    originalPrice: 450,
    thumbnail:
      "https://i.ibb.co.com/qLRjrSvp/alireza-heidarpour-4x-IF4-R8t-Qls-unsplash.jpg",
    rating: 4.8,
    reviewCount: 142,
    brand: "Maison Noir",
    isNew: true,
    isBestSeller: false,
    discount: 34,
  },
  {
    id: "2",
    name: "Gold Hour Timepiece",
    slug: "gold-hour-timepiece",
    price: 899,
    originalPrice: undefined,
    thumbnail:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    rating: 5.0,
    reviewCount: 89,
    brand: "Chronos",
    isNew: false,
    isBestSeller: true,
    discount: 0,
  },
  {
    id: "3",
    name: "Crimson Velvet Gown",
    slug: "crimson-velvet-gown",
    price: 549,
    originalPrice: 720,
    thumbnail:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    rating: 4.6,
    reviewCount: 63,
    brand: "Belle Époque",
    isNew: true,
    isBestSeller: false,
    discount: 24,
  },
  {
    id: "4",
    name: "Noir Leather Tote",
    slug: "noir-leather-tote",
    price: 389,
    originalPrice: undefined,
    thumbnail:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    rating: 4.9,
    reviewCount: 201,
    brand: "Atelier Sombre",
    isNew: false,
    isBestSeller: true,
    discount: 0,
  },
];