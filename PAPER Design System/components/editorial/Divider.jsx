import React from "react";

/** The rules that separate sections. Weight carries meaning: hair within, heavy between. */
export function Divider({ variant = "hair", space = "var(--space-7)", label, style, ...rest }) {
  const wrap = { margin: space + " 0", ...style };
  if (variant === "ornament" || label) return (
    <div style={{ ...wrap, display: "flex", alignItems: "center", gap: "var(--space-4)" }} {...rest}>
      <span style={{ height: 1, background: "var(--rule-hair)", flex: 1 }} />
      <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--type-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-faint)" }}>{label || "\u00A7"}</span>
      <span style={{ height: 1, background: "var(--rule-hair)", flex: 1 }} />
    </div>
  );
  if (variant === "double") return <div style={wrap} {...rest}><div style={{ height: 3, background: "var(--rule-strong)" }} /><div style={{ height: 1, background: "var(--rule-strong)", marginTop: 2 }} /></div>;
  if (variant === "space") return <div style={{ height: space }} {...rest} />;
  const h = variant === "heavy" ? 3 : variant === "rule" ? 2 : 1;
  const bg = variant === "hair" ? "var(--rule-hair)" : "var(--rule-strong)";
  return <div style={{ ...wrap, height: h, background: bg }} {...rest} />;
}
