import * as React from "react";
/** Caption under a Figure, a table, or a code block. */
export interface CaptionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Prints a numbered "图 01" prefix in the accent colour. */
  index?: number;
  align?: "start" | "center";
  children?: React.ReactNode;
}
export declare function Caption(props: CaptionProps): JSX.Element;
