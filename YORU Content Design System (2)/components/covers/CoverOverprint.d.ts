import * as React from "react";

/**
 * Cover C — 套印 (overprint) cover.
 *
 * Same footprint as <CoverType> but the title prints twice with a small
 * offset, one solid pass in ink and one pale accent pass in `multiply` blend —
 * a riso print that came off the press a hair misaligned. A huge issue number
 * in Chinese numerals sits behind everything, cropped by the page edge. The
 * masthead is the same moon-phase rail as interior pages — no wordmark
 * anywhere; the set signs off on the end card corner in fangsong.
 */
export interface CoverOverprintProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "signal" | "lab" | "studio" | "special";
  size?: "1242x1656" | "1080x1440" | "1080x1350";
  /** Legacy — accepted, not rendered. */
  column?: string;
  /** Legacy — accepted, not rendered. The date lives in the Page spine. */
  date?: string;
  /** Page number within the set. Defaults to 1. */
  index?: number;
  total?: number;
  /** Mark one phrase with <Emphasis> — the cover still carries the point. */
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  tags?: string[];
  /** Personal line — the hand-written phrase, bottom of the title block. */
  aside?: React.ReactNode;
  /** The huge corner graphic, rendered as 汉字 (12 → 一二). Two digits reads best. */
  issueNumber?: string;
}
export declare function CoverOverprint(props: CoverOverprintProps): JSX.Element;
