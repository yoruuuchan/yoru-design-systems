import React from "react";

/** Foot-of-page line: publication, running title, page number set in the display serif. */
export function Folio({ left, center, page, rule = true, style, ...rest }) {
  const lab = { fontFamily: "var(--font-sans)", fontSize: "var(--type-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)" };
  return (
    <footer style={{
      display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--space-5)",
      marginTop: "var(--space-8)", paddingTop: "var(--space-3)",
      borderTop: rule ? "1px solid var(--rule-hair)" : "none", ...style
    }} {...rest}>
      <span style={lab}>{left}</span>
      <span style={{ ...lab, color: "var(--text-faint)", textAlign: "center", flex: "1 1 auto" }}>{center}</span>
      <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-h3)", color: "var(--text-display)", fontVariantNumeric: "lining-nums" }}>{page}</span>
    </footer>
  );
}
