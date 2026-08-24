---
name: core-design
description: Use this skill to generate well-branded interfaces and assets for core — a weirdcore / poolcore / dreamcore / Y2K design system. Contains essential design guidelines (colors, type, fonts, effects), reusable React components (Button, Window, Marquee, OverexposedText, …), foundation specimen cards, sample UI kits (archive + blog), and slide templates.
user-invocable: true
---

Read `readme.md` at the root of this skill first — it has the brand concept, content fundamentals, visual foundations, and iconography rules. Then explore the rest of the tree:

- `styles.css` + `tokens/` — CSS custom properties for color, type, spacing, effects.
- `assets/` — logo, mark, tile patterns, grain, halo, cursor.
- `cards/` — specimen `.html` cards for the Design System tab.
- `components/<group>/<Name>.{jsx,d.ts,prompt.md}` — React primitives. Read each `.prompt.md` for usage.
- `ui_kits/archive/` — desktop-style liminal archive browser (`index.html`).
- `ui_kits/blog/` — long-form personal blog (`index.html`).
- `slides/` — six 1280×720 slide templates.

When making **visual artifacts** (slides, mocks, throwaway prototypes), copy needed assets out (logo, tile SVGs, grain) and write static HTML that links `styles.css`. Honor the system: warm paper, warm ink, Tinos body + Pixelify Sans display + system UI sans, 1px ink borders, no rounded cards, lowercase voice, no emoji.

When working on **production code**, copy assets and build with React components matching the same conventions. Use the `.d.ts` files as the props contract.

When the user invokes this skill without further guidance, ask what they want to build (a page? a deck? a screen?), then act as an expert weirdcore/Y2K-archive designer who outputs HTML or production code as appropriate. Default to the system's 7/10 weirdness target: visibly off, but always readable.
