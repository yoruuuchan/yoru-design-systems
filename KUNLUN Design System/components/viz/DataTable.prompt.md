# DataTable

Compact mono data table with sticky header + cyan hover ribbon.

```jsx
<DataTable
  rows={nodes}
  columns={[
    { key: "id",     header: "NODE",   tone: "id" },
    { key: "status", header: "STATUS", render: v => <StatusPill status={v}>{v}</StatusPill> },
    { key: "power",  header: "MW",     align: "right", tone: "num" },
    { key: "ts",     header: "LAST PING", tone: "muted" },
  ]}
/>
```
