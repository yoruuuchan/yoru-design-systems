# Midnight FM — Web

Vaporwave music player dashboard. Sidebar nav · top search/status bar · hero · heavy-rotation table · stats + DJ notes · now-playing right rail with transport.

- `index.html` — entry, mounts `Sidebar` + `NowPlaying` + composed main view
- `Sidebar.jsx` — left nav (Home / Browse / Library / Radio / Mixes) + user mixtapes
- `NowPlaying.jsx` — right rail: album art (sun + grid), transport buttons, up-next list

Uses `Button`, `Card`, `Input`, `Badge`, `Tabs`, `Progress`, `GlitchText` from `components/core`.
