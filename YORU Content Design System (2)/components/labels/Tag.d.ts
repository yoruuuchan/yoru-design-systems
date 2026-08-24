import * as React from "react";
/** Topic tag. Corner shape is variant-driven — square in Signal/Lab, pill in Studio/Special. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "accent" | "neutral";
  filled?: boolean;
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
