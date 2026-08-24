export interface HeroImageProps {
  /** Wide by default. Use "4/5" or "1/1" for a portrait opener. */
  ratio?: string;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  /** Breaks out of the page margins to the full viewport width. */
  bleed?: boolean;
  caption?: React.ReactNode;
  number?: string;
  /** Content laid over the image — a title, an issue line. Use sparingly. */
  overlay?: React.ReactNode;
  /** Vertical placement of the overlay. */
  align?: "start" | "center" | "end";
  style?: React.CSSProperties;
}
export declare function HeroImage(props: HeroImageProps): JSX.Element;
