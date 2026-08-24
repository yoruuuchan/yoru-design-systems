# ChartCard

KPI tile with optional cyan-glow sparkline. The default data-viz surface.

```jsx
<ChartCard
  label="// CORE-9 OUTPUT"
  value="142.3"
  unit="MW"
  delta="+12.4% · 24h"
  deltaDirection="up"
  series={[100, 110, 105, 120, 132, 128, 142]}
  badge={<StatusPill status="online">LIVE</StatusPill>}
/>
```
