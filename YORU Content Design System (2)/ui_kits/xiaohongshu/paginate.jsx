/* Automatic pagination.
   Renders the whole block stream once into an off-screen column of the real content width,
   measures every block, then greedily fills pages. Headings never end a page alone.

   Safety: every block gets a small padding on its measured height, and code/prompt
   blocks get a larger one — the probe's height and the final rendered height can
   drift by a few px per row from font-metric rounding, and the drift accumulates
   with big multi-line blocks. Better to leave a bit of empty space at the bottom
   of a page than to have the footer bleed into the code block. */
function usePagination(blocks, { variant, size, contentHeight, contentWidth, gap }) {
  const [pages, setPages] = React.useState(null);
  const probe = React.useRef(null);
  React.useLayoutEffect(() => {
    const el = probe.current; if (!el) return;
    let raf = requestAnimationFrame(() => {
      const hs = Array.from(el.children).map((c, i) => {
        const t = blocks[i]?.t;
        const pad = (t === "code" || t === "prompt") ? 24 : 6;
        return c.getBoundingClientRect().height + pad;
      });
      const out = []; let cur = []; let h = 0;
      blocks.forEach((b, i) => {
        const bh = hs[i] || 0;
        const need = cur.length ? h + gap + bh : bh;
        if (cur.length && need > contentHeight) { out.push(cur); cur = [i]; h = bh; }
        else { cur.push(i); h = need; }
      });
      if (cur.length) out.push(cur);
      // a heading stranded as the last block of a page moves forward
      for (let p = 0; p < out.length - 1; p++) {
        const last = out[p][out[p].length - 1];
        if (out[p].length > 1 && blocks[last].t === "heading") { out[p].pop(); out[p + 1].unshift(last); }
      }
      setPages(out);
    });
    return () => cancelAnimationFrame(raf);
  }, [blocks, variant, size, contentHeight, contentWidth, gap]);
  const Probe = (
    <div className="yoru-card" data-yoru={variant} data-size={size} aria-hidden="true"
      style={{ position: "fixed", left: -99999, top: 0, height: "auto", width: contentWidth, overflow: "visible" }}>
      <div ref={probe} style={{ display: "flex", flexDirection: "column", gap: 0, width: contentWidth }}>
        {blocks.map((b, i) => <div key={i}><YoruBlock b={b} /></div>)}
      </div>
    </div>
  );
  return { pages, Probe };
}
Object.assign(window, { usePagination });
