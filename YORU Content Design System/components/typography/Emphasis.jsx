import React from "react";

/* 着重号 — Chinese emphasis dots, set under the run they mark.

   This is a real mark from Chinese print typography, not a decoration: it is how
   a Chinese text emphasises a phrase without bold, italic or colour. YORU uses it
   as the primary emphasis in titles and in body copy, which is why the system has
   no underline and no coloured body text.

   Latin runs get the dots too, but they read badly under lowercase descenders —
   prefer <Marker> for an English phrase. */
export function Emphasis({ children, color = "var(--accent)", shape = "dot", style, ...rest }) {
  const s = {
    textEmphasis: "filled " + shape + " " + color,
    WebkitTextEmphasis: "filled " + shape + " " + color,
    textEmphasisPosition: "under right",
    WebkitTextEmphasisPosition: "under right",
    ...style
  };
  return <em style={{ fontStyle: "normal", ...s }} {...rest}>{children}</em>;
}
