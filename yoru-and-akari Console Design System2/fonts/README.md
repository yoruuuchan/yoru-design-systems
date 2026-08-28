# fonts

This system uses three families, **self-hosted in this folder** (`fonts-local.css` + `files/`, imported by `colors_and_type.css`; was Google Fonts CDN — the international route here is unreliable):

- **Geist** — UI text, headings, buttons, labels.
- **Geist Mono** — log lines, model ids, numbers, console output.
- **Zen Kaku Gothic New** — JP accent text and the wordmark subtitle.

**Substitution notice.** No proprietary font files were provided. These three are the closest open-source substitutes that match a calm, technical, slightly bookish console vibe. If you have real font files:

1. Place `.woff2` files in this folder (e.g. `fonts/MyUI-Regular.woff2`).
2. Replace the `@import` line at the top of `colors_and_type.css` with `@font-face` blocks pointing at those files.
3. Update `--font-ui`, `--font-mono`, `--font-jp` accordingly.

Geist and Geist Mono are licensed under the SIL Open Font License (OFL). Zen Kaku Gothic New is OFL via Google Fonts.
