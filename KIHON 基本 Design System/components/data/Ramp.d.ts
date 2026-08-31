/** Legend row for the data lightness ramp — 4 swatches, optional labels in series order. */
export interface RampProps {
  /** Up to 4 series labels, low → high emphasis. */
  labels?: string[];
  style?: React.CSSProperties;
}
export declare function Ramp(props: RampProps): JSX.Element;