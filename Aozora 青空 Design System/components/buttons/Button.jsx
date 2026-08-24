import React from "react";

/* eslint-disable */

const SIZES = {
  sm: { h: 32, px: 14, fs: 13, gap: 6, icon: 14 },
  md: { h: 40, px: 18, fs: 14, gap: 8, icon: 16 },
  lg: { h: 52, px: 24, fs: 16, gap: 10, icon: 18 },
};

const TONES = {
  brand:   { fill: "var(--blue-500)",    hover: "var(--blue-600)", press: "var(--blue-700)", text: "#fff" },
  accent:  { fill: "var(--sun-400)",     hover: "var(--sun-500)",  press: "var(--sun-600)",  text: "var(--neutral-900)" },
  neutral: { fill: "var(--neutral-800)", hover: "var(--neutral-900)", press: "#000",          text: "#fff" },
  danger:  { fill: "var(--danger-500)",  hover: "#E03A30",          press: "#C8322A",         text: "#fff" },
};

export function Button({
  variant = "filled",
  tone = "brand",
  size = "md",
  pill = false,
  block = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  onClick,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const t = TONES[tone] || TONES.brand;

  let bg, color, border, shadow, backdrop;
  if (variant === "filled") {
    bg = press ? t.press : hover ? t.hover : t.fill;
    color = t.text;
    border = "1px solid transparent";
    shadow = `inset 0 1px 0 rgba(255,255,255,${tone === "accent" ? 0.6 : 0.35}), inset 0 -1px 0 rgba(0,0,0,0.10), 0 2px 8px rgba(10,68,140,0.18)`;
    backdrop = "none";
  } else if (variant === "glass") {
    // Multi-layer liquid glass:
    //  1. top diagonal gloss (white → transparent)
    //  2. bottom edge specular (subtle warm → transparent)
    //  3. faint blue tint base so it reads as cool glass, not frosted milk
    const gloss  = "linear-gradient(160deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.15) 22%, rgba(255,255,255,0) 45%)";
    const bottom = "linear-gradient(0deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 30%)";
    const tint   = hover
      ? "linear-gradient(180deg, rgba(180,220,255,0.35), rgba(255,255,255,0.45))"
      : "linear-gradient(180deg, rgba(180,220,255,0.22), rgba(255,255,255,0.28))";
    bg = `${gloss}, ${bottom}, ${tint}`;
    color = "var(--text-strong)";
    border = "1px solid rgba(255,255,255,0.85)";
    shadow = [
      "inset 0 1.5px 0 rgba(255,255,255,0.95)",         // top rim highlight
      "inset 0 -1px 0 rgba(10,68,140,0.10)",            // bottom rim shadow
      "inset 0 0 0 1px rgba(255,255,255,0.25)",         // inner stroke
      "inset 0 8px 16px -8px rgba(255,255,255,0.65)",   // soft gloss bloom
      "inset 0 -10px 18px -10px rgba(10,132,255,0.18)", // bottom blue refraction
      "0 1px 2px rgba(10,68,140,0.10)",
      "0 8px 24px rgba(10,68,140,0.18)",                // outer drop
    ].join(", ");
    backdrop = "blur(28px) saturate(220%) brightness(1.08)";
  } else {
    bg = press ? "var(--state-press-tint)" : hover ? "var(--state-hover-tint)" : "transparent";
    color = tone === "danger" ? "var(--text-danger)" : "var(--text-accent)";
    border = "1px solid transparent";
    shadow = "none";
    backdrop = "none";
  }

  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.h,
    padding: `0 ${s.px}px`,
    fontFamily: "var(--font-sans)",
    fontSize: s.fs,
    fontWeight: 600,
    letterSpacing: "-0.005em",
    color,
    background: bg,
    border,
    borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
    boxShadow: focus ? `${shadow}, var(--ring-focus)` : shadow,
    backdropFilter: backdrop,
    WebkitBackdropFilter: backdrop,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transform: press && !disabled ? "scale(0.97)" : "scale(1)",
    transition: "background var(--dur-fast) var(--ease-out-quart), transform var(--dur-instant) var(--ease-out-quart), box-shadow var(--dur-fast) var(--ease-out-quart)",
    width: block ? "100%" : "auto",
    userSelect: "none",
    whiteSpace: "nowrap",
  };

  const iconStyle = { width: s.icon, height: s.icon, display: "inline-flex", alignItems: "center", justifyContent: "center" };

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
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
    },
    leadingIcon ? React.createElement("span", { style: iconStyle, key: "l" }, leadingIcon) : null,
    children,
    trailingIcon ? React.createElement("span", { style: iconStyle, key: "t" }, trailingIcon) : null,
  );
}
