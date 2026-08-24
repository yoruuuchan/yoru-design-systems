import * as React from 'react';

export interface GrainOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0..1. Default 0.18. */
  opacity?: number;
  /** Default 'multiply' — overlays grain as if the paper were already grainy. */
  blendMode?: React.CSSProperties['mixBlendMode'];
}

/** Absolutely-positioned grain layer. Place inside a position:relative parent. */
export function GrainOverlay(props: GrainOverlayProps): JSX.Element;
