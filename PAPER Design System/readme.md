# PAPER

**An editorial × analog design system.** One system, two voices.

PAPER is a design language for telling stories with clarity and texture — art books, photo essays, portfolios, interviews, travel diaries, process journals, visual longform, and personal creative websites. Structured yet human. Crafted, never sterile.

It is typography-first and photography-first. The grid does the thinking; the material does the remembering.

---

## The two modes

The system has one type scale, one colour ramp, one 24-column page. What changes between modes is the *stock*, not the structure.

| | **Editorial** | **Analog** |
|---|---|---|
| Character | clear, structured, typographic | tactile, warm, archival |
| Page | `--paper-200` #F4F1EA | `--paper-300` #EDE6D7 |
| Grain | 3.5% | 7.5% |
| Photographs | `saturate(.9) contrast(1.02)` | `sepia(.16) saturate(.82)` |
| Plates | flat, hairline framed | print shadow, occasional −0.55° tilt |
| Labels | IBM Plex Sans, .14em tracking | IBM Plex Mono, .06em |
| Extras | — | film, tape, date stamps, one written line |

Switch with a single attribute. It scopes to a whole page or to one figure:

```html
<article data-mode="analog"> … </article>
```

**The rule that keeps Analog from becoming a scrapbook: structure first, texture second.** One or two material details per spread. If you can name the texture before you have read the page, turn it down.

A third scope, `data-mode="dark"`, exists for film base — contact sheets, film strips, full-bleed image bands. It is a surface, not a theme.

---

## Sources

| Source | What it gave |
|---|---|
| `assets/brand/paper-moodboard.png` | The complete brief: name, tagline, two modes, palette, eight surface layouts, material vocabulary, sample copy. Supplied by the user as a single reference sheet. Every screen in the UI kits recreates one of its numbered spreads. |
| Stated references | Apartamento, The Gentlewoman, Aperture, POPEYE, MACK Books, Loose Joints, The Plant, Actual Source — for editorial grids, sequencing, caption discipline and print feeling. Referenced in spirit; no publication is imitated. |

No codebase, Figma file or font binaries were provided. Nothing here was reverse-engineered from a real product.

### Deliberate deviations from the moodboard

1. **Typefaces.** The board names Playfair Display / Inter / Space Mono. The user selected EB Garamond / IBM Plex Sans / IBM Plex Mono from a set of live comparisons, and that pick governs. `--font-display` is declared separately from `--font-serif` precisely so the display face can be swapped back in one line of `tokens/typography.css`.
2. **Accent.** The board's palette strip carries a terracotta; that became `--rust-500` #B8543A and is the system's only accent.
3. **No logo mark.** The board's identity is the word PAPER set in a display serif. It stays set, not drawn — see `Wordmark`.

---

## Content fundamentals

**Voice.** Third person and plain. The system describes what happened, in what order, with what equipment. It does not explain why that matters — the photographs do that. Where a first person appears it belongs to the author of the piece, not the publication.

**Casing.** Sentence case everywhere except labels. Uppercase is reserved for two things: metadata labels (WORDS, PHOTOGRAPHS, PUBLISHED) and the wordmark. Titles are never uppercase.

**Titles** are noun phrases, under eight words, so the display size can stay large.
> The Slow Return of Winter Light · Small Observations · The Coast Later · Field Notes

**Standfirsts** are one sentence of fact, italic, never a promise.
> "Four months on the Baltic coast, photographed on expired film and printed the following spring."

**Captions carry information the photograph cannot** — time, place, stock, what went wrong. They never restate the headline.
> "Låtefossen at first light, 06:12. The exposure ran long by a full stop; the fog did the rest."

**Metadata is written the way a machine records it.** `KODAK 400TX` · `50 × 70 cm` · `Edition of 10` · `APR 12 2026` · `Fig. 01` · `Kodak Tri-X 400, HC-110 (B), 6 min`.

**Credits use nouns, not job titles** — "Photography", not "Photographer" — and include the printer and the stock when the work was printed.

**The written line** (the Caveat hand) is the one informal voice. One per spread, four to eight words, always something a person would actually write on a print:
> "Sunday light in the kitchen" · "in progress 4/12" · "stay curious" · "Favourites"

**Bilingual setting.** Chinese runs alongside English as a parallel voice, not a translation of every line — usually one sentence per section, set one step smaller at 1.9 leading, never italic.
> 光线回来的那几周，我们几乎不说话，只记录时间和温度。

**Never:** exclamation marks, emoji, second-person marketing ("discover your…"), superlatives, or the word *curated*. No sentence should sound like it is selling the photograph.

---

## Visual foundations

**Colour.** Warm neutrals and one accent. Five weights of paper stock (#FCFBF8 → #D3C7AC), six of warm charcoal ink (#15140F → #D6CFBF, never pure black), one cool slate reserved for photographic greys, and rust #B8543A. Rust appears at most twice on a page: figure numbers, date stamps, link hover, the occasional section numeral. There are no other hues in the system.

**Type.** EB Garamond carries both display and text — the family shift is size, not typeface. Display sets at 48–88px, tracking −0.012em, leading 1.02, and is set once per page. Body sets at 17px / 1.68 with a 66ch measure. Paragraphs after the first are **indented, not spaced** — the print convention this system keeps. IBM Plex Sans carries labels and UI at 10.5–15px; IBM Plex Mono carries anything machine-recorded; Caveat carries the hand.

**Layout.** A 24-column page, 20px gutter, 64px margin (24px on mobile). Everything stacks below 900px. Splits are named, not free-form: `1/1`, `2/1`, `3/2`, `1/1/1`, `wide/narrow`. Whitespace is the primary divider — reach for `<Divider variant="space">` before a rule.

**Backgrounds.** Flat paper tone plus a fixed 3.5–7.5% procedural grain overlay (SVG turbulence, `mix-blend-mode: multiply`, `pointer-events: none`). No gradients anywhere in the interface. Gradients exist only as photographic placeholder tones and the scan-edge lip.

**Imagery.** Warm, slightly desaturated, mid-contrast — one filter applies to every plate so a page reads as a single shoot. Photographs are square-cornered, framed with a 1px inset rule at 14% ink. Ratios come from the grid: 4/5 portrait, 3/2 standard, 16/7 panoramic, 1/1 in grids.

**Borders and radii.** Radius is **zero**. 2px exists only for tape and stamps; 999px only for the E/A mode discs. Three rule weights carry hierarchy: 1px hairline within a section, 1px ink between sections, 3px+1px double for covers and chapter breaks.

**Cards.** There are almost none. This system uses rules and whitespace where a web design would use a card. The three exceptions are all physical objects: `MemoryCard` (mounted print, deep caption well, polaroid shadow), `HandNote slip` (torn paper, clip-path edge), and the film base of `ContactSheet`. None has a border; all have a print shadow.

**Shadows** describe printing, not elevation — a tight 1–2px contact shadow plus one long soft cast. Four steps: `sheet`, `print`, `polaroid`, `page`. Editorial mode uses none of them on plates; Analog uses `print`.

**Transparency and blur** appear in exactly one place: the sticky kit navigation bars in the UI kits (`rgba` + 8px backdrop blur). Never over content, never on a photograph.

**Motion.** Paper does not bounce. Two easings (`cubic-bezier(.2,.6,.2,1)` and a soft out), four durations (120 / 220 / 420 / 800ms), and only two properties animate: colour and border colour. No entrance animations, no parallax, no scroll effects. `prefers-reduced-motion` cuts everything to 0.01ms.

**Hover** moves ink to rust and the underline to `--rust-300` — no movement, no opacity fade, no underline appearing from nowhere (links carry their rule at rest). **Press** darkens the fill one step (`ink-800` → `ink-900`, `rust-500` → `rust-700`). Nothing scales. **Focus** is a 1px rust outline at 3px offset.

**Fixed elements.** None in the design itself. The grain overlay is `position: fixed` and the kit nav bars are sticky; both are chrome, not content.

---

## Iconography

**PAPER has no icon set, and that is deliberate.** No icon font, no sprite, no SVG library — nothing in the source defines one, and an editorial system of this kind does its signposting with type. Where another system would reach for an icon:

| Need | PAPER uses |
|---|---|
| Forward navigation | the character `→` (U+2192) set in IBM Plex Sans, via `TextLink arrow` |
| Quotation | a display-serif `"` (U+201C) at 3em, `PullQuote variant="mark"` |
| Section break | `§` (U+00A7) or a roman numeral between hairlines, `Divider variant="ornament"` |
| Figure reference | `Fig. 01` in mono rust |
| Frame selected / rejected | a grease-pencil ellipse or cross drawn in CSS on the contact sheet |
| Identity | two initials in a hairline disc (`ExhibitionLabel monogram`), the E/A discs (`ModeBadge`) |

**No emoji, ever.** If a consuming project genuinely needs a UI icon set (a settings screen, a file manager), link Lucide from CDN at 1.5px stroke and `--ink-600`, and note the addition — but treat it as foreign to the system rather than part of it.

**Assets.** `assets/brand/paper-moodboard.png` is the source brief. `assets/image-slot.js` provides the drag-and-drop photo placeholder used throughout the UI kits and slides. There are no logo files: the wordmark is type.

---

## Components

29 components in five groups. Every one is `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, styled entirely through CSS custom properties.

**`components/masthead/` — page furniture**
`Wordmark` · `Masthead` · `RunningHead` · `Folio`

**`components/editorial/` — the text system**
`ArticleHeader` · `TextBlock` · `PullQuote` · `MetaBlock` · `Divider` · `Footnotes` · `Credits` · `Contents` · `Columns`

**`components/image/` — plates and sheets**
`Plate` · `Figure` · `HeroImage` · `Gallery` · `ContactSheet` · `FullBleed` · `ExhibitionLabel`

**`components/analog/` — material details**
`FilmStrip` · `MemoryCard` · `HandNote` · `DateStamp` · `Tape` · `ScanEdge`

**`components/ui/` — interface**
`Button` · `TextLink` · `ModeBadge`

`Plate` is the primitive every photograph passes through; `Figure`, `HeroImage` and `Gallery` compose it. `Columns` is the layout primitive for every page.

### Intentional additions

Two components have no direct counterpart on the moodboard and were added to make the rest usable:

- **`Plate`** — the board shows framed photographs everywhere but names no primitive. Without it, the 1px inset rule and the per-mode photo filter would be copy-pasted into six components.
- **`ScanEdge`** — the board lists "scan edge" under material vocabulary without drawing it as a component. It is a wrapper so the effect can be applied to any plate.

---

## UI kits

**`ui_kits/journal/`** — the publication, Editorial mode. Contents / index, photo essay, interview, gallery. Recreates moodboard spreads 01–04.

**`ui_kits/portfolio/`** — a photographer's personal site, Analog mode. Homepage, work index, contact sheet journal, exhibition label. Recreates moodboard spreads 05, 06, 08.

Both are click-through: open `index.html` and use the kit nav bar. Every photograph is an `<image-slot>` — drag a real image onto it in the preview and it stays. The Portfolio kit is wrapped in a single `data-mode="analog"`; remove that attribute and all four screens become Editorial with no other change.

## Templates

Five starting folders under `templates/`, each a single `.dc.html` a consuming project can copy and edit directly:

| Template | What it is |
|---|---|
| `photo-essay/` | Full editorial article page — masthead, 88px display title, plates, pull quote, footnotes, credits |
| `interview/` | Two-column interview spread with opening quote, portrait and vertical running label |
| `portfolio-index/` | Personal creative homepage — hero, recent grid, ruled index of work |
| `zine-spread/` | Printable two-page analog spread on one landscape sheet; exports straight to PDF |
| `slide-deck/` | Seven-slide 1280×720 deck: title, section, image + text, full bleed, statement, plate grid, credits |

Each has a `mode` tweak that switches the whole page between Editorial and Analog.

## Slides

`slides/` — eight 1280×720 layouts: title, section opener, image + text, full bleed, statement, plate grid, credits, and a printable two-page zine spread (moodboard 07) built on `doc-page.js` for landscape PDF export.

---

## Files

```
styles.css                  the one file consumers link — @import list only
tokens/
  colors.css                paper, ink, slate, rust + semantic aliases
  typography.css            families, sizes, leading, tracking, measure
  space.css                 4px scale, 24-col grid, radii, motion
  material.css              grain, print shadows, film, scan edge, photo tone
  modes.css                 [data-mode] editorial / analog / dark
  base.css                  element defaults, grain overlay, link styles
components/                 masthead · editorial · image · analog · ui
guidelines/                 22 specimen cards (Colors, Type, Spacing, Material, Brand)
ui_kits/journal/            Editorial publication, 4 screens
ui_kits/portfolio/          Analog personal site, 4 screens
templates/                  5 copyable starting folders (.dc.html)
slides/                     8 presentation layouts + printable spread
assets/brand/               the source moodboard
assets/image-slot.js        drag-and-drop photo placeholder
explorations/               the four typographic directions this system was chosen from
SKILL.md                    agent-skill entry point
```

---

## Using it

Link one file:

```html
<link rel="stylesheet" href="styles.css">
```

Then either compose from the bundle (`window.PAPERDesignSystem_7d8f86`) or write plain HTML against the tokens — every specimen card in `guidelines/` does the latter and is a working example.

Three things to get right, in order: **the measure** (66ch), **the ratio** (pick it from the grid, don't accept a default), and **how much texture** (less than you think).
