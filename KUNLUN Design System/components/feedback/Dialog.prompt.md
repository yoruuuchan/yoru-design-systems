# Dialog

Chamfered modal with cyan-glow shell. Body scrolls; footer is for buttons.

```jsx
<Dialog
  open={confirmOpen}
  onClose={() => setOpen(false)}
  title="PURGE NODE-07"
  variant="danger"
  actions={
    <>
      <Button variant="ghost" onClick={cancel}>ABORT</Button>
      <Button variant="danger" onClick={purge}>CONFIRM PURGE</Button>
    </>
  }
>
  Memory and telemetry will be permanently wiped.
</Dialog>
```
