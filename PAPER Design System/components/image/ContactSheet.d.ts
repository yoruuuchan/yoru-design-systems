export interface ContactFrame {
  src?: string;
  alt?: string;
  /** Grease-pencil mark: circle = a keeper, cross = a reject. */
  mark?: "circle" | "cross";
  ratio?: string;
  children?: React.ReactNode;
}
export interface ContactSheetProps {
  frames?: ContactFrame[];
  columns?: number;
  /** Edge printing, e.g. "KODAK 400TX". */
  stock?: string;
  /** Number of the first frame. */
  startAt?: number;
  /** Handwritten note at the foot of the sheet, e.g. "Favourites". */
  note?: string;
  /** Handwritten selection count at the right, e.g. "3/8". */
  sequence?: string;
  style?: React.CSSProperties;
}
export declare function ContactSheet(props: ContactSheetProps): JSX.Element;
