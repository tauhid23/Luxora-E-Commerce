import { Star } from "lucide-react";

export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={10}
          className={
            i <= Math.round(rating)
              ? "fill-accent-gold text-accent-gold"
              : "fill-transparent text-border-primary"
          }
        />
      ))}
    </div>
  );
}