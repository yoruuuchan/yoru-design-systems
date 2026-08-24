import * as React from "react";

/**
 * Primary action control. Glass-backed with optional gradient
 * (primary), neutral (default), inline (ghost), or destructive (danger).
 *
 * @startingPoint section="Controls" subtitle="Primary action button" viewport="320x96"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual treatment. Default `default`. */
  variant?: "default" | "primary" | "ghost" | "danger";
  /** Height + padding scale. Default `md`. */
  size?: "sm" | "md" | "lg";
  /** Stretch to fill the parent's width (useful for form CTAs). */
  block?: boolean;
  /** Adds the breathing chromatic halo (`.rift-glow`). */
  glow?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
