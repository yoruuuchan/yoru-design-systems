import React from "react";

const PAL = {
  brand:   { solid: "#0A84FF", soft: "rgba(10,132,255,0.10)", text: "#005BB8" },
  accent:  { solid: "#FFD000", soft: "rgba(255,227,77,0.24)", text: "#7A5A00" },
  neutral: { solid: "#3D4956", soft: "rgba(61,73,86,0.08)",   text: "#3D4956" },
};

export function Tag({
  tone = "neutral",
  removable = false,
  selected = false,
  onRemove,
  onClick,
  children,
}) {
  const [hover, setHover] = React.useState(false);
  const p = PAL[tone] || PAL.neutral;

  const bg = selected ? p.solid : (hover && onClick ? "rgba(10,68,140,0.06)" : p.soft);
  const color = selected ? (tone === "accent" ? "var(--neutral-900)" : "#fff") : p.text;
  const border = selected ? "transparent" : "rgba(10,68,140,0.10)";

  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 10px 5px 12px",
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "-0.005em",
    color,
    background: bg,
    border: `1px solid ${border}`,
    borderRadius: 999,
    cursor: onClick || removable ? "pointer" : "default",
    transition: "background var(--dur-fast) var(--ease-out-quart)",
    userSelect: "none",
  };

  const xStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 16, height: 16,
    borderRadius: "50%",
    background: selected ? "rgba(255,255,255,0.25)" : "rgba(10,68,140,0.10)",
    color: selected ? "#fff" : "currentColor",
    cursor: "pointer",
    marginLeft: 2,
    marginRight: -2,
  };

  return React.createElement(
    "span",
    {
      style,
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
    },
    children,
    removable
      ? React.createElement(
          "span",
          {
            style: xStyle,
            onClick: (e) => { e.stopPropagation(); onRemove && onRemove(); },
          },
          React.createElement(
            "svg",
            { width: 8, height: 8, viewBox: "0 0 8 8" },
            React.createElement("path", { d: "M1 1l6 6M7 1L1 7", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" }),
          ),
        )
      : null,
  );
}
