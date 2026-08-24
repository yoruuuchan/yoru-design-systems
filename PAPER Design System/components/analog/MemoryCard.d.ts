export interface MemoryCardProps {
  /** The image — an <img>, an <image-slot>, or nothing for a tonal placeholder. */
  children?: React.ReactNode;
  /** Written in the hand font. Keep to four or five words. */
  caption?: string;
  /** Small mono date at the right of the caption well. */
  date?: string;
  ratio?: string;
  rotate?: number;
  width?: number | string;
  style?: React.CSSProperties;
}
export declare function MemoryCard(props: MemoryCardProps): JSX.Element;
