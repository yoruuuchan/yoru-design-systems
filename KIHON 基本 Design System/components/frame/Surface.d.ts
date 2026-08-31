/**
 * A machined, anodized surface: micro-gradient face, 1px top-edge catch + bottom shade,
 * directional drop shadow. Four levels of depth — plate, card, control, well (recessed).
 * emphasized switches the edge to accent: that is how KIHON marks selected / AFTER.
 */
export interface SurfaceProps {
  /** Depth level: 'plate' | 'card' (default) | 'control' | 'well'. */
  level?: 'plate' | 'card' | 'control' | 'well';
  /** Accent edge — the selected / AFTER state. */
  emphasized?: boolean;
  /** 'accent' fills with machine viridian (state surfaces only, never data). */
  tone?: 'neutral' | 'accent';
  /** Apply the measured 34 design-px panel padding. Default true. */
  pad?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Surface(props: SurfaceProps): JSX.Element;