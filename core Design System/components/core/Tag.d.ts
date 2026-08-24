import * as React from 'react';

export type TagVariant = 'default' | 'pool' | 'dream' | 'sodium' | 'ink';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  /** Wrap children in literal "[ … ]" — for archive-card tags. */
  bracketed?: boolean;
  children: React.ReactNode;
}

/** Small pixel-mono label. For categories, archive metadata, status. */
export function Tag(props: TagProps): JSX.Element;
