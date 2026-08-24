import * as React from "react";
/** Default running paragraph. Sans CJK, generous leading, never justified. */
export interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "base" | "small";
  muted?: boolean;
  children?: React.ReactNode;
}
export declare function Body(props: BodyProps): JSX.Element;
