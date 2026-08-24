import React from "react";

/** The thin machine-set line under a masthead: where you are, in three slots. */
export function RunningHead({ left, center, right, mono = true, rule = false, style, ...rest }) {
  const cell = {
    fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
    fontSize: "var(--type-micro)", letterSpacing: mono ? ".06em" : "var(--tracking-label)",
    textTransform: "uppercase", color: "var(--text-muted)", whiteSpace: "nowrap"
  };
  return (
    <div style={{
      display: "flex", alignItems: "baseline", justifyContent: "space-between",
      gap: "var(--space-4)", paddingTop: "var(--space-2)",
      paddingBottom: rule ? "var(--space-2)" : 0,
      borderBottom: rule ? "1px solid var(--rule-hair)" : "none", ...style
    }} {...rest}>
      <span style={cell}>{left}</span>
      {center !== undefined && <span style={{ ...cell, color: "var(--text-faint)" }}>{center}</span>}
      <span style={{ ...cell, textAlign: "right" }}>{right}</span>
    </div>
  );
}
