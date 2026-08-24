# Toast

Transient notification. Render inside `<ToastStack>` (fixed bottom-right column).

```jsx
<ToastStack>
  <Toast variant="success" title="UPLINK">CORE-9 sync complete.</Toast>
  <Toast variant="error" title="FAULT 0xE1" onClose={dismiss}>Coolant flow lost.</Toast>
</ToastStack>
```
