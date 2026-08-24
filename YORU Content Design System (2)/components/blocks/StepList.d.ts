import * as React from "react";
export interface Step {
  title: React.ReactNode;
  body?: React.ReactNode;
  /** Anything that belongs under the step — a CodeBlock, a Figure, a Callout. */
  extra?: React.ReactNode;
}
/** Numbered walkthrough with a mono numeral spine. The default structure of every Lab tutorial. */
export interface StepListProps extends React.HTMLAttributes<HTMLOListElement> {
  steps?: Step[];
  /** First numeral, for a list continued across two card pages. */
  start?: number;
}
export declare function StepList(props: StepListProps): JSX.Element;
