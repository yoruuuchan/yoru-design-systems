# Tabs

Chamfered top-edge tabs with a cyan glow indicator. Controlled or uncontrolled.

```jsx
<Tabs
  defaultValue="overview"
  tabs={[
    { value: "overview",  label: "OVERVIEW",  content: <Overview /> },
    { value: "telemetry", label: "TELEMETRY", count: 24, content: <Telemetry /> },
    { value: "logs",      label: "LOGS",      content: <Logs /> },
    { value: "lockdown",  label: "LOCKDOWN",  disabled: true },
  ]}
/>
```
