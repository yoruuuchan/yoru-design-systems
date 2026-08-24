import React from "react";

/** Polaroid / mounted print: a photo with a deep bottom margin for a written caption. */
export function MemoryCard({ children, caption, date, ratio = "1/1", rotate = 0, width, style, ...rest }) {
  return (
    <figure style={{
      width, padding: "14px 14px 0", background: "var(--surface-raised)",
      backgroundImage: "var(--tex-fibre)", backgroundBlendMode: "multiply",
      boxShadow: "var(--shadow-polaroid)", transform: "rotate(" + rotate + "deg)", ...style
    }} {...rest}>
      <div style={{
        aspectRatio: ratio, background: "var(--placeholder-tone)", overflow: "hidden",
        boxShadow: "var(--shadow-inset-frame)", filter: "var(--photo-filter, none)"
      }}>{children}</div>
      <figcaption style={{ minHeight: 58, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)", padding: "14px 2px 16px" }}>
        <span style={{ fontFamily: "var(--font-hand)", fontSize: 19, lineHeight: 1.25, color: "var(--hand-ink)" }}>{caption}</span>
        {date && <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--type-micro)", color: "var(--text-faint)", whiteSpace: "nowrap" }}>{date}</span>}
      </figcaption>
    </figure>
  );
}
