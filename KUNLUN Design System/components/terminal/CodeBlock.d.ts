import * as React from "react";

/**
 * Read-only code block with optional line numbers + copy button.
 * No syntax highlighting — KUNLUN intentionally renders code as mono ink.
 */
export interface CodeBlockProps {
  code: string;
  /** Language label rendered in the head. */
  lang?: string;
  showLineNumbers?: boolean;
  showCopy?: boolean;
  className?: string;
}

export declare function CodeBlock(props: CodeBlockProps): JSX.Element;
