# core — design system

> *the elements are mostly empty, mostly damp, and absolutely waiting*

**core** is a meta-archive. The brand name is the suffix that joins **dreamcore, poolcore, weirdcore, backrooms-core** — and the design system is built as if the site itself were one of those archives: a small corner of the internet that catalogs liminal pool rooms, overexposed childhood photographs, and Y2K detritus, run by someone who has been at it since 1999 and never updated the layout.

This is an **art / portfolio / experimental** system. It is **not** trying to be a SaaS dashboard kit. Modern restraint is the wrong instinct here. The system commits to a 7/10 weirdness target: visibly off, but never broken or unreadable.

---

## How the aesthetics combine

| Source | Role in the system |
|---|---|
| **Y2K Bondi blue** (iMac / MSN / XP) | **Substrate** — title bars, primary CTA, hero color |
| **Chrome / silver** | Surfaces — secondary buttons, sunken panels, brushed metal feel |
| **Frost** (icy blue-white) | Page paper — replaces the old warm cream |
| **Poolcore tile** (chlorine blue) | Deeper aquatic — backgrounds, body tones, content imagery |
| **Bubblegum pink** (Y2K iconic) | Hot accent — stamps, ironic CTAs, marquee neon |
| **Dreamcore peach + rose** | Warm accent (small role) — when a single element wants to feel *off* |
| **Sodium / backrooms yellow** | Warm accent (smallest role) — reserved for "wrong" highlights |
| **Y2K weirdcore** | UI grammar — beveled windows, marquees, pixel icons, popups |

> v2 note: this design system was originally substrated on warm sodium-yellow.
> v2 flipped to cool Bondi-blue substrate while keeping the warm scales available as accents.
> Tweak: every component re-reads tokens, so you can flip back by editing `tokens/colors.css` aliases.

> **Light-only system.** There is no dark mode and none is planned — the whole premise is an
> overexposed paper archive. Individual surfaces may sit on ink (SectionSlide does), but the
> page substrate is always frost paper.

---

## Sources

This system has no attached codebase, Figma, or brand book — it was specified by aesthetic keywords only:
- 梦核 (dreamcore), 后室 (backrooms), 池核 (poolcore)
- 超现实主义, 怪诞 (surreal, grotesque)
- 像素拼接 (pixel collage)
- Loose reference: NEEDY GIRL OVERDOSE (主播女孩重度依赖) — borrowed *structurally* (desktop windows, popups, layered UI), **not** chromatically (we are cool/dingy, not neon-pink).

If you later supply a real codebase, brand guide, or photographic library, this README is the place to record those links.

---

## Content fundamentals

### Voice
- **Lowercase by default**, even for proper nouns. Sentence case used selectively to break the rhythm.
- Reads like a **wiki** or a **personal-archive blog circa 2003** — not marketing copy. Things are described, catalogued, footnoted.
- First person (**"I"**), with no audience flattery. The reader is overhearing the curator, not being addressed.
- Frequent **parentheticals** (often empty of new info — they're for tone).
- Em-dashes — used heavily.
- Footnotes are good. Marginalia is good.

### Don't
- No "experience seamless workflows"-style marketing language
- No emoji (broken-system unicode is fine as ornament: ░, ▒, ▓, ◇, ◊, ☉, ♁)
- No exclamation marks except inside a marquee or a popup (where they're ironic-period)

### Example
> *(found in a folder labeled `mostly_empty/`)*
>
> the pool was drained two summers ago. I think about it sometimes — the way the tile grout turned the color of old butter, the way the deep end still smelled like chlorine for months after.
>
> [03 photos · 1 footnote · last touched 06.23.2026]

---

## Visual foundations

### Color
- Three pulling-against-each-other scales: **sodium** (warm, dingy), **tile** (cool, wet), **dream** (peach/rose halo).
- A small **neon** set (magenta/cyan/lime/orange/violet) is reserved for rainbow marquee text and visited-link violet — **never** for primary surfaces.
- Page paper is an icy blue-white (`--paper` → `--frost-100` `#eaf4f8`) — never pure white. Ink is a deep cool near-black (`--ink` `#0c1a26`) — never pure black. Pure `#fff` / `#000` are forbidden in this system.
- Imagery is treated with one of three filters: `--filter-overexposed` (dreamcore), `--filter-jpeg` (artifact-y poolcore), `--filter-vhs` (weirdcore).

### Type
- **Display:** Pixelify Sans — for headlines, hero copy, big stupid statements.
- **Body:** Tinos (Times New Roman substitute) — long-form reading, blog posts, footnotes.
- **UI chrome:** system sans (`-apple-system` / Tahoma / MS Sans Serif) — for title bars, buttons, tooltips. Always **11–13px**.
- Three voices on purpose. Don't unify them.

### Backgrounds
- **Tiled wallpapers** are first-class. The `assets/tile.svg` (blue) and `assets/tile-warm.svg` (yellow) pattern-repeat as page backgrounds.
- Caustic water pattern (`assets/caustic.svg`) for "pool" surfaces.
- Grain (`assets/grain.svg`) overlay at ~10–20% opacity on most paper surfaces — gives the JPEG-y feel.
- **Halos** (soft radial gradients) sit behind important imagery, not borders around it.

### Borders & shadows
- **Borders** are 1px solid `--ink`. Sharp corners. No `border-radius` on windows or cards (except a 2px softening on buttons).
- **Drop shadows** are offset, **no blur** — the Y2K "clipping mask" look: `2px 2px 0 var(--ink)`.
- **Inner bevels** (1px hi + 1px lo) give surfaces a 3D Win98 feel.
- **Glows** are the opposite mode — soft, blurry, peach/rose, applied to dreamcore imagery and overexposed text.

### Layout
- Use a **32px tile grid** wherever possible. Components snap to multiples of 32.
- Two layout extremes: **dense, no-whitespace catalog** (archive views) OR **vast empty rooms** (single image floating in a paper field). Avoid the middle.
- "Windows" can be **stacked, overlapped, scattered**. Use absolute positioning intentionally — this is a desktop, not a flow document.

### Motion
- **Steps easing** is the default for anything literal/animated: `--ease-step-4` for GIF-loop feel, `--ease-step-2` for stutter.
- Smooth easing (`--ease-dream`) only for halos, glows, fades.
- **Marquee** is acceptable. Cursor trails are acceptable.
- Hover state: a 1px offset (the surface "presses in") OR a peach halo bloom — never a tasteful 200ms color fade.
- Press state: full inset bevel (the button looks pressed in).

### Transparency / blur
- Almost never use `backdrop-filter` blur. The aesthetic is **flat, layered, paper-on-paper** — not iOS frosted glass.
- Transparency is used for **halo gradients** and the **JPEG-grain overlay**, not for chrome.

### Imagery
- Empty pools, fluorescent hallways, mall food courts, suburban driveways, ceiling tiles, soft toys, balloons.
- Treated **warm and overexposed** — `--filter-overexposed` is the house filter.
- Photos sit inside a 1px ink frame OR float free with a peach halo.
- Never round-cropped. Never used full-bleed-edge-to-edge except on hero screens.

---

## Iconography

- **Pixel icons.** Hand-cut 16×16 or 24×24 SVGs with sharp edges, no anti-aliasing. There is no shipped icon directory yet — cut icons per need and inline the SVG in the component.
- No emoji. No emoji. No emoji.
- Unicode block characters (░ ▒ ▓ █) and geometric shapes (◇ ◊ ◯ ◆) are welcome as **typographic ornament** but not as functional icons.
- Cursor: a small crosshair (`assets/cursor-crosshair.svg`) — applied to links and interactive surfaces.
- The logo wordmark is `assets/logo.svg` (220×80) and the bug/avatar is `assets/logo-mark.svg` (80×80, a single pool tile with a window in the center).

---

## Caveats

- **Fonts are Google Fonts substitutes.** Pixelify Sans + VT323 + Tinos pulled via `@import` in `tokens/fonts.css`. If you want bespoke binaries, drop `.woff2` files in `assets/fonts/` and replace the `@import` with `@font-face` rules.
- **No real photography.** UI Kits will use Unsplash URLs with intentional search terms (empty pools, suburban interiors, etc) — swap in your own when you have them.
- **No icon set yet** — added in the components batch.

---

## Index (manifest)

- `styles.css` — root `@import` entry (only imports — never raw rules)
- `tokens/`
  - `colors.css` — sodium / tile / dream / paper / ink / neon scales + semantic aliases
  - `typography.css` — three families + size scale (xxs → mega)
  - `spacing.css` — 4px grid + 32px tile unit
  - `effects.css` — bevels, shadows, glows, filters, motion
  - `fonts.css` — Google Fonts `@import` (Pixelify Sans, VT323, Tinos)
  - `reset.css` — page baseline (resets + body type defaults)
- `cards/` — 19 foundation specimen cards (Colors / Type / Spacing / Effects / Brand)
- `assets/` — `logo.svg`, `logo-mark.svg`, `tile.svg`, `tile-warm.svg`, `caustic.svg`, `grain.svg`, `halo.svg`, `cursor-crosshair.svg`
- `components/`
  - `core/` — Button, IconButton, Input, Checkbox, Tag, Card, Divider
  - `window/` — Window, Toast, TabBar
  - `dream/` — Glow, Marquee, OverexposedText
  - `texture/` — TilePattern, GrainOverlay, Halo
- `ui_kits/`
  - `archive/index.html` — *mostly_empty.com* desktop browser (Y2K windows, sidebar, file grid, detail)
  - `blog/index.html` — long-form personal blog with sidebar + Y2K footer
- `slides/` — TitleSlide, IndexSlide, SectionSlide, ImageSlide, QuoteSlide, EndSlide (1280×720 each)
- `SKILL.md` — agent-skill manifest, ready to drop into Claude Code
- `readme.md` — this file
