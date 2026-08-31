# Typography exploration — RESOLVED

This folder holds the four display-serif directions the system was picked from.
The pick is settled and this exploration is closed.

| File | Display face | Status |
|---|---|---|
| `A-newsreader.html` | Newsreader | historical reference only |
| `B-bodoni.html` | Bodoni | historical reference only |
| `C-garamond.html` | EB Garamond | **selected** — governs `--font-display` / `--font-serif` in `tokens/typography.css` |
| `D-caslon.html` | Caslon | historical reference only |

See `README.md` (Deliberate deviations from the moodboard, item 1) for the reasoning.

Agents should treat A / B / D as archive material — not open options — and should
not propose swapping to them without the user opening the exploration again.
Any typography change lives in `tokens/typography.css`, not here.
