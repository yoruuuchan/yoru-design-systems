import * as React from "react";
/** A prompt shown for copying. Light accent ground so it reads as quotable text, not as code. */
export interface PromptBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Bar label. PROMPT / SYSTEM / 指令. */
  label?: string;
  /** Which model it was written for. */
  model?: string;
  children?: React.ReactNode;
}
export declare function PromptBlock(props: PromptBlockProps): JSX.Element;
