"use client";

import {
    Truck,
    Star,
    ShieldCheck,
    Gift,
    RefreshCw,
} from "lucide-react";

const badgeClasses = {
    sale: "bg-[var(--color-badge-sale-bg)] text-[var(--color-badge-sale-text)]",
    new: "bg-[var(--color-badge-new-bg)] text-[var(--color-badge-new-text)] border border-[var(--color-border-dark)]",
    hot: "bg-[var(--color-badge-hot-bg)] text-[var(--color-badge-hot-text)]",
};

const defaultItems = [
    { type: "icon", icon: Truck, text: "Free shipping on orders above Rs. 2,999" },
    { type: "badge", badge: "Sale", badgeVariant: "sale", text: "Up to 50% off on summer collection" },
    { type: "icon", icon: Star, text: "Rated 4.9 by 10,000+ happy customers" },
    { type: "badge", badge: "New", badgeVariant: "new", text: "Just arrived — Eid Special Collection" },
    { type: "icon", icon: ShieldCheck, text: "100% authentic products, guaranteed" },
    { type: "badge", badge: "Hot", badgeVariant: "hot", text: "Best sellers restocked — grab yours now" },
    { type: "icon", icon: Gift, text: "Free gift wrapping on all orders today" },
    { type: "icon", icon: RefreshCw, text: "Easy 7-day returns, no questions asked" },
];

export default function Marquee({
    items = defaultItems,
    speed = 28,
    pauseOnHover = true,
    bgColor = "var(--color-bg-dark)",
    textColor = "var(--color-text-inverse)",
    iconColor = "var(--color-text-on-dark-muted)",
    className = "",
}) {
    return (
        <>
            <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll ${speed}s linear infinite;
        }
        ${pauseOnHover ? ".marquee-root:hover .marquee-track { animation-play-state: paused; }" : ""}
        .marquee-root::before,
        .marquee-root::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-root::before {
          left: 0;
          background: linear-gradient(to right, ${bgColor} 50%, transparent);
        }
        .marquee-root::after {
          right: 0;
          background: linear-gradient(to left, ${bgColor} 50%, transparent);
        }
      `}</style>

            <div
                className={`marquee-root relative overflow-hidden border-t border-b border-[var(--color-border-dark)] py-[14px] shadow-[0_4px_24px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15)] ${className}`}
                style={{ background: bgColor }}
                role="marquee"
                aria-label="Promotional announcements"
            >
                <div className="marquee-track flex w-max items-center">
                    {[0, 1].map((copy) => (
                        <div
                            key={copy}
                            className="flex items-center"
                            aria-hidden={copy === 1 ? "true" : undefined}
                        >
                            {items.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2.5 px-7 whitespace-nowrap text-[13px] font-medium tracking-wide"
                                    style={{ color: textColor, fontFamily: "var(--font-poppins), sans-serif" }}
                                >
                                    {item.type === "icon" ? (
                                        <item.icon
                                            size={15}
                                            strokeWidth={1.8}
                                            aria-hidden="true"
                                            style={{ color: iconColor, flexShrink: 0 }}
                                        />
                                    ) : (
                                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-widest uppercase ${badgeClasses[item.badgeVariant]}`}>
                                            {item.badge}
                                        </span>
                                    )}

                                    {item.text}

                                    <span
                                        className="size-1 rounded-full shrink-0 inline-block"
                                        style={{ background: iconColor }}
                                        aria-hidden="true"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}