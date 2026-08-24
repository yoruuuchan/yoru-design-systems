# Terminal

The signature KUNLUN component: a fake terminal with a chamfered shell, traffic-light dots, scrolling output, and an optional input.

```jsx
<Terminal
  title="tty-07"
  height={320}
  lines={[
    { prompt: "$", text: "boot --node=07", kind: "user" },
    { text: "[ OK ] kernel loaded", kind: "success" },
    { text: "[ OK ] uplink established", kind: "success" },
    { text: "[ WARN ] coolant flow at 87%", kind: "warn" },
  ]}
  onCommand={cmd => exec(cmd)}
/>
```

Pass `kind` per line for color: `muted | success | warn | error | user`. Hide chrome via `showInput={false}` / `showDots={false}` for read-only log displays.
