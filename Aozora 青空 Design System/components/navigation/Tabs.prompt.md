### Tabs

Controlled. `segmented` is the iOS-style pill group (top of a screen, inside a card); `underline` is editorial (article navigation).

```jsx
const [tab, setTab] = useState('all');
<Tabs value={tab} onChange={setTab} items={[
  { value: 'all', label: 'All', count: 24 },
  { value: 'citrus', label: 'Citrus' },
  { value: 'mint', label: 'Mint' },
]} />
```
