import * as React from "react";
/** Dark code block with an optional filename bar. Wraps rather than scrolls — a card page cannot scroll. */
export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The source, as a plain string with \n line breaks. */
  code?: string;
  /** Printed uppercase on the right of the bar. */
  lang?: string;
  /** Printed on the left of the bar. */
  filename?: string;
  /** Show line numbers. Off by default on card pages — they eat width. */
  lines?: boolean;
}
export declare function CodeBlock(props: CodeBlockProps): JSX.Element;
