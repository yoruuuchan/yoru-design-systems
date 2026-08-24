export interface WordmarkProps {
  /** Word to set. Defaults to the system name. */
  text?: string;
  size?: "sm" | "md" | "lg" | "xl";
  /** Italic serif line under the mark, e.g. "editorial × analog design system". */
  tagline?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
