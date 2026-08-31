/**
 * Hairline keyline. ticks adds 1px end ticks centred on the line, sized from the shared tick
 * grid (--tick-h, one 5px module) — the same grid the knurl teeth and chart-axis ticks sit on,
 * so a Rule and a Knurl in the same frame read as one instrument scale.
 */
export interface RuleProps {
  vertical?: boolean;
  /** 'line' hairline (default) | 'strong' full-contrast | 'accent' state. */
  tone?: 'line' | 'strong' | 'accent';
  /** End ticks (horizontal only). */
  ticks?: boolean;
  style?: React.CSSProperties;
}
export declare function Rule(props: RuleProps): JSX.Element;