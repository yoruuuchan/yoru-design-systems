import * as React from "react";
export interface TimelineItem {
  /** Mono date or version. Stays neutral ink — a date is metadata, not emphasis. */
  date: React.ReactNode;
  label: React.ReactNode;
  /** Mono detail line. */
  meta?: React.ReactNode;
  /** One or two sentences. Vertical orientation only. */
  body?: React.ReactNode;
  /** The verdict mark. Carried by FORM, not hue: verified is a solid ink dot,
   *  unknown a hollow ink ring, and only failed takes colour. Omit for a
   *  milestone with no verdict — it renders as a faint hairline ring. */
  status?: "verified" | "failed" | "unknown";
}
/** Milestones on an axis. Reflows instead of scaling, so it survives a 375px column. */
export interface TimelineProps extends React.HTMLAttributes<HTMLElement> {
  items?: TimelineItem[];
  /** vertical for articles and card pages · horizontal for 4–6 short milestones. */
  orientation?: "vertical" | "horizontal";
  title?: React.ReactNode;
  kicker?: string;
  caption?: React.ReactNode;
  source?: React.ReactNode;
  theme?: "light" | "dark";
}
export declare function Timeline(props: TimelineProps): JSX.Element;
