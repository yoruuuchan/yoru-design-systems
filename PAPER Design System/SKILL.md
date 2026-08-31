---
name: paper-design
description: Use this skill to generate well-branded interfaces and assets for PAPER, an editorial × analog design system for art books, photo essays, portfolios, interviews and personal creative websites — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation

- `README.md` — the design guide. Read it first.
- `styles.css` — link this one file; it imports every token file.
- Modes: `data-mode="analog"` on any element switches paper, grain, photo tone and labels. `data-mode="dark"` is the film-base surface.
- Components live in `components/<group>/`. Each has a `.prompt.md` with a one-line "what & when" and a usage example — read those rather than the `.jsx`.
- `ui_kits/*/index.html` are working click-through screens. `slides/` are 1280×720 layouts.
- `guidelines/*.card.html` are token specimens written in plain HTML — the fastest reference for how to use a token correctly.

## Three rules that matter more than the rest

1. **Structure first, texture second.** One or two analog details per spread. The grid must survive the warmth.
2. **Radius is zero, rust is rare.** Square corners everywhere; the accent appears at most twice per page.
3. **Captions carry facts.** Time, place, stock, what went wrong — never a restatement of the headline.
