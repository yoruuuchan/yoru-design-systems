import React from "react";

/** A written aside — ballpoint on the page, or on a small torn slip. */
export function HandNote({ children, attribution, slip = false, rotate = -1, size = 21, align = "left", style, ...rest }) {
  const ink = (
    <React.Fragment>
      <span style={{ fontFamily: "var(--font-hand)", fontSize: size + "px", lineHeight: 1.35, color: "var(--hand-ink)", display: "block", textAlign: align }}>{children}</span>
      {attribution && <span style={{ fontFamily: "var(--font-hand)", fontSize: size * 0.8 + "px", color: "var(--hand-ink)", opacity: 0.75, display: "block", marginTop: 6, textAlign: align }}>— {attribution}</span>}
    </React.Fragment>
  );
  if (!slip) return <div style={{ transform: "rotate(" + rotate + "deg)", ...style }} {...rest}>{ink}</div>;
  return (
    <div style={{
      display: "inline-block", padding: "16px 20px 18px", background: "var(--surface-raised)",
      backgroundImage: "var(--tex-fibre)", backgroundBlendMode: "multiply",
      boxShadow: "var(--shadow-sheet)", transform: "rotate(" + rotate + "deg)",
      clipPath: "polygon(0 2%, 99% 0, 100% 97%, 1% 100%)", ...style
    }} {...rest}>{ink}</div>
  );
}
