import React from "react";

/* 手写旁批 — the aside in the author's own voice.

   A tinted slip, tilted a degree or so, holding something the article itself
   would not say: what went wrong, what took three days, what you would skip. It
   is the one place in the system where the writing is allowed to be personal, so
   keep it short — one or two lines — and never use it for information the reader
   needs. Anything load-bearing belongs in <Callout>.

   One per page at most. Two tilted slips on a page stop reading as handwriting
   and start reading as a template. */
export function MarginNote({ children, tone = "tint", tilt = -1.4, width, float, style, ...rest }) {
  const tinted = tone === "tint";
  const pos = float ? {
    position: "absolute", top: "var(--note-top, 58%)",
    [float]: "calc(var(--page-pad-x) * -0.35)", width: width || "min(38%, 340px)"
  } : { maxWidth: width || "min(62%, 520px)" };
  return (
    <aside style={{
      ...pos,
      transform: `rotate(${tilt}deg)`,
      background: tinted ? "var(--accent-soft)" : "transparent",
      color: tinted ? "var(--accent-ink)" : "var(--text-muted)",
      borderBottom: tinted ? "none" : "var(--hair) solid var(--border-rule)",
      padding: tinted ? "var(--sp-3) var(--sp-4)" : "0 0 var(--sp-1)",
      fontFamily: "var(--font-body)", fontSize: "var(--fs-small)", lineHeight: 1.6,
      ...style
    }} {...rest}>{children}</aside>
  );
}
