import React from "react";

/* Timeline. Flex-based, so it reflows instead of scaling — the one diagram type
   that has to survive a 375px WeChat column without shrinking its type.

   Marks are TINTED by the variant. Verified milestones use the variant's dark
   accent (--accent-ink) so a signal log reads blue-ink, a lab log teal-ink, a
   studio log mint-ink, a special log coral-ink — each timeline carries its own
   family colour instead of a shared neutral. Failures still take semantic red
   and unknowns still take the neutral ring: the eye should always find those
   two, regardless of variant.

   Every mark is mixed back toward the surface — the axis is a quiet index, not
   a string of lights, and at 9px a full-strength ink dot punches harder than
   the label beside it. Mixing toward --dg-surface (not white) keeps the same
   softening in dark mode. */
const SOFT = "color-mix(in oklch,var(--accent-ink) 68%,var(--dg-surface))";
const MARK = {
  verified: { fill: SOFT, stroke: SOFT },
  failed:   { fill: "var(--dg-surface)", stroke: "color-mix(in oklch,var(--stop) 70%,var(--dg-surface))", weight: 2.5 },
  unknown:  { fill: "var(--dg-surface)", stroke: "color-mix(in oklch,var(--dg-fg-3) 62%,var(--dg-surface))" }
};

function dot(status, size = 9) {
  const m = MARK[status] || { fill: "var(--dg-surface)", stroke: "color-mix(in oklch,var(--dg-line) 75%,var(--dg-surface))" };
  return {
    width: size, height: size, borderRadius: 999, display: "block", boxSizing: "border-box",
    background: m.fill,
    border: (m.weight || 1.5) + "px solid " + m.stroke,
    boxShadow: "0 0 0 3px var(--dg-surface)"
  };
}

export function Timeline({ items = [], orientation = "vertical", title, kicker, caption, source, theme = "light", style, ...rest }) {
  const h = orientation === "horizontal";
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
      {h ? (
        <div style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: "1fr", gap: 0, alignItems: "stretch" }}>
          {items.map((it, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 10, paddingRight: 20 }}>
              <span className="yoru-num" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-node-meta)", letterSpacing: ".1em", color: "var(--dg-fg-3)" }}>{it.date}</span>
              <div style={{ position: "relative", height: 13, borderTop: "var(--dg-stroke-hair) solid var(--dg-line)" }}>
                <i style={{ position: "absolute", left: 0, top: -5, ...dot(it.status) }} />
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "var(--dg-fs-node-label)", lineHeight: 1.45, color: "var(--dg-fg)" }}>{it.label}</div>
              {it.meta && <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-node-meta)", lineHeight: 1.5, color: "var(--dg-fg-3)" }}>{it.meta}</div>}
            </div>
          ))}
        </div>
      ) : (
        <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
          {items.map((it, i) => {
            const last = i === items.length - 1;
            return (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 0 }}>
                <div style={{ display: "grid", gridTemplateColumns: "76px 22px", alignItems: "start" }}>
                  <span className="yoru-num" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-node-meta)", letterSpacing: ".08em",
                    color: "var(--dg-fg-3)", paddingTop: 3, textAlign: "right" }}>{it.date}</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", alignSelf: "stretch", paddingTop: 5 }}>
                    <i style={dot(it.status)} />
                    {!last && <i style={{ flex: 1, width: "var(--dg-stroke-hair)", background: "var(--dg-line)", marginTop: 7 }} />}
                  </div>
                </div>
                <div style={{ paddingLeft: 16, paddingBottom: last ? 0 : 26 }}>
                  <div style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "var(--dg-fs-node-label)", lineHeight: 1.45, color: "var(--dg-fg)" }}>{it.label}</div>
                  {it.meta && <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-node-meta)", lineHeight: 1.6, color: "var(--dg-fg-3)", marginTop: 4 }}>{it.meta}</div>}
                  {it.body && <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--dg-fs-note)", lineHeight: 1.7, color: "var(--dg-fg-2)", marginTop: 6 }}>{it.body}</div>}
                </div>
              </li>
            );
          })}
        </ol>
      )}
      {(caption || source) && (
        <figcaption style={{ display: "flex", flexDirection: "column", gap: 8, borderTop: "1px solid var(--dg-line)", paddingTop: 14 }}>
          {caption && <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--dg-fs-caption)", lineHeight: 1.6, color: "var(--dg-fg-3)" }}>{caption}</div>}
          {source && <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--dg-fs-source)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--dg-fg-3)", opacity: .8 }}>{source}</div>}
        </figcaption>
      )}
    </figure>
  );
}
