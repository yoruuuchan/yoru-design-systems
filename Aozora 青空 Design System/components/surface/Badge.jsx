import React from "react";

const PAL = {
  brand:   { solid: "#0A84FF", soft: "rgba(10,132,255,0.14)",  text: "#005BB8" },
  accent:  { solid: "#FFE34D", soft: "rgba(255,227,77,0.28)",  text: "#7A5A00" },
  neutral: { solid: "#3D4956", soft: "rgba(61,73,86,0.10)",    text: "#3D4956" },
  success: { solid: "#34C759", soft: "rgba(52,199,89,0.16)",   text: "#0F7A2D" },
  warn:    { solid: "#FF9F0A", soft: "rgba(255,159,10,0.18)",  text: "#8A4A00" },
  danger:  { solid: "#FF453A", soft: "rgba(255,69,58,0.14)",   text: "#B11A12" },
};

export function Badge({ tone = "brand", variant = "soft", dot = false, children }) {
  const p = PAL[tone] || PAL.brand;

  let bg, color, border;
  if (variant === "solid") { bg = p.solid; color = (tone === "accent") ? "var(--neutral-900)" : "#fff"; border = "transparent"; }
  else if (variant === "outline") { bg = "transparent"; color = p.text; border = p.solid; }
  else { bg = p.soft; color = p.text; border = "transparent"; }

  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "3px 9px",
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.01em",
    color,
    background: bg,
    border: `1px solid ${border}`,
    borderRadius: 999,
    lineHeight: 1.4,
    whiteSpace: "nowrap",
  };
  const dotStyle = {
    width: 6, height: 6, borderRadius: "50%",
    background: variant === "solid" ? "currentColor" : p.solid,
  };
  return React.createElement(
    "span",
    { style },
    dot ? React.createElement("span", { style: dotStyle }) : null,
    children,
  );
}
