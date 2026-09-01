# KIHON 基本 — Motion Design System

KIHON (基本, "fundamentals") is the 9th design system in the yoruuuchan family and the only general-purpose one: the default reached for when no style is wanted. It is the **visual layer** of a Remotion programmatic-video system whose motion layer is already locked from frame-by-frame measurement. It serves product explainers, data cards, project walkthroughs and portfolio pieces, in Chinese first, at 1080p video scale.

**General ≠ plain.** The reference object is a well-made camera body: it shoots any subject, carries zero ornament, and is still unmistakably crafted — anodized metal, knurling, chamfered edges, damped controls. Identity lives in material, typography, and motion timing — never in decoration or a loud palette.

## Sources

- Local codebase `\/remotion/yoru-motion-system` — the Remotion motion system (timing.ts, canvas.ts, typography.ts, primitives, 20 templates). Motion constants and type sizes are measured there.
- Local `\/remotion/kihon-design-system/docs/00-motion-personality.md` — the KIHON motion-personality spec (three curves, hold budget, relation phases, dual-native rule).
- GitHub [yoruuuchan/yoru-design-systems](https://github.com/yoruuuchan/yoru-design-systems) — the 8 sibling systems KIHON must NOT resemble (KUNLUN, Aozora, Mayonaka, PAPER, RIFT, core, Console, YORU Content). Font binaries came from here.
- GitHub [yoruuuchan/yoru-motion-research](https://github.com/yoruuuchan/yoru-motion-research) — shot library, theme cross-reference, measurement provenance rules.

Explore those repos to design deeper against this family; every number there carries its measurement source.

## The 9th system — what distinguishes it

Six of the 8 siblings use a blue accent; the others magenta (Mayonaka) and rust (PAPER). Their materials: liquid glass (Aozora, RIFT, Console), cut-corner terminal (KUNLUN), neon brutalism (Mayonaka), warm paper (PAPER), letterpress (YORU Content), Y2K (core). KIHON takes the unclaimed space:

- **Material**: machined, anodized metal. Silver (银) by default, black (玄) as the dark palette.
- **Accent**: 烤蓝 gun blue `#2B4C6F` — gun bluing is a real metal finish, the same material language as the anodized body. State only. It clears the six bright sibling blues (`#0A84FF` 青空 · `#00b8ff` 昆仑 · `#5C7BFF` RIFT · `#3186FF` YORU Content · `#009de0` core · `#4F6CE8` Console) on both chroma and value.
- **Type**: Source Han Sans SC as the Chinese-first workhorse; Instrument Sans for Latin runs; B612 Mono (the Airbus cockpit face) for numerals and ticks.
- **Motif**: the knurl — bands of fine 1px ticks, from lens focus rings. Rules, ticks, scales, dividers.

## CONTENT FUNDAMENTALS

- **Chinese is the first language.** Copy is written 中文在前; Latin appears as technical terms, unit strings, and labels inside Chinese sentences (「拟合 `bar-chart-reveal` 逐帧柱高」). English-only frames are the exception.
- **Tone: measured, declarative, engineering-honest.** The source docs mark every number `[测量]` (measured) or `[决定]` (decided) — claims carry provenance. Write like that: 「相位差本身就携带语义」, never marketing superlatives.
- **Short clauses, full-width punctuation** (「」、——、·) in Chinese copy. Sentences state facts, then the consequence: 「加一行字，片子自己变长，不用手改。」
- **Labels are bilingual or Latin**: UPPERCASE tracked Latin labels (BEFORE / AFTER / STEP 01) over Chinese body content is the house pattern, inherited from the measured templates.
- **No emoji.** State marks are unicode instrument glyphs: ✓ ✗ → ↓ · — ●.
- **Numbers are content.** Values, frame counts, percentages get displayed big and precise (tabular numerals); vague quantities are avoided.

## VISUAL FOUNDATIONS

- **Palettes**: 银 gin (silver anodized, light, default) and 玄 kuro (black anodized, accent `#7BA3CC`). Both are metal: the ground is never #FFFFFF or #000000. Tokens in `tokens/colors.css`.
- **Depth — 5 surface levels**, all opaque: well (recessed) → bg (chassis bed) → plate → card → control. Every raised face carries the **two-step chamfer**: a bright 1px catch then a 1px half-tone above, a 1px shade then a 1px half-shade below (light comes from above), over a ~1.5% vertical micro-gradient (brushed) and a three-layer directional drop shadow (1px contact, 3px near, 34px far). Recessed wells invert the chamfer: inner top shadow, lit bottom lip. Pressed controls collapse the top catch (`--edge-pressed`). Explicitly **not** soft-shadow neumorphism — that is Console's territory, and it works by dissolving borders, which would blur hairlines, ticks and data bars at 1080p. Every KIHON surface keeps its 1px border and full contrast.
- **Lens falloff**: the ground is lit by a lens, not a lightbox — a radial darkening from 42% out, centred slightly high. It is the only thing `Stage` draws over the ground besides grain; the **frame edges stay clean**. Identity comes from material, type and timing, not from chrome on the border.
- **Engraved type**: labels and ticks are milled into the metal, not printed on it — the groove's lower lip catches the light (`--engrave`). Applied to `.k-label`, `.k-data-tick` and `.k-micro`.
- **Grain**: procedural fractal noise (`assets/grain.svg`) overlaid at 5% (银) / 7% (玄) on the page ground and full-frame stages only — not on every card. It reads as anodize tooth at 1080p.
- **Borders**: every surface has a 1px `--line` border; emphasis (selected, AFTER) switches it to `--accent` or `--line-strong`. 
- **Radii are tight**: card 10, control 8, chip 6, pill 999. Plates, not pillows.
- **Color rules (hard)**: data marks use the 4-step lightness ramp `--ramp-1..4`, never hue. Accent marks state — selected, active, AFTER, a CTA — never a data series, never decoration. `--positive` intentionally aliases accent (the lit instrument lamp = go); `--negative` is oxide red `#A6402F`.
- **Type hierarchy**: Bold 700 titles against Light 300 subtitles is the contrast axis; body 400, labels 500 tracked +0.14em uppercase. Big numerals are B612 Mono 400 — thin, tabular, instrument-precise. Never monospace for Chinese body copy. Role sizes (128/88/54/44/34/32/30, data value 132) are design-px on a 1920-wide frame and are locked from the motion system. Portrait display uses `--type-display-portrait: 108px`, a [决定] value — it is not part of the 1920 measurement table.
- **One tick grid**: knurl teeth, rule end ticks and chart-axis ticks are all 1px marks on a single 5px module (`--tick-pitch` / `--tick-h`), and the knurl band itself is two modules tall (`--knurl-h: 10px`). Stack a Rule and a Knurl in the same frame and they read as one instrument scale rather than two unrelated details.
- **Craft on the content itself**: the data marks carry the machining, since a mark that *is* the content can never compete with it. A bar's growing face gets a 2px cut face with a 1px shoulder under it and 1px lit/shaded side walls — `--bar-cap-up-1..4` / `--bar-cap-right-1..4`, tuned per ramp step. A white cut face barely reads on the light end of the ramp, so there the shoulder carries the definition and the highlight backs off; on the dark end it reverses. Perceived depth stays constant across the ramp instead of fading out. Chart axes hang a 1px tick under each column. Numerals are tabular so columns of digits align on the stem.
- **Detail at small sizes**: tracked micro-labels and tick numerals — 1px is visible at 1080p and is where the craft lives. Rules, end ticks and knurl bands exist as primitives but are **opt-in**: frames carry no standing decoration at the top or bottom edge. A keyline appears only where a frame genuinely needs a division (a chart axis, a table rule). Frames open and close on **blank metal**: no label strip at the top, no progress or format row at the bottom — content sits in the safe area and the edges stay empty.
- **Backgrounds**: flat metal + grain + falloff. No imagery, no patterns, no gradients beyond the micro-gradient. Frame edges carry nothing.
- **Motion — the entrance ladder.** With the frame edges empty, the craft lives in *time*: a frame arrives in legible layers and leaves nothing behind on the still. No new timing is invented — each role cites a locked constant and one of the three curves:
  - `text` — fade 8f + rise 24px, text curve. Never overshoots.
  - `panel` — fade 8f + rise + scale from 0.985, surface spring. Large mass, ~2% overshoot.
  - `solid` — pop spring from the element's own origin: **bars grow from the baseline**, chips scale up in place. Never a fade.
  - `rule` — draw 10f, scaleX from the left. A line is drawn, not faded.
  - `numeral` — counter 24f. Digits settle by counting; they do not fade in.
  Preview implementation in `ui_kits/shared/kit-motion.{css,jsx}`; Remotion calls `spring()` with the measured configs.
- **Motion** (LOCKED, measured — see `tokens/motion.css`): three curves only — pop spring{150,14,1} for solids, surface spring{190,22,1} for large panels, cubic-bezier(0.16,1,0.3,1) for text/opacity. Text never overshoots. fade 8f · rise 24px · stagger 8f · phase 18f · counter 24f · draw 10f · rowStep 7f · secondBeat 3–4f · hold = max(26, 汉字数×7.5). Relations carry the phase: parallel 0f, sequence 8f, causal 18f. Rhythm multipliers slow×1.5 / medium×1 / fast×0.7. Layout never reflows mid-clip — elements change only opacity/transform in their final position.
- **Hover/press (preview UI only)**: video has no hover; in DS previews and tools, hover raises to the next surface gradient, press compresses the machined edge (top highlight off, inner shade on). Keep it mechanical — no color shifts.
- **Formats**: 9:16 and 16:9 are two native layouts sharing one logic file — physically separate layout files, no `if (isPortrait)` branches. Safe areas: landscape 6%/9%, portrait 7.5%/6%. Canvas unit `u = frameWidth / (1920 | 1080)` — the same design-px is relatively larger in portrait, on purpose.

## ICONOGRAPHY

There is no icon font and no SVG icon set — and that is a rule, not a gap. The measured templates mark state with **unicode instrument glyphs**: ✓ (positive/AFTER), ✗ (negative/BEFORE), → / ↓ (causal connector, per orientation), · (list tick), — (range), ● (active indicator lamp). Set them in the core font at the same size as adjacent text, colored by semantic token. Do not import icon libraries; do not draw pictograms. If a future template genuinely needs a pictogram, that is a design decision to raise, not a default.

**No logo exists.** The sources contain no KIHON mark. Wherever a mark would go, render the wordmark in type: 「KIHON」 Instrument Sans 600 tracked, or 「基本」 Source Han Sans Bold — see `guidelines/brand-wordmark.html`. Do not draw a logo.

## Type substitution flags

- Source Han Sans SC Light/Regular/Medium/Bold are **self-hosted** (`assets/fonts/`, copied from the YORU Content system repo). ExtraLight/Heavy weights were not available — if you have the full family, add the binaries and extend `tokens/fonts.css`.
- **Instrument Sans and B612 Mono load from Google Fonts CDN** — no binaries existed in the provided sources. For offline/deterministic Remotion renders, download the OFL binaries and self-host them the same way. Flagged for the user.
- Instrument Sans on Google Fonts ships weights 400–700 only; there is no 300. `--weight-subtitle: 300` in mixed text means Source Han Sans SC renders at Light 300 while the Latin run falls back to Regular 400 — a visible weight mismatch. This is a known trade-off; to close it, either swap the Latin face for one that carries a 300 weight or accept 400 for Latin in subtitles.

## Preview vs production (Remotion)

`components/*.jsx` and `ui_kits/` are **browser-preview implementations** — they measure the container with ResizeObserver + useState and animate with rAF counters and CSS `@keyframes`. **Do not import them into Remotion compositions.** Remotion renders by screenshotting each frame; anything that resolves asynchronously (ResizeObserver, rAF, CSS animation timing) produces non-deterministic first frames.

In a Remotion composition, re-implement against the tokens:

- **`--u` synchronous**: `const { width } = useVideoConfig(); const u = width / (1920 | 1080);` — no ResizeObserver.
- **Number counters**: frame-interpolated over 24f with an ease-out cubic, not rAF.
- **Bar growth**: drive `height` (or `width`) and the value per frame. **Do not use `scaleY`** — it compresses `--bar-cap-*`'s 2px machined-edge shadow along with the bar, breaking the constant-depth illusion.
- **All animation**: `useCurrentFrame()` + `spring()` / `interpolate()`. Text curves use `Easing.bezier(0.16, 1, 0.3, 1)` with clamp, mapping to the three locked curves.
- **Fonts**: self-host binaries via `staticFile()` / `loadFont`. Do not rely on CDN `@import` — Remotion's renderer has no network during frame capture.

## Index

- `styles.css` — entry point; imports everything under `tokens/`.
- `tokens/` — `colors.css` (银/玄 palettes, ramps, semantics), `typography.css` (roles + `.k-*` classes), `surfaces.css` (levels, edges, knurl, grain), `spacing.css` (scale + safe areas), `motion.css` (locked constants), `fonts.css` (@font-face).
- `assets/` — `grain.svg`, `fonts/` (Source Han Sans SC ×4 weights).
- `guidelines/` — specimen cards for the Design System tab (type, colors, surfaces, format, motion), plus `accent-depth-study.html`, the live comparison behind the 烤蓝 + chamfer decision.
- `components/frame/` — Stage, Surface, Rule, Knurl, Placeholder.
- `components/type/` — Text, Label, Numeral, Chip.
- `components/data/` — Bar, Ramp, Arc.
- `ui_kits/landscape/` — 16:9 frames (title, data, before/after, steps) as an interactive index.
- `ui_kits/portrait/` — the same frames laid out natively for 9:16.
- `ui_kits/shared/` — `kit-motion.css` + `kit-motion.jsx`: the entrance ladder used by both kits.
- `templates/video-frame/` — starting-point template: the dual-native frame (16:9 + 9:16 side by side).
- `demo/` — runnable Remotion project (landscape 银 + portrait 玄, five acts) demonstrating all five motion roles and the locked constants in production code. See `demo/README.md`.
- `SKILL.md` — agent entry point.

### Intentional additions

- **Knurl** (component) — a fine tick band (1px tooth, 5px pitch) for dividers and progress tracks. As a track it **detents**: the elapsed span snaps to whole teeth so the boundary always lands in a gap, and the boundary tooth is drawn full-height in accent. A moving value therefore advances tooth by tooth — a click-stop dial, not a sliding fill. Available, not standing decoration: no frame wears one by default.
- **Ramp** (legend component) — makes the lightness-ramp data rule visible and reusable.

### Considered and rejected

- **Camera chrome** (top-plate seam, film rebate with sprocket perforations, lens-barrel `Dial`, frame-counter `Counter`) was built and removed. It read as ornament competing with the content, and it put marks on the frame edges. The camera reference stays an analogy for how well the thing is *made* — material, edge, type, timing — not a set of parts to draw. **Frame edges stay clean.**

### Component inventory provenance

Frame/type/data primitives mirror the visual primitives of `yoru-motion-system/src/primitives` (Stage, Surface, GrowBar, Counter, DrawLine, Arc, Placeholder) re-skinned to KIHON; templates' structures (BeforeAfter, BarChartReveal, StepList, MetricCounter) inform the UI-kit frames. `MaskedReveal` and `TypewriterLine` were dropped upstream (unproven / broken for CJK) and are not represented.
