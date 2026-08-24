# Portfolio — UI kit

A photographer's personal site, set in **Analog mode**: warmer stock, print shadows, film, tape, a written line. The grid underneath is identical to Journal — that is the point of the two modes.

| Screen | File | Source |
|---|---|---|
| Homepage | `HomeScreen.jsx` | moodboard 08 — "Stories in stillness." |
| Work index | `WorkIndexScreen.jsx` | moodboard 02 + film strip detail |
| Contact sheet / journal | `ContactSheetScreen.jsx` | moodboard 05 |
| Exhibition label | `ExhibitionScreen.jsx` | moodboard 06 |

The whole app is wrapped in `data-mode="analog"`. Remove that one attribute and every screen reverts to Editorial — no other change needed.

Slot ids are prefixed `p-`.

Built from: `Wordmark`, `Contents`, `Plate`, `Gallery`, `FilmStrip`, `ContactSheet`, `MemoryCard`, `Tape`, `HandNote`, `DateStamp`, `ScanEdge`, `ExhibitionLabel`, `Credits`, `Divider`, `TextLink`, `Button`, `Folio`.
