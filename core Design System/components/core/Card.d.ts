import * as React from 'react';

export type CardVariant = 'paper' | 'sunk' | 'pool' | 'dream' | 'ghost';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  /** Inner padding in px. Default 16. */
  padding?: number;
  children: React.ReactNode;
}

/** Bordered paper surface — 1px ink frame + offset shadow. The system has no rounded cards. */
export function Card(props: CardProps): JSX.Element;
