import * as React from "react";

/**
 * Transient notification card. Render inside a `<ToastStack>` for the
 * fixed bottom-right column treatment.
 */
export interface ToastProps {
  variant?: "info" | "success" | "warn" | "error";
  /** Eyebrow label. */
  title?: React.ReactNode;
  onClose?: () => void;
  children?: React.ReactNode;
}

export declare function Toast(props: ToastProps): JSX.Element;

/** Container for the bottom-right stack of active toasts. */
export interface ToastStackProps {
  children?: React.ReactNode;
}

export declare function ToastStack(props: ToastStackProps): JSX.Element;
