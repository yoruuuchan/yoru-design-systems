import React from "react";

const SW = {
  input: ["var(--dg-input-bg)", "var(--dg-input-line)", "hair"], process: ["var(--dg-process-bg)", "var(--dg-process-line)", "heavy"],
  human: ["var(--dg-human-bg)", "var(--dg-human-line)", "round"], agent: ["var(--dg-agent-bg)", "var(--dg-agent-line)", "cap"],
  tool: ["var(--dg-tool-bg)", "var(--dg-tool-line)", "dash"], data: ["var(--dg-data-bg)", "var(--dg-data-line)", "slab"],
  output: ["var(--dg-output-bg)", "var(--dg-output-line)", "fill"], external: ["var(--dg-external-bg)", "var(--dg-external-line)", "dash"]
};
/* Reads the roles actually used in the diagram. Never print the full eight if only three appear. */
export function DiagramLegend({ roles = [], statuses = [], edges = [], style }) {
  const chip = (r) => {
    const [bg, line, shape] = SW[r] || SW.process;
    return <span key={r} style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
      <i style={{ width: 22, height: 14, background: bg,
        border: (shape === "heavy" ? "2.5px" : shape === "hair" ? "1px" : "1.5px") + " " + (shape === "dash" ? "dashed" : "solid") + " " + line,
        borderRadius: shape === "round" ? 6 : 2,
        borderTopWidth: shape === "cap" ? 4 : undefined, boxShadow: shape === "slab" ? "inset 0 5px 0 -4px " + line : undefined, display: "block" }} />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-legend)", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--dg-fg-3)" }}>{r}</span>
    </span>;
  };
  const EK = { flow: "流程", data: "数据", dep: "依赖", weak: "弱关联" };
  const SK = { verified: ["var(--dg-verified)", "已验证"], failed: ["var(--dg-failed)", "失败"], unknown: ["var(--dg-unknown)", "未知"] };
  return <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 22px", alignItems: "center", ...style }}>
    {roles.map(chip)}
    {edges.map(k => <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
      <svg width="26" height="8" style={{ display: "block", overflow: "visible" }}>
        <path d="M0 4 H22" stroke={"var(--dg-edge-" + k + ")"} strokeWidth={k === "dep" || k === "weak" ? 1 : 1.75}
          strokeDasharray={k === "dep" ? "7 5" : k === "weak" ? "2 5" : undefined} fill="none" />
        {k !== "weak" && <path d="M26 4 L20 1.5 L20 6.5 Z" fill={"var(--dg-edge-" + k + ")"} />}
      </svg>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-legend)", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--dg-fg-3)" }}>{EK[k] || k}</span>
    </span>)}
    {statuses.map(s => <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      <i style={{ width: 7, height: 7, borderRadius: 999, background: SK[s][0], display: "block" }} />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-legend)", letterSpacing: ".14em", color: "var(--dg-fg-3)" }}>{SK[s][1]}</span>
    </span>)}
  </div>;
}
