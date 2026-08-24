export interface FootnotesProps {
  /** Note bodies in order; numbering is generated. */
  items?: React.ReactNode[];
  /** Optional label above the list, e.g. "Notes". */
  title?: string;
  columns?: number;
  style?: React.CSSProperties;
}
export declare function Footnotes(props: FootnotesProps): JSX.Element;
