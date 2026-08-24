/* Pure geometry for YORU diagrams. No React, no DOM, no measurement:
   every node sits on a fixed cell grid, so the same {nodes, edges} always
   produces the same picture. This is what makes the system safe to generate. */

export const GEO = { colW: 240, colGap: 88, rowH: 92, rowGap: 44, elbow: 10, lane: 34 };

/* Compact cell grid for phone portrait and the WeChat column. Same proportions,
   smaller cells — the type inside a node does NOT shrink with it. */
export const GEO_COMPACT = { colW: 148, colGap: 34, rowH: 78, rowGap: 34, elbow: 8, lane: 28 };

export function cellX(col, g = GEO) { return col * (g.colW + g.colGap); }
export function cellY(row, g = GEO) { return row * (g.rowH + g.rowGap); }
export function spanW(n = 1, g = GEO) { return n * g.colW + (n - 1) * g.colGap; }
export function spanH(n = 1, g = GEO) { return n * g.rowH + (n - 1) * g.rowGap; }

/* ---- layouts: every one returns nodes with {col,row} filled in ---- */

function incoming(nodes, edges) {
  const m = {}; nodes.forEach(n => m[n.id] = 0);
  edges.forEach(e => { if (m[e.to] != null) m[e.to]++; });
  return m;
}

/** left-to-right layers by longest path from the roots — flowcharts, architecture, workflows.
    Cycle-safe: a back edge (打回 / retry) is ignored when computing depth, otherwise a
    single retry loop would push every downstream node one column further on each pass. */
export function layered(nodes, edges) {
  const inc = incoming(nodes, edges);
  const outs = {}; nodes.forEach(n => outs[n.id] = []);
  edges.forEach(e => { if (outs[e.from] && outs[e.to] !== undefined) outs[e.from].push(e.to); });
  const depth = {};
  let budget = 400;
  const visit = (id, d, path) => {
    if (path.has(id) || budget-- < 0) return;      // back edge: not a depth constraint
    if (depth[id] != null && depth[id] >= d) return;
    depth[id] = d;
    path.add(id);
    outs[id].forEach(t => visit(t, d + 1, path));
    path.delete(id);
  };
  const roots = nodes.filter(n => inc[n.id] === 0).map(n => n.id);
  (roots.length ? roots : nodes.slice(0, 1).map(n => n.id)).forEach(id => visit(id, 0, new Set()));
  nodes.forEach(n => { if (depth[n.id] == null) depth[n.id] = 0; });
  const cols = {};
  nodes.forEach(n => { const c = n.col != null ? n.col : depth[n.id]; (cols[c] = cols[c] || []).push(n); });
  const tallest = Math.max(...Object.values(cols).map(a => a.length));
  const out = [];
  Object.keys(cols).map(Number).sort((a, b) => a - b).forEach(c => {
    const list = cols[c];
    const offset = (tallest - list.length) / 2;
    list.forEach((n, i) => out.push({ ...n, col: c, row: n.row != null ? n.row : offset + i }));
  });
  return out;
}

/** horizontal tree from a single root — mind maps, taxonomies */
export function tree(nodes, edges) {
  const byId = {}; nodes.forEach(n => byId[n.id] = { ...n, kids: [] });
  const inc = incoming(nodes, edges);
  edges.forEach(e => { if (byId[e.from] && byId[e.to]) byId[e.from].kids.push(byId[e.to]); });
  const roots = nodes.filter(n => inc[n.id] === 0).map(n => byId[n.id]);
  let slot = 0;
  const place = (n, depth) => {
    if (n.col != null) return;                     // already placed: cycle or shared child
    n.col = depth;
    const kids = n.kids.filter(k => k.col == null);
    if (!kids.length) { n.row = slot++; return; }
    kids.forEach(k => place(k, depth + 1));
    n.row = (kids[0].row + kids[kids.length - 1].row) / 2;
  };
  (roots.length ? roots : nodes.slice(0, 1).map(n => byId[n.id])).forEach(r => place(r, 0));
  nodes.forEach(n => { const b = byId[n.id]; if (b.col == null) { b.col = 0; b.row = slot++; } });
  return nodes.map(n => ({ ...n, col: byId[n.id].col, row: byId[n.id].row }));
}

/** explicit col/row straight from the author — comparisons, matrices, anything hand-placed */
export function grid(nodes) {
  return nodes.map((n, i) => ({ ...n, col: n.col != null ? n.col : i, row: n.row != null ? n.row : 0 }));
}

/** Flip a laid-out set onto its side: depth runs top→bottom, siblings sit
    left→right. This is the phone-portrait form of a flowchart — the diagram gets
    taller instead of smaller, so node type stays at its authored size. Pair with
    axis:"y" routing and GEO_COMPACT. */
export function stack(nodes) {
  const depths = [...new Set(nodes.map(n => n.col))].sort((a, b) => a - b);
  const out = [];
  depths.forEach((d, i) => {
    const sibs = nodes.filter(n => n.col === d).sort((a, b) => a.row - b.row);
    const offset = (sibs.length - 1) / 2;
    sibs.forEach((n, j) => out.push({ ...n, col: j - offset, row: i }));
  });
  const minCol = Math.min(...out.map(n => n.col));
  return out.map(n => ({ ...n, col: n.col - minCol }));
}

export function runLayout(kind, nodes, edges) {
  if (kind === "tree") return tree(nodes, edges);
  if (kind === "grid") return grid(nodes);
  return layered(nodes, edges);
}

/** turn laid-out nodes into pixel boxes + the diagram's intrinsic size */
export function boxes(nodes, g = GEO) {
  const map = {};
  nodes.forEach(n => {
    const w = spanW(n.colSpan || 1, g), h = spanH(n.rowSpan || 1, g);
    map[n.id] = { ...n, x: cellX(n.col, g), y: cellY(n.row, g), w, h };
  });
  const all = Object.values(map);
  const width = all.length ? Math.max(...all.map(b => b.x + b.w)) : 0;
  const height = all.length ? Math.max(...all.map(b => b.y + b.h)) : 0;
  return { map, width, height };
}

/* ---- routing: rounded orthogonal elbows, one lane for back edges ---- */
const r = (v, p = 2) => Math.round(v * 10 ** p) / 10 ** p;

export function routeEdge(a, b, opts = {}) {
  const g = opts.geo || GEO, R = g.elbow, axis = opts.axis || "x";
  if (!a || !b) return null;
  const ac = { x: a.x + a.w / 2, y: a.y + a.h / 2 }, bc = { x: b.x + b.w / 2, y: b.y + b.h / 2 };
  const forward = b.x >= a.x + a.w - 1;
  const below = b.y >= a.y + a.h - 1, above = b.y + b.h <= a.y + 1;
  const sameCol = Math.abs(ac.x - bc.x) < 1;

  // A straight vertical run is right for column neighbours — but in a vertical
  // flow an upward edge is a BACK edge, and drawing it straight would lay it on
  // top of the forward edge it returns along. Send those to the side lane.
  const straightUp = above && axis !== "y";
  if (sameCol && (below || straightUp)) {
    const sy = below ? a.y + a.h : a.y, ty = below ? b.y : b.y + b.h;
    return { d: `M ${r(ac.x)} ${r(sy)} V ${r(ty)}`, tip: { x: ac.x, y: ty, dir: below ? "down" : "up" } };
  }
  if (axis === "y" && below) {                             // top→bottom, elbow at the mid gutter
    const sx = ac.x, sy = a.y + a.h, tx = bc.x, ty = b.y;
    const my = sy + (ty - sy) / 2, s = tx > sx ? 1 : -1;
    return {
      d: `M ${r(sx)} ${r(sy)} V ${r(my - R)} Q ${r(sx)} ${r(my)} ${r(sx + s * R)} ${r(my)} H ${r(tx - s * R)} Q ${r(tx)} ${r(my)} ${r(tx)} ${r(my + R)} V ${r(ty)}`,
      tip: { x: tx, y: ty, dir: "down" }
    };
  }
  if (axis !== "y" && forward) {                           // left→right, elbow at the mid gutter
    const sx = a.x + a.w, sy = ac.y, tx = b.x, ty = bc.y;
    if (Math.abs(sy - ty) < 1) return { d: `M ${r(sx)} ${r(sy)} H ${r(tx)}`, tip: { x: tx, y: ty, dir: "right" } };
    const mx = sx + (tx - sx) / 2, s = ty > sy ? 1 : -1;
    return {
      d: `M ${r(sx)} ${r(sy)} H ${r(mx - R)} Q ${r(mx)} ${r(sy)} ${r(mx)} ${r(sy + s * R)} V ${r(ty - s * R)} Q ${r(mx)} ${r(ty)} ${r(mx + R)} ${r(ty)} H ${r(tx)}`,
      tip: { x: tx, y: ty, dir: "right" }
    };
  }
  // back edge — in a vertical flow it runs up a side lane, otherwise under both nodes
  if (axis === "y") {
    const laneX = Math.max(a.x + a.w, b.x + b.w) + g.lane;
    const sy = ac.y, ty = bc.y, s = ty > sy ? 1 : -1;
    return {
      d: `M ${r(a.x + a.w)} ${r(sy)} H ${r(laneX - R)} Q ${r(laneX)} ${r(sy)} ${r(laneX)} ${r(sy + s * R)} V ${r(ty - s * R)} Q ${r(laneX)} ${r(ty)} ${r(laneX - R)} ${r(ty)} H ${r(b.x + b.w)}`,
      tip: { x: b.x + b.w, y: ty, dir: "left" }, laneX
    };
  }
  const lane = Math.max(a.y + a.h, b.y + b.h) + g.lane;
  const sx = ac.x, tx = bc.x, s = tx > sx ? 1 : -1;
  return {
    d: `M ${r(sx)} ${r(a.y + a.h)} V ${r(lane - R)} Q ${r(sx)} ${r(lane)} ${r(sx + s * R)} ${r(lane)} H ${r(tx - s * R)} Q ${r(tx)} ${r(lane)} ${r(tx)} ${r(lane - R)} V ${r(b.y + b.h)}`,
    tip: { x: tx, y: b.y + b.h, dir: "up" }, lane
  };
}

/** arrowhead as its own path so it always matches the stroke colour */
export function arrowPath(tip, size = 9) {
  const { x, y, dir } = tip, s = size;
  if (dir === "right") return `M ${x} ${y} L ${x - s} ${y - s * .5} L ${x - s} ${y + s * .5} Z`;
  if (dir === "left")  return `M ${x} ${y} L ${x + s} ${y - s * .5} L ${x + s} ${y + s * .5} Z`;
  if (dir === "down")  return `M ${x} ${y} L ${x - s * .5} ${y - s} L ${x + s * .5} ${y - s} Z`;
  return `M ${x} ${y} L ${x - s * .5} ${y + s} L ${x + s * .5} ${y + s} Z`;
}

/** where an edge label sits — the middle of the run, above the line */
export function labelPoint(a, b, route, axis = "x") {
  if (!route) return null;
  if (route.laneX != null) return { x: route.laneX + 8, y: (a.y + a.h / 2 + b.y + b.h / 2) / 2 };
  if (route.lane != null) return { x: (a.x + a.w / 2 + b.x + b.w / 2) / 2, y: route.lane - 8 };
  if (axis === "y" && b.y >= a.y + a.h - 1) return { x: (a.x + a.w / 2 + b.x + b.w / 2) / 2, y: (a.y + a.h + b.y) / 2 + 4 };
  const forward = b.x >= a.x + a.w - 1;
  if (forward) return { x: a.x + a.w + (b.x - (a.x + a.w)) / 2, y: (a.y + a.h / 2 + b.y + b.h / 2) / 2 - 9 };
  return { x: a.x + a.w / 2 + 10, y: (a.y + a.h + b.y) / 2 };
}
