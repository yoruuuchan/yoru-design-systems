export interface GalleryItem { src?: string; alt?: string; caption?: string; ratio?: string; tone?: "warm" | "cool" | "dark"; label?: string }
export interface GalleryProps {
  items?: (GalleryItem | string)[];
  columns?: number;
  gap?: string;
  /** Applied to every item that does not override it. */
  ratio?: string;
  captions?: boolean;
  /** Pass Plates/Figures directly instead of items for mixed ratios. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Gallery(props: GalleryProps): JSX.Element;
