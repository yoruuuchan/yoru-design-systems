import * as React from 'react';

export interface OverexposedTextProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render — span / h1 / h2 / div / etc. */
  as?: keyof JSX.IntrinsicElements;
  /** Pixel font-size. */
  size?: number;
  /** Letter color. */
  color?: 'paper' | 'frost' | 'bondi' | 'chrome' | 'bubblegum' | 'peach' | 'rose' | 'sodium' | 'tile';
  /** Halo around the letters. */
  glow?: 'bondi' | 'chrome' | 'bubblegum' | 'pool' | 'peach' | 'rose';
  children: React.ReactNode;
}

/** Pixel display text wrapped in a dreamcore halo. The "overexposed JPEG" title look. */
export function OverexposedText(props: OverexposedTextProps): JSX.Element;
