/** Donut segment on the lightness ramp over a hairline track; center slot takes a Numeral. */
export interface ArcProps {
  /** 0..1 share. */
  value?: number;
  /** Ramp step 1–4. */
  step?: number;
  /** Diameter in design-px. */
  size?: number;
  /** Stroke width in viewBox units (of 100). */
  thickness?: number;
  /** Center content. */
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Arc(props: ArcProps): JSX.Element;