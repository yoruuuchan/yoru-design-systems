import React from "react";

/** Numbered notes at the foot of a column or page. */
export function Footnotes({ items = [], title, columns = 1, style, ...rest }) {
  return (
    <div style={{ borderTop: "1px solid var(--rule-hair)", paddingTop: "var(--space-3)", ...style }} {...rest}>
      {title && <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--type-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "var(--space-3)" }}>{title}</div>}
      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(" + columns + ",1fr)", gap: "var(--space-2) var(--space-6)" }}>
        {items.map((t, i) => (
          <li key={i} style={{ display: "grid", gridTemplateColumns: "22px 1fr", fontFamily: "var(--font-sans)", fontSize: "var(--type-caption)", lineHeight: 1.55, color: "var(--text-muted)" }}>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-accent)" }}>{i + 1}.</span>
            <span>{t}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
