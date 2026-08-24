import React from "react";

/** End-of-piece credits: role on the left, name on the right, hairline between. */
export function Credits({ items = [], title = "Credits", layout = "rows", style, ...rest }) {
  const lab = { fontFamily: "var(--font-sans)", fontSize: "var(--type-caption)", color: "var(--text-muted)" };
  if (layout === "stack") return (
    <div style={style} {...rest}>
      {title && <div style={{ ...lab, fontSize: "var(--type-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "var(--space-4)" }}>{title}</div>}
      <div style={{ display: "grid", gap: "var(--space-3)" }}>
        {items.map((it, i) => (
          <div key={i}>
            <div style={{ ...lab, fontSize: "var(--type-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-faint)" }}>{it.role}</div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--type-body-sm)", color: "var(--text-body)", marginTop: 3 }}>{it.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div style={style} {...rest}>
      {title && <div style={{ ...lab, fontSize: "var(--type-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "var(--space-3)" }}>{title}</div>}
      <dl style={{ margin: 0, borderTop: "1px solid var(--rule-hair)" }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-5)", padding: "9px 0", borderBottom: "1px solid var(--rule-hair)" }}>
            <dt style={lab}>{it.role}</dt>
            <dd style={{ margin: 0, fontFamily: "var(--font-serif)", fontSize: "var(--type-body-sm)", color: "var(--text-body)", textAlign: "right" }}>{it.name}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
