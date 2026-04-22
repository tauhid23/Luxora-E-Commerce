"use client";

import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/store/features/cartSlice";
import { formatPrice } from "@/lib/utils";
import { SHIPPING_COST, FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const { items, subtotal, tax, total, totalItems } = useAppSelector(
    (s) => s.cart
  );

  const shipping =
    subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : subtotal > 0 ? SHIPPING_COST : 0;

  if (items.length === 0) {
    return (
      <div
        className="section"
        style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <ShoppingBag
            size={72}
            style={{
              color: "var(--text-muted)",
              margin: "0 auto var(--space-6)",
            }}
          />
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-3xl)",
              marginBottom: "var(--space-4)",
            }}
          >
            Your Cart is Empty
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              marginBottom: "var(--space-8)",
            }}
          >
            Discover our curated collection and add pieces you love.
          </p>
          <Link href="/products" className="btn btn-primary btn-lg">
            Start Shopping <ShoppingBag size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "var(--space-8)",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Shopping Cart
            <span
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--text-muted)",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                marginLeft: "var(--space-3)",
              }}
            >
              ({totalItems} {totalItems === 1 ? "item" : "items"})
            </span>
          </h1>
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => dispatch(clearCart())}
            style={{ color: "var(--error)" }}
          >
            Clear All
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: "var(--space-8)",
            alignItems: "flex-start",
          }}
        >
          {/* Cart Items */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-4)",
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="card"
                style={{
                  display: "flex",
                  gap: "var(--space-4)",
                  padding: "var(--space-4)",
                }}
              >
                {/* Thumbnail */}
                <Link
                  href={`/products/${item.productId}`}
                  style={{
                    flexShrink: 0,
                    width: "100px",
                    height: "130px",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    border: "1px solid var(--border-secondary)",
                    display: "block",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Link>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "var(--text-base)",
                      marginBottom: "var(--space-1)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.name}
                  </h3>
                  {item.size && (
                    <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                      Size: {item.size}
                    </p>
                  )}
                  {item.color && (
                    <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                      Color: {item.color}
                    </p>
                  )}
                  <p
                    style={{
                      fontSize: "var(--text-lg)",
                      fontWeight: 700,
                      color: "var(--accent-gold)",
                      marginTop: "var(--space-2)",
                    }}
                  >
                    {formatPrice(item.price)}
                  </p>

                  {/* Qty + Delete */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-6)",
                      marginTop: "var(--space-4)",
                    }}
                  >
                    <div className="qty-selector">
                      <button
                        className="qty-selector__btn"
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity - 1,
                            })
                          )
                        }
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="qty-selector__value">{item.quantity}</span>
                      <button
                        className="qty-selector__btn"
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity + 1,
                            })
                          )
                        }
                        disabled={item.quantity >= item.maxStock}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      className="btn btn-icon btn-ghost"
                      onClick={() => dispatch(removeFromCart(item.id))}
                      style={{ color: "var(--error)" }}
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Line total */}
                <div
                  style={{
                    flexShrink: 0,
                    textAlign: "right",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "var(--text-xl)",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                    }}
                  >
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            ))}

            <Link
              href="/products"
              className="btn btn-ghost btn-sm"
              style={{ alignSelf: "flex-start", gap: "var(--space-2)" }}
            >
              <ArrowLeft size={15} /> Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div
            className="glass-card"
            style={{ padding: "var(--space-6)", position: "sticky", top: "calc(var(--navbar-height) + var(--space-4))" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--text-xl)",
                marginBottom: "var(--space-6)",
              }}
            >
              Order Summary
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
              }}
            >
              {[
                { label: "Subtotal", value: formatPrice(subtotal) },
                {
                  label: "Shipping",
                  value:
                    shipping === 0
                      ? subtotal > 0
                        ? "Free 🎉"
                        : "–"
                      : formatPrice(shipping),
                },
                { label: "Tax (10%)", value: formatPrice(tax) },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "var(--text-sm)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span>{row.label}</span>
                  <span style={{ color: "var(--text-primary)" }}>{row.value}</span>
                </div>
              ))}

              {subtotal < FREE_SHIPPING_THRESHOLD && subtotal > 0 && (
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--accent-warm-gold)",
                    background: "rgba(201, 166, 107, 0.1)",
                    padding: "var(--space-2) var(--space-3)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  Add{" "}
                  <strong>
                    {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)}
                  </strong>{" "}
                  more for free shipping!
                </p>
              )}

              <div
                className="divider"
                style={{ margin: "var(--space-2) 0" }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: 700,
                }}
              >
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-lg)" }}>
                  Total
                </span>
                <span className="price-tag" style={{ fontSize: "var(--text-2xl)" }}>
                  {formatPrice(total)}
                </span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "var(--space-6)" }}
            >
              Proceed to Checkout
            </Link>

            <p
              style={{
                textAlign: "center",
                fontSize: "var(--text-xs)",
                color: "var(--text-muted)",
                marginTop: "var(--space-4)",
              }}
            >
              🔒 Secure checkout with SSL encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
