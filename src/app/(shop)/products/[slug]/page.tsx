import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Package, Star } from "lucide-react";
import { getProduct } from "@/helper/getProduct";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Product Detail",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return (
      <div className="section">
        <div className="container text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/products" className="btn btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const discount =
    product.originalPrice &&
    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="section">
      <div className="container">

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
          <Link href="/" className="hover:text-text-primary">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-text-primary">Shop</Link>
          <span>/</span>
          <span className="text-text-primary">{product.name}</span>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Image */}
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-border-secondary bg-bg-secondary">
            <Image
              src={product.thumbnail}
              alt={product.name}
              fill
              className="object-cover hover:scale-[1.03] transition duration-500"
            />

            {/* Badge */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isNew && (
                <span className="badge badge-gold text-[10px]">New</span>
              )}
              {discount && (
                <span className="badge text-[10px]" style={{ background: "var(--accent-burgundy)" }}>
                  -{discount}%
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div>

            {/* Brand */}
            {product.brand && (
              <p className="text-xs uppercase tracking-wider text-accent-warm-gold mb-2 font-semibold">
                {product.brand}
              </p>
            )}

            {/* Title */}
            <h1 className="font-heading text-[clamp(1.8rem,3vw,2.6rem)] mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <span className="text-xs text-text-muted ml-2">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-extrabold text-accent-gold-light">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="line-through text-text-muted text-sm">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Full Description */}
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Info Box */}
            <div className="flex items-center gap-2 text-sm p-4 rounded-lg border border-border-secondary bg-bg-card mb-6">
              <Package size={16} className="text-accent-gold" />
              <span>
                SKU:{" "}
                <strong className="text-accent-warm-gold">
                  {product.sku}
                </strong>
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-3 flex-wrap">
              <button className="btn btn-primary btn-lg flex-1">
                Add to Cart
              </button>
              <button className="btn btn-secondary btn-icon btn-lg">
                ♡
              </button>
            </div>

            {/* Back */}
            <Link
              href="/products"
              className="btn btn-ghost btn-sm flex items-center gap-2 mt-6"
            >
              <ArrowLeft size={15} /> Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}