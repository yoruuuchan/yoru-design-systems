import * as React from 'react';

export type ToastTone = 'info' | 'warn' | 'dream' | 'sodium';

export interface ToastProps {
  /** Title bar text. */
  title?: string;
  /** Drives the title bar color. */
  tone?: ToastTone;
  /** Close button — fires on click. */
  onClose?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

/** Small Y2K alert popup — like Window but with a colored title bar by tone. */
export function Toast(props: ToastProps): JSX.Element;
