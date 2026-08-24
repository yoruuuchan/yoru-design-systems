import * as React from "react";

/**
 * Terminal-style window container with title bar, optional meta + actions,
 * and an optional footer status strip. The signature KUNLUN surface.
 */
export interface PanelProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  /** Title text shown in the header bar (uppercase, glow). */
  title?: React.ReactNode;
  /** Meta string rendered after the title with a `//` divider. */
  meta?: React.ReactNode;
  /** Slot for header-right action buttons (IconButton etc). */
  actions?: React.ReactNode;
  /** Status-strip content rendered at the bottom of the panel. */
  footer?: React.ReactNode;
  /** Border/glow tone. */
  variant?: "default" | "signal" | "danger" | "warn";
  /** Removes body padding — for tables, terminals, full-bleed content. */
  flush?: boolean;
}

export declare function Panel(props: PanelProps): JSX.Element;
