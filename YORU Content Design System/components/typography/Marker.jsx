import React from "react";

/* 荧光笔 — a marker band behind a key phrase.

   The band is anchored to the em box, not the line box: an inset box-shadow on
   an inline element is drawn against font-size, so the same <Marker> sits in the
   same place on a card (line-height 1.95) and in an article (1.85). A percentage
   of the line box would drift between the two scales.

   Use it for the one phrase per page a reader should carry away — a second band
   on the same page cancels the first. Prefer this over <Emphasis> for Latin runs,
   code identifiers and quoted strings; emphasis dots under lowercase Latin
   collide with descenders. */
export function Marker({ children, color = "var(--accent-soft)", height = 55, style, ...rest }) {
  return (
    <span style={{
      boxShadow: `inset 0 -${height / 100}em 0 0 ${color}`,
      padding: "0 .08em",
      ...style
    }} {...rest}>{children}</span>
  );
}
