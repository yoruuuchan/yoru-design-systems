# Input

Single-line text input — glass background, royal-blue focus ring. Passes all native input props through.

```jsx
<Input placeholder="enter query 検索…" />
<Input type="email" placeholder="you@rift.io" />
<Input value={query} onChange={e => setQuery(e.target.value)} />
```

Pair with a label and helper text manually; this primitive is the input only.
