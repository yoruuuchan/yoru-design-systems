/**
 * Dialog — modal sheet with a thick-glass surface and a darkened scrim.
 * Click-outside dismiss by default. Esc closes.
 */
export interface DialogProps {
  open: boolean;
  onClose: () => void;
  /** Optional title rendered at the top. */
  title?: React.ReactNode;
  /** Optional eyebrow / kicker above the title. */
  kicker?: string;
  /** Footer node — typically a row of buttons. */
  footer?: React.ReactNode;
  /** Max width (px). Default 480. */
  maxWidth?: number;
  children?: React.ReactNode;
}

export declare function Dialog(props: DialogProps): JSX.Element | null;
