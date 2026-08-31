# Aozora · 青空 Design System

A summer-bright, **iOS 26 liquid-glass** design language for products that want to feel cool, clear, and Japanese. Inspired by Pocari Sweat advertising, hi-key Japanese poster typography, and Apple's translucent surfaces.

> **Light-only system.** Aozora is a single, sky-lit theme — no dark mode. The whole voice (glass over color, blue-tinted shadows, white as sky-lit paper) collapses under a dark canvas. Embedding it inside a dark shell will read as wrong. Keep it on a light page.

> **Placeholder brand.** "Aozora" (青空 — "blue sky") is the working name, used so logos, copy, and example screens hang together. Rename to your real brand when you adopt it.

---

## Source notes

Built without an external brief, codebase, or Figma. Direction came from these keywords: 日系清透海报／广告, 类似宝矿力风格, 夏日感, 无衬线字体, iOS26 透明玻璃.

User-confirmed direction:

- **Purpose**: real product UI (App + website), not just poster art.
- **Vibe**: blue-sky + bottle-droplet cool; abstract 3D glass/liquid imagery, no real photos.
- **Palette**: bright iOS blue + near-white + sun-yellow accent.
- **Glass intensity**: ~70% — full liquid-glass cards/buttons/dialogs.
- **Type**: Chinese-primary (PingFang SC / 思源黑体) with Japanese-Latin mix (Noto Sans JP / Inter).
- **Layout voice**: huge headline + tiny caption, strong contrast (poster grammar).

If you re-attach a real codebase or Figma later, point me at it and I'll fold its components in.

---

## Content fundamentals

Short. Clear. A little bit poetic. Not corporate, not jokey.

- **Casing.** Title Case for product names (Aozora Pro, Citrus Spark); Sentence case elsewhere. ALL-CAPS reserved for tiny letter-spaced eyebrows (`SUMMER · 2026`, `VOL.05`).
- **Person.** Speaks to *you*, never *we / our*. "Stay clear" beats "We help you stay hydrated."
- **Punctuation.** Em-dashes ( — ) and middle dots ( · ) carry rhythm. No exclamation marks except in promo banners.
- **Mixed scripts.** Headlines pair Latin + CJK gloss: `SODA / 蒼い空`, `Refill / 補充`. One is big, the other rides as a 60–70% smaller subline.
- **No emoji.** Use the brand icon set or illustration vocabulary (drops, sun, blob) instead. Unicode symbols (★ ° · → ↗ %) are fine.
- **Length.** Headlines ≤ 5 words. Body copy ≤ 2 sentences per paragraph.

Tone samples (good vs not):

| ✅ Yes | ❌ Not for this brand |
|---|---|
| Cool. Clear. Blue. | Hydration solutions for the modern lifestyle. |
| 蒼い空、冷たい一杯。 | Discover our refreshing range of beverages! |
| Refill / 補充 — ¥120 | 🥤 Order your drink today! |
| New flavor. Citrus, slightly salt. | Introducing an innovative new product offering. |

---

## Visual foundations

**Colors.** Primary `--blue-500` (`#0A84FF`), accent `--sun-400` (`#FFE34D`), neutrals biased slightly blue so white reads as sky-lit paper, never screen-gray. Semantic green/orange/red borrowed from iOS-system palettes. Supporting hues (mint, coral, peach, lilac) appear only in illustration and badges.

**Type.** Inter for Latin, Noto Sans JP for Japanese, PingFang SC / 思源黑体 for Chinese (system stack). Display sizes go BIG — `--text-display-xl` is 200px; body stays calm at 14–16px. Huge gap between `--text-2xl` (28) and `--text-display-xs` (48): the voice is either headline or caption, almost nothing in between. Tracking is tight on display (`-0.03em`), wide on tiny all-caps (`0.16em`).

**Spacing.** 4px base. Generous — when in doubt, double it.

**Backgrounds.** Almost never flat. Default is one of the sky gradients (`--gradient-morning`, `--noon`, `--afternoon`, `--sunset`, `--twilight`) or a product gradient (`--gradient-soda`, `--ion`, `--citrus`). Hero sections use radial mesh + a single floating illustration (drop, blob, sun) at low opacity. No textures, no grain, no photography.

**Glass.** Three tiers — thin (nav), regular (default card), thick (modal). Glass is ALWAYS on color; over a flat-white page it disappears. Tinted glass (blue / sun / dark) for tonal panes. Every glass surface gets `var(--glass-edge)` for the top rim highlight — that's what makes it read as glass, not a frosted rectangle.

**Animation.** Spring and expo-out curves. Hover is fast (140ms) so taps feel light; page and modal transitions are slower (420ms) so glass refraction reads. No infinite decorative loops. No fade-to-black; cross-fade through white instead.

**Hover / press.** Filled buttons: hover one step darker, press two steps + 3% scale-down. Ghost buttons: hover gets `--state-hover-tint` (6% blue). Glass: hover bumps fill opacity from 0.42 → 0.62. Press always scales (`0.97` for buttons, `0.94` for icon buttons).

**Corners.** Generous. Pill (999px) for chips and CTAs. 14px for default buttons/inputs. 20–28px for cards. 36px+ for hero glass panels. Hard 90° corners are reserved for poster editorial blocks.

**Shadows.** Blue-tinted (`rgba(10,68,140,…)`), never pure black. Every glass surface combines an outer drop (`--shadow-md` typical) with an inset rim (`--glass-edge`).

**Borders.** Hairline strokes (`--stroke-hairline`, 8% blue) are the default. Glass strokes (`--glass-stroke`, 55% white) for translucent surfaces. Brand blue at full strength only on focus.

**Layout.** Fixed top nav (thin glass) and optional bottom tab bar (thin glass) on mobile. Big hero, then bento-style content cards. Posters use a vertical eyebrow (vertical-rl writing) + huge centered roman headline + tiny corner caption.

**Imagery.** Pure abstract — 3D glass blobs, liquid drops, droplet scatters, soft suns. All SVG, all in the palette. Never real photos. Never iconographic illustration.

---

## Iconography

Icons are **monoline strokes**, 1.6 – 2.2px depending on size, rounded caps and joins. Outline-only by default; filled variants only for selected/active state.

We do not bundle an icon binary. The system is built to use **Lucide** (https://lucide.dev) via CDN — it matches the brand stroke weight and rounded join. If you adopt this DS in production, install lucide-react or copy the SVGs you need into `assets/icons/`. UI kit examples in this project inline the few SVGs they use (search, plus, heart, arrow, mail) rather than depending on a CDN at preview time, so cards work offline.

- **No emoji.** Anywhere in the product chrome.
- **Unicode allowed.** ★ ° · → ↗ ↓ % as tiny decorative marks.
- **Brand glyph.** The droplet from `assets/logo-mark.svg` is the only "icon" the brand owns; everything else is borrowed monoline.

🟡 **Substitution flag.** Lucide is a CDN substitute for a real bespoke icon set. If you bring your own, drop SVGs into `assets/icons/` and update this section.

---

## Index — what's in this folder

```
styles.css                 single entry — @imports every token file
tokens/                    CSS custom properties (colors, type, spacing, …)
assets/                    logo, mark, abstract 3D illustrations
foundations/               specimen cards (Design System tab — Type, Colors, Spacing, Brand)
components/
  buttons/                 Button, IconButton
  forms/                   Input, Switch
  surface/                 Card, Badge, Tag
  navigation/              Tabs
  feedback/                Dialog
ui_kits/
  app/                     mobile App UI kit — Home / Detail / Settings
SKILL.md                   Agent-Skill manifest for downloading this system
```

Components compile into `_ds_bundle.js` automatically. Consume them via:

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Card, Tabs } = window.AozoraDesignSystem_e61996;
</script>
```

---

## Caveats / known substitutions

- **Fonts** load from Google Fonts CDN (Inter, Noto Sans JP). Chinese uses the system stack (PingFang SC / 思源黑体). If you ship a paid Chinese face, drop `@font-face` into `tokens/fonts.css`.
- **Icons** use Lucide as the reference set; not bundled.
- **No real brand**: name, logo, and copy are placeholders. Replace `assets/logo*.svg` and search-replace `Aozora` to adopt.
