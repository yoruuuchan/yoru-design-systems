import * as React from "react";
/** Screenshot or image with a caption. Three treatments; with no src it renders an honest placeholder. */
export interface FigureProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
  caption?: React.ReactNode;
  /** Prints a numbered "图 01" prefix on the caption. */
  index?: number;
  /** frame = hairline + soft shadow (screenshots) · inset = flat grey well (diagrams) · bleed = edge to edge, fills its parent. */
  treatment?: "frame" | "inset" | "bleed";
  /** CSS aspect-ratio string. Ignored when treatment is "bleed". */
  ratio?: string;
  /** Placeholder text shown when src is absent. */
  placeholder?: string;
}
export declare function Figure(props: FigureProps): JSX.Element;
