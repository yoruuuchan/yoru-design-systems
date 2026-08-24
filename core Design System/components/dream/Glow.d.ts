import * as React from 'react';

export interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Halo color. */
  color?: 'peach' | 'rose' | 'pool';
  /** 0.5 / 1 / 2 — soft / normal / strong. */
  intensity?: 0.5 | 1 | 2;
  /** display:inline-block instead of block. */
  inline?: boolean;
  children: React.ReactNode;
}

/** Wraps a child in a soft dreamcore halo. Use for images, single labels, hero marks. */
export function Glow(props: GlowProps): JSX.Element;
