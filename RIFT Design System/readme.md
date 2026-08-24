# RIFT 2.0 — Design System

> **裂隙 · RIFT** — a blue-spectrum cyber-glitch design system for dark **and** light digital interfaces.

This system was authored from a single drop-in stylesheet (`rift.css`) the user shipped as v2 of the RIFT brand. It has been re-split into a token-first architecture so consumers link **one file** (`styles.css`) and inherit the full theme, type, components, and signature effects.

The system's reason for existing is a single visual idea: **the chromatic edge**. Every wordmark, every focus state, every accent surface carries a faint sky↔royal duotone that periodically tears — *the seam in the signal.* Three changes from v1 made the system shippable:

1. **Semantic theme layer.** Raw palette (`--royal`, `--ice`, …) is unchanged. On top sits a semantic layer (`--bg-*`, `--ink-*`, `--glass-*`, `--line-*`, `--shadow-*`) that flips with one attribute. Light mode (`daybreak / 黎明`) is a **pure token override** — no component code changes.
2. **Always-on chromatic signature.** The sky↔royal channel split is constant — controllable, not random — with `data-glitch="off|subtle|signature|heavy"` on any ancestor.
3. **Re-channellable accent** via `data-accent="royal|aqua"` (royal is the default — tonal sky × royal-blue; aqua swaps the lighter channel for the warmer aqua).

## Sources

- `uploads/rift-1f3d2cbd.css` — the v2 single-file system the user provided. Re-split here into `tokens/*.css`, `base.css`, `components.css`, `effects.css`, all imported from the root `styles.css`.
- `uploads/README.md` / `uploads/README-a5001143.md` — the v2 README. The "Use it / Tokens / Utility classes / Cursor & click FX" sections come from there.
- `uploads/showcase.html` — a self-contained bundled DC of every component (1MB, embedded fonts). Not used directly here, but consulted for what the v2 demo intended to surface.

Substitutions / things to flag: none. All fonts are loaded from Google Fonts (`Space Grotesk`, `Chakra Petch`, `DM Serif Display`, `Rajdhani`, `Share Tech Mono`, `Shippori Mincho`, `Zen Kaku Gothic New`) — if you want the system to ship `woff2` binaries locally instead, drop them in `assets/fonts/` and rewrite the `@import` at the top of `tokens/typography.css` as local `@font-face` rules.

---

## Content fundamentals

The brand voice is **terse, slightly cinematic, slightly Japanese.** It treats the product as if it were a piece of infrastructure that the user is operating, not buying — so we *enter* the console, we don't *log in*. Bytes are *packets*, errors are *fractures*, downtime is *the tunnel going dark*.

- **Tone.** Quiet authority. Never excited, never apologetic. The system is competent; the operator is competent. Avoid exclamation marks entirely. Avoid hype words ("amazing", "blazing-fast", "next-gen") — substitute concrete numbers.
- **Casing.** Sentence case for paragraphs. `ALL CAPS · MONO` for status, labels, technical metadata (`CONNECTED`, `v2.4.1 STABLE`, `// CONSOLE / NODE-04`). Title-case headings sparingly — a section header is more often a single sentence in serif italic ("Listen — there is a *seam* in the signal.").
- **Pronouns.** Second person ("Listen", "Filter by channel"). The system rarely says "we" or "our". Don't write "Welcome".
- **Punctuation as motif.** The em-dash (—), the double-slash (`//`), the kanji 裂隙, and the angle-bracket arrow (`→`) are all part of the brand. Use them, but never more than two on a screen.
- **Emoji.** No. The Latin-extended punctuation, the kanji, the chromatic glitch, and the `▲/▼/—` mono indicators are the only iconography in copy.
- **Examples.**
  - Hero: *"Listen — there is a seam in the signal."*
  - CTA: `ENTER CONSOLE` (ALL CAPS, primary button)
  - Status pill: `v2.0 — DAYBREAK / 黎明 SHIPPED`
  - Stat: `12,847` followed by `▲ 4.2%` in mono, ok-green
  - Log line: `04:17:32.812  OK  handshake → node-04 (RTT 38ms)`

---

## Visual foundations

**Colors.** The full spectrum is cool — `midnight → slate → steel → royal → cobalt → sky → ice → aqua → aurora`. Royal (`#5C7BFF`) is the action color and gradient anchor; ice (`#8FD2F5`) is the neutral signal. The chromatic edge is built from the cool spectrum itself — sky × royal by default, aqua × royal as an alternate — no out-of-system cyan/magenta. Status is the standard three: `--ok` green-teal, `--warn` amber, `--bad` warm red. **In light mode**, the `--royal` and `--cobalt` shift slightly darker for legibility on near-white — same name, different value, no component override.

**Type.** Seven families on a five-job grid: `--font-display` (Space Grotesk, headings + paragraphs), `--font-wordmark` (Chakra Petch, *only* for big glitch wordmarks like `RIFT`), `--font-italic` (DM Serif Display, italic *only* — used sparingly for one-line poetic accents), `--font-ui` (Rajdhani, body + controls), `--font-mono` (Share Tech Mono, logs/timestamps/labels), and the JP pair (`--font-jp` Shippori Mincho for display, `--font-jp-ui` Zen Kaku Gothic New for UI). Scale: `xs 11 → 5xl 72`, exposed as `--text-*`. Tracking is loose (`0.04–0.16em`) on monospace and uppercase labels; everything else default.

**Spacing & radius.** A 4px grid, exposed `--sp-1 … --sp-20`. Radius is generous (`--r-sm 10`, `--r-md 14`, `--r-lg 18`) — RIFT cards round but never floor-and-ceil. Pills (`--r-pill`) are reserved for badges only.

**Backgrounds.** The canvas is a radial gradient (`--canvas`) — midnight at the edges, lit at the top — overlaid with a 72px square grid (`--grid`). No photographic imagery in the system itself; if a product surface needs one, treat it as a translucent layer underneath the glass surface. No illustrations, no patterns beyond the grid. **Light mode** keeps the grid but lightens it (`rgba(34,64,128,0.07)`) and swaps the gradient for white → ice-blue.

**Glass.** Three elevations of translucent panel — `.rift-glass-1` (10px blur, lightest tint, default everyday surface), `.rift-glass-2` (14px, hero panels and toolbars), `.rift-glass-3` (18px, modals). All three carry a 1px `--glass-border` and an inner top highlight (`inset 0 1px 0 var(--glass-inner-hi)`) — this is the system's most repeated detail and signals "the surface is real".

**Shadows.** Four elevations (`--shadow-sm/md/lg/xl`), all blue-tinted, none gray. One special `--shadow-glow` (royal-blue cast) for primary buttons and elevated accents. Hover lift is ~3px translate plus an upgrade from no-shadow to `--shadow-lg`.

**Glow.** Status dots and accents carry a permanent micro-glow (`--glow-ice/royal/ok/warn/bad`). Optional ambient glow (`.rift-glow`) breathes any element 3.2s in/out.

**Animation.** Two named easings — `--ease-out` for retreats, `--ease-rise` for affirmative state changes (hover lift, slide-in). Three durations: `--dur-fast 140ms` (button press), `--dur-base 320ms` (hover, focus ring), `--dur-slow 720ms` (mount transitions). No bounces, no spring overshoot. The only infinite animation is the glitch tear (very rare, 3.6–7s loop) and the optional `.rift-glow` pulse.

**Hover.** Buttons lift `-1px`; cards lift `-3px` and gain the strong border + `shadow-lg`. Ghost buttons gain the glass-1 background. **Press.** Translate back to `0`. No color shifts on press — the chromatic ripple (see below) provides the feedback.

**Borders.** Three line tokens — `--line-1` (whisper, table dividers), `--line-2` (default, card border), `--line-strong` (hover/focus, badge variants). No double borders, no insets — just the one hairline plus the `--glass-inner-hi` top highlight.

**Transparency & blur.** Used everywhere; the system is *built* on glass. Never apply blur to text — text always sits *on* a blurred surface, never *behind* one. Don't reach for `opacity:0.5` for "disabled"; use `--ink-3` or `--ink-4`.

**Color vibe of imagery.** Cool, mid-saturation, no warm cast. If a screen needs a photograph, it should look like 04:17 a.m. inside a server hall — not a sunset, not a product shot. Grain is acceptable; warm tones are not.

**Cursor & click FX.** Optional pointer-follower glow (`#rift-cursor`) and chromatic click ripple (`.rift-ripple`) — `assets/cursor-fx.js`. Drop the script once, near the end of `<body>`. Use on console / dashboard / hero surfaces, not on forms.

**Ambient FX — the distinctive layer.** Three composable utilities you stack on any glass surface:

- `.rift-frame` — tactical L-bracket corners (no full border). Tune with `--frame-len`, `--frame-thickness`, `--frame-color`, `--frame-overhang`. Use to mark a focus region without enclosing it.
- `.rift-scan` — 1px CRT scan lines at 3px pitch, ~4% alpha (auto-adapts to light/dark via `--scan-line`). Drop on hero panels, modals, log surfaces.
- `.rift-mark[data-mark="裂隙"]` — large faded JP glyph anchored to a corner of the element. Position via `data-mark-pos="tl|tr|bl|br"` (default `br`). The silent brand attribution; one per major surface, never more.

These are the system's strongest non-color signature. Use sparingly — one of each per screen at most, layered on the surface that *deserves* attention.

**Layout.** No fixed-position elements except the cursor follower. Headers and sidebars are part of the document flow with `position: sticky` if they need to persist. Max-content widths are unopinionated — the system fits 320 → 1920 the same way.

---

## Iconography

**There is no icon font.** The brand intentionally rejects them. The visual cues that would normally be icons are:

- **Status dots** (`.rift-dot--ok/warn/bad`) — a single glowing 7px disc. The most-used "icon" in the system.
- **Unicode mono marks** in copy: `▲` `▼` `—` `→` `←` `↑` `↓` `·` `//`. These pair with `--font-mono` and inherit the surrounding color.
- **Kanji 裂隙** as an occasional brand glyph — the literal name of the system.

**No emoji.** Not in product copy, not in marketing, not in error messages.

**If a screen genuinely needs SVG iconography** (e.g. a settings gear, a graph axis label) and the consuming project has no other source: substitute from [Lucide](https://lucide.dev) (1.5px stroke, rounded caps) and flag it in code — it's a substitution, not a brand asset. Do not invent shapes.

**Assets shipped** (`assets/`):
- `cursor-fx.js` — the cursor follower + click ripple. Pairs with `#rift-cursor` / `.rift-ripple` styles in `effects.css`.

---

## File index

```
styles.css                  ← single entry point. Consumers link this.
base.css                    ← body resets + canvas grid background
components.css              ← .rift-btn / .rift-card / .rift-glass-* / .rift-input / .rift-badge / .rift-dot
effects.css                 ← .rift-glitch keyframes, .rift-glow, cursor & ripple styles

tokens/
  palette.css               ← raw palette + accent channel re-maps
  typography.css            ← families + scale + weights (+ Google Fonts @import)
  spacing.css               ← --sp-* + --r-*
  motion.css                ← easings, durations, glow primitives
  theme-dark.css            ← :root semantic layer (default)
  theme-light.css           ← [data-theme="light"] override — daybreak / 黎明

components/
  forms/      Button, Input
  surface/    Card, Glass
  feedback/   Badge, Dot
  brand/      Glitch, Wordmark

cards/                      ← 20 foundation specimen cards (Type / Colors / Spacing / Brand)

templates/
  console/                  ← Real-time monitoring console
  marketing/                ← Landing page with hero glitch wordmark
  auth/                     ← "Enter Console" sign-in screen

assets/
  cursor-fx.js              ← optional pointer follower + click ripple

SKILL.md                    ← Agent SKills entry point — read this if invoked as a skill
```

## Use it

```html
<link rel="stylesheet" href="styles.css">

<body data-theme="dark">                              <!-- "dark" | "light" -->
  <main data-glitch="signature" data-accent="royal">

    <h1 class="rift-glitch" data-text="RIFT"
        style="font-family:var(--font-wordmark)">RIFT</h1>

    <button class="rift-btn rift-btn--primary">ENTER CONSOLE</button>
    <span class="rift-badge rift-badge--ok">CONNECTED</span>
    <input class="rift-input" placeholder="enter query 検索…">
    <div class="rift-card">…</div>

  </main>
</body>
```

In React, the same primitives are available as named exports under the namespace (`Button`, `Input`, `Card`, `Glass`, `Badge`, `Dot`, `Glitch`, `Wordmark`) — see each component's `.prompt.md` for the usage example.

---

*The seam holds. ✦*
