import Link from "next/link";
import StarRating from "./StarRating";

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  thumbnail: string;
  rating: number;
  reviewCount: number;
  brand: string;
  isNew: boolean;
  isBestSeller: boolean;
};

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) /
          product.originalPrice) *
          100
      )
    : 0;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-xl overflow-hidden border transition-all duration-200 hover:-translate-y-1"
      style={{
        background: "var(--bg-primary)",
        borderColor: "var(--border-secondary)",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4]">
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
              style={{
                background: "var(--color-accent-gold)",
                color: "#000",
              }}
            >
              New
            </span>
          )}

          {discount > 0 && (
            <span
              className="px-2.5 py-1 rounded text-[9px] font-extrabold uppercase tracking-[0.1em]"
              style={{ background: "var(--color-accent-burgundy)" }}
            >
              -{discount}%
            </span>
          )}

          {product.isBestSeller && !product.isNew && (
            <span
              className="px-2.5 py-1 rounded text-[9px] font-extrabold uppercase tracking-[0.1em] border"
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
          style={{
            fontSize: "9px",
            color: "var(--accent-warm-gold)",
          }}
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
          <span
            className="font-extrabold text-accent-gold-light"
            style={{ fontSize: "15px" }}
          >
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
}