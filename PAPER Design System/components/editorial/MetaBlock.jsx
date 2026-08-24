import React from "react";

/** Words / Photographs / Published / Reading — the credit strip under an article header. */
export function MetaBlock({ items = [], layout = "row", rules = "top", style, ...rest }) {
  const border = "1px solid var(--rule-hair)";
  return (
    <div style={{
      display: layout === "grid" ? "grid" : "flex",
      gridTemplateColumns: layout === "grid" ? "repeat(" + Math.min(items.length, 4) + ",1fr)" : undefined,
      gap: layout === "grid" ? "var(--space-5)" : "var(--space-7)",
      flexWrap: "wrap",
      borderTop: rules === "top" || rules === "both" ? border : "none",
      borderBottom: rules === "bottom" || rules === "both" ? border : "none",
      padding: rules === "none" ? 0 : "var(--space-3) 0", ...style
    }} {...rest}>
      {items.map((it, i) => (
        <div key={i}>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--type-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-faint)" }}>{it.label}</div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--type-body-sm)", color: "var(--text-body)", marginTop: 5 }}>{it.value}</div>
        </div>
      ))}
    </div>
  );
}
