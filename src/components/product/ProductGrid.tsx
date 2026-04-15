import ProductCard from "./ProductCard";
import type { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  isLoading?: boolean;
  emptyMessage?: string;
}

/* Skeleton Card */
function SkeletonCard() {
  return (
    <div className="rounded-xl overflow-hidden border border-[var(--border-secondary)]">
      <div className="skeleton w-full aspect-[3/4]" />

      <div className="p-4">
        <div className="skeleton h-3 w-2/5 mb-2" />
        <div className="skeleton h-4 w-4/5 mb-3" />
        <div className="skeleton h-5 w-1/3" />
      </div>
    </div>
  );
}

export default function ProductGrid({
  products,
  columns = 4,
  isLoading = false,
  emptyMessage = "No products found.",
}: ProductGridProps) {
  /* Dynamic column handling */
  const colClasses: Record<number, string> = {
    2: "grid-cols-2 md:grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  /* Loading State */
  if (isLoading) {
    return (
      <div
        className={`grid ${colClasses[columns]} gap-4 md:gap-6`}
      >
        {Array.from({ length: columns * 2 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  /* Empty State */
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-16 px-6 text-text-secondary">
        <p className="text-lg">{emptyMessage}</p>
      </div>
    );
  }

  /* Product Grid */
  return (
    <div
      className={`grid ${colClasses[columns]} gap-4 md:gap-6`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}