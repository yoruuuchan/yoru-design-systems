import React from "react";

/** The page grid, expressed as a few tested splits rather than a free 24-column API. */
export function Columns({ children, split = "1/1", gap = "var(--space-7)", rule = false, align = "start", collapseAt = 900, style, ...rest }) {
  const map = { "1/1": "1fr 1fr", "2/1": "2fr 1fr", "1/2": "1fr 2fr", "3/2": "3fr 2fr", "1/1/1": "1fr 1fr 1fr", "wide/narrow": "1fr 300px", "narrow/wide": "260px 1fr" };
  const cls = "paper-cols-" + String(collapseAt);
  return (
    <div className={cls} style={{
      display: "grid", gridTemplateColumns: map[split] || split, gap, alignItems: align, ...style
    }} {...rest}>
      <style>{"@media (max-width:" + collapseAt + "px){." + cls + "{grid-template-columns:1fr!important}}"}</style>
      {rule
        ? React.Children.map(children, (c, i) => <div style={{ borderLeft: i === 0 ? "none" : "1px solid var(--rule-hair)", paddingLeft: i === 0 ? 0 : gap }}>{c}</div>)
        : children}
    </div>
  );
}
