import * as React from 'react';

export interface TilePatternProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which SVG asset to repeat. */
  pattern?: 'cool' | 'warm' | 'caustic' | 'grain';
  /** Tile size in px. */
  size?: number;
  /** 0..1 — useful for layering. */
  opacity?: number;
  /** CSS mix-blend-mode — e.g. 'multiply' for grain on color. */
  blendMode?: React.CSSProperties['mixBlendMode'];
  /** background-attachment:fixed — for page-level "parallax". */
  fixed?: boolean;
  children?: React.ReactNode;
}

/** Repeating tile background. Drop it as a full-bleed page background or behind any surface. */
export function TilePattern(props: TilePatternProps): JSX.Element;
