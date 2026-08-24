import * as React from 'react';

export interface WindowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Title bar text (lowercase preferred). */
  title?: string;
  /** Whether the window is "focused" — drives the title bar color. */
  active?: boolean;
  /** Drop shadow weight. */
  size?: 'md' | 'lg';
  /** Body background treatment. */
  bodyTone?: 'paper' | 'pool' | 'dream';
  /** Tight 8px body padding (default 12px). */
  dense?: boolean;
  /** Show the Y2K diagonal stripes in the title bar. Default true. */
  decorativeStripes?: boolean;
  /** Adds a close box (×) when provided. */
  onClose?: () => void;
  /** Adds a minimize box (_) when provided. */
  onMinimize?: () => void;
  /** Optional sunken status bar across the bottom. */
  status?: React.ReactNode;
  children: React.ReactNode;
}

/** Y2K window — title bar with stripes, optional close/min boxes, optional sunken status bar. */
export function Window(props: WindowProps): JSX.Element;
