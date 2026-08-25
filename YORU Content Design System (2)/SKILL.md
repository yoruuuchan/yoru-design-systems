---
name: yoru-design
description: Use this skill to generate well-branded interfaces and assets for YORU, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
For Xiaohongshu card sets there is a fixed production loop and it is not optional:
`blocks[]` → `usePagination()` → real headless render → contact sheet → look at it → fix → re-render → PNG.
Run `node ui_kits/xiaohongshu/export_cards.mjs --check` before claiming a card set is finished;
HTML on its own is an intermediate product. Never hand-paginate, and never use browser print as export.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
