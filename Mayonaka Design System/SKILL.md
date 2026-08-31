---
name: mayonaka-design
description: Use this skill to generate well-branded interfaces and assets for 真夜中 / Mayonaka — a vaporwave / retro-futurist / citypop / pixel / glitch visual system — either for production or throwaway prototypes/mocks. Contains essential design guidelines, midnight palette, pixel fonts, iconography, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill first, then explore:

- `styles.css` + `tokens/` — colors, type, spacing, glows, scanlines
- `guidelines/` — specimen cards
- `components/core/` — `<Name>.jsx` + `<Name>.prompt.md` for each primitive
- `ui_kits/web_app/` and `ui_kits/mobile_app/` — full-screen recreations

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files that link to `styles.css`. If working on production code, copy what you need and read the rules in `README.md` to design as an expert in this brand.

Core rules to honor:
- **Dark only.** No light mode. `--bg-base` is `--midnight`.
- **Pixel type with smoothing OFF.** Never anti-alias Press Start 2P / VT323 / DotGothic16.
- **Sharp corners by default.** Radii are 0 unless explicitly justified.
- **Two lighting systems** — pixel shadows for UI, neon glows for emphasis. Don't mix on the same element except buttons with `glow`.
- **Mix EN + JP** on the same screen; never translate, *layer*.
- **No emoji.** Use Lucide icons or pixel glyphs.
- **Motion is restrained.** 120–240ms transitions; glitch effects stay static.

If invoked without other guidance, ask what to build, ask a few focused questions, and act as an expert designer outputting HTML artifacts or production code depending on the need.
