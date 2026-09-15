import * as React from "react";
/** Serif display heading. 1 = page title, 2 = section, 3 = run-in. */
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3;
  /** Heavy ink rule above the heading. Use for the first heading of a page, not every one. */
  mark?: boolean;
  /** Uppercase mono line above the heading. */
  kicker?: string;
  children?: React.ReactNode;
}
export declare function Heading(props: HeadingProps): JSX.Element;
