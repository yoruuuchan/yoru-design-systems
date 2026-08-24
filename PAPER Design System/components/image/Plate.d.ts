export interface PlateProps {
  /** CSS aspect-ratio, e.g. "3/2", "4/5", "16/7". */
  ratio?: string;
  src?: string;
  alt?: string;
  /** Use instead of src to drop in an <image-slot> or custom content. */
  children?: React.ReactNode;
  /** Placeholder tone when empty. */
  tone?: "warm" | "cool" | "dark";
  /** The 1px inset rule around the image. On by default — it is what makes a photo a plate. */
  frame?: boolean;
  /** Adds the print cast shadow. Analog mode only. */
  shadow?: boolean;
  /** Small mono label in the corner of an empty plate. */
  label?: string;
  style?: React.CSSProperties;
}
export declare function Plate(props: PlateProps): JSX.Element;
