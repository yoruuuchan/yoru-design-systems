import React from "react";

const SIZES = {
  sm: { box: 32, icon: 14 },
  md: { box: 40, icon: 18 },
  lg: { box: 52, icon: 22 },
};

const TONES = {
  brand:   { fill: "var(--blue-500)",    hover: "var(--blue-600)", text: "#fff" },
  accent:  { fill: "var(--sun-400)",     hover: "var(--sun-500)",  text: "var(--neutral-900)" },
  neutral: { fill: "var(--neutral-800)", hover: "var(--neutral-900)", text: "#fff" },
  danger:  { fill: "var(--danger-500)",  hover: "#E03A30",          text: "#fff" },
};

export function IconButton({
  variant = "ghost",
  tone = "neutral",
  size = "md",
  shape = "square",
  disabled = false,
  onClick,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const t = TONES[tone] || TONES.neutral;

  let bg, color, border, shadow, backdrop;
  if (variant === "filled") {
    bg = hover ? t.hover : t.fill;
    color = t.text;
    border = "1px solid transparent";
    shadow = "inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 8px rgba(10,68,140,0.18)";
    backdrop = "none";
  } else if (variant === "glass") {
    const gloss  = "linear-gradient(160deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.15) 22%, rgba(255,255,255,0) 45%)";
    const bottom = "linear-gradient(0deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 30%)";
    const tint   = hover
      ? "linear-gradient(180deg, rgba(180,220,255,0.35), rgba(255,255,255,0.45))"
      : "linear-gradient(180deg, rgba(180,220,255,0.22), rgba(255,255,255,0.28))";
    bg = `${gloss}, ${bottom}, ${tint}`;
    color = "var(--text-strong)";
    border = "1px solid rgba(255,255,255,0.85)";
    shadow = [
      "inset 0 1.5px 0 rgba(255,255,255,0.95)",
      "inset 0 -1px 0 rgba(10,68,140,0.10)",
      "inset 0 0 0 1px rgba(255,255,255,0.25)",
      "inset 0 6px 12px -6px rgba(255,255,255,0.65)",
      "inset 0 -8px 14px -8px rgba(10,132,255,0.20)",
      "0 1px 2px rgba(10,68,140,0.10)",
      "0 6px 18px rgba(10,68,140,0.18)",
    ].join(", ");
    backdrop = "blur(28px) saturate(220%) brightness(1.08)";
  } else {
    bg = press ? "var(--state-press-tint)" : hover ? "var(--state-hover-tint)" : "transparent";
    color = "var(--text-body)";
    border = "1px solid transparent";
    shadow = "none";
    backdrop = "none";
  }

  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: s.box,
    height: s.box,
    color,
    background: bg,
    border,
    borderRadius: shape === "circle" ? "50%" : "var(--radius-md)",
    boxShadow: shadow,
    backdropFilter: backdrop,
    WebkitBackdropFilter: backdrop,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transform: press && !disabled ? "scale(0.94)" : "scale(1)",
    transition: "background var(--dur-fast) var(--ease-out-quart), transform var(--dur-instant) var(--ease-out-quart)",
  };

  return React.createElement(
    "button",
    {
      ...rest,
      disabled,
      onClick: disabled ? undefined : onClick,
      style,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => { setHover(false); setPress(false); },
      onMouseDown: () => setPress(true),
      onMouseUp: () => setPress(false),
    },
    React.createElement("span", { style: { width: s.icon, height: s.icon, display: "inline-flex", alignItems: "center", justifyContent: "center" } }, children),
  );
}
