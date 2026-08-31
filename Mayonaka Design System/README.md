# 真夜中 / MAYONAKA — Design System

> Late-night transmissions from a city that maybe never was.
> 深夜便。コンクリートとネオン、午前三時のラジオ。

A vaporwave-leaning visual system: midnight palette, neon magenta + cyan, pixel typography, citypop imagery, the occasional glitch.

---

## Sources

This is a **purely visual / portfolio system** — no real product, codebase, or Figma file was attached. Direction was set by the keywords: 蒸汽波 (vaporwave, primary), 复古未来 (retro-futurism), citypop, 像素风 (pixel), 故障艺术 (glitch).

If a real brief later attaches, point back here for tokens/components and add product-specific UI kits next to `ui_kits/web_app` and `ui_kits/mobile_app`.

---

## Index

- `styles.css` — root entry, only `@import`s
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`
- `guidelines/` — foundation specimen cards (logo, color, type, spacing, grid floor, glitch)
- `components/core/` — Button, Card, Input, Badge, Tabs, Progress, GlitchText, ScanlineOverlay
- `ui_kits/web_app/` — Midnight FM (web music player / dashboard)
- `ui_kits/mobile_app/` — Midnight FM (mobile player)
- `assets/` — vendored React/Babel + Lucide (`vendor/`) and self-hosted fonts (`fonts/`)
- `SKILL.md` — agent invocation contract

---

## CONTENT FUNDAMENTALS

**Voice.** Half late-night DJ, half terminal prompt. Short, lowercase or ALL CAPS — never sentence case for UI labels. English copy is direct and slightly noir; Japanese is descriptive and atmospheric (night scenes, weather, drives). Chinese, when used, leans cinematic / poetic.

**Casing.** Display headlines and UI labels: ALL CAPS, wide tracking (`--tracking-wide`+). Body running text: lowercase, terminal-style. JP/CN copy: natural casing.

**Person.** Mostly "you" (intimate, late-night). The system itself sometimes speaks in the first person as if a station ("we're transmitting at 88.3"). Never corporate "we believe…" copy.

**Punctuation.** Heavy use of `// comment`, `> prompt_`, `_`, `[OK]`, `[ERR]`, `//`, `／`. Slashes, half-width brackets, en-dashes welcome. No oxford commas required.

**Emoji.** Never. Substitute pixel glyphs (`▶ ■ ◆ ★ ☆ ▲`), Japanese punctuation (`／・】`), or icons from Lucide.

**Multilingual rhythm.** Mix EN + JP (and sometimes CN) on the same screen — small JP captions under EN headlines, JP track titles, English transport controls. Don't translate — *layer*.

**Example copy:**
- Headline: `MIDNIGHT WAVE`  /  caption: `真夜中の波長 · 88.3 FM`
- Empty state: `> no signal yet_  / tune the dial`
- Error: `// SIGNAL LOST [ERR 404]  接続が切れました`
- Button: `TUNE IN`, `EJECT`, `START`, `RECONNECT`
- Toast: `[OK] saved to mixtape  ／ 保存しました`

---

## VISUAL FOUNDATIONS

**Palette.** Cool midnight base (`--void` → `--midnight` → `--plum` → `--orchid`). Two signature accents: **magenta** (`#ff2bd6`, primary) and **cyan** (`#19e6ff`, secondary). Citypop **sunset** (`#f97e72`) + **amber** appear in imagery and the sunset gradient only. Light text reads on dark surfaces — there is no light mode.

**Type.** Three families, all pixel-friendly: `Press Start 2P` (display, short strings, ALL CAPS, wide tracking); `VT323` (body / UI / terminal); `DotGothic16` (Japanese). Smoothing is **off** globally (`font-smoothing: none`) so the bitmap feel survives. Don't go below 10px on display or 14px on body.

**Imagery.** 80s Japanese citypop scenes: night drives, neon signage, vending machines, expressway lights, women in red interiors, palm trees against magenta skies. No clean stock photography. When you can't find imagery, use the **grid floor** + **sun** motif (`guidelines/grid-floor.html`) or solid gradient panels with overlay scanlines. Imagery is always **warm-tinted within a cool surround** — sunset orange/pink islands floating in midnight.

**Backgrounds.** Default to `--bg-base` (`--midnight`). Hero sections: `--grad-night` or `--grad-sunset` with `ScanlineOverlay`. Repeating motifs: scanlines, the perspective grid floor, faint dot grids. Never plain white. Avoid generic radial purple-blue "AI gradient" backgrounds — ours are angular and saturated.

**Borders + radii.** Pixel UI is **sharp**. Default radius is `0`. Use `--radius-sm` (2px) for inputs occasionally, `--radius-pill` only on badges that explicitly want to feel un-pixel. Borders are 2px solid by default; 3px neon for emphasis. Hairlines (1px) for dividers only.

**Shadows.** Two distinct systems:
- **Hard pixel shadows** — `--shadow-pixel*`, offset 4px 4px, no blur, color is `--shadow-ink` (or magenta/cyan for buttons). Default UI lighting.
- **Neon glows** — `--glow-magenta*` / `--glow-cyan*`, large blurred halos. Reserved for hero CTAs, active states, the logotype, and the now-playing card.

Inner shadows are not used. Don't blend the two on the same element except buttons (pixel shadow + optional glow when `glow` prop is set).

**Hover state.** Buttons translate `-1px, -1px` and grow the pixel shadow to `5px 5px`. Cards and links shift to magenta or cyan (whichever is the element's accent). Opacity changes are reserved for `disabled` (0.4).

**Press / active state.** Buttons translate `+2px, +2px` and shrink shadow to `1px 1px` (the pixel "press into" the surface). No color change.

**Focus state.** Cyan 2px border + `--glow-cyan-sm`. Never the OS default ring.

**Transparency + blur.** Used sparingly. The scanline overlay uses 25–40% black stripes with `mix-blend-mode: multiply`. Backdrop blur is not part of the vocabulary — keep edges crisp. When layering imagery under text, use a solid `--bg-void` 70–85% panel, not blur.

**Layout.** 8px snap grid. Sidebars, transport bars, and status strips are common fixed elements. Window chrome (when shown) uses a brutalist title bar — magenta bar across the top with `// TITLE_` lowercase text. Asymmetric layouts welcome — perfect centering reads as too corporate.

**Motion.** Restrained. `--dur-fast` (120ms) for hover, `--dur-med` (240ms) for tabs/transitions. Two easings: `--ease-smooth` for normal UI, `--ease-pixel` (stepped) for any chunky animation that wants to feel 8-bit. Glitch effects are *static* by default; only animate glitch on errors and intro states. Never use scale bounces or playful springs.

**Imagery color treatment.** Warm-magenta cast on imagery (`mix-blend-mode: screen` with `--magenta` at 15%) is a recurring treatment. Black-and-white is acceptable only with a magenta or cyan duotone applied.

---

## ICONOGRAPHY

**System:** [Lucide](https://lucide.dev) loaded from CDN — stroke icons, 1.5–2px stroke, square line caps, currentColor. Lucide pairs cleanly with pixel type (it's not pixel-art itself but reads as crisp linework, which sits well alongside Press Start 2P).

```html
<script src="assets/vendor/lucide.min.js"></script>
<i data-lucide="play" style="color:var(--magenta);width:20px;height:20px"></i>
<script>lucide.createIcons();</script>
```

**⚠ Substitution flag.** No bespoke icon font was supplied. Lucide is a substitution — if you want a more pixel-native set (e.g. [Pixelarticons](https://pixelarticons.com)) or a custom sprite, swap the CDN line and tell me.

**Pixel glyphs.** For terminal/CRT vibes, use raw text glyphs as icons in body type: `▶ ■ ◆ ★ ☆ ▲ ► ◄ ✕ ✓ ※ →`. They sit naturally next to VT323 text.

**Emoji.** **Not used.** Substitute Lucide or pixel glyphs.

**Unicode + JP punctuation.** Encouraged as decoration: `／`, `・`, `【】`, `〈〉`, `※`, `→`, `←`.

**Logo.** `guidelines/logotype.html` shows the lockup. Standalone mark is the kanji `夜` in a magenta-glowed 3px box. Full lockup adds `MAYONAKA` in spaced display caps below.

---

## SKILL.md

See `SKILL.md` for the agent-invocation contract — copy this folder out as a Claude Code skill (`mayonaka-design`) and it Just Works.
