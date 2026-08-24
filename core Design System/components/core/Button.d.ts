import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'pool' | 'dream' | 'danger' | 'sodium';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual treatment.
   *  - primary: mustard fill (rare — main CTA)
   *  - secondary: paper-stained fill (default)
   *  - ghost: transparent + dashed border
   *  - pool: chlorine-blue fill
   *  - danger: peach fill (also doubles as "warm warn") */
  variant?: ButtonVariant;
  /** Touch target. md is default for desktop; sm for window chrome; lg for hero CTAs. */
  size?: ButtonSize;
  /** Adds a peach halo on :hover. Use sparingly — for the one CTA on a screen. */
  glow?: boolean;
}

/** Y2K-bevel button. The grammar of "click me" in this system. */
export function Button(props: ButtonProps): JSX.Element;
