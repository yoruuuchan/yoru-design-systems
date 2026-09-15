import React from "react";

import { routeEdge, arrowPath, labelPoint } from "./diagramLayout.js";

/* A connector. Renders SVG — must live inside the <svg> that <Diagram> provides. */
const KIND = {
  flow: { c: "var(--dg-edge-flow)", w: "var(--dg-stroke)", dash: null },
  data: { c: "var(--dg-edge-data)", w: "var(--dg-stroke)", dash: null },
  dep:  { c: "var(--dg-edge-dep)",  w: "var(--dg-stroke-hair)", dash: "var(--dg-dash-dep)" },
  weak: { c: "var(--dg-edge-weak)", w: "var(--dg-stroke-hair)", dash: "var(--dg-dash-weak)" }
};
export function DiagramEdge({ from, to, kind = "flow", label, arrow = true, both = false, geo, axis = "x" }) {
  const k = KIND[kind] || KIND.flow;
  const route = routeEdge(from, to, { geo, axis });
  if (!route) return null;
  const lp = label ? labelPoint(from, to, route, axis) : null;
  const txt = String(label ?? "");
  const cw = /[\u3400-\u9FFF\uF900-\uFAFF]/.test(txt) ? 12 : 7.2;
  const back = axis === "y"
    ? { x: from.x + from.w / 2, y: from.y + from.h, dir: "up" }
    : { x: from.x + from.w, y: from.y + from.h / 2, dir: "left" };
  return (
    <g>
      <path d={route.d} fill="none" stroke={k.c} strokeWidth={k.w} strokeDasharray={k.dash || undefined} strokeLinecap="butt" />
      {arrow && <path d={arrowPath(route.tip, 9)} fill={k.c} />}
      {both && <path d={arrowPath(back, 9)} fill={k.c} />}
      {lp && (
        <g>
          <rect x={lp.x - (txt.length * cw / 2 + 7)} y={lp.y - 9} width={txt.length * cw + 14} height={18} fill="var(--dg-surface)" />
          <text x={lp.x} y={lp.y + 4} textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-edge-label)", letterSpacing: ".04em" }} fill="var(--dg-fg-3)">{label}</text>
        </g>
      )}
    </g>
  );
}
