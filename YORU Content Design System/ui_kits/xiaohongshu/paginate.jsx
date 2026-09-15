/* Automatic pagination.

   ONE RULE, and everything else follows from it: the DOM we measure IS the DOM
   we render. The caller hands us the exact `pageProps` object it will spread onto
   every content <Page>; we render one more <Page> off-screen with those same
   props and read every layout number back off it — usable width, usable height,
   block gap. Nothing about the page box is written down twice.

   There is deliberately NO table of padding / gap / footer-height constants in
   this file or in workbench.jsx. The previous version kept its own copy of those
   four numbers. All four had drifted, and all four had drifted the same way, so
   the paginator believed each page had ~230px more room than it really did and
   real content overflowed every time. A second copy of a layout number is a bug
   with a delay fuse.

   Measuring column: the blocks are laid out inside the probe page's own content
   column, in a child flex column with gap:0 and flex-shrink:0 (shrink off, or the
   fixed-height page would squeeze them and we would measure the squeeze). Same
   width, same cascade, same fonts as the final render, so a measured height is
   the height the block will actually take. The gap arithmetic is ours because the
   greedy fill needs per-block numbers.

   Waiting: font metrics and image sizes decide block heights, so measurement is
   held until document.fonts.ready resolves and every <img> in the probe has
   settled. Measuring before that produces confident, wrong numbers. */

const PG = window.YORUContentDesignSystem_a0b73e;

/* Content keeps one full --flow-block clear of the footer strip. The footer is
   absolutely positioned, so the column's own bottom padding does not know about
   it; we read where the footer actually starts and stop short of it. */
const FOOT_CLEARANCE = 1;

function readPageGeometry(pageEl) {
  const col = pageEl.querySelector("[data-yoru-flow]");
  if (!col) return null;
  const cs = getComputedStyle(col);
  const padL = parseFloat(cs.paddingLeft) || 0, padR = parseFloat(cs.paddingRight) || 0;
  const padT = parseFloat(cs.paddingTop) || 0, padB = parseFloat(cs.paddingBottom) || 0;
  const gap = parseFloat(cs.rowGap) || 0;
  const rect = col.getBoundingClientRect();
  const top = rect.top + padT;
  let bottom = rect.top + col.clientHeight - padB;
  const foot = pageEl.querySelector("[data-yoru-footer]");
  if (foot) bottom = Math.min(bottom, foot.getBoundingClientRect().top - gap * FOOT_CLEARANCE);
  return { width: col.clientWidth - padL - padR, height: bottom - top, gap };
}

/* Fonts ready + every image loaded or failed. An undecoded image inside a
   ratio="auto" Figure measures as zero height, which is how a page ends up
   with a screenshot hanging off the bottom edge. */
function whenSettled(root) {
  const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
  const imgs = Array.from(root.querySelectorAll("img")).filter(i => !i.complete).map(i =>
    new Promise(res => { i.addEventListener("load", res, { once: true }); i.addEventListener("error", res, { once: true }); }));
  return Promise.all([fonts, ...imgs]);
}

function usePagination(blocks, pageProps) {
  const [pages, setPages] = React.useState(null);
  const [report, setReport] = React.useState(null);
  const pageRef = React.useRef(null);
  const colRef = React.useRef(null);
  const key = [pageProps.variant, pageProps.size, pageProps.spine, pageProps.kicker].join("\u0000");

  React.useLayoutEffect(() => {
    const pageEl = pageRef.current, colEl = colRef.current;
    if (!pageEl || !colEl) return;
    let live = true;
    setPages(null);
    whenSettled(pageEl).then(() => new Promise(r => requestAnimationFrame(r))).then(() => {
      if (!live) return;
      const geom = readPageGeometry(pageEl);
      if (!geom) return;

      const heights = Array.from(colEl.children).map(c => Math.ceil(c.getBoundingClientRect().height));
      const oversized = heights.map((h, i) => (h > geom.height ? i : -1)).filter(i => i >= 0);

      /* Greedy fill. The stranded-heading rule is handled INSIDE the loop, at the
         moment the page breaks, not as a pass afterwards. Moving a heading onto
         the next page after the fact was silently pushing that page over budget —
         it was the last remaining way a finished page could overflow. Doing it
         at the break means the invariant "no page exceeds the usable height"
         holds by construction. */
      const out = []; let cur = []; let h = 0;
      blocks.forEach((b, i) => {
        const bh = heights[i] || 0;
        const need = cur.length ? h + geom.gap + bh : bh;
        if (cur.length && need > geom.height) {
          let carry = [];
          const lastIdx = cur[cur.length - 1];
          if (cur.length > 1 && blocks[lastIdx].t === "heading") {
            const lh = heights[lastIdx] || 0;
            // only carry it if the heading and the block that broke the page fit together;
            // otherwise the heading is better off stranded than the next page overfull
            if (lh + geom.gap + bh <= geom.height) carry = [cur.pop()];
          }
          out.push(cur);
          cur = [...carry, i];
          h = carry.length ? (heights[carry[0]] || 0) + geom.gap + bh : bh;
        } else { cur.push(i); h = need; }
      });
      if (cur.length) out.push(cur);
      // how full each page came out — the render check flags the thin ones
      const fill = out.map(idxs =>
        (idxs.reduce((a, i) => a + (heights[i] || 0), 0) + geom.gap * (idxs.length - 1)) / geom.height);

      setPages(out);
      setReport({ geom, heights, oversized, fill });
    });
    return () => { live = false; };
  }, [blocks, key]);

  /* The probe. Same component, same props, same footer element as a real content
     page — the only additions are the off-screen wrapper and the measuring column. */
  const Probe = (
    <div ref={pageRef} aria-hidden="true" style={{ position: "fixed", left: -99999, top: 0, pointerEvents: "none" }}>
      <PG.Page {...pageProps}>
        {/* one wrapper per block keeps children 1:1 with blocks[] even when a
            block type renders nothing; the wrapper itself adds no box of its own */}
        <div ref={colRef} style={{ display: "flex", flexDirection: "column", gap: 0, flexShrink: 0, width: "100%" }}>
          {blocks.map((b, i) => <div key={i} data-block={i}><YoruBlock b={b} /></div>)}
        </div>
      </PG.Page>
    </div>
  );
  return { pages, report, Probe };
}
/* readPageGeometry is exported too: export_cards.mjs measures the rendered cards
   with the very same function that laid them out. */
Object.assign(window, { usePagination, readPageGeometry });
