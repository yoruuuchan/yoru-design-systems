import * as React from "react";

/**
 * Dot + label status indicator. The dot's animation varies by status:
 * online breathes, busy strobes, error blinks, idle is static.
 */
export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: "online" | "idle" | "busy" | "warn" | "error";
}

export declare function StatusPill(props: StatusPillProps): JSX.Element;
