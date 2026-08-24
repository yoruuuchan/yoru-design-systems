import * as React from 'react';

export interface HaloProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'peach' | 'rose' | 'pool' | 'sodium';
  /** Diameter of the radial gradient in px. */
  size?: number;
  children: React.ReactNode;
}

/** Behind-the-child radial halo. Like Glow, but a soft *gradient* instead of a box-shadow. */
export function Halo(props: HaloProps): JSX.Element;
