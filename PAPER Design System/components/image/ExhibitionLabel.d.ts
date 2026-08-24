export interface ExhibitionLabelProps {
  artist?: string;
  /** Set in display italic — the work's title, not a heading. */
  title?: string;
  year?: string;
  /** e.g. "Archival pigment print". */
  medium?: string;
  /** e.g. "50 × 70 cm". */
  dimensions?: string;
  /** e.g. "Edition of 10". */
  edition?: string;
  venue?: string;
  dates?: string;
  /** Two initials in a hairline disc, bottom right. */
  monogram?: string;
  style?: React.CSSProperties;
}
export declare function ExhibitionLabel(props: ExhibitionLabelProps): JSX.Element;
