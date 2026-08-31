/**
 * Data bar. Fill comes from the 4-step lightness ramp (step 1 low → 4 high emphasis) —
 * KIHON never encodes data with hue. Vertical bars need a sized parent (chart height).
 */
export interface BarProps {
  /** 0..1 share of the track. */
  value?: number;
  /** Ramp step 1–4. Series longer than 4 reuse step 4. */
  step?: number;
  direction?: 'up' | 'right';
  /** CSS length; defaults 56 design-px (right) / fill (up). */
  thickness?: string;
  /** Label on the growing edge, e.g. '1.2M'. */
  cap?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Bar(props: BarProps): JSX.Element;