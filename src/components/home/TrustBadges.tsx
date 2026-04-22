import { Truck, RefreshCw, Shield, Headphones } from "lucide-react";

const TRUST_BADGES = [
  { icon: Truck, title: "Free Shipping", desc: "On all orders over $100" },
  { icon: RefreshCw, title: "Easy Returns", desc: "30-day hassle-free returns" },
  { icon: Shield, title: "Secure Payments", desc: "Trusted SSL encryption" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated concierge team" },
];

export default function TrustBadges() {
  return (
    <section
        style={{
          background: "var(--bg-secondary)",
          borderTop: "0.5px solid var(--border-secondary)",
          borderBottom: "0.5px solid var(--border-secondary)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {TRUST_BADGES.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.title}
                  className="flex items-center gap-4 py-7 px-6"
                  style={{
                    borderRight:
                      i < TRUST_BADGES.length - 1
                        ? "0.5px solid var(--border-secondary)"
                        : "none",
                  }}
                >
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(212,175,55,0.1)",
                      border: "0.5px solid rgba(212,175,55,0.2)",
                    }}
                  >
                    <Icon size={18} className="text-accent-gold" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-sm">{badge.title}</p>
                    <p className="text-text-muted mt-0.5" style={{ fontSize: "11px" }}>
                      {badge.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
}