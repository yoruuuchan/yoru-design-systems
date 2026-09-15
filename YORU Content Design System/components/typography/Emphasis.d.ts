import * as React from "react";

export interface EmphasisProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Dot colour. Defaults to the variant accent. */
  color?: string;
  /** CSS text-emphasis shape. "dot" is the Chinese convention; the rest are escape hatches. */
  shape?: "dot" | "circle" | "sesame" | "triangle";
}

/**
 * 着重号 — Chinese emphasis dots under a run. The system's primary emphasis:
 * it is why YORU uses no underline and no coloured body text.
 */
export declare function Emphasis(props: EmphasisProps): JSX.Element;
