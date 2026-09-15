import React from "react";
import { DiagramNode } from "./DiagramNode.jsx";
import { DiagramEdge } from "./DiagramEdge.jsx";
import { DiagramGroup } from "./DiagramGroup.jsx";
import { DiagramAnnotation } from "./DiagramAnnotation.jsx";
import { DiagramLegend } from "./DiagramLegend.jsx";
import { runLayout, stack, boxes, GEO, GEO_COMPACT } from "./diagramLayout.js";

const PAD = 30, GPAD = 22, GTOP = 30, NOTE_W = 210, NOTE_GAP = 34;
/* Below this scale a 15px node label renders under ~9px — past that the diagram
   stops being readable and reflows to a vertical flow instead of shrinking. */
const MIN_SCALE = 0.62;

/* Lay nodes out in pixels and work out the scene box: node boxes, group frames,
   side annotations and the back-edge lane. Pure — no DOM, no state — so the
   frame can measure the wide form and the stacked form in the same render and
   pick between them. In the vertical form annotations move under the diagram,
   because a 210px side note is exactly what does not fit on a phone. */
function measure(placed, baseGeo, geoOverride, groups, annotations, edges, vertical) {
  const g = { ...baseGeo, ...(geoOverride || {}) };
  const { map, width, height } = boxes(placed, g);
  const hasBack = edges.some(e => map[e.from] && map[e.to] && (vertical
    ? map[e.to].y < map[e.from].y + map[e.from].h - 1 && Math.abs((map[e.to].y + map[e.to].h / 2) - (map[e.from].y + map[e.from].h / 2)) > 1
    : map[e.to].x < map[e.from].x + map[e.from].w - 1 && Math.abs((map[e.to].x + map[e.to].w / 2) - (map[e.from].x + map[e.from].w / 2)) > 1));

  const gboxes = groups.map(gr => {
    const bs = (gr.nodes || []).map(id => map[id]).filter(Boolean);
    if (!bs.length) return null;
    const x1 = Math.min(...bs.map(b => b.x)) - GPAD, y1 = Math.min(...bs.map(b => b.y)) - GTOP;
    const x2 = Math.max(...bs.map(b => b.x + b.w)) + GPAD, y2 = Math.max(...bs.map(b => b.y + b.h)) + GPAD;
    return { ...gr, x: x1, y: y1, w: x2 - x1, h: y2 - y1 };
  }).filter(Boolean);

  const gRight = Math.max(width, ...gboxes.map(b => b.x + b.w));
  const gLeft = Math.min(0, ...gboxes.map(b => b.x));
  const aboxes = vertical ? [] : annotations.map(a => {
    const b = map[a.at]; if (!b) return null;
    const side = a.side || "right";
    return { ...a, side, x: side === "left" ? gLeft - NOTE_GAP - NOTE_W : gRight + NOTE_GAP, y: b.y + b.h / 2 };
  }).filter(Boolean);
  const notes = vertical
    ? annotations.filter(a => map[a.at]).map(a => ({ ...a, label: map[a.at].label }))
    : [];

  const extraR = aboxes.some(a => a.side === "right") ? NOTE_GAP + NOTE_W : 0;
  const extraL = aboxes.some(a => a.side === "left") ? NOTE_GAP + NOTE_W : 0;
  const minX = Math.min(0, ...gboxes.map(b => b.x)) - extraL;
  const minY = Math.min(0, ...gboxes.map(b => b.y));
  const laneRoom = hasBack ? g.lane + 26 : 0;
  const W = Math.max(width, ...gboxes.map(b => b.x + b.w)) - minX + extraR + (vertical ? laneRoom : 0);
  const H = Math.max(height, ...gboxes.map(b => b.y + b.h)) - minY + (vertical ? 0 : laneRoom);
  return { map, g, gboxes, aboxes, notes, sceneW: W + PAD * 2, sceneH: H + PAD * 2, ox: PAD - minX, oy: PAD - minY };
}

/* The diagram frame. Give it {nodes, edges} and it lays out, routes, scales to
   fit its container, and prints the title / caption / source furniture.

   On a narrow container (phone portrait, the WeChat column) it does NOT simply
   scale down: it flips the flow top→bottom on a compact cell grid, so the
   diagram grows taller and the type stays legible. Set stack="never" to force
   the wide form, "always" to author a vertical diagram directly. */
export function Diagram({
  nodes = [], edges = [], groups = [], annotations = [],
  layout = "layered", title, kicker, caption, source, legend = false,
  theme = "light", grid = false, fit = true, stack: stackMode = "auto", geo, style, ...rest
}) {
  const wrap = React.useRef(null);
  const [avail, setAvail] = React.useState(null);

  const base = runLayout(layout, nodes, edges);
  const wide = measure(base, GEO, geo, groups, annotations, edges);
  const tooNarrow = avail != null && avail / wide.sceneW < MIN_SCALE;
  const vertical = stackMode === "always" || (stackMode === "auto" && tooNarrow);

  const g = vertical ? { ...GEO_COMPACT, ...(geo || {}) } : { ...GEO, ...(geo || {}) };
  const placed = vertical ? stack(base) : base;
  const axis = vertical ? "y" : "x";
  const M = vertical ? measure(placed, GEO_COMPACT, geo, groups, annotations, edges, true) : wide;
  const { map, sceneW, sceneH, ox, oy, gboxes, aboxes, notes } = M;

  React.useLayoutEffect(() => {
    if (!wrap.current) return;
    const el = wrap.current;
    const read = () => setAvail(el.clientWidth);
    const ro = new ResizeObserver(read);
    ro.observe(el); read();
    return () => ro.disconnect();
  }, []);
  const s = fit && avail ? avail / sceneW : 1;

  const usedRoles = [...new Set(placed.map(n => n.role || "process"))];
  const usedEdges = [...new Set(edges.map(e => e.kind || "flow"))];
  const usedStatus = [...new Set(placed.map(n => n.status).filter(Boolean))];

  return (
    <figure className="yoru-diagram" data-dg-theme={theme}
      style={{ margin: 0, display: "flex", flexDirection: "column", gap: 18, background: "var(--dg-surface)", ...style }} {...rest}>
      {(kicker || title) && (
        <header style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {kicker && <span style={{ display: "flex", alignItems: "center", fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-kicker)",
            letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent)" }}>{kicker}</span>}
          {title && <h3 style={{ margin: 0, fontFamily: "var(--font-title)", fontWeight: 700, fontSize: "var(--dg-fs-title)", lineHeight: 1.35, color: "var(--dg-fg)" }}>{title}</h3>}
        </header>
      )}
      <div ref={wrap} style={{ width: "100%", height: sceneH * s, overflow: "hidden" }}>
        <div style={{ position: "relative", width: sceneW, height: sceneH, transform: "scale(" + s + ")", transformOrigin: "top left" }}>
          {grid && <div style={{ position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(var(--dg-grid) 1px, transparent 1px)", backgroundSize: "22px 22px", backgroundPosition: ox + "px " + oy + "px" }} />}
          {gboxes.map((b, i) => <DiagramGroup key={i} label={b.label} kind={b.kind} x={b.x + ox} y={b.y + oy} w={b.w} h={b.h} />)}
          <svg width={sceneW} height={sceneH} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
            <g transform={"translate(" + ox + "," + oy + ")"}>
              {edges.map((e, i) => <DiagramEdge key={i} from={map[e.from]} to={map[e.to]} kind={e.kind} label={e.label} both={e.both} arrow={e.arrow !== false} geo={g} axis={axis} />)}
            </g>
          </svg>
          {placed.map(n => { const b = map[n.id]; return (
            <DiagramNode key={n.id} role={n.role} status={n.status} label={n.label} meta={n.meta} index={n.index}
              showRole={n.showRole !== false} statusLabel={n.statusLabel} x={b.x + ox} y={b.y + oy} w={b.w} h={b.h} />
          ); })}
          {aboxes.map((a, i) => <DiagramAnnotation key={i} text={a.text} side={a.side} width={NOTE_W} x={a.x + ox} y={a.y + oy} />)}
        </div>
      </div>
      {(legend || caption || source || notes.length > 0) && (
        <figcaption style={{ display: "flex", flexDirection: "column", gap: 12, borderTop: "1px solid var(--dg-line)", paddingTop: 14 }}>
          {notes.length > 0 && (
            <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
              {notes.map((n, i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 9, alignItems: "baseline" }}>
                  <span className="yoru-num" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-note-label)", letterSpacing: ".1em", color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--dg-fs-note)", lineHeight: 1.6, color: "var(--dg-fg-2)" }}>
                    {n.label && <b style={{ fontWeight: 500, color: "var(--dg-fg)" }}>{n.label} </b>}{n.text}
                  </span>
                </li>
              ))}
            </ol>
          )}
          {legend && <DiagramLegend roles={usedRoles} edges={usedEdges} statuses={usedStatus} />}
          {caption && <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--dg-fs-caption)", lineHeight: 1.6, color: "var(--dg-fg-3)" }}>{caption}</div>}
          {source && <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-source)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--dg-fg-3)", opacity: .8 }}>{source}</div>}
        </figcaption>
      )}
    </figure>
  );
}
