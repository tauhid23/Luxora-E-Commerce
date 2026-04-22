"use client";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <div className="relative flex items-center justify-center">
        
        {/* Outer glow ring */}
        <div className="w-16 h-16 rounded-full border-2 border-transparent border-t-[var(--color-accent-gold)] animate-spin" />

        {/* Inner glow */}
        <div className="absolute w-10 h-10 rounded-full bg-[var(--color-accent-gold)]/20 blur-md animate-pulse" />

        {/* Center dot */}
        <div className="absolute w-2 h-2 rounded-full bg-[var(--color-accent-warm-gold)] animate-pulse" />
      </div>
    </div>
  );
}