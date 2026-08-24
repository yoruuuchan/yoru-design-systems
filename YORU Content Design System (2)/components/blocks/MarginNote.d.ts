import * as React from "react";

export interface MarginNoteProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** "tint" is the accent slip; "quiet" is an untinted rule-under note. */
  tone?: "tint" | "quiet";
  /** Rotation in degrees. Keep it under ~2 or it stops reading as handwriting. */
  tilt?: number;
  /** Explicit width; otherwise sized to the flow or the float slot. */
  width?: string;
  /** Pin the slip to a page edge. Requires a positioned ancestor — e.g. <Page>. */
  float?: "left" | "right";
}

/**
 * 手写旁批 — a tilted slip carrying the aside the article itself would not say.
 * The one place in the system where the writing is allowed to be personal.
 */
export declare function MarginNote(props: MarginNoteProps): JSX.Element;
