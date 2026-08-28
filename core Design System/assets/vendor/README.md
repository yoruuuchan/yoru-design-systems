# vendor

Local copies of React, ReactDOM, and Babel standalone (production builds) — copied from the
shared set first vendored in YORU Content Design System. All component cards and UI kits load
these instead of unpkg: the CDN is unusable when the international route degrades, and a local
design system gains nothing from a CDN dependency.

| File | Version |
|---|---|
| react.production.min.js | 18.3.1 |
| react-dom.production.min.js | 18.3.1 |
| babel.min.js | @babel/standalone 7.29.0 |
