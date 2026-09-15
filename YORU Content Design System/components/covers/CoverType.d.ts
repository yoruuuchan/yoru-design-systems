import * as React from "react";
/**
 * Cover A — type-only. The title fills the page; no image. The default YORU cover.
 */
export interface CoverTypeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "signal" | "lab" | "studio" | "special";
  size?: "1242x1656" | "1080x1440" | "1080x1350";
  /** Any value turns the moon-phase masthead on (page 〇一). The text itself no longer renders. */
  kicker?: string;
  /** Legacy alias of kicker — same switch, no text. */
  column?: string;
  /** Legacy — accepted, not rendered. */
  date?: string;
  total?: number;
  /** Mark one phrase with <Emphasis> (Chinese) or <Marker> (Latin). */
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  tags?: string[];
  /** Personal line, rotated −1.2°, inline after the tags. */
  aside?: React.ReactNode;
  /** Small issue line, bottom-right, e.g. "卷十二 · 〇一 / 〇六". */
  issue?: string;
  /** "ink" reverses the whole page — Special's option. */
  tone?: "paper" | "ink";
}
export declare function CoverType(props: CoverTypeProps): JSX.Element;
