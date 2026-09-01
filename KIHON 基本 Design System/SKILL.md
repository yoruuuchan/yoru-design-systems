---
name: kihon-design
description: Use this skill to generate well-branded interfaces and assets for KIHON 基本 — the general-purpose motion design system for Remotion programmatic video (product explainers, data cards, project walkthroughs, portfolio pieces; Chinese-first, 16:9 and 9:16 native). Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Non-negotiables when designing with KIHON: motion constants in tokens/motion.css are locked from measurement (three curves only; text never bounces); data marks use the lightness ramp, never hue; accent (machine viridian) marks state only; Chinese is the first language (Source Han Sans SC — never monospace for Chinese body copy); 9:16 and 16:9 are two native layouts, never one reflowed into the other; the ground is anodized metal (grain + machined edges), never flat white. Components and ui_kits are browser-preview implementations — never import them into Remotion compositions; re-implement against the tokens with `useCurrentFrame()`/`spring()`, computing `--u` synchronously from `useVideoConfig()` (see README "Preview vs production").

If creating visual artifacts (slides, mocks, video frames, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code (e.g. Remotion compositions), copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
