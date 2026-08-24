# Window

The defining component. Almost everything in this system sits inside a Window — including dialogs, archive cards, and "page" headers. Position them absolutely on a page background to get the desktop feel.

```jsx
<Window title="mostly_empty.txt" onClose={() => …} status="3 items · last saved 06.23">
  <p>the pool was drained two summers ago…</p>
</Window>

<Window title="pool_05.jpg" bodyTone="pool" dense>
  <img src="…" />
</Window>

<Window title="dream_log" bodyTone="dream" decorativeStripes={false} active={false}>
  …
</Window>
```

**bodyTone** changes the inside surface (`paper` / `pool` / `dream`). **active=false** dims the title bar. **status** adds a sunken pixel-mono status line.
