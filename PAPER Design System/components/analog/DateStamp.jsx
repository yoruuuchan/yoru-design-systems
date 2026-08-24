import React from "react";

/** Rubber date stamp — mono figures in rust, slightly off-square. */
export function DateStamp({ date = "APR 12 2026", variant = "plain", rotate = -2.5, style, ...rest }) {
  const base = {
    display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "var(--type-caption)",
    letterSpacing: ".1em", color: "var(--stamp-ink)", transform: "rotate(" + rotate + "deg)",
    opacity: 0.88, whiteSpace: "nowrap"
  };
  if (variant === "boxed") return <span style={{ ...base, border: "1px solid var(--stamp-ink)", padding: "4px 8px", ...style }} {...rest}>{date}</span>;
  if (variant === "round") return (
    <span style={{
      ...base, width: 64, height: 64, borderRadius: "var(--radius-round)",
      border: "1px dashed var(--stamp-ink)", display: "grid", placeItems: "center",
      textAlign: "center", fontSize: "var(--type-micro)", lineHeight: 1.35, padding: 6, ...style
    }} {...rest}>{date}</span>
  );
  return <span style={{ ...base, ...style }} {...rest}>{date}</span>;
}
