"use client";

import Link from "next/link";
import { Heart, Trash2, ShoppingBag } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFromWishlist } from "@/store/features/wishlistSlice";
import { addToCart } from "@/store/features/cartSlice";
import { addToast } from "@/store/features/uiSlice";
import { formatPrice } from "@/lib/utils";

export default function WishlistPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.wishlist.items);

  const handleMoveToCart = (item: (typeof items)[0]) => {
    dispatch(
      addToCart({
        productId: item.productId,
        name: item.name,
        price: item.price,
        thumbnail: item.thumbnail,
        quantity: 1,
        maxStock: 99,
      })
    );

    dispatch(removeFromWishlist(item.productId));

    dispatch(
      addToast({
        type: "success",
        message: `"${item.name}" moved to cart!`,
      })
    );
  };

  /* Empty State */
  if (items.length === 0) {
    return (
      <div className="section min-h-[60vh] flex items-center">
        <div className="container text-center">
          <Heart className="mx-auto mb-6 text-[var(--text-muted)]" size={72} />

          <h1 className="font-heading text-3xl mb-4">
            Your Wishlist is Empty
          </h1>

          <p className="text-[var(--text-secondary)] mb-8">
            Save your favourite pieces for later — tap the ♡ on any product.
          </p>

          <Link href="/products" className="btn btn-primary btn-lg">
            Explore Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] mb-8">
          My Wishlist{" "}
          <span className="text-lg text-[var(--text-muted)] font-normal font-body">
            ({items.length} {items.length === 1 ? "item" : "items"})
          </span>
        </h1>

        {/* Grid */}
        <div className="grid-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="product-card transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="product-card__image-wrapper relative overflow-hidden">
                <Link href={`/products/${item.productId}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>

                {/* Remove button */}
                <div className="product-card__actions">
                  <button
                    onClick={() =>
                      dispatch(removeFromWishlist(item.productId))
                    }
                    className="btn btn-icon backdrop-blur transition-all duration-200 hover:scale-105"
                    style={{
                      background: "rgba(26,26,30,0.85)",
                      border: "1px solid var(--error)",
                      color: "var(--error)",
                      width: "36px",
                      height: "36px",
                    }}
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="product-card__body">
                <h3 className="product-card__name">{item.name}</h3>

                <div className="product-card__price-wrapper">
                  <span className="product-card__price">
                    {formatPrice(item.price)}
                  </span>
                </div>

                <button
                  onClick={() => handleMoveToCart(item)}
                  className="btn btn-primary btn-sm w-full mt-3 flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02]"
                >
                  <ShoppingBag size={14} />
                  Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}