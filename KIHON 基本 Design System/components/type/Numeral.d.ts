/**
 * Numeral in B612 Mono (the cockpit face) — tabular, regular weight; thin big digits read
 * precise. Use for values, frame counts, timecodes, percentages. Never for Chinese body copy.
 */
export interface NumeralProps {
  /** The digits, e.g. '11.1' or '00:00:26'. */
  value: string | number;
  /** Unit string set at tick size, e.g. '%', 'f', 'px'. */
  unit?: string;
  /** Render at tick size (32) instead of data-value size (132). */
  tick?: boolean;
  color?: string;
  style?: React.CSSProperties;
}
export declare function Numeral(props: NumeralProps): JSX.Element;