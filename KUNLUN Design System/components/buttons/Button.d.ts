import * as React from "react";

/**
 * Primary call-to-action surface in KUNLUN. Chamfered, mono-uppercase,
 * with cyan-glow on the primary variant.
 */
export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Visual treatment. */
  variant?: "primary" | "secondary" | "ghost" | "danger" | "warn";
  /** Size token. */
  size?: "sm" | "md" | "lg";
  /** Stretch to the parent's full width. */
  fullWidth?: boolean;
  /** Show a spinner and disable the button. */
  loading?: boolean;
  /** Element rendered to the left of the label. */
  icon?: React.ReactNode;
  /** Element rendered to the right of the label. */
  iconRight?: React.ReactNode;
  /** Button label. Required — IconButton handles icon-only. */
  children: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
