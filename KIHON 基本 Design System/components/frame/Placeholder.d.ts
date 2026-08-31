/** Recessed media slot with crossed hairlines and a tick label — where real footage/screenshots land. */
export interface PlaceholderProps {
  /** Slot label, e.g. '产品截图 1920×1080'. */
  label?: string;
  /** CSS aspect-ratio, e.g. '16 / 9', '1 / 1'. */
  ratio?: string;
  style?: React.CSSProperties;
}
export declare function Placeholder(props: PlaceholderProps): JSX.Element;