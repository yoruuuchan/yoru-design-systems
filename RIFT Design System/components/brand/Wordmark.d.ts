import * as React from "react";

/**
 * Brand wordmark — Chakra Petch + chromatic glitch preset. Use one
 * per page (header / hero). For non-brand glitch text use `Glitch`.
 */
export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Wordmark text. Defaults to "RIFT". */
  text?: string;
  /** CSS font-size. Defaults to `var(--text-4xl)`. */
  size?: string;
}

export function Wordmark(props: WordmarkProps): JSX.Element;
