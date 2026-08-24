import React from "react";

/* A diagram node. Role is carried by border weight, border style, fill and the mono
   role label — never by a hue of its own and never by a left-hand accent bar.
   Status is a coloured dot, nothing more. */
const ROLE = {
  input:    { bg: "var(--dg-input-bg)",    line: "var(--dg-input-line)",    fg: "var(--dg-input-fg)",    bw: "var(--dg-stroke-hair)", dash: "solid" },
  process:  { bg: "var(--dg-process-bg)",  line: "var(--dg-process-line)",  fg: "var(--dg-process-fg)",  bw: "var(--dg-process-weight)", dash: "solid" },
  human:    { bg: "var(--dg-human-bg)",    line: "var(--dg-human-line)",    fg: "var(--dg-human-fg)",    bw: "var(--dg-stroke)",      dash: "solid", radius: "var(--dg-radius-human)" },
  agent:    { bg: "var(--dg-agent-bg)",    line: "var(--dg-agent-line)",    fg: "var(--dg-agent-fg)",    bw: "var(--dg-stroke)",      dash: "solid", cap: true },
  tool:     { bg: "var(--dg-tool-bg)",     line: "var(--dg-tool-line)",     fg: "var(--dg-tool-fg)",     bw: "var(--dg-stroke-hair)", dash: "dashed" },
  data:     { bg: "var(--dg-data-bg)",     line: "var(--dg-data-line)",     fg: "var(--dg-data-fg)",     bw: "var(--dg-stroke)",      dash: "solid", slab: true },
  output:   { bg: "var(--dg-output-bg)",   line: "var(--dg-output-line)",   fg: "var(--dg-output-fg)",   bw: "var(--dg-stroke)",      dash: "solid" },
  external: { bg: "var(--dg-external-bg)", line: "var(--dg-external-line)", fg: "var(--dg-external-fg)", bw: "var(--dg-stroke-hair)", dash: "dashed" }
};
const STATUS = { verified: ["var(--dg-verified)", "VERIFIED"], failed: ["var(--dg-failed)", "FAILED"], unknown: ["var(--dg-unknown)", "UNKNOWN"] };

export function DiagramNode({ role = "process", status, label, meta, index, showRole = true, statusLabel = false, x, y, w, h, style, ...rest }) {
  const r = ROLE[role] || ROLE.process;
  const st = status ? STATUS[status] : null;
  const placed = x != null;
  return (
    <div style={{
      position: placed ? "absolute" : "relative", left: x, top: y, width: w, height: h, minHeight: placed ? undefined : 92,
      boxSizing: "border-box", background: r.bg, color: r.fg,
      border: r.bw + " " + r.dash + " " + r.line, borderRadius: r.radius || "var(--dg-radius)",
      borderTopWidth: r.cap ? "var(--dg-stroke-bar)" : undefined,
      boxShadow: r.slab ? "inset 0 7px 0 -6px " + r.line : "none",
      padding: "var(--dg-node-pad)", display: "flex", flexDirection: "column", gap: 5, justifyContent: "center", ...style
    }} {...rest}>
      {(showRole || index != null) && (
        <div style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-node-role)", letterSpacing: ".16em", textTransform: "uppercase", opacity: .7 }}>
          {index != null && <span>{String(index).padStart(2, "0")}</span>}
          {showRole && <span>{role}</span>}
        </div>
      )}
      <div style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "var(--dg-fs-node-label)", lineHeight: 1.45, letterSpacing: ".01em" }}>{label}</div>
      {meta && <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-node-meta)", lineHeight: 1.4, opacity: .62 }}>{meta}</div>}
      {st && (
        <div style={{ position: "absolute", top: 10, right: 10, display: "flex", alignItems: "center", gap: 5 }}>
          {statusLabel && <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-node-status)", letterSpacing: ".14em", color: st[0] }}>{st[1]}</span>}
          <i style={{ width: 7, height: 7, borderRadius: 999, background: st[0], display: "block" }} />
        </div>
      )}
    </div>
  );
}
