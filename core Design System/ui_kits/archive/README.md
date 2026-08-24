# Archive / Museum — UI Kit

A liminal-archive browsing interface — *mostly_empty.com*, an imaginary online catalog of empty pools, fluorescent hallways, and dreamcore fragments. This kit demonstrates the system's **Y2K desktop grammar**: multiple `<Window>` surfaces tiled on a warm wallpaper, with sidebar categories, a filterable grid, and a detail view.

## What's in here
- `index.html` — the interactive entry. Open this. Click categories in the sidebar to filter; click a thumbnail to open it in detail.
- `catalog.js` — sample data (8 entries, each tagged).
- `Sidebar.jsx` — left-column window with category list + status counter.
- `FileGrid.jsx` — right-column window with a grid of thumbnails (built from `<Window>` cells).
- `DetailView.jsx` — large window for the selected file, with metadata + footnote.

## Imagery
Thumbnails are seeded `picsum.photos` URLs piped through the system's `--filter-overexposed` and a grain overlay. Swap in real photos by replacing `previewUrl` in `catalog.js`.

## Conventions used
- Every surface is a `<Window>`. Body backgrounds vary (`paper` / `pool` / `dream`) by tag.
- Lowercase titles everywhere. Filenames in `--font-pixel-mono`.
- Tags use the `<Tag>` component, color-keyed to the entry's tone.
- Status bar at the bottom is a single sunken `Window status` line — pixel-mono, capital `[ x ]` counts.
