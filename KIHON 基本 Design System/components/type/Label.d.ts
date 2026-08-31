/**
 * The house section label: tracked uppercase Latin, sitting above Chinese content, with an
 * optional index numeral pushed to the right edge. Plain by default — no leading tick and no
 * trailing hairline; set rule to draw the keyline when a frame genuinely needs the division.
 */
export interface LabelProps {
  children?: React.ReactNode;
  /** Right-aligned tick numeral, e.g. '02/05'. */
  index?: string;
  /** Draw a hairline between the label and the index. Default false. */
  rule?: boolean;
  style?: React.CSSProperties;
}
export declare function Label(props: LabelProps): JSX.Element;