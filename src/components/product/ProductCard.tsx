"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/features/cartSlice";
import { toggleWishlist } from "@/store/features/wishlistSlice";
import { addToast } from "@/store/features/uiSlice";
import { formatPrice, calculateDiscount, ratingToStars } from "@/lib/utils";
import type { Product } from "@/types";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((s) => s.wishlist.items);
  const isWishlisted = wishlistItems.some((i) => i.productId === product.id);
  const [imgError, setImgError] = useState(false);
  const router = useRouter();

  const { full, half, empty } = ratingToStars(product.rating);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.stock === 0) return;

    dispatch(
      addToCart({
        productId: product.id,
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
        maxStock: product.stock,
      })
    );

    dispatch(
      addToast({ type: "success", message: `"${product.name}" added to cart!` })
    );
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      toggleWishlist({
        productId: product.id,
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail,
      })
    );

    dispatch(
      addToast({
        type: isWishlisted ? "info" : "success",
        message: isWishlisted
          ? `Removed from wishlist`
          : `Added to wishlist!`,
      })
    );
  };

  const discount =
    product.originalPrice
      ? calculateDiscount(product.originalPrice, product.price)
      : undefined;

  return (
    <Link
      href={`/products/${product.slug || product.id}`}
      className="product-card block no-underline group transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image wrapper */}
      <div className="product-card__image-wrapper relative overflow-hidden">
        {!imgError ? (
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[var(--bg-secondary)] text-[var(--text-muted)] text-sm">
            No Image
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <span
                          className="px-2.5 py-1 rounded text-[9px] font-extrabold uppercase tracking-[0.1em]"
                          style={{ background: "var(--color-accent-gold)", color: "#000" }}
                        >New</span>
          )}

          {discount && discount > 0 && (
            <span
                          className=" px-2.5 py-1 rounded text-[9px] font-extrabold uppercase tracking-[0.1em] text-text-primary"
                          style={{ background: "var(--color-accent-burgundy)" }}
                        >
              -{discount}%
            </span>
          )}

          {product.stock === 0 && (
            <span className="badge text-[10px] bg-black/60 text-[var(--text-muted)]">
              Sold Out
            </span>
          )}
        </div>

        {/* Quick actions */}
        <div className="product-card__actions">
          <button
            onClick={handleWishlist}
            className="btn btn-icon backdrop-blur transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(26,26,30,0.85)",
              border: `1px solid ${
                isWishlisted
                  ? "var(--accent-gold)"
                  : "var(--border-secondary)"
              }`,
              color: isWishlisted
                ? "var(--accent-gold)"
                : "var(--text-secondary)",
              width: "36px",
              height: "36px",
            }}
          >
            <Heart size={15} fill={isWishlisted ? "currentColor" : "none"} />
          </button>

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="btn btn-icon backdrop-blur transition-all duration-200 hover:scale-105 disabled:opacity-50"
            style={{
              background: "rgba(26,26,30,0.85)",
              border: "1px solid var(--border-secondary)",
              color: "var(--text-secondary)",
              width: "36px",
              height: "36px",
            }}
          >
            <ShoppingBag size={15} />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              router.push(`/products/${product.slug || product.id}`);
            }}
            className="btn btn-icon backdrop-blur transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(26,26,30,0.85)",
              border: "1px solid var(--border-secondary)",
              color: "var(--text-secondary)",
              width: "36px",
              height: "36px",
            }}
          >
            <Eye size={15} />
          </button>
        </div>
      </div>

      {/* Card body */}
      <div className="product-card__body">
        {product.brand && (
          <p className="text-[10px] uppercase tracking-[0.08em] font-semibold text-[var(--accent-warm-gold)] mb-1">
            {product.brand}
          </p>
        )}

        <h3 className="product-card__name">{product.name}</h3>

        {/* Stars */}
        <div className="star-rating mt-1 flex items-center gap-[2px]">
          {Array.from({ length: full }).map((_, i) => (
            <Star key={i} size={12} className="star-filled" fill="currentColor" />
          ))}
          {half && <Star size={12} className="star-half" />}
          {Array.from({ length: empty }).map((_, i) => (
            <Star key={i} size={12} className="star-empty" />
          ))}

          {product.reviewCount > 0 && (
            <span className="text-xs text-[var(--text-muted)] ml-1">
              ({product.reviewCount})
            </span>
          )}
        </div>

        {/* Price */}
        <div className="product-card__price-wrapper flex items-center gap-2 mt-1">
          <span className="product-card__price">
            {formatPrice(product.price)}
          </span>

          {product.originalPrice &&
            product.originalPrice > product.price && (
              <span className="product-card__original-price line-through text-[var(--text-muted)] text-xs">
                {formatPrice(product.originalPrice)}
              </span>
            )}
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="btn btn-secondary btn-sm w-full mt-3 transition-all duration-200 hover:scale-[1.02] disabled:opacity-50"
        >
          {product.stock === 0 ? "Sold Out" : "Add to Cart"}
        </button>
      </div>
    </Link>
  );
}