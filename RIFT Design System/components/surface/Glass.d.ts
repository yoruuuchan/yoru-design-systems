import * as React from "react";

/**
 * Translucent panel without the Card hover affordance. Use as a
 * structural container (sidebar, hero wrapper, modal body).
 *   - 1: subtle blur, lightest tint (default)
 *   - 2: mid blur, more body (hero panels, toolbars)
 *   - 3: heavy blur, most opaque (modals, popovers)
 */
export interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 1 | 2 | 3;
  children?: React.ReactNode;
}

export function Glass(props: GlassProps): JSX.Element;
