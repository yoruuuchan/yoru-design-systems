export interface TextBlockProps {
  /** Plain <p> elements. */
  children?: React.ReactNode;
  /** Sets the first paragraph's opening letter as a three-line initial. */
  dropCap?: boolean;
  /** CSS column count. Two is the usual editorial setting; three needs a wide page. */
  columns?: number;
  size?: "sm" | "md" | "lg";
  /** "zh" switches to the wider Chinese leading and disables italics. */
  lang?: string;
  /** Max line length. Defaults to 66ch. */
  measure?: string;
  style?: React.CSSProperties;
}
export declare function TextBlock(props: TextBlockProps): JSX.Element;
