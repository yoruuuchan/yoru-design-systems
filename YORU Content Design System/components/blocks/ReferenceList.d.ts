import * as React from "react";
export interface Reference { title: React.ReactNode; source?: string; url?: string }
/** Numbered source list for the last page of a card set or the foot of an article. */
export interface ReferenceListProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Reference[];
  /** Section label. Defaults to 参考. */
  title?: string;
}
export declare function ReferenceList(props: ReferenceListProps): JSX.Element;
