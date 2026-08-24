export interface FolioProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  /** Page number — set large in the display serif, the one non-label figure on the page. */
  page?: React.ReactNode;
  rule?: boolean;
  style?: React.CSSProperties;
}
export declare function Folio(props: FolioProps): JSX.Element;
