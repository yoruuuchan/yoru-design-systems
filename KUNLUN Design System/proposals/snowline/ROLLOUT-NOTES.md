# SNOWLINE rollout — integration notes

Mechanical integration of the approved SNOWLINE 雪线 light theme (proposal v2, approved 2026-10-08)
into the KUNLUN design system. Scope: `KUNLUN Design System/` only. No git commits (lead reviews).

Constraint: dark default theme stays behaviorally identical — all changes additive and scoped
under `[data-theme="snowline"]`, or semantic-token swaps whose dark value is byte-identical.

## Decisions

1. **Semantic swaps with identical dark values (free fixes).** Dark aliases: `--text-signal`=cyan-300,
   `--text-link`=cyan-400, `--text-warn`=amber-500, `--text-danger`=red-500, `--text-success`=green-500,
   `--hud-ink-bright`=cyan-400 (verified in `tokens/colors.css`). Swapping a raw ramp reference to the
   alias with the same dark value fixes snowline via the approved remap with zero dark delta.
2. **Non-identical ramps (amber-300 / red-300 / green-300 / cyan-900 hover / `--bg-void` as text)**
   get scoped `[data-theme="snowline"]` overrides appended in the same file; dark untouched.
3. **`--chrome-strip`.** The approved snowline file redefines `--chrome-strip` (comment: "was
   rgba(13,19,32,.6)"), but no dark definition existed. Kits now use
   `var(--chrome-strip, <original rgba>)` — dark falls back to the exact original value,
   snowline picks up the approved light strip. No new dark token added, no invented values.
4. **Terminal LCD font.** "Font stays VT323" = the approved demo's LCD readout font
   (`var(--font-crt)`). Size stepped to `--text-lg` (18px), the nearest type-scale step to the
   demo's off-scale 17px. Dark Terminal stays JetBrains Mono 13px, byte-identical.
5. **Primary button under snowline.** Proposal left two candidates open; the approved tokens set
   `--accent: var(--cyan-600)` and the approved demo pairs cyan-600 fill with `#F5F9FF` text
   (`.btn-primary`). Followed the demo: scoped override sets `color: var(--text-inverse)`
   (= #F5F9FF in snowline) on `.kl-btn--primary` / `.kl-badge--solid`.
6. **Dialog overlay `rgba(2,4,10,0.78)` kept.** A dark scrim over a light page is standard
   dimming; not a readability breakage.

## D4 audit — `grep -rniE "#[0-9a-f]{3,8}\b|rgba?\(" components/`

Raw grep hits (4), plus raw-ramp `var(--ramp)` references that bypass the semantic remap
(checked because they are dark-biased by name):

| File:line | Value | Verdict | Action |
|---|---|---|---|
| data/Data.css:28 | rgba(0,232,145,.1) badge--success bg | OK on white (translucent tint) | keep |
| data/Data.css:95 | rgba(0,232,145,.05) pill--online bg | OK on white | keep |
| feedback/Feedback.css:6 | rgba(2,4,10,.78) dialog overlay | dark scrim is standard | keep |
| viz/Viz.css:46 | rgba(255,255,255,.015) striped row | invisible on white (feature lost) | scoped override → `var(--bg-hover)` |
| Data.css:25,68,104,123 | cyan-300 text (badge/tag/pill/avatar) | unreadable on white | base swap → `--text-signal` (dark-identical) |
| Data.css:29 green-300, :33 amber-300, :37 red-300 text | unreadable on white | scoped override → `--text-success/warn/danger` |
| Data.css:41 | `--bg-void` text on accent (badge--solid) | light-on-cyan in snowline | scoped override → `--text-inverse` |
| Data.css:94 | green-500 text (pill--online) | poor on white | base swap → `--text-success` (dark-identical) |
| Data.css:109 amber-300, :113 red-300 text | unreadable on white | scoped override → `--text-warn`/`--text-danger` |
| buttons/Button.css:51-53, 126-128 | cyan-900 bg hover (secondary/iconbtn) | dark island on light page | scoped override → accent-tint/bg + text-link |
| Button.css:30,41 | `--bg-void` text on accent (primary, badge-solid) | light-on-cyan in snowline | scoped override → `--text-inverse` |
| Button.css:78,141 | red-300 text on danger hover | poor on white | scoped override → `--text-danger` |
| forms/Forms.css:124 | cyan-400 adornment text | faint on white | base swap → `--text-link` (dark-identical) |
| forms/Forms.css:91-92 | cyan-400 select arrows | faint on light inset | scoped override → cyan-600 arrows |
| surfaces/Surfaces.css:49,109 | cyan-400 glyph / eyebrow text | faint/unreadable | base swap → `--text-link` |
| surfaces/Surfaces.css:125 | cyan-400 corner ticks | faint | base swap → `--hud-ink-bright` (dark-identical) |
| feedback/Feedback.css:44,72 | cyan-400 glyph/icon | faint | base swap → `--text-link` |
| Feedback.css:45 | red-300 dialog--danger title | poor | scoped override → `--text-danger` |
| Feedback.css:73,74,75 | green/amber/red-500 toast icons | poor on white | base swaps → `--text-success/warn/danger` (dark-identical) |
| Feedback.css:92-94 | tooltip `--bg-void` bg + cyan-300 text | light-on-light in snowline | scoped override → bg-elevated + text-link |
| viz/Viz.css:49,75 | cyan-400 text (table id, chart label) | unreadable | base swap → `--text-link` |
| viz/Viz.css:100,101 | green/red-500 delta text | poor | base swap → `--text-success`/`--text-danger` |
| terminal/Terminal.css (whole) | dark CRT treatment | covered by D5 LCD block | scoped LCD overrides |
| tokens/base.css:46 | `a:hover` cyan-300 | unreadable on white at hover | base swap → `--text-signal` (dark-identical); slight scope extension beyond components/, noted |
| Tabs.css | cyan-700 border, cyan-500 top bar | fine on white | keep |
| various | cyan-700/red-700/amber-700/green-700 borders, neutral-600 | fine on white | keep |
| progress fills green/amber/red-500 | fills, not text (proposal: -500 stays fill-only) | keep |

`.jsx` / `.d.ts`: 0 hardcoded color hits.

## Kit-level fixes (inline React styles; found during D6/D8 prep — all applied)

- Chrome strips rgba(13,19,32,.6/.55) / rgba(6,8,13,.6) → `var(--chrome-strip, <original>)` (decision 3).
- Brand marks cyan-500 + `--bg-void` letter → `--accent` + `--text-inverse` (dark-identical).
- cyan-300 text → `--text-signal`, cyan-400 text → `--text-link`, green/amber/red-500 → semantic
  (all dark-identical).
- neutral-50 / neutral-100 headings (landing navWord+title, login brandWord, chat msgBodyUser)
  → `--text-primary`. Dark shifts neutral-50→neutral-100 (imperceptible, same ramp) — noted as the
  only non-byte-identical dark change; required, otherwise the wordmark is invisible in snowline.
- Landing hero title gradient neutral-50→cyan-400 → `--text-primary`→`--accent` (same justification).
- Chat MOSS name/avatar amber-300 → `--text-warn` (dark amber-300→amber-500; small shift, noted).
- Decorative cyan washes (landing/login bg radial gradients, inset glows) kept — soft tints work
  on white; verified by screenshot.
- Terminal kit page: `background: var(--kl-term-page, var(--bg-void))` + a kit-local rule in
  `ui_kits/terminal/index.html` setting `--kl-term-page: var(--bg-base)` under snowline (per D6:
  full-screen kit uses the --bg-base bench with LCD panes, not the deepest strip). Dark falls
  back byte-identically.
- D6 bootstrap: identical plain-JS snippet before `</body>` in all five kit index.html files —
  `?theme=` param > localStorage["kunlun-theme"] > default; floating `#kl-theme-toggle` button
  (bottom-right, z-index 9999, mono 10px uppercase, chamfered, signal border, link color,
  transparent bg) flips + persists.

## D5 — Terminal/CodeBlock LCD (applied)

Scoped `[data-theme="snowline"]` block appended in `components/terminal/Terminal.css`:
- `.kl-terminal` / `.kl-code`: `background: var(--lcd-bg)`, `border-color: var(--border-strong)`,
  `box-shadow: var(--lcd-inset)`, ink `var(--lcd-ink)`, font `var(--font-crt)` (VT323) at
  `--text-lg` (18px), plus the demo's `line-height: 1.65` / `letter-spacing: .03em` on Terminal.
- Scanline overlay re-pointed to `var(--bg-lcd-scanlines)` (existing `::before`, pointer-events
  none); glass top-reflection `::after` carried over verbatim from the approved demo
  (`rgba(255,255,255,.28)` radial — approved-demo value, not a new token).
- Status ink: success `#0B6B4A`, warn `#8A5A00`, prompt/signal `#00547A` (bold), error
  `var(--red-700)`; muted `var(--lcd-ink-dim)`; text-shadows killed inside the LCD.
- Input row becomes part of the screen: `var(--lcd-bg-deep)` + `border-strong` divider, caret
  `#00547A`. Head bar stays panel chrome (own mono/2xs styling, unaffected).
- CodeBlock gets the same LCD well per proposal ("Terminal/CodeBlock 走 LCD 处理，不开 dark
  island"): same glass/bezel/scanlines/reflection, gutter `var(--lcd-ink-dim)` + `border-strong`.

## Deviations

- LCD font size 18px (`--text-lg`) vs demo's 17px (off-scale) — stayed on the type scale.
- LCD block also carries the demo's line-height 1.65 / letter-spacing .03em / glass-reflection
  gradient — cosmetic, scoped, from the approved demo.
- `a:hover` fix lives in `tokens/base.css` (outside D4's components/ scope) — one-selector,
  dark-identical semantic swap; recorded here.
- `--text-warn` for chat MOSS amber: dark value shifts amber-300→amber-500 (see above).
- Terminal kit `--kl-term-page` hook (see kit-level fixes) — kit-local, dark-identical.

## Open questions

- Dialog scrim darkness (78%) on light pages — kept as-is; revisit if the lead wants a lighter scrim.
- `--success-tint` does not exist in either theme (success badges/pills use raw rgba); consistent
  across themes, left alone.
- CodeBlock under snowline also gets the LCD/VT323 treatment per proposal README
  ("Terminal/CodeBlock 组件整合时走 LCD 处理") — flag for lead review (code legibility in VT323).

## D8 verification

Headless Chrome (`--headless=new --allow-file-access-from-files`), shots in
`C:/Users/15877/AppData/Local/Temp/theme-rollout-snowline/`:

| Shot | Result |
|---|---|
| dashboard-default.png | dark console unchanged; toggle shows ▸ SNOWLINE |
| dashboard-snowline.png | white panels on steel bench; all status text readable; toggle ▸ DEFAULT |
| terminal-snowline.png | panes read as recessed LCD (glass, VT323, scanlines, inset bezel), not white cards; input row part of the screen; page on --bg-base bench — no dark island |
| terminal-default.png | dark CRT byte-identical behavior (JetBrains Mono, cyan ink, void panes) |
| landing-snowline.png | hero gradient navy→cyan readable; boot terminal LCD; CTAs fine |
| login-snowline.png | brand block, panel, inputs all readable on white |
| chat-snowline.png | MOSS amber readable; telemetry CodeBlock renders LCD |
| proposal-palette.png / proposal-demo.png | unchanged after the link swap to ../../tokens/snowline.css |

Checks: no purple anywhere; no cyan-300/400 body text on white (steps to 600/700); LCD status
ink per spec (#0B6B4A / #8A5A00 / #00547A / --red-700).

### Pre-existing breakage found + fixed during D8 (lead attention)

The SRI `integrity` attributes on the three vendor scripts (react, react-dom, babel) did not
match the committed files in `assets/vendor/` — every kit and component card page was blocked
by the browser, repo-wide (Aozora/core/PAPER affected too). Fixed in scope: all 13 KUNLUN HTML
files (5 kits + 8 component cards) now declare the actual SHA-384 of the on-disk files
(react `t63xaoqI4…`, react-dom `8Y1L+f1y2…`, babel `nFyaaMob…`). Other systems left untouched
(out of scope) — same mechanical fix applies if the lead wants it.
