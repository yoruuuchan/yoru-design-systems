Text input with optional pixel label, prefix glyph, and inline error/hint. Label is uppercased display type for label; body uses VT323.

```jsx
<Input label="HANDLE" prefix=">" placeholder="username" value={v} onChange={...} />
<Input label="PASSWORD" type="password" error="Access denied // 401" />
```
