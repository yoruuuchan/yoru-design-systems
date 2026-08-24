import * as React from "react";

/**
 * Modal dialog with chamfered cyan-glow shell. Scrollable body, footer slot
 * for action buttons. The danger variant flips the title + glow to red.
 */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  variant?: "default" | "danger";
  /** Footer button row. */
  actions?: React.ReactNode;
  /** Close when clicking outside the dialog (default true). */
  closeOnOverlay?: boolean;
  children?: React.ReactNode;
}

export declare function Dialog(props: DialogProps): JSX.Element | null;
