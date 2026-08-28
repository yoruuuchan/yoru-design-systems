# KUNLUN · 昆仑

> **Industrial sci-fi terminal aesthetic for the web.**
> Chamfered surfaces. Cyan-glow signal. Mono-uppercase voice. Built to feel like an operations console for something massive and quiet.

KUNLUN is a **dark-only** design system — all tokens assume a near-black background. When embedding KUNLUN inside a light-themed host, force `background: var(--bg-base)` and `color-scheme: dark` on the wrapper.

KUNLUN is a general-purpose web design system for landing pages, dashboards, AI chat surfaces, dev tools, and experimental creative work. Aesthetic reference: the 550-series quantum-computing consoles of *The Wandering Earth*, military HUD overlays, classic CRT terminals, and `bash`.

---

## CONTENT FUNDAMENTALS

**Voice**: operator-engineer. Terse, technical, slightly clinical. Speaks in system labels and coordinates.
- **Case**: UPPERCASE for labels, status, eyebrows, buttons. Sentence case for body copy.
- **Tense**: present, imperative. "Initiate purge." "Dispatch runbook." Not "You can initiate a purge."
- **Person**: rarely uses "you" or "I" — addresses the **OPERATOR** by role or node ID.
- **Numbers**: always tabular, always precise. `142.3 MW`, not "about 140". Pad with leading zeros: `08.4 ms`, `NODE-07`.
- **Markers**: `//` prefixes section labels; `▸` prefixes prompts and actions; `▣` marks panels; `▮` is the caret.
- **Bilingual**: CJK is welcome alongside English. Use it for brand moments (`KUNLUN · 昆仑`), section breaks (`运 维 计 算`), and operator names (`赵`). Wide letter-spacing (`0.3em+`).
- **No emoji.** Only operator glyphs: `▣ ▸ ▮ ⨯ ⚠ ✓ ◰ ⌬ ⌕ ⌘ ⏏ ⫼ ⛶`.
- **Vibe samples**:
  - `STATUS: NOMINAL`
  - `// NODE-07 · SECTOR-A`
  - `[ OK ] uplink established · 8.4 ms`
  - `[ WARN ] coolant flow at 87%`
  - `UNAUTHORIZED · CODE 0xE1`
  - `运 维 计 算 · 重 新 接 管`

---

## VISUAL FOUNDATIONS

**Color** — Cyan-blue is the primary signal. Amber and red are accents, **only** for warning and danger states.
- Backgrounds: deep void → panel → elevated, all near-black with a slight cool tilt (`#04060a` → `#131a2a`).
- Primary: `--cyan-500` `#00B8FF` with a soft halo glow.
- Secondary: steel `--blue-500` for structure.
- Status: green / amber / red — used sparingly. The amber pulse means *look*; the red blink means *act*.
- Imagery is incidental — KUNLUN is mostly chrome, glyphs, and data. When imagery appears, treat it cool/desaturated.

**Type** — Fully monospace.
- Display: **Orbitron** (geometric, weighted, slightly mil-spec) for hero + section titles.
- Body / UI: **JetBrains Mono** for everything else. CJK falls through to **Noto Sans SC**.
- CRT moments: **VT323** for terminal readouts, status displays, big countdown numerals.
- HUD labels are UPPERCASE with `tracking-widest` (0.22em).

**Layout**
- 4px base grid; dense by default. Terminal interfaces breathe less than marketing pages.
- Containers: 720 narrow / 960 content / 1200 wide / 1440 max.
- Sidebars are usually `var(--bg-void)` and right-bordered.

**Corners** — **Chamfered (cut corners)** are the brand. Almost nothing is a square or a pill.
- `--clip-chamfer-sm` (6px) for inputs, badges, small chrome.
- `--clip-chamfer-md` (12px) for panels, cards, dialogs.
- `--clip-chamfer-all-md` for the logo mark (octagonal).
- The very few rounded shapes: `Avatar shape="round"` (humans), status dots.

**Borders & dividers**
- Default: `1px solid var(--border)` (`#1A2540`).
- Signal: `1px solid var(--cyan-700)` with `--glow-cyan-sm`.
- Dashed for hints + soft separators; ASCII (`├───── ▣ ─────┤`) for chapter breaks.

**Shadows & glow**
- Drop shadows are minimal and deep-black (low opacity). The brand affordance is **neon glow** — a `box-shadow` or `text-shadow` in cyan, amber, or red, scaled `sm/md/lg`.

**Backgrounds**
- Page bases are flat dark. Decoration is layered:
  - `--bg-scanlines` (subtle horizontal CRT lines)
  - `--bg-grid` (40px cyan grid, often radial-masked)
  - `--bg-grain` (turbulence noise overlay)
  - radial cyan halo at the top of marketing heros
- No gradient-heavy backgrounds. Especially **no purple gradients** — the brand explicitly avoids them.

**Hover / press states**
- Buttons: hover brightens the glow and shifts background. Press translates 1px down (a satisfying click).
- Surfaces: hover deepens the panel and adds a cyan border + soft glow.
- Links: cyan with a dashed underline; hover adds a text-glow.

**Transparency & blur**
- Topbars and nav strips use `rgba(13,19,32, .6)` + `backdrop-filter: blur(6–8px)`. Use blur sparingly — only for sticky chrome, not for cards.

**Motion** — sharp, stepped, never bouncy.
- Durations: `60ms / 120ms / 180ms / 320ms / 640ms`.
- Easings: `linear`, sharp `ease-out`, and `steps(2)`/`steps(8)` for CRT and typewriter feels.
- Reusable keyframes: `kl-blink`, `kl-pulse`, `kl-pulse-glow`, `kl-flicker`, `kl-typewriter`, `kl-marquee`, `kl-spin`.
- Decorative looping animations are reserved for status indicators and HUD ornaments — never on whole sections.

---

## ICONOGRAPHY

KUNLUN intentionally **does not** ship a custom SVG icon set. The aesthetic relies on:
- **Unicode operator glyphs** as line-art icons: `▸ ▣ ▮ ⨯ ⚠ ✓ ◰ ◴ ⌬ ⌕ ⌘ ⏏ ⫼ ⛶ ⊕ ↻ ↧ ⫷ ⫸ ▤ ▥ ▦ ⟁ ↑ ↓ ▲ ▼`.
- **ASCII frames** for HUD breaks (`╔═══╗`, `┌── COORD ──┐`, `├──── ▣ ────┤`).
- **Crosshair / corner-tick** decorations as inline `<span>`s, exposed via `.kl-corner-*` utility classes in `tokens/effects.css`.

**When you need a real icon set**, link **Lucide** from CDN — its line weight and rectilinear feel are the closest match. Tint with `currentColor`; the cyan glow comes from `text-shadow`, not from the SVG. Flag this substitution to the user when you use it.

**No emoji.** No exceptions.

**Brand assets**
- The wordmark renders as text: Orbitron 900, `tracking-widest`, paired with `昆 仑` in Noto Sans SC at smaller size + cyan tint.
- The mark is a 28–56px chamfered cyan square containing the letter `K`. See `foundations/brand-wordmark.html`.

---

## INDEX

```
styles.css                       — root entry; @imports the closure
tokens/
  fonts.css                      — Google-Fonts @import
  colors.css                     — palette + semantic aliases
  typography.css                 — font families, scale, weights
  spacing.css                    — 4px grid, chamfers, containers
  effects.css                    — shadows, glows, clip-paths, textures
  motion.css                     — durations, easings, keyframes
  base.css                       — resets, scrollbars, link defaults
  components.css                 — barrel @import of component CSS
components/
  buttons/                       — Button, IconButton
  forms/                         — Input, Textarea, Select
  surfaces/                      — Panel, Card
  data/                          — Badge, Tag, StatusPill, Avatar
  navigation/                    — Tabs
  feedback/                      — Dialog, Toast, Tooltip, ProgressBar, Loading
  terminal/                      — Terminal, CodeBlock
  viz/                           — DataTable, ChartCard
foundations/                     — 19 specimen cards (Colors / Type / Spacing / Brand)
ui_kits/
  landing/                       — Marketing hero with live boot terminal
  login/                         — Terminal-style auth with handshake states
  chat/                          — Operator ↔ MOSS-class agent
  dashboard/                     — Ops dashboard with KPIs + node table
  terminal/                      — Full-screen multi-pane CLI workspace
README.md                        — this file
SKILL.md                         — Claude Skill manifest (download for Claude Code)
```

**Components (22 total):** Avatar · Badge · Button · Card · ChartCard · CodeBlock · DataTable · Dialog · IconButton · Input · Loading · Panel · ProgressBar · Select · StatusPill · Tabs · Tag · Terminal · Textarea · Toast · ToastStack · Tooltip.

**UI Kits (5):** landing · login · chat · dashboard · terminal.

---

## SOURCES

- **Aesthetic reference**: 550-series consoles from *The Wandering Earth* (流浪地球). The user could not provide direct frame references; the kit is an *original* visual that lives in the same genre — military-industrial Chinese sci-fi computing.
- **No external codebase or Figma** was attached. The system was designed from scratch against a brief: cyber + terminal, cyan/blue forward, amber/red sparing, chamfered, fully monospace.
- **Fonts**: Google Fonts CDN — Orbitron, JetBrains Mono, VT323, Noto Sans SC.

---

## CAVEATS

- **No bespoke icon set yet.** Operator glyphs and CDN-Lucide cover almost everything; if you find a need that doesn't fit (e.g. a brand-specific marker), bring it up and we'll add it.
- **No real imagery** in the kit yet — KUNLUN is chrome-and-data heavy by nature, but if you need product photography, illustration, or background plates, supply assets and we'll wire them.
- **No PPTX template** — the user did not request slide samples. If you want them, ask.
