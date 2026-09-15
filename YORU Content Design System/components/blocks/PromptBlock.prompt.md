Use for prompts the reader is meant to copy. Real code goes in <CodeBlock> instead.

```jsx
<PromptBlock model="Claude Sonnet 4.5">你是我的代码审查搭子。只看 diff，先说风险，再说风格。</PromptBlock>
```
The block is **recessed, not outlined** — a soft inset shading instead of a border. That is deliberate and it is the only place in the system (with `CodeBlock`) that takes a shadow: a prompt is something the reader lifts out of the page, so it sits *in* the paper. Don't add a border back, and don't apply `--shadow-inset` to anything else — on the white page the white stop is invisible, so a raised treatment collapses into a plain drop shadow.
