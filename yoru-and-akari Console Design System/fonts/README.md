# fonts

This system uses four families, **self-hosted in this folder** (`fonts-local.css` + `noto-sans-sc-local.css` + `files/`, both imported by `colors_and_type.css`; was Google Fonts CDN — the international route here is unreliable):

- **Geist** — UI text, headings, buttons, labels.
- **Geist Mono** — log lines, model ids, numbers, console output.
- **Zen Kaku Gothic New** — JP accent text and the wordmark subtitle.
- **Noto Sans SC** — every Chinese character, in both `--font-ui` and `--font-mono`. Weights 400, 500 and 700 (600 renders as 700). Google-style unicode-range slices, so a page downloads only the slices its characters need. Same files as the Reed app (wechat.yoru-and-akari.dev). Without it Chinese falls back to the OS font (Microsoft YaHei, or NSimSun inside monospace, on Windows), which reads as a fallback.

**Substitution notice.** No proprietary font files were provided. These three are the closest open-source substitutes that match a calm, technical, slightly bookish console vibe. If you have real font files:

1. Place `.woff2` files in this folder (e.g. `fonts/MyUI-Regular.woff2`).
2. Replace the `@import` line at the top of `colors_and_type.css` with `@font-face` blocks pointing at those files.
3. Update `--font-ui`, `--font-mono`, `--font-jp` accordingly.

Geist and Geist Mono are licensed under the SIL Open Font License (OFL). Zen Kaku Gothic New is OFL via Google Fonts. Noto Sans SC is OFL, see `OFL-NotoSansSC.txt`.

**Checking Chinese.** A Chinese page passes only when Chrome reports Noto Sans SC as the font that rendered the Chinese glyphs (DevTools → Elements → Computed → Rendered Fonts, or CDP `CSS.getPlatformFontsForNode`). A `font-family` line in the CSS, or one consistent Chinese face on screen, is not proof: that face can be the OS fallback.
