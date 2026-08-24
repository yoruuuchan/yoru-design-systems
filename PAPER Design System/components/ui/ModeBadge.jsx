import React from "react";

/** The E / A discs that mark which voice a page or figure is set in. */
export function ModeBadge({ mode = "editorial", size = 34, label = false, style, ...rest }) {
  const isA = mode === "analog";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-3)", ...style }} {...rest}>
      <span style={{
        width: size, height: size, flex: "none", borderRadius: "var(--radius-round)",
        display: "grid", placeItems: "center",
        background: isA ? "var(--paper-400)" : "var(--ink-800)",
        color: isA ? "var(--ink-800)" : "var(--paper-100)",
        fontFamily: "var(--font-display)", fontSize: size * 0.45 + "px", lineHeight: 1
      }}>{isA ? "A" : "E"}</span>
      {label && <span>
        <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "var(--type-caption)", fontWeight: "var(--weight-medium)", color: "var(--text-body)" }}>{isA ? "analog mode" : "editorial mode"}</span>
        <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "var(--type-caption)", color: "var(--text-muted)" }}>{isA ? "tactile, warm, archival" : "clear, structured, typographic"}</span>
      </span>}
    </span>
  );
}
