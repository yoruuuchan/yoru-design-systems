---
name: yoru-and-akari-design
description: Use this skill to generate well-branded interfaces and assets for the yoru-and-akari companion console — either for production or for throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and a UI-kit recreation for prototyping a mobile-first AI-companion control console with soft neumorphism, subtle liquid glass, and tunable akari (light) / yoru (dark) themes.
user-invocable: true
---

Read the **README.md** file within this skill first — it covers brand concept, content fundamentals (voice, casing, tone), visual foundations (color, type, spacing, shadows, glass, motion, hover/press/focus, layout), and iconography. Then explore the other files in this directory:

- **`colors_and_type.css`** — all design tokens. Both themes (`akari`, `yoru`) live as `[data-theme="…"]` blocks on `:root`. Import this file directly into any artifact; it loads its own fonts via Google Fonts.
- **`preview/`** — small, single-concept HTML cards that demonstrate each foundation. Open them to see palettes, type scale, shadows, glass, buttons, inputs, toggles, badges, channel cards, logs (collapsed/expanded), timeline rail, settings rows, message bubbles, composer, memory cards, provider picker, avatars, brand mark, tab bar.
- **`ui_kits/console/`** — a working mobile-first hi-fi recreation of the console with chat, timeline, memory, settings, logs, provider sheet, and theme switch. Use its JSX components as a starting point for new artifacts. Mobile width is 390px; desktop layout activates at 980px.
- **`assets/`** — brand mark notes (the mark itself is pure CSS) and icon-set reference (Lucide @ 18px, stroke 1.75).
- **`fonts/`** — font notes. Geist + Geist Mono + Zen Kaku Gothic New, all from Google Fonts.

**When creating visual artifacts** (slides, mocks, throwaway prototypes), copy `colors_and_type.css` into the artifact's folder and link it; pull the JSX components from `ui_kits/console/` if you need real-feeling interactions; produce static HTML files for the user to view.

**When working on production code**, treat the CSS variables and the JSX components as a vocabulary, not a library — port the token names and the shadow/glass recipes into the host framework's design-token format.

**If the user invokes this skill without other guidance**, ask what they want to build or design (a new screen? a slide? a marketing page? a feature inside the console?), confirm whether mobile or desktop, then act as an expert designer for this brand. Output an HTML artifact unless the user asks for production code. Stay inside the established vocabulary — calm royal blue, ember (orange) and frost (cyan) accents used sparingly, lowercase microcopy in second-person, no emoji as UI chrome, no decorative gradients, neumorphism + glass as the structural elements.

**Non-negotiable rules** carried from README.md:

- Lowercase UI everywhere. ALL CAPS only on eyebrow labels.
- "You" to the operator, "I" inside companion replies, never "we" or "the assistant."
- No emoji in UI chrome. Use Lucide icons or status dots.
- Logs are collapsed by default. Error dot only when an error exists.
- Timeline is a real rail (vertical line + dotted events), not stacked cards.
- Inputs use inset shadow; selected items use a 1.5px primary stroke (not a tinted bg).
- Cards are defined by shadow, never by a 1px stroke or a colored left-border stripe.
- 24-hour time; canonical model ids; tokens with thin separators.
