import * as React from "react";

/**
 * Avatar — initials, image, or icon. Chamfered square by default;
 * round shape available for human-user contexts.
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
  shape?: "sq" | "round";
  /** Image URL. When set, takes priority over initials/children. */
  src?: string;
  /** Alt text for the image. */
  alt?: string;
  /** Initials to render when no image. */
  initials?: string;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
