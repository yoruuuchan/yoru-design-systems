---
name: rift-design
description: Use this skill to generate well-branded interfaces and assets for RIFT — the blue-spectrum cyber-glitch operating-console system (裂隙) — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file in this skill, and explore the other available files:

- `styles.css` is the entry point — `@import`s everything in `tokens/*.css` plus `base.css`, `components.css`, `effects.css`. Consumers link this one file.
- `tokens/` holds the design tokens (palette, type, spacing, motion, dark + light theme layers).
- `components.css` defines the utility classes (`.rift-btn`, `.rift-card`, `.rift-glass-1/2/3`, `.rift-input`, `.rift-badge`, `.rift-dot`).
- `effects.css` defines the signature `.rift-glitch` chromatic edge, the `.rift-glow` breathing halo, and the cursor / ripple styles. Pair with `assets/cursor-fx.js`.
- `assets/theme-toggle.js` — drop-in dark/light toggle. Include it once via `<script src="assets/theme-toggle.js"></script>` near `</body>` and it adds a small fixed pill (top-right) that flips `<html data-theme>` and persists the choice in `localStorage`. No configuration needed.
- `components/` holds React versions of the primitives (`Button`, `Input`, `Card`, `Glass`, `Badge`, `Dot`, `Glitch`, `Wordmark`). Each has a sibling `.prompt.md` with a usage example.
- `templates/` holds starting-point templates — `console/`, `marketing/`, `auth/`.
- `cards/` holds foundation specimen cards (colors, type, spacing, brand). Skim these to see tokens in context.

When in doubt about brand voice, casing, motifs, or what to do with iconography, see the "Content fundamentals", "Visual foundations", and "Iconography" sections of `README.md`.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out (`styles.css`, `tokens/*.css`, anything under `assets/`) and write static HTML files for the user to view. If working on production code, copy assets in and read the rules to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
