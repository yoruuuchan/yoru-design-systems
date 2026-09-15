import React from "react";

/* A margin note with a short leader stub. Sits in the diagram's outer margin at
   the anchor's height — never between nodes, so it can never collide with one.
   The only place prose is allowed inside a diagram. */
export function DiagramAnnotation({ text, x, y, side = "right", width = 200, style }) {
  const left = side === "left";
  return (
    <div style={{ position: "absolute", left: x, top: y - 10, width,
      display: "flex", flexDirection: "column", gap: 4, pointerEvents: "none", ...style }}>
      <span style={{ position: "absolute", top: 11, [left ? "right" : "left"]: -26, width: 22, height: "var(--dg-stroke-hair)", background: "var(--dg-line)" }} />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-note-label)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--accent)" }}>NOTE</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--dg-fs-note)", lineHeight: 1.6, color: "var(--dg-fg-3)" }}>{text}</span>
    </div>
  );
}
