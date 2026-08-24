### Dialog

Thick-glass modal sheet. Scrim is a soft dark + blur — not a hard black overlay. Esc closes; click-outside closes.

```jsx
<Dialog
  open={open}
  onClose={() => setOpen(false)}
  kicker="夏キャンペーン"
  title="Aozora Pro へようこそ"
  footer={<>
    <Button variant="ghost" onClick={close}>Later</Button>
    <Button tone="accent" onClick={confirm}>Subscribe</Button>
  </>}
>
  Unlimited refills, 限定フレーバー, and shipping on us through August.
</Dialog>
```
