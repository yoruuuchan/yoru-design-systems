import * as React from "react";

/**
 * Lighter container than Panel — no header chrome, just optional eyebrow +
 * title. Use for marketing tiles, summary stats, and grid items.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small uppercased label rendered above the title. */
  eyebrow?: React.ReactNode;
  /** Card title (display font). */
  title?: React.ReactNode;
  /** Cursor + cyan glow on hover. */
  interactive?: boolean;
}

export declare function Card(props: CardProps): JSX.Element;
