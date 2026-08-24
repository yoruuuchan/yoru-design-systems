export interface ContentsItem {
  /** Two-digit sequence; generated when omitted. */
  number?: string;
  title: React.ReactNode;
  /** Genre column, e.g. "Photo Essay", "Interior", "Journal". */
  kind?: string;
  page?: string | number;
  href?: string;
}
export interface ContentsProps {
  items?: ContentsItem[];
  numbered?: boolean;
  kindColumn?: boolean;
  style?: React.CSSProperties;
}
export declare function Contents(props: ContentsProps): JSX.Element;
