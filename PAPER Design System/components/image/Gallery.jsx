import React from "react";
import { Plate } from "./Plate.jsx";

/** A grid of plates. Uniform ratio, uniform gap — the sequence carries the interest. */
export function Gallery({ items = [], columns = 3, gap = "var(--space-2)", ratio = "1/1", captions = false, children, style, ...rest }) {
  const kids = React.Children.toArray(children);
  const list = kids.length ? kids : items;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(" + columns + ",1fr)", gap, ...style }} {...rest}>
      {list.map((it, i) => {
        if (kids.length) return <div key={i}>{it}</div>;
        const o = typeof it === "string" ? { src: it } : it;
        return (
          <figure key={i} style={{ margin: 0 }}>
            <Plate ratio={o.ratio || ratio} src={o.src} alt={o.alt || ""} tone={o.tone} label={o.label} />
            {captions && o.caption && (
              <figcaption style={{ marginTop: 8, fontFamily: "var(--font-sans)", fontSize: "var(--type-micro)", letterSpacing: ".04em", color: "var(--text-muted)" }}>{o.caption}</figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}
