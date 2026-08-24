# Journal — UI kit

The PAPER publication, set in **Editorial mode**: strong grid, hairline rules, generous whitespace, one accent.

| Screen | File | Source |
|---|---|---|
| Contents / index | `ContentsScreen.jsx` | moodboard 02 — Portfolio index |
| Photo essay | `PhotoEssayScreen.jsx` | moodboard 01 — "The Coast Later" |
| Interview | `InterviewScreen.jsx` | moodboard 03 — Laura K. |
| Gallery | `GalleryScreen.jsx` | moodboard 04 — Gallery |

`index.html` wires the four screens together with a sticky kit navigation bar (not part of the design — remove it when lifting a screen).

Every photograph is an `<image-slot>`: drag a real image onto it in the preview and it persists. Slot ids are prefixed `j-`.

Built from: `Masthead`, `RunningHead`, `Folio`, `ArticleHeader`, `MetaBlock`, `TextBlock`, `PullQuote`, `Contents`, `Columns`, `Divider`, `Footnotes`, `Credits`, `Plate`, `Figure`, `Gallery`, `TextLink`, `HandNote`, `Tape`.
