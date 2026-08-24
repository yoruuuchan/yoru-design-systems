export interface FilmStripProps {
  /** Used when no children are passed. */
  frames?: number;
  /** Stock name printed on the edge, e.g. "KODAK 400TX", "ILFORD HP5". */
  stock?: string;
  frameNumbers?: boolean;
  /** First frame number. */
  startAt?: number;
  /** Frame height in px. */
  height?: number;
  /** One child per frame — <img>, <image-slot>, or omit for tonal placeholders. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FilmStrip(props: FilmStripProps): JSX.Element;
