import * as React from "react";
/** Verdict chip — the only component allowed to use semantic (non-accent) colour. */
export interface StatusLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: "new" | "ok" | "warn" | "stop" | "note" | "beta";
  /** Overrides the default Chinese label of the status. */
  children?: React.ReactNode;
}
export declare function StatusLabel(props: StatusLabelProps): JSX.Element;
