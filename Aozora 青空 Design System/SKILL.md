---
name: aozora-design
description: Use this skill to generate well-branded interfaces and assets for Aozora 青空 — a summer-bright iOS 26 liquid-glass design system inspired by Japanese clear/poster advertising (e.g. Pocari Sweat). Covers tokens (colors, type, spacing), glass surfaces, components (Button, Card, Input, Tabs, Dialog…), and a mobile App UI kit.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files:

- `styles.css` — the single CSS entry; `@import`s every token file under `tokens/`.
- `tokens/` — colors, typography, spacing, radii, shadows, glass, gradients, motion, semantic aliases.
- `assets/` — logo, mark, and abstract 3D illustrations (drops, blob, sun, droplets).
- `foundations/` — specimen cards demonstrating each token group.
- `components/` — reusable React UI primitives (`.jsx` + `.d.ts` + `.prompt.md` per directory).
- `ui_kits/app/` — full-screen mobile App recreations.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy the relevant assets out and create static HTML files for the user to view. Use the gradient tokens as backgrounds, the glass-card patterns from `tokens/glass.css` for surfaces, and the type rules in `readme.md`'s "Content fundamentals" section for copy.

If working on production code, copy `styles.css` + `tokens/` + `assets/` into your project and import the components directly from `components/`. Components are framework-light React; no npm deps beyond React itself.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few questions (audience, format, glass intensity, scripts), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

**Brand voice cheatsheet** — short, clear, a little poetic. You/your, never we/our. No emoji. Headlines mix Latin + CJK gloss. Tiny all-caps eyebrows with wide letter-spacing. Body copy ≤ 2 sentences per paragraph.
