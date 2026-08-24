import React from "react";

/** The contents / index list: number, title, kind, folio. Hairline between every row. */
export function Contents({ items = [], numbered = true, kindColumn = true, style, ...rest }) {
  const meta = { fontFamily: "var(--font-sans)", fontSize: "var(--type-caption)", color: "var(--text-muted)" };
  return (
    <ol style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--rule-hair)", ...style }} {...rest}>
      {items.map((it, i) => (
        <li key={i} style={{ borderBottom: "1px solid var(--rule-hair)" }}>
          <a href={it.href || "#"} style={{
            display: "grid",
            gridTemplateColumns: (numbered ? "38px " : "") + "1fr" + (kindColumn ? " 148px" : "") + " 44px",
            alignItems: "baseline", gap: "var(--space-4)", padding: "11px 0",
            borderBottom: 0, textDecoration: "none", color: "inherit"
          }}>
            {numbered && <span style={{ ...meta, fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}>{it.number || String(i + 1).padStart(2, "0")}</span>}
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--type-body)", color: "var(--text-body)" }}>{it.title}</span>
            {kindColumn && <span style={meta}>{it.kind}</span>}
            <span style={{ ...meta, fontFamily: "var(--font-mono)", textAlign: "right", color: "var(--text-muted)" }}>{it.page}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
