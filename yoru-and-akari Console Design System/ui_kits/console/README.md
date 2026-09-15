# Console UI kit — mobile-first

A hi-fi recreation of the **yoru-and-akari console**. Mobile-first (`390×844`), with a desktop layout (`1280×800`) that uses the same components.

Open `index.html` and try:

- bottom tab bar — switch between **chat · timeline · memory · console**
- tap the akari/yoru sun/moon in the top-right to flip the theme
- in **chat**, type a message and send it (a stub reply appears after ~1s)
- in **chat** title, tap the channel name to open the channel sheet (mock)
- in **console**, expand a settings group; toggle proactive; open the model row
- in **logs** (console → logs), tap a collapsed row to expand
- in **timeline**, day-grouped events on the rail
- on desktop, channel list pins left, inspector slides in right

## Files

```
index.html              — the running prototype
app.jsx                 — top-level App + state, route switcher
components.jsx          — shared primitives (Surface, Button, Toggle, Chip, …)
ChannelList.jsx         — channel cards + new-channel CTA
ChatView.jsx            — header, bubble stream, composer
Timeline.jsx            — vertical rail of events
ConsoleView.jsx         — settings stack (model, proactive, safety, providers, tools)
LogsDrawer.jsx          — collapsible log rows
MemoryView.jsx          — long-term + short-term memory entries
TopBar.jsx              — compact app bar with theme switch
TabBar.jsx              — glass bottom nav
ProviderSheet.jsx       — provider picker modal
icons.jsx               — typed wrappers over Lucide
```

The components share scope via `Object.assign(window, {...})` at the bottom of each file (see the system instructions).
