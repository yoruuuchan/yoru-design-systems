# assets

Brand assets and icon references for the yoru-and-akari console.

## Brand mark
Built as **pure CSS** in `preview/brand-mark.html` — radial-gradient circles + box-shadow. No SVG/PNG file exists yet. If you want raster/vector exports, request them and I'll generate them.

## Icons
**Lucide** at version 0.452.0 via CDN:
```
<script src="../assets/vendor/lucide.min.js"></script>
```
Default sizing: **18px** with stroke-width **1.75**. See `README.md` → ICONOGRAPHY for the concept-to-icon bindings.

To replace with a real icon set, place `.svg` files under `assets/icons/` and update component imports.

## Companion glyphs
The three avatars (`灯` `夜` `読`) are CSS-painted in `preview/avatars.html`. They aren't asset files — they're JP characters on gradient squircles.
