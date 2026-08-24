export interface PullQuoteProps {
  children?: React.ReactNode;
  /** "M. Sørensen — interview, 2025". Set as an uppercase label, not a sentence. */
  attribution?: string;
  size?: "sm" | "md" | "lg";
  /** rules = hairlines above and below (default), hang = rust left rule, mark = opening quote glyph, plain. */
  variant?: "rules" | "hang" | "mark" | "plain";
  italic?: boolean;
  align?: "left" | "center";
  style?: React.CSSProperties;
}
export declare function PullQuote(props: PullQuoteProps): JSX.Element;
