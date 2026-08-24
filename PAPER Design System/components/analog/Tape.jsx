import React from "react";

/** A torn strip of masking tape. Translucent, never a clean rectangle. */
export function Tape({ width = 104, height = 26, rotate = -2, tone = "kraft", style, ...rest }) {
  const bg = tone === "clear" ? "rgba(232,226,210,.55)" : tone === "dark" ? "rgba(150,132,98,.65)" : "var(--tape)";
  return (
    <span aria-hidden="true" style={{
      display: "block", width, height, background: bg,
      transform: "rotate(" + rotate + "deg)",
      clipPath: "polygon(2% 6%, 14% 0, 33% 7%, 55% 1%, 74% 8%, 92% 2%, 100% 12%, 97% 92%, 80% 100%, 61% 93%, 40% 100%, 19% 92%, 4% 99%, 0 46%)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,.3), 0 1px 1px rgba(38,36,30,.10)",
      backgroundImage: "var(--tex-fibre)", backgroundBlendMode: "multiply", ...style
    }} {...rest} />
  );
}
