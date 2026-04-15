import type { Metadata } from "next";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import ProductGrid from "@/components/product/ProductGrid";
import { MOCK_PRODUCTS } from "@/data/mockProducts";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse our full collection of premium fashion, accessories, electronics, and lifestyle products.",
};

export default function ProductsPage() {
  return (
    <div className="section">
      <div className="container">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="breadcrumbs flex items-center gap-2 text-sm text-text-muted">
              <Link href="/" className="hover:text-text-primary">
                Home
              </Link>
              <span>/</span>
              <span className="text-text-primary">Shop</span>
            </div>

            <h1 className="font-heading text-[clamp(2rem,4vw,3rem)]">
              All Products
            </h1>
          </div>

          <button className="btn btn-ghost flex items-center gap-2">
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/*  USE GRID COMPONENT */}
        <ProductGrid products={MOCK_PRODUCTS} columns={4} />

        {/* Footer */}
        <p className="text-center text-text-muted mt-12 text-sm">
          Connect your API in{" "}
          <code className="text-accent-gold bg-[rgba(212,175,55,0.1)] px-2 py-1 rounded">
            src/services/productApi.ts
          </code>{" "}
          to load real products.
        </p>
      </div>
    </div>
  );
}