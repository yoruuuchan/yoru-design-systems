---
name: kunlun-design
description: Use this skill to generate well-branded interfaces and assets for KUNLUN (昆仑), an industrial sci-fi / terminal aesthetic design system — for production code or throwaway prototypes, mocks, and slides. Contains the colors, type, fonts, motion, iconography, components, and UI kits needed to design with the brand.
user-invocable: true
---

Read `README.md` within this skill first — it's the design guide. Then explore:

- `styles.css` — root entry. Consumers link this one file; everything else is `@import`ed from it.
- `tokens/` — CSS custom properties for colors, type, spacing, effects, motion. The complete vocabulary.
- `foundations/` — 19 specimen cards (small HTMLs) showing every visual primitive at a glance.
- `components/` — 22 React components organized by group (buttons, forms, surfaces, data, navigation, feedback, terminal, viz). Each directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` (read these for usage), a shared `.css`, and a card HTML.
- `ui_kits/` — Five reference layouts: `landing`, `login`, `chat`, `dashboard`, `terminal`. Open `index.html` in each.

If creating **visual artifacts** (slides, mocks, throwaway prototypes), copy the assets you need out of this skill and create static HTML files. Reference `styles.css` and load the React component bundle (`_ds_bundle.js`) the way the UI-kit `index.html` files do.

If working on **production code**, you can copy fonts/tokens and read the rules here to become an expert at designing with KUNLUN. The components are intentionally simple React with CSS classes — port them, don't import them.

**Critical brand rules — do not break:**
- Cyan/blue is the primary signal. Amber + red are sparing accents (warning/danger only).
- **No purple.** No purple gradients, no purple highlights, no purple anything.
- **All monospace.** Orbitron for display; JetBrains Mono for body; VT323 for CRT moments; Noto Sans SC for CJK.
- **Chamfered corners** (cut corners via `clip-path`) are the brand. Avoid rounded rectangles except for Avatars and status dots.
- UPPERCASE for labels, status, buttons. Sentence case for body.
- No emoji. Use operator glyphs (`▸ ▣ ▮ ⨯ ⚠ ✓ ⌬ ⌕`) and ASCII frames.
- Sharp, stepped motion. No bounces or springs.

If the user invokes this skill without further guidance, ask them what they want to build or design, ask 2-3 questions about purpose / audience / vibe, then act as an expert designer and output HTML artifacts or production code as appropriate.
