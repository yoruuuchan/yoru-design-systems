# Panel

Terminal-style window. Title bar with cyan glow, optional meta + actions, optional status footer. The signature KUNLUN surface for grouping content.

```jsx
<Panel title="NODE-07" meta="STATUS: NOMINAL"
       actions={<IconButton label="Close">✕</IconButton>}
       footer={<><span>SECTOR-A</span><span>21:04:55</span></>}>
  <p>Reactor at 88.3% efficiency.</p>
</Panel>

<Panel variant="danger" title="FAULT" meta="0xE1">
  Coolant flow interrupted. Initiating failsafe.
</Panel>
```

**Variants:** `default` (gray border), `signal` (cyan glow), `danger` (red glow), `warn` (amber glow).

Pass `flush` to remove body padding when embedding a `Terminal` or `DataTable`.
