import React from "react";

/** The PAPER wordmark is set, not drawn: display serif, wide tracking, uppercase. */
export function Wordmark({ text = "PAPER", size = "md", tagline, as = "div", style, ...rest }) {
  const scale = { sm: 15, md: 19, lg: 30, xl: 46 }[size] || 19;
  const Tag = as;
  return (
    <Tag style={{ display: "inline-block", lineHeight: 1, ...style }} {...rest}>
      <span style={{
        display: "block", fontFamily: "var(--font-display)", fontSize: scale + "px",
        letterSpacing: "var(--tracking-wordmark)", textTransform: "uppercase",
        color: "var(--text-display)"
      }}>{text}</span>
      {tagline && <span style={{
        display: "block", marginTop: scale * 0.34 + "px", fontFamily: "var(--font-serif)",
        fontStyle: "italic", fontSize: Math.max(12, scale * 0.5) + "px",
        color: "var(--text-secondary)", letterSpacing: 0
      }}>{tagline}</span>}
    </Tag>
  );
}
