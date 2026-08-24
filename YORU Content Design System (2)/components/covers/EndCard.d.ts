import * as React from "react";
/**
 * Closing page of a Xiaohongshu set — the sign-off.
 *
 * A large 完 mark sits in the bottom-right, off-register overprint style
 * paired with <CoverOverprint>. The vertical moon-phase strip holds the
 * spine position top-right; the fangsong `note` signs the bottom-left
 * plate margin. No wordmark, no @handle line.
 */
export interface EndCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "signal" | "lab" | "studio" | "special";
  size?: "1242x1656" | "1080x1440" | "1080x1350";
  /** One request line — pick one of: 关注 / 评论 / 收藏. Not all three. */
  headline?: React.ReactNode;
  /** Two to four takeaway lines. */
  lines?: React.ReactNode[];
  /** Fangsong corner note, bottom-left — 汉字日期或卷号, e.g. "二〇二六年八月". */
  note?: string;
  /** The large character in the corner. "完" by default; "END" also reads. */
  mark?: React.ReactNode;
  tone?: "ink" | "paper";
}
export declare function EndCard(props: EndCardProps): JSX.Element;
