import * as React from "react";

/**
 * Cover B — 套印 (overprint) cover.
 *
 * Same footprint as <CoverType> but the title prints twice with a small offset,
 * one solid pass in ink and one pale accent pass in `multiply` blend — a riso
 * print that came off the press a hair misaligned. No corner卷号: the giant
 * 汉字 collapsed to a stroke for 一 / 二 / 十, so it moved out. The卷号 still
 * lives in the masthead page-number pair and in the spine string.
 *
 * Optional `image` sits below the subtitle inside the title plate — quiet
 * frame treatment (thin border, --radius-media, no shadow) so the套印 title
 * stays the loudest thing on the page.
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
  /**
   * Legacy — accepted, not rendered on the cover. The masthead page-number pair
   * and the Page spine string still use cnIssue(issueNumber).
   */
  issueNumber?: string;
  /** Optional cover image (src). Photographs use objectFit:cover. */
  image?: string;
  /** Optional caption line under the image. */
  imageCaption?: React.ReactNode;
  /** aspect-ratio for the image frame. Default "16 / 10". */
  imageRatio?: string;
}
export declare function CoverOverprint(props: CoverOverprintProps): JSX.Element;
