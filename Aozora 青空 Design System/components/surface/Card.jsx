import React from "react";

const BLURS = {
  thin:    "blur(8px) saturate(160%) brightness(1.04)",
  regular: "blur(28px) saturate(200%) brightness(1.08)",
  thick:   "blur(64px) saturate(240%) brightness(1.12) contrast(1.05)",
};

const FILLS = {
  clear: {
    thin:    "rgba(255,255,255,0.18)",
    regular: "rgba(255,255,255,0.45)",
    thick:   "rgba(255,255,255,0.78)",
  },
  blue: {
    thin:    "rgba(10,132,255,0.18)",
    regular: "rgba(10,132,255,0.22)",
    thick:   "rgba(10,132,255,0.32)",
  },
  sun: {
    thin:    "rgba(255,227,77,0.22)",
    regular: "rgba(255,227,77,0.28)",
    thick:   "rgba(255,227,77,0.40)",
  },
  dark: {
    thin:    "rgba(7,9,14,0.30)",
    regular: "rgba(7,9,14,0.42)",
    thick:   "rgba(7,9,14,0.58)",
  },
};

const PADDINGS = { none: 0, sm: 12, md: 20, lg: 28 };
const RADII = { md: 14, lg: 20, xl: 28, "2xl": 36 };

export function Card({
  tier = "regular",
  tint = "clear",
  padding = "md",
  radius = "xl",
  onClick,
  children,
  style: extra,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;

  const FROST = "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.18) 100%)";

  const base = {
    background: tint === "dark" ? FILLS[tint][tier] : `${FROST}, ${FILLS[tint][tier]}`,
    backdropFilter: BLURS[tier],
    WebkitBackdropFilter: BLURS[tier],
    border: `1px solid ${tint === "dark" ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.7)"}`,
    borderRadius: RADII[radius],
    padding: PADDINGS[padding],
    boxShadow: "var(--glass-edge), var(--shadow-md)",
    color: tint === "dark" ? "var(--neutral-0)" : "var(--text-strong)",
    cursor: clickable ? "pointer" : "default",
    transform: clickable && hover ? "translateY(-1px)" : "translateY(0)",
    transition: "transform var(--dur-fast) var(--ease-out-quart), box-shadow var(--dur-fast) var(--ease-out-quart)",
    boxSizing: "border-box",
  };

  const merged = { ...base, ...(extra || {}) };

  return React.createElement(
    clickable ? "button" : "div",
    {
      ...rest,
      onClick,
      style: merged,
      onMouseEnter: clickable ? () => setHover(true) : undefined,
      onMouseLeave: clickable ? () => setHover(false) : undefined,
    },
    children,
  );
}
