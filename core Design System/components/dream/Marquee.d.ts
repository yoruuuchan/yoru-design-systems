import * as React from 'react';

export interface MarqueeProps {
  /** Text or short node to repeat across the strip. */
  children: React.ReactNode;
  /** Loop duration in seconds. Default 18. */
  speed?: number;
  /** Rainbow color rotation through Y2K neon. Default true. */
  rainbow?: boolean;
  /** Background — ink (default, contrast for neon) or paper. */
  tone?: 'ink' | 'paper';
  /** Times the children are tiled in the loop. Bump if a short phrase looks too gappy. */
  repeat?: number;
  style?: React.CSSProperties;
}

/** Scrolling text bar. Y2K rainbow by default; honors prefers-reduced-motion. */
export function Marquee(props: MarqueeProps): JSX.Element;
