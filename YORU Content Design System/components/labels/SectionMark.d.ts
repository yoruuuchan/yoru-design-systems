import * as React from "react";
/** The 01 / 06 numeral mark — page corners, section openers, step headers. */
export interface SectionMarkProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  total?: number;
  /** Optional uppercase label after the numeral. */
  label?: string;
  size?: "md" | "lg";
}
export declare function SectionMark(props: SectionMarkProps): JSX.Element;
