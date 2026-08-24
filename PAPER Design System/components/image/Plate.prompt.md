The primitive every image sits in. Use it directly only when you need a bare photo; otherwise reach for Figure, HeroImage, Gallery.

```jsx
<Plate ratio="4/5" src="/photo.jpg" alt="Låtefossen at first light" />
<Plate ratio="3/2" label="Fig. 01"><image-slot id="hero"></image-slot></Plate>
```

Ratio is required thinking, not a default to accept — pick from the page's grid. Never round the corners.
