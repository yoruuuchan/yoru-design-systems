import * as React from "react";

/**
 * Chip-style tag, optionally removable.
 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent";
  /** When provided, renders an `×` button that fires this callback. */
  onRemove?: () => void;
}

export declare function Tag(props: TagProps): JSX.Element;
