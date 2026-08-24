import React from "react";

/* A container frame around a set of nodes. Hairline, label sitting on the top rule. */
export function DiagramGroup({ label, kind = "solid", x, y, w, h, style }) {
  const dashed = kind === "dashed";
  return (
    <div style={{ position: "absolute", left: x, top: y, width: w, height: h, boxSizing: "border-box",
      border: "var(--dg-stroke-hair) " + (dashed ? "dashed" : "solid") + " var(--dg-line)",
      borderRadius: "var(--dg-radius)", pointerEvents: "none", ...style }}>
      {label && <span style={{ position: "absolute", top: -9, left: 14, padding: "0 8px", background: "var(--dg-surface)",
        fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-group-label)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--dg-fg-3)" }}>{label}</span>}
    </div>
  );
}
