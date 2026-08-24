import * as React from "react";

/**
 * Small chamfered tooltip rendered above its trigger on hover/focus.
 * Pure CSS — no portal, no positioning library.
 */
export interface TooltipProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

export declare function Tooltip(props: TooltipProps): JSX.Element;
