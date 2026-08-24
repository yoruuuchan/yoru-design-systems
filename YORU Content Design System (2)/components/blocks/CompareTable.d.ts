import * as React from "react";
/** Hairline comparison table. Column 0 is the criterion; one column may be highlighted as the pick. */
export interface CompareTableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Header cells, including the empty-ish first criterion column. */
  columns?: React.ReactNode[];
  /** Row-major cells. Cells accept <StatusLabel/> and other nodes. */
  rows?: React.ReactNode[][];
  /** Index of the recommended column — tinted with the accent. */
  highlight?: number;
  caption?: React.ReactNode;
}
export declare function CompareTable(props: CompareTableProps): JSX.Element;
