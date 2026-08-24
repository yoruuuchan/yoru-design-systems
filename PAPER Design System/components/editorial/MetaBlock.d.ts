export interface MetaItem { label: string; value: React.ReactNode }
export interface MetaBlockProps {
  items?: MetaItem[];
  /** row = flowing, grid = even columns (better for four or more). */
  layout?: "row" | "grid";
  rules?: "top" | "bottom" | "both" | "none";
  style?: React.CSSProperties;
}
export declare function MetaBlock(props: MetaBlockProps): JSX.Element;
