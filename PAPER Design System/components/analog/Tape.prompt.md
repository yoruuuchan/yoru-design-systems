Holds a photo, note or card to the page. Position it absolutely over the thing it holds.

```jsx
<div style={{position:"relative"}}>
  <Tape style={{position:"absolute", top:-11, left:"50%", transform:"translateX(-50%) rotate(-2deg)"}} />
  <MemoryCard caption="Sunday light" />
</div>
```

One or two pieces of tape per spread, maximum. Rotation stays within ±4°.
