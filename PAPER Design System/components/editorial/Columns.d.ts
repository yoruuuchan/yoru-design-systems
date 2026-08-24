export interface ColumnsProps {
  children?: React.ReactNode;
  /** A tested split, or any raw grid-template-columns value. */
  split?: "1/1" | "2/1" | "1/2" | "3/2" | "1/1/1" | "wide/narrow" | "narrow/wide" | string;
  gap?: string;
  /** Hairline between columns — for reference pages and colophons. */
  rule?: boolean;
  align?: "start" | "center" | "end" | "baseline";
  /** Viewport width in px below which the columns stack. Default 900. */
  collapseAt?: number;
  style?: React.CSSProperties;
}
export declare function Columns(props: ColumnsProps): JSX.Element;
