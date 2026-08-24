# Aozora App — UI kit

A minimal mobile App for the brand. Three screens demonstrate the system end-to-end:

1. **Home** — sky-gradient page, hero glass card, flavor grid. Establishes the "blue sky + droplet" voice.
2. **Detail** — full-bleed colored hero with a floating 3D drop, then a white sheet with size picker, tags, and a sticky glass CTA bar.
3. **Settings** — calm white sectioned list. Shows quieter chrome — `Switch`, profile card, hairline-stroked rows.

`index.html` renders all three side-by-side inside fake iPhone frames with the bottom `TabBar` overlay. Tapping the search/me tabs on Home flips the other phones.

Built from `Button`, `IconButton`, `Card`, `Tag`, `Badge`, `Switch` — no custom primitives.
