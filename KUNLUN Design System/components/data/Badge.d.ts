import * as React from "react";

/**
 * Small dense label. Uppercase mono, chamfered. Use for counts, IDs,
 * categories, and inline metadata.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "signal" | "success" | "warn" | "danger";
  /** Use the filled cyan treatment (only valid with variant="signal"). */
  solid?: boolean;
}

export declare function Badge(props: BadgeProps): JSX.Element;
