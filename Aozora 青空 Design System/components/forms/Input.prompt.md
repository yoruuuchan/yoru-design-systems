### Input

Text input with optional label, helper, and error. Defaults to `glass` over color backgrounds; switch to `solid` over plain white.

```jsx
<Input label="Email" placeholder="you@aozora.jp" type="email" />
<Input label="Search" leadingIcon={<SearchIcon />} placeholder="搜索 / Search" />
<Input label="Password" error="Too short — 8 characters minimum." type="password" />
```
