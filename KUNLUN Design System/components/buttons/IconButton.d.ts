import * as React from "react";

/**
 * Square, icon-only button matching Button's chamfered silhouette.
 * Always pass `label` — it becomes both `aria-label` and the tooltip.
 */
export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: "default" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  /** Accessible label. Required. */
  label: string;
  /** The icon node (svg, glyph, unicode char). */
  children: React.ReactNode;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
