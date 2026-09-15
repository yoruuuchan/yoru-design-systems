import * as React from "react";
/** Aside for a caveat, a tip or a prerequisite. One flat colour block plus a coloured label — no border, no rule, no shadow. */
export interface CalloutProps extends React.HTMLAttributes<HTMLElement> {
  /** Short uppercase label, printed in the semantic colour. Keep it to 2–4 characters. */
  title?: string;
  kind?: "note" | "warn" | "stop" | "ok" | "plain";
  children?: React.ReactNode;
}
export declare function Callout(props: CalloutProps): JSX.Element;
