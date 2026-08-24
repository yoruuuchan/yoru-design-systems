import * as React from "react";

/**
 * Pill badge with a glowing leading dot. Use for connection, build,
 * or runtime status — short labels, ALL CAPS typically.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Status colour. Omit for the neutral ice-cyan default. */
  variant?: "ok" | "warn" | "bad";
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
