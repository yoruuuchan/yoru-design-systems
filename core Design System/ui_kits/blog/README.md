# Blog / Long-form — UI Kit

A personal-archive blog. Tinos serif body type, dashed dividers between paragraphs, a Y2K-style sidebar with "recent posts" and a guestbook button, a rainbow marquee in the footer, and a hit counter.

## What's in here
- `index.html` — the interactive entry. Click sidebar posts to switch between entries.
- `posts.js` — sample post data (3 entries).
- `BlogHeader.jsx` — top header with logo, marquee, and category tags.
- `PostBody.jsx` — long-form article rendered in Tinos.
- `BlogSidebar.jsx` — list of other posts + a small "guestbook" CTA.
- `BlogFooter.jsx` — Y2K footer with hit counter, web-ring, dashed divider.

## Imagery
Header banners are seeded `picsum.photos` URLs filtered through `--filter-overexposed`. Inline post images use the same trick. Replace `bannerSeed` and inline `<img src>`s when you have your own photos.
