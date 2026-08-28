# yoru-design-systems

Eight self-contained design systems. Each directory is an installable skill: it carries its own `SKILL.md` (entry point for agents), design guide, CSS tokens, specimen cards, and components. Pick by mood and medium below, then read that system's `SKILL.md` first.

## Picking a system

| System | Aesthetic | Theme | Reach for it when |
|---|---|---|---|
| [Aozora 青空](<Aozora 青空 Design System/SKILL.md>) | Summer-bright iOS 26 liquid glass, Japanese clear-poster advertising | Light only | Mobile app UI, fresh/airy product surfaces, anything that should feel like a Pocari Sweat ad |
| [KUNLUN 昆仑](<KUNLUN Design System/SKILL.md>) | Industrial sci-fi terminal, HUD ornaments | Dark only | Dashboards, ops/monitoring panels, AI chat consoles, dev tools |
| [Mayonaka 真夜中](<Mayonaka Design System/SKILL.md>) | Vaporwave / citypop / pixel / glitch | Dark only | Portfolios, music/creative pages, anything retro-futurist |
| [PAPER](<PAPER Design System/SKILL.md>) | Editorial × analog print, photography-first | Editorial / analog / dark modes | Art books, photo essays, interviews, personal creative sites, slide decks |
| [RIFT 裂隙](<RIFT Design System/SKILL.md>) | Blue-spectrum cyber-glitch operating console | Dark + light | Technical product sites, control-room aesthetics, auth/console templates |
| [core](<core Design System/SKILL.md>) | Weirdcore / poolcore / dreamcore / Y2K | Light only | Experimental pages, archives, blogs, slide decks with an uncanny mood |
| [yoru-and-akari Console](<yoru-and-akari Console Design System2/SKILL.md>) | Soft neumorphism + liquid glass companion console | akari (light) / yoru (dark) | The yoru-and-akari companion console and anything in its product family |
| [YORU Content](<YORU Content Design System (2)/SKILL.md>) | Publication pipeline, not a UI kit | — | Xiaohongshu card sets and WeChat articles. Has a mandatory headless render + selftest loop — read its `CLAUDE.md` before touching it |

## Conventions shared across systems

- `SKILL.md` — agent entry point; always read it first.
- `styles.css` — single CSS entry; `@import`s everything under `tokens/`.
- `tokens/` — CSS custom properties (Console keeps them in `colors_and_type.css` instead).
- Specimen cards (`foundations/`, `guidelines/`, `cards/`, or `preview/`) — one small HTML per visual primitive.
- `components/` — React primitives with `<Name>.jsx` + `<Name>.prompt.md` + `.d.ts` where present.
- `_ds_manifest.json` / `_ds_bundle.js` / `_adherence.oxlintrc.json` — Claude Design platform tooling; ignore outside that platform.

## Repo notes

- `*.zip` files are local snapshots for uploading to Claude.ai; gitignored, may lag the directories.
- `_archive/` — resolved working files kept for reference; gitignored.
- Backup remote: https://github.com/yoruuuchan/yoru-design-systems
