# TabBar

File-folder Y2K tabs. The selected tab paints over the body's top border so it looks attached to the surface below it.

```jsx
const [tab, setTab] = useState('pool');
<TabBar
  items={['pool', 'dream', 'mostly_empty']}
  value={tab}
  onChange={setTab}
/>
```

Items can be plain strings or `{id, label}` objects when label needs to differ from id.
