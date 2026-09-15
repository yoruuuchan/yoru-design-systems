import * as React from "react";

export interface MarkerProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Band colour. Defaults to the variant's soft tint. */
  color?: string;
  /** Band height as a percentage of the em box (font-size), not the line box.
   *  55 covers the lower half of a CJK glyph — a highlighter rather than an
   *  underline. Drop toward 30 for a quiet mark, raise past 70 to swallow the text. */
  height?: number;
}

/**
 * 荧光笔 — a marker band behind a key phrase, anchored to the em box so it sits
 * identically at card scale and article scale.
 */
export declare function Marker(props: MarkerProps): JSX.Element;
