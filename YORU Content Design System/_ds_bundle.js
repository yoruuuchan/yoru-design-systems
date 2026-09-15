/* @ds-bundle: {"format":4,"namespace":"YORUContentDesignSystem_a0b73e","components":[{"name":"Callout","sourcePath":"components/blocks/Callout.jsx"},{"name":"CodeBlock","sourcePath":"components/blocks/CodeBlock.jsx"},{"name":"CompareTable","sourcePath":"components/blocks/CompareTable.jsx"},{"name":"MarginNote","sourcePath":"components/blocks/MarginNote.jsx"},{"name":"PromptBlock","sourcePath":"components/blocks/PromptBlock.jsx"},{"name":"Quote","sourcePath":"components/blocks/Quote.jsx"},{"name":"ReferenceList","sourcePath":"components/blocks/ReferenceList.jsx"},{"name":"StepList","sourcePath":"components/blocks/StepList.jsx"},{"name":"CoverOverprint","sourcePath":"components/covers/CoverOverprint.jsx"},{"name":"CoverType","sourcePath":"components/covers/CoverType.jsx"},{"name":"EndCard","sourcePath":"components/covers/EndCard.jsx"},{"name":"Diagram","sourcePath":"components/diagram/Diagram.jsx"},{"name":"DiagramAnnotation","sourcePath":"components/diagram/DiagramAnnotation.jsx"},{"name":"DiagramEdge","sourcePath":"components/diagram/DiagramEdge.jsx"},{"name":"DiagramGroup","sourcePath":"components/diagram/DiagramGroup.jsx"},{"name":"DiagramLegend","sourcePath":"components/diagram/DiagramLegend.jsx"},{"name":"DiagramNode","sourcePath":"components/diagram/DiagramNode.jsx"},{"name":"GEO","sourcePath":"components/diagram/diagramLayout.js"},{"name":"GEO_COMPACT","sourcePath":"components/diagram/diagramLayout.js"},{"name":"SectionMark","sourcePath":"components/labels/SectionMark.jsx"},{"name":"StatusLabel","sourcePath":"components/labels/StatusLabel.jsx"},{"name":"Tag","sourcePath":"components/labels/Tag.jsx"},{"name":"Figure","sourcePath":"components/media/Figure.jsx"},{"name":"MoonPhases","sourcePath":"components/page/Masthead.jsx"},{"name":"Masthead","sourcePath":"components/page/Masthead.jsx"},{"name":"Page","sourcePath":"components/page/Page.jsx"},{"name":"PageFooter","sourcePath":"components/page/PageFooter.jsx"},{"name":"Timeline","sourcePath":"components/timeline/Timeline.jsx"},{"name":"Body","sourcePath":"components/typography/Body.jsx"},{"name":"Caption","sourcePath":"components/typography/Caption.jsx"},{"name":"Emphasis","sourcePath":"components/typography/Emphasis.jsx"},{"name":"Heading","sourcePath":"components/typography/Heading.jsx"},{"name":"Lede","sourcePath":"components/typography/Lede.jsx"},{"name":"Marker","sourcePath":"components/typography/Marker.jsx"}],"sourceHashes":{"components/blocks/Callout.jsx":"877408a9fdba","components/blocks/CodeBlock.jsx":"991d7bf56873","components/blocks/CompareTable.jsx":"2bfaf2e80d0b","components/blocks/MarginNote.jsx":"575736dd653a","components/blocks/PromptBlock.jsx":"1de407871afc","components/blocks/Quote.jsx":"7fbbb149f327","components/blocks/ReferenceList.jsx":"516569a11060","components/blocks/StepList.jsx":"616cc04a2754","components/covers/CoverOverprint.jsx":"771f59a6c76b","components/covers/CoverType.jsx":"babe3cea9591","components/covers/EndCard.jsx":"1fb07aa856ca","components/diagram/Diagram.jsx":"fc729584b718","components/diagram/DiagramAnnotation.jsx":"b1d65e4bfbd9","components/diagram/DiagramEdge.jsx":"cee0ecd7982a","components/diagram/DiagramGroup.jsx":"83ba8476cc86","components/diagram/DiagramLegend.jsx":"92aa5fbb69f9","components/diagram/DiagramNode.jsx":"324433eaea54","components/diagram/diagramLayout.js":"dab956bbdb2d","components/labels/SectionMark.jsx":"f5d04c380326","components/labels/StatusLabel.jsx":"c14a68468207","components/labels/Tag.jsx":"29941149869a","components/media/Figure.jsx":"0f15d33c82a9","components/page/Masthead.jsx":"b234a705d14d","components/page/Page.jsx":"262c350929d7","components/page/PageFooter.jsx":"d508f443de13","components/timeline/Timeline.jsx":"06d610e6f935","components/typography/Body.jsx":"06b6e0ecefbe","components/typography/Caption.jsx":"9c03531dd985","components/typography/Emphasis.jsx":"221fca9bd91a","components/typography/Heading.jsx":"276e63b78e0e","components/typography/Lede.jsx":"2155be167e3f","components/typography/Marker.jsx":"7414ec7cf404","ui_kits/diagrams/examples.js":"d7915d86c379","ui_kits/diagrams/gallery.jsx":"f7f044a156a5","ui_kits/wechat/article.jsx":"f14ccb2847bf","ui_kits/xiaohongshu/blocks.jsx":"ea4e7c29bd77","ui_kits/xiaohongshu/content.js":"403606a81d2f","ui_kits/xiaohongshu/paginate.jsx":"9ee3c30494e8","ui_kits/xiaohongshu/workbench.jsx":"cdb199245815"},"inlinedExternals":[],"unexposedExports":[{"name":"arrowPath","sourcePath":"components/diagram/diagramLayout.js"},{"name":"boxes","sourcePath":"components/diagram/diagramLayout.js"},{"name":"cellX","sourcePath":"components/diagram/diagramLayout.js"},{"name":"cellY","sourcePath":"components/diagram/diagramLayout.js"},{"name":"cnDate","sourcePath":"components/page/Masthead.jsx"},{"name":"cnIssue","sourcePath":"components/page/Masthead.jsx"},{"name":"cnPage","sourcePath":"components/page/Masthead.jsx"},{"name":"grid","sourcePath":"components/diagram/diagramLayout.js"},{"name":"labelPoint","sourcePath":"components/diagram/diagramLayout.js"},{"name":"layered","sourcePath":"components/diagram/diagramLayout.js"},{"name":"routeEdge","sourcePath":"components/diagram/diagramLayout.js"},{"name":"runLayout","sourcePath":"components/diagram/diagramLayout.js"},{"name":"spanH","sourcePath":"components/diagram/diagramLayout.js"},{"name":"spanW","sourcePath":"components/diagram/diagramLayout.js"},{"name":"stack","sourcePath":"components/diagram/diagramLayout.js"},{"name":"tree","sourcePath":"components/diagram/diagramLayout.js"}]} */

(() => {

const __ds_ns = (window.YORUContentDesignSystem_a0b73e = window.YORUContentDesignSystem_a0b73e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/blocks/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Boxed aside, 铅字房版：文武线框（细边 + 外圈粗线）代替色底。
   语义靠一枚黄历式的单字标记：注 / 慎 / 忌 / 宜 / 按，用语义色；框永远是墨色。
   No fill, no left edge, no shadow. */
function Callout({
  title,
  kind = "note",
  children,
  style,
  ...rest
}) {
  const map = {
    note: ["var(--note)", "注"],
    warn: ["var(--warn)", "慎"],
    stop: ["var(--stop)", "忌"],
    ok: ["var(--ok)", "宜"],
    plain: ["var(--ink-3)", "按"]
  };
  const [c, mark] = map[kind] || map.note;
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      border: "var(--hair) solid var(--ink-1)",
      outline: "var(--wu) solid var(--ink-1)",
      outlineOffset: "5px",
      margin: "6px",
      padding: "var(--sp-4) var(--sp-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--fs-small)",
      color: c
    }
  }, mark), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--fs-small)",
      letterSpacing: ".1em",
      color: "var(--text-title)"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--ink-2)"
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/Callout.jsx", error: String((e && e.message) || e) }); }

// components/blocks/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Dark code block. Optional filename bar and line numbers. Never syntax-highlighted by hand.
   Recessed like PromptBlock, but with the dark pair of stops \u2014 on ink, the low
   stop is black and the high stop is a faint white. */
function CodeBlock({
  code = "",
  lang,
  filename,
  lines = false,
  style,
  ...rest
}) {
  const rows = String(code).replace(/\n$/, "").split("\n");
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-block)",
      overflow: "hidden",
      background: "var(--surface-code)",
      flexShrink: 0,
      boxShadow: "var(--shadow-inset-dark)",
      ...style
    }
  }, rest), (filename || lang) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "var(--sp-2) var(--sp-4)",
      borderBottom: "var(--hair) solid rgba(255,255,255,.1)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: ".06em",
      color: "rgba(255,255,255,.55)"
    }
  }, /*#__PURE__*/React.createElement("span", null, filename), /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: "uppercase"
    }
  }, lang)), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: "var(--sp-4)",
      overflowX: "hidden",
      overflowY: "visible",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-code)",
      lineHeight: "var(--lh-code)",
      color: "#E8EAF0",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word"
    }
  }, rows.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: "var(--sp-3)"
    }
  }, lines && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,.28)",
      userSelect: "none",
      flex: "none",
      textAlign: "right",
      minWidth: "2.2em"
    }
  }, i + 1), /*#__PURE__*/React.createElement("code", {
    style: {
      flex: 1
    }
  }, l || " ")))));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/blocks/CompareTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Hairline comparison table. Column 1 is the criterion, the rest are the things compared. */
function CompareTable({
  columns = [],
  rows = [],
  highlight,
  caption,
  style,
  ...rest
}) {
  const cell = {
    padding: "var(--sp-3) var(--sp-3)",
    textAlign: "left",
    verticalAlign: "top",
    fontSize: "var(--fs-small)",
    lineHeight: "var(--lh-tight)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...cell,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      color: i === highlight ? "var(--accent-ink)" : "var(--text-title)",
      background: i === highlight ? "var(--accent-soft)" : "transparent",
      borderBottom: "var(--rule) solid var(--border-strong)",
      whiteSpace: "nowrap"
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, r.map((v, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      ...cell,
      borderBottom: "var(--hair) solid var(--border-hair)",
      color: ci === 0 ? "var(--text-muted)" : "var(--ink-2)",
      fontWeight: ci === 0 ? 500 : 400,
      background: ci === highlight ? "var(--accent-soft)" : "transparent"
    }
  }, v)))))), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, caption));
}
Object.assign(__ds_scope, { CompareTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/CompareTable.jsx", error: String((e && e.message) || e) }); }

// components/blocks/MarginNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 手写旁批 — the aside in the author's own voice.

   A tinted slip, tilted a degree or so, holding something the article itself
   would not say: what went wrong, what took three days, what you would skip. It
   is the one place in the system where the writing is allowed to be personal, so
   keep it short — one or two lines — and never use it for information the reader
   needs. Anything load-bearing belongs in <Callout>.

   One per page at most. Two tilted slips on a page stop reading as handwriting
   and start reading as a template. */
function MarginNote({
  children,
  tone = "tint",
  tilt = -1.4,
  width,
  float,
  style,
  ...rest
}) {
  const tinted = tone === "tint";
  const pos = float ? {
    position: "absolute",
    top: "var(--note-top, 58%)",
    [float]: "calc(var(--page-pad-x) * -0.35)",
    width: width || "min(38%, 340px)"
  } : {
    maxWidth: width || "min(62%, 520px)"
  };
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      ...pos,
      transform: `rotate(${tilt}deg)`,
      background: tinted ? "var(--accent-soft)" : "transparent",
      color: tinted ? "var(--accent-ink)" : "var(--text-muted)",
      borderBottom: tinted ? "none" : "var(--hair) solid var(--border-rule)",
      padding: tinted ? "var(--sp-3) var(--sp-4)" : "0 0 var(--sp-1)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-small)",
      lineHeight: 1.6,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { MarginNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/MarginNote.jsx", error: String((e && e.message) || e) }); }

// components/blocks/PromptBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A prompt is quotable content, not code: light ground, mono face, copy affordance.
   Recessed rather than outlined \u2014 the inset shading says "lift this out of the
   page", which is what a prompt is for. A recessed block takes no outer border;
   the shading is the edge. */
function PromptBlock({
  label = "提示词 · 可抄",
  model,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-block)",
      boxShadow: "var(--shadow-inset)",
      flexShrink: 0,
      background: "var(--accent-soft)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--sp-3)",
      padding: "var(--sp-2) var(--sp-4)",
      borderBottom: "var(--hair) solid var(--accent-hair)",
      fontFamily: "var(--font-sans-cjk)",
      fontWeight: 700,
      fontSize: "var(--fs-label)",
      letterSpacing: ".2em",
      color: "var(--accent-ink)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), model && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontFamily: "var(--font-fangsong)",
      color: "var(--text-muted)",
      letterSpacing: ".05em"
    }
  }, model)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sp-4)",
      fontFamily: "var(--font-fangsong)",
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--ink-2)",
      whiteSpace: "pre-wrap"
    }
  }, children));
}
Object.assign(__ds_scope, { PromptBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/PromptBlock.jsx", error: String((e && e.message) || e) }); }

// components/blocks/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Pull quote, 铅字房版：一枚大号「引导，收尾的」贴回句末，无横线无竖线。
   引号是变体深色，句子是宋体中字重。 */
function Quote({
  children,
  cite,
  source,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "flex",
      gap: "var(--sp-4)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 900,
      fontSize: "var(--fs-h2)",
      lineHeight: 1,
      color: "var(--text-accent)",
      flex: "none"
    }
  }, "\u300C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      paddingTop: "0.18em"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: 500,
      fontSize: "var(--fs-h3)",
      lineHeight: "var(--lh-h2)",
      color: "var(--text-title)"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--text-accent)"
    }
  }, "\u300D")), (cite || source) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-fangsong)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, "—— ", cite, source && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, " · " + source))));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/Quote.jsx", error: String((e && e.message) || e) }); }

// components/blocks/ReferenceList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ReferenceList({
  items = [],
  title = "参考",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      borderBottom: "var(--hair) solid var(--border-hair)",
      paddingBottom: "var(--sp-2)"
    }
  }, title), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--sp-3)",
      fontSize: "var(--fs-caption)",
      lineHeight: "var(--lh-tight)",
      color: "var(--ink-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "yoru-num",
    style: {
      color: "var(--accent)"
    }
  }, "[" + (i + 1) + "]"), /*#__PURE__*/React.createElement("span", null, it.title, it.source && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, " · " + it.source), it.url && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontSize: "0.92em",
      color: "var(--text-faint)",
      wordBreak: "break-all"
    }
  }, it.url))))));
}
Object.assign(__ds_scope, { ReferenceList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/ReferenceList.jsx", error: String((e && e.message) || e) }); }

// components/blocks/StepList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Numbered walkthrough，铅字房版：汉字编号 壹貳叁，宋体，变体深色。Steps are separated
   by a hairline ABOVE each one — the numeral column itself is the structure. */
const CN_STEP = ["壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖", "拾"];
function StepList({
  steps = [],
  start = 1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)",
      ...style
    }
  }, rest), steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--sp-4)",
      alignItems: "start",
      borderTop: i ? "var(--hair) solid var(--border-hair)" : "none",
      paddingTop: i ? "var(--sp-4)" : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--fs-h3)",
      lineHeight: "var(--lh-tight)",
      color: "var(--text-accent)"
    }
  }, CN_STEP[start + i - 1] ?? String(start + i)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--fs-h3)",
      lineHeight: "var(--lh-tight)",
      color: "var(--text-title)"
    }
  }, s.title), s.body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--ink-3)"
    }
  }, s.body), s.extra))));
}
Object.assign(__ds_scope, { StepList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blocks/StepList.jsx", error: String((e && e.message) || e) }); }

// components/diagram/DiagramAnnotation.jsx
try { (() => {
/* A margin note with a short leader stub. Sits in the diagram's outer margin at
   the anchor's height — never between nodes, so it can never collide with one.
   The only place prose is allowed inside a diagram. */
function DiagramAnnotation({
  text,
  x,
  y,
  side = "right",
  width = 200,
  style
}) {
  const left = side === "left";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: x,
      top: y - 10,
      width,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      pointerEvents: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 11,
      [left ? "right" : "left"]: -26,
      width: 22,
      height: "var(--dg-stroke-hair)",
      background: "var(--dg-line)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-note-label)",
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, "NOTE"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--dg-fs-note)",
      lineHeight: 1.6,
      color: "var(--dg-fg-3)"
    }
  }, text));
}
Object.assign(__ds_scope, { DiagramAnnotation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/DiagramAnnotation.jsx", error: String((e && e.message) || e) }); }

// components/diagram/DiagramGroup.jsx
try { (() => {
/* A container frame around a set of nodes. Hairline, label sitting on the top rule. */
function DiagramGroup({
  label,
  kind = "solid",
  x,
  y,
  w,
  h,
  style
}) {
  const dashed = kind === "dashed";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: x,
      top: y,
      width: w,
      height: h,
      boxSizing: "border-box",
      border: "var(--dg-stroke-hair) " + (dashed ? "dashed" : "solid") + " var(--dg-line)",
      borderRadius: "var(--dg-radius)",
      pointerEvents: "none",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -9,
      left: 14,
      padding: "0 8px",
      background: "var(--dg-surface)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-group-label)",
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--dg-fg-3)"
    }
  }, label));
}
Object.assign(__ds_scope, { DiagramGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/DiagramGroup.jsx", error: String((e && e.message) || e) }); }

// components/diagram/DiagramLegend.jsx
try { (() => {
const SW = {
  input: ["var(--dg-input-bg)", "var(--dg-input-line)", "hair"],
  process: ["var(--dg-process-bg)", "var(--dg-process-line)", "heavy"],
  human: ["var(--dg-human-bg)", "var(--dg-human-line)", "round"],
  agent: ["var(--dg-agent-bg)", "var(--dg-agent-line)", "cap"],
  tool: ["var(--dg-tool-bg)", "var(--dg-tool-line)", "dash"],
  data: ["var(--dg-data-bg)", "var(--dg-data-line)", "slab"],
  output: ["var(--dg-output-bg)", "var(--dg-output-line)", "fill"],
  external: ["var(--dg-external-bg)", "var(--dg-external-line)", "dash"]
};
/* Reads the roles actually used in the diagram. Never print the full eight if only three appear. */
function DiagramLegend({
  roles = [],
  statuses = [],
  edges = [],
  style
}) {
  const chip = r => {
    const [bg, line, shape] = SW[r] || SW.process;
    return /*#__PURE__*/React.createElement("span", {
      key: r,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 22,
        height: 14,
        background: bg,
        border: (shape === "heavy" ? "2.5px" : shape === "hair" ? "1px" : "1.5px") + " " + (shape === "dash" ? "dashed" : "solid") + " " + line,
        borderRadius: shape === "round" ? 6 : 2,
        borderTopWidth: shape === "cap" ? 4 : undefined,
        boxShadow: shape === "slab" ? "inset 0 5px 0 -4px " + line : undefined,
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--dg-fs-legend)",
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: "var(--dg-fg-3)"
      }
    }, r));
  };
  const EK = {
    flow: "流程",
    data: "数据",
    dep: "依赖",
    weak: "弱关联"
  };
  const SK = {
    verified: ["var(--dg-verified)", "已验证"],
    failed: ["var(--dg-failed)", "失败"],
    unknown: ["var(--dg-unknown)", "未知"]
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px 22px",
      alignItems: "center",
      ...style
    }
  }, roles.map(chip), edges.map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "8",
    style: {
      display: "block",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 4 H22",
    stroke: "var(--dg-edge-" + k + ")",
    strokeWidth: k === "dep" || k === "weak" ? 1 : 1.75,
    strokeDasharray: k === "dep" ? "7 5" : k === "weak" ? "2 5" : undefined,
    fill: "none"
  }), k !== "weak" && /*#__PURE__*/React.createElement("path", {
    d: "M26 4 L20 1.5 L20 6.5 Z",
    fill: "var(--dg-edge-" + k + ")"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-legend)",
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--dg-fg-3)"
    }
  }, EK[k] || k))), statuses.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: SK[s][0],
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-legend)",
      letterSpacing: ".14em",
      color: "var(--dg-fg-3)"
    }
  }, SK[s][1]))));
}
Object.assign(__ds_scope, { DiagramLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/DiagramLegend.jsx", error: String((e && e.message) || e) }); }

// components/diagram/DiagramNode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A diagram node. Role is carried by border weight, border style, fill and the mono
   role label — never by a hue of its own and never by a left-hand accent bar.
   Status is a coloured dot, nothing more. */
const ROLE = {
  input: {
    bg: "var(--dg-input-bg)",
    line: "var(--dg-input-line)",
    fg: "var(--dg-input-fg)",
    bw: "var(--dg-stroke-hair)",
    dash: "solid"
  },
  process: {
    bg: "var(--dg-process-bg)",
    line: "var(--dg-process-line)",
    fg: "var(--dg-process-fg)",
    bw: "var(--dg-process-weight)",
    dash: "solid"
  },
  human: {
    bg: "var(--dg-human-bg)",
    line: "var(--dg-human-line)",
    fg: "var(--dg-human-fg)",
    bw: "var(--dg-stroke)",
    dash: "solid",
    radius: "var(--dg-radius-human)"
  },
  agent: {
    bg: "var(--dg-agent-bg)",
    line: "var(--dg-agent-line)",
    fg: "var(--dg-agent-fg)",
    bw: "var(--dg-stroke)",
    dash: "solid",
    cap: true
  },
  tool: {
    bg: "var(--dg-tool-bg)",
    line: "var(--dg-tool-line)",
    fg: "var(--dg-tool-fg)",
    bw: "var(--dg-stroke-hair)",
    dash: "dashed"
  },
  data: {
    bg: "var(--dg-data-bg)",
    line: "var(--dg-data-line)",
    fg: "var(--dg-data-fg)",
    bw: "var(--dg-stroke)",
    dash: "solid",
    slab: true
  },
  output: {
    bg: "var(--dg-output-bg)",
    line: "var(--dg-output-line)",
    fg: "var(--dg-output-fg)",
    bw: "var(--dg-stroke)",
    dash: "solid"
  },
  external: {
    bg: "var(--dg-external-bg)",
    line: "var(--dg-external-line)",
    fg: "var(--dg-external-fg)",
    bw: "var(--dg-stroke-hair)",
    dash: "dashed"
  }
};
const STATUS = {
  verified: ["var(--dg-verified)", "VERIFIED"],
  failed: ["var(--dg-failed)", "FAILED"],
  unknown: ["var(--dg-unknown)", "UNKNOWN"]
};
function DiagramNode({
  role = "process",
  status,
  label,
  meta,
  index,
  showRole = true,
  statusLabel = false,
  x,
  y,
  w,
  h,
  style,
  ...rest
}) {
  const r = ROLE[role] || ROLE.process;
  const st = status ? STATUS[status] : null;
  const placed = x != null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: placed ? "absolute" : "relative",
      left: x,
      top: y,
      width: w,
      height: h,
      minHeight: placed ? undefined : 92,
      boxSizing: "border-box",
      background: r.bg,
      color: r.fg,
      border: r.bw + " " + r.dash + " " + r.line,
      borderRadius: r.radius || "var(--dg-radius)",
      borderTopWidth: r.cap ? "var(--dg-stroke-bar)" : undefined,
      boxShadow: r.slab ? "inset 0 7px 0 -6px " + r.line : "none",
      padding: "var(--dg-node-pad)",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      justifyContent: "center",
      ...style
    }
  }, rest), (showRole || index != null) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-node-role)",
      letterSpacing: ".16em",
      textTransform: "uppercase",
      opacity: .7
    }
  }, index != null && /*#__PURE__*/React.createElement("span", null, String(index).padStart(2, "0")), showRole && /*#__PURE__*/React.createElement("span", null, role)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "var(--dg-fs-node-label)",
      lineHeight: 1.45,
      letterSpacing: ".01em"
    }
  }, label), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-node-meta)",
      lineHeight: 1.4,
      opacity: .62
    }
  }, meta), st && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      right: 10,
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, statusLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-node-status)",
      letterSpacing: ".14em",
      color: st[0]
    }
  }, st[1]), /*#__PURE__*/React.createElement("i", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: st[0],
      display: "block"
    }
  })));
}
Object.assign(__ds_scope, { DiagramNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/DiagramNode.jsx", error: String((e && e.message) || e) }); }

// components/diagram/diagramLayout.js
try { (() => {
/* Pure geometry for YORU diagrams. No React, no DOM, no measurement:
   every node sits on a fixed cell grid, so the same {nodes, edges} always
   produces the same picture. This is what makes the system safe to generate. */

const GEO = {
  colW: 240,
  colGap: 88,
  rowH: 92,
  rowGap: 44,
  elbow: 10,
  lane: 34
};

/* Compact cell grid for phone portrait and the WeChat column. Same proportions,
   smaller cells — the type inside a node does NOT shrink with it. */
const GEO_COMPACT = {
  colW: 148,
  colGap: 34,
  rowH: 78,
  rowGap: 34,
  elbow: 8,
  lane: 28
};
function cellX(col, g = GEO) {
  return col * (g.colW + g.colGap);
}
function cellY(row, g = GEO) {
  return row * (g.rowH + g.rowGap);
}
function spanW(n = 1, g = GEO) {
  return n * g.colW + (n - 1) * g.colGap;
}
function spanH(n = 1, g = GEO) {
  return n * g.rowH + (n - 1) * g.rowGap;
}

/* ---- layouts: every one returns nodes with {col,row} filled in ---- */

function incoming(nodes, edges) {
  const m = {};
  nodes.forEach(n => m[n.id] = 0);
  edges.forEach(e => {
    if (m[e.to] != null) m[e.to]++;
  });
  return m;
}

/** left-to-right layers by longest path from the roots — flowcharts, architecture, workflows.
    Cycle-safe: a back edge (打回 / retry) is ignored when computing depth, otherwise a
    single retry loop would push every downstream node one column further on each pass. */
function layered(nodes, edges) {
  const inc = incoming(nodes, edges);
  const outs = {};
  nodes.forEach(n => outs[n.id] = []);
  edges.forEach(e => {
    if (outs[e.from] && outs[e.to] !== undefined) outs[e.from].push(e.to);
  });
  const depth = {};
  let budget = 400;
  const visit = (id, d, path) => {
    if (path.has(id) || budget-- < 0) return; // back edge: not a depth constraint
    if (depth[id] != null && depth[id] >= d) return;
    depth[id] = d;
    path.add(id);
    outs[id].forEach(t => visit(t, d + 1, path));
    path.delete(id);
  };
  const roots = nodes.filter(n => inc[n.id] === 0).map(n => n.id);
  (roots.length ? roots : nodes.slice(0, 1).map(n => n.id)).forEach(id => visit(id, 0, new Set()));
  nodes.forEach(n => {
    if (depth[n.id] == null) depth[n.id] = 0;
  });
  const cols = {};
  nodes.forEach(n => {
    const c = n.col != null ? n.col : depth[n.id];
    (cols[c] = cols[c] || []).push(n);
  });
  const tallest = Math.max(...Object.values(cols).map(a => a.length));
  const out = [];
  Object.keys(cols).map(Number).sort((a, b) => a - b).forEach(c => {
    const list = cols[c];
    const offset = (tallest - list.length) / 2;
    list.forEach((n, i) => out.push({
      ...n,
      col: c,
      row: n.row != null ? n.row : offset + i
    }));
  });
  return out;
}

/** horizontal tree from a single root — mind maps, taxonomies */
function tree(nodes, edges) {
  const byId = {};
  nodes.forEach(n => byId[n.id] = {
    ...n,
    kids: []
  });
  const inc = incoming(nodes, edges);
  edges.forEach(e => {
    if (byId[e.from] && byId[e.to]) byId[e.from].kids.push(byId[e.to]);
  });
  const roots = nodes.filter(n => inc[n.id] === 0).map(n => byId[n.id]);
  let slot = 0;
  const place = (n, depth) => {
    if (n.col != null) return; // already placed: cycle or shared child
    n.col = depth;
    const kids = n.kids.filter(k => k.col == null);
    if (!kids.length) {
      n.row = slot++;
      return;
    }
    kids.forEach(k => place(k, depth + 1));
    n.row = (kids[0].row + kids[kids.length - 1].row) / 2;
  };
  (roots.length ? roots : nodes.slice(0, 1).map(n => byId[n.id])).forEach(r => place(r, 0));
  nodes.forEach(n => {
    const b = byId[n.id];
    if (b.col == null) {
      b.col = 0;
      b.row = slot++;
    }
  });
  return nodes.map(n => ({
    ...n,
    col: byId[n.id].col,
    row: byId[n.id].row
  }));
}

/** explicit col/row straight from the author — comparisons, matrices, anything hand-placed */
function grid(nodes) {
  return nodes.map((n, i) => ({
    ...n,
    col: n.col != null ? n.col : i,
    row: n.row != null ? n.row : 0
  }));
}

/** Flip a laid-out set onto its side: depth runs top→bottom, siblings sit
    left→right. This is the phone-portrait form of a flowchart — the diagram gets
    taller instead of smaller, so node type stays at its authored size. Pair with
    axis:"y" routing and GEO_COMPACT. */
function stack(nodes) {
  const depths = [...new Set(nodes.map(n => n.col))].sort((a, b) => a - b);
  const out = [];
  depths.forEach((d, i) => {
    const sibs = nodes.filter(n => n.col === d).sort((a, b) => a.row - b.row);
    const offset = (sibs.length - 1) / 2;
    sibs.forEach((n, j) => out.push({
      ...n,
      col: j - offset,
      row: i
    }));
  });
  const minCol = Math.min(...out.map(n => n.col));
  return out.map(n => ({
    ...n,
    col: n.col - minCol
  }));
}
function runLayout(kind, nodes, edges) {
  if (kind === "tree") return tree(nodes, edges);
  if (kind === "grid") return grid(nodes);
  return layered(nodes, edges);
}

/** turn laid-out nodes into pixel boxes + the diagram's intrinsic size */
function boxes(nodes, g = GEO) {
  const map = {};
  nodes.forEach(n => {
    const w = spanW(n.colSpan || 1, g),
      h = spanH(n.rowSpan || 1, g);
    map[n.id] = {
      ...n,
      x: cellX(n.col, g),
      y: cellY(n.row, g),
      w,
      h
    };
  });
  const all = Object.values(map);
  const width = all.length ? Math.max(...all.map(b => b.x + b.w)) : 0;
  const height = all.length ? Math.max(...all.map(b => b.y + b.h)) : 0;
  return {
    map,
    width,
    height
  };
}

/* ---- routing: rounded orthogonal elbows, one lane for back edges ---- */
const r = (v, p = 2) => Math.round(v * 10 ** p) / 10 ** p;
function routeEdge(a, b, opts = {}) {
  const g = opts.geo || GEO,
    R = g.elbow,
    axis = opts.axis || "x";
  if (!a || !b) return null;
  const ac = {
      x: a.x + a.w / 2,
      y: a.y + a.h / 2
    },
    bc = {
      x: b.x + b.w / 2,
      y: b.y + b.h / 2
    };
  const forward = b.x >= a.x + a.w - 1;
  const below = b.y >= a.y + a.h - 1,
    above = b.y + b.h <= a.y + 1;
  const sameCol = Math.abs(ac.x - bc.x) < 1;

  // A straight vertical run is right for column neighbours — but in a vertical
  // flow an upward edge is a BACK edge, and drawing it straight would lay it on
  // top of the forward edge it returns along. Send those to the side lane.
  const straightUp = above && axis !== "y";
  if (sameCol && (below || straightUp)) {
    const sy = below ? a.y + a.h : a.y,
      ty = below ? b.y : b.y + b.h;
    return {
      d: `M ${r(ac.x)} ${r(sy)} V ${r(ty)}`,
      tip: {
        x: ac.x,
        y: ty,
        dir: below ? "down" : "up"
      }
    };
  }
  if (axis === "y" && below) {
    // top→bottom, elbow at the mid gutter
    const sx = ac.x,
      sy = a.y + a.h,
      tx = bc.x,
      ty = b.y;
    const my = sy + (ty - sy) / 2,
      s = tx > sx ? 1 : -1;
    return {
      d: `M ${r(sx)} ${r(sy)} V ${r(my - R)} Q ${r(sx)} ${r(my)} ${r(sx + s * R)} ${r(my)} H ${r(tx - s * R)} Q ${r(tx)} ${r(my)} ${r(tx)} ${r(my + R)} V ${r(ty)}`,
      tip: {
        x: tx,
        y: ty,
        dir: "down"
      }
    };
  }
  if (axis !== "y" && forward) {
    // left→right, elbow at the mid gutter
    const sx = a.x + a.w,
      sy = ac.y,
      tx = b.x,
      ty = bc.y;
    if (Math.abs(sy - ty) < 1) return {
      d: `M ${r(sx)} ${r(sy)} H ${r(tx)}`,
      tip: {
        x: tx,
        y: ty,
        dir: "right"
      }
    };
    const mx = sx + (tx - sx) / 2,
      s = ty > sy ? 1 : -1;
    return {
      d: `M ${r(sx)} ${r(sy)} H ${r(mx - R)} Q ${r(mx)} ${r(sy)} ${r(mx)} ${r(sy + s * R)} V ${r(ty - s * R)} Q ${r(mx)} ${r(ty)} ${r(mx + R)} ${r(ty)} H ${r(tx)}`,
      tip: {
        x: tx,
        y: ty,
        dir: "right"
      }
    };
  }
  // back edge — in a vertical flow it runs up a side lane, otherwise under both nodes
  if (axis === "y") {
    const laneX = Math.max(a.x + a.w, b.x + b.w) + g.lane;
    const sy = ac.y,
      ty = bc.y,
      s = ty > sy ? 1 : -1;
    return {
      d: `M ${r(a.x + a.w)} ${r(sy)} H ${r(laneX - R)} Q ${r(laneX)} ${r(sy)} ${r(laneX)} ${r(sy + s * R)} V ${r(ty - s * R)} Q ${r(laneX)} ${r(ty)} ${r(laneX - R)} ${r(ty)} H ${r(b.x + b.w)}`,
      tip: {
        x: b.x + b.w,
        y: ty,
        dir: "left"
      },
      laneX
    };
  }
  const lane = Math.max(a.y + a.h, b.y + b.h) + g.lane;
  const sx = ac.x,
    tx = bc.x,
    s = tx > sx ? 1 : -1;
  return {
    d: `M ${r(sx)} ${r(a.y + a.h)} V ${r(lane - R)} Q ${r(sx)} ${r(lane)} ${r(sx + s * R)} ${r(lane)} H ${r(tx - s * R)} Q ${r(tx)} ${r(lane)} ${r(tx)} ${r(lane - R)} V ${r(b.y + b.h)}`,
    tip: {
      x: tx,
      y: b.y + b.h,
      dir: "up"
    },
    lane
  };
}

/** arrowhead as its own path so it always matches the stroke colour */
function arrowPath(tip, size = 9) {
  const {
      x,
      y,
      dir
    } = tip,
    s = size;
  if (dir === "right") return `M ${x} ${y} L ${x - s} ${y - s * .5} L ${x - s} ${y + s * .5} Z`;
  if (dir === "left") return `M ${x} ${y} L ${x + s} ${y - s * .5} L ${x + s} ${y + s * .5} Z`;
  if (dir === "down") return `M ${x} ${y} L ${x - s * .5} ${y - s} L ${x + s * .5} ${y - s} Z`;
  return `M ${x} ${y} L ${x - s * .5} ${y + s} L ${x + s * .5} ${y + s} Z`;
}

/** where an edge label sits — the middle of the run, above the line */
function labelPoint(a, b, route, axis = "x") {
  if (!route) return null;
  if (route.laneX != null) return {
    x: route.laneX + 8,
    y: (a.y + a.h / 2 + b.y + b.h / 2) / 2
  };
  if (route.lane != null) return {
    x: (a.x + a.w / 2 + b.x + b.w / 2) / 2,
    y: route.lane - 8
  };
  if (axis === "y" && b.y >= a.y + a.h - 1) return {
    x: (a.x + a.w / 2 + b.x + b.w / 2) / 2,
    y: (a.y + a.h + b.y) / 2 + 4
  };
  const forward = b.x >= a.x + a.w - 1;
  if (forward) return {
    x: a.x + a.w + (b.x - (a.x + a.w)) / 2,
    y: (a.y + a.h / 2 + b.y + b.h / 2) / 2 - 9
  };
  return {
    x: a.x + a.w / 2 + 10,
    y: (a.y + a.h + b.y) / 2
  };
}
Object.assign(__ds_scope, { GEO, GEO_COMPACT, cellX, cellY, spanW, spanH, layered, tree, grid, stack, runLayout, boxes, routeEdge, arrowPath, labelPoint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/diagramLayout.js", error: String((e && e.message) || e) }); }

// components/diagram/DiagramEdge.jsx
try { (() => {
/* A connector. Renders SVG — must live inside the <svg> that <Diagram> provides. */
const KIND = {
  flow: {
    c: "var(--dg-edge-flow)",
    w: "var(--dg-stroke)",
    dash: null
  },
  data: {
    c: "var(--dg-edge-data)",
    w: "var(--dg-stroke)",
    dash: null
  },
  dep: {
    c: "var(--dg-edge-dep)",
    w: "var(--dg-stroke-hair)",
    dash: "var(--dg-dash-dep)"
  },
  weak: {
    c: "var(--dg-edge-weak)",
    w: "var(--dg-stroke-hair)",
    dash: "var(--dg-dash-weak)"
  }
};
function DiagramEdge({
  from,
  to,
  kind = "flow",
  label,
  arrow = true,
  both = false,
  geo,
  axis = "x"
}) {
  const k = KIND[kind] || KIND.flow;
  const route = __ds_scope.routeEdge(from, to, {
    geo,
    axis
  });
  if (!route) return null;
  const lp = label ? __ds_scope.labelPoint(from, to, route, axis) : null;
  const txt = String(label ?? "");
  const cw = /[\u3400-\u9FFF\uF900-\uFAFF]/.test(txt) ? 12 : 7.2;
  const back = axis === "y" ? {
    x: from.x + from.w / 2,
    y: from.y + from.h,
    dir: "up"
  } : {
    x: from.x + from.w,
    y: from.y + from.h / 2,
    dir: "left"
  };
  return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: route.d,
    fill: "none",
    stroke: k.c,
    strokeWidth: k.w,
    strokeDasharray: k.dash || undefined,
    strokeLinecap: "butt"
  }), arrow && /*#__PURE__*/React.createElement("path", {
    d: __ds_scope.arrowPath(route.tip, 9),
    fill: k.c
  }), both && /*#__PURE__*/React.createElement("path", {
    d: __ds_scope.arrowPath(back, 9),
    fill: k.c
  }), lp && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: lp.x - (txt.length * cw / 2 + 7),
    y: lp.y - 9,
    width: txt.length * cw + 14,
    height: 18,
    fill: "var(--dg-surface)"
  }), /*#__PURE__*/React.createElement("text", {
    x: lp.x,
    y: lp.y + 4,
    textAnchor: "middle",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-edge-label)",
      letterSpacing: ".04em"
    },
    fill: "var(--dg-fg-3)"
  }, label)));
}
Object.assign(__ds_scope, { DiagramEdge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/DiagramEdge.jsx", error: String((e && e.message) || e) }); }

// components/diagram/Diagram.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = 30,
  GPAD = 22,
  GTOP = 30,
  NOTE_W = 210,
  NOTE_GAP = 34;
/* Below this scale a 15px node label renders under ~9px — past that the diagram
   stops being readable and reflows to a vertical flow instead of shrinking. */
const MIN_SCALE = 0.62;

/* Lay nodes out in pixels and work out the scene box: node boxes, group frames,
   side annotations and the back-edge lane. Pure — no DOM, no state — so the
   frame can measure the wide form and the stacked form in the same render and
   pick between them. In the vertical form annotations move under the diagram,
   because a 210px side note is exactly what does not fit on a phone. */
function measure(placed, baseGeo, geoOverride, groups, annotations, edges, vertical) {
  const g = {
    ...baseGeo,
    ...(geoOverride || {})
  };
  const {
    map,
    width,
    height
  } = __ds_scope.boxes(placed, g);
  const hasBack = edges.some(e => map[e.from] && map[e.to] && (vertical ? map[e.to].y < map[e.from].y + map[e.from].h - 1 && Math.abs(map[e.to].y + map[e.to].h / 2 - (map[e.from].y + map[e.from].h / 2)) > 1 : map[e.to].x < map[e.from].x + map[e.from].w - 1 && Math.abs(map[e.to].x + map[e.to].w / 2 - (map[e.from].x + map[e.from].w / 2)) > 1));
  const gboxes = groups.map(gr => {
    const bs = (gr.nodes || []).map(id => map[id]).filter(Boolean);
    if (!bs.length) return null;
    const x1 = Math.min(...bs.map(b => b.x)) - GPAD,
      y1 = Math.min(...bs.map(b => b.y)) - GTOP;
    const x2 = Math.max(...bs.map(b => b.x + b.w)) + GPAD,
      y2 = Math.max(...bs.map(b => b.y + b.h)) + GPAD;
    return {
      ...gr,
      x: x1,
      y: y1,
      w: x2 - x1,
      h: y2 - y1
    };
  }).filter(Boolean);
  const gRight = Math.max(width, ...gboxes.map(b => b.x + b.w));
  const gLeft = Math.min(0, ...gboxes.map(b => b.x));
  const aboxes = vertical ? [] : annotations.map(a => {
    const b = map[a.at];
    if (!b) return null;
    const side = a.side || "right";
    return {
      ...a,
      side,
      x: side === "left" ? gLeft - NOTE_GAP - NOTE_W : gRight + NOTE_GAP,
      y: b.y + b.h / 2
    };
  }).filter(Boolean);
  const notes = vertical ? annotations.filter(a => map[a.at]).map(a => ({
    ...a,
    label: map[a.at].label
  })) : [];
  const extraR = aboxes.some(a => a.side === "right") ? NOTE_GAP + NOTE_W : 0;
  const extraL = aboxes.some(a => a.side === "left") ? NOTE_GAP + NOTE_W : 0;
  const minX = Math.min(0, ...gboxes.map(b => b.x)) - extraL;
  const minY = Math.min(0, ...gboxes.map(b => b.y));
  const laneRoom = hasBack ? g.lane + 26 : 0;
  const W = Math.max(width, ...gboxes.map(b => b.x + b.w)) - minX + extraR + (vertical ? laneRoom : 0);
  const H = Math.max(height, ...gboxes.map(b => b.y + b.h)) - minY + (vertical ? 0 : laneRoom);
  return {
    map,
    g,
    gboxes,
    aboxes,
    notes,
    sceneW: W + PAD * 2,
    sceneH: H + PAD * 2,
    ox: PAD - minX,
    oy: PAD - minY
  };
}

/* The diagram frame. Give it {nodes, edges} and it lays out, routes, scales to
   fit its container, and prints the title / caption / source furniture.

   On a narrow container (phone portrait, the WeChat column) it does NOT simply
   scale down: it flips the flow top→bottom on a compact cell grid, so the
   diagram grows taller and the type stays legible. Set stack="never" to force
   the wide form, "always" to author a vertical diagram directly. */
function Diagram({
  nodes = [],
  edges = [],
  groups = [],
  annotations = [],
  layout = "layered",
  title,
  kicker,
  caption,
  source,
  legend = false,
  theme = "light",
  grid = false,
  fit = true,
  stack: stackMode = "auto",
  geo,
  style,
  ...rest
}) {
  const wrap = React.useRef(null);
  const [avail, setAvail] = React.useState(null);
  const base = __ds_scope.runLayout(layout, nodes, edges);
  const wide = measure(base, __ds_scope.GEO, geo, groups, annotations, edges);
  const tooNarrow = avail != null && avail / wide.sceneW < MIN_SCALE;
  const vertical = stackMode === "always" || stackMode === "auto" && tooNarrow;
  const g = vertical ? {
    ...__ds_scope.GEO_COMPACT,
    ...(geo || {})
  } : {
    ...__ds_scope.GEO,
    ...(geo || {})
  };
  const placed = vertical ? __ds_scope.stack(base) : base;
  const axis = vertical ? "y" : "x";
  const M = vertical ? measure(placed, __ds_scope.GEO_COMPACT, geo, groups, annotations, edges, true) : wide;
  const {
    map,
    sceneW,
    sceneH,
    ox,
    oy,
    gboxes,
    aboxes,
    notes
  } = M;
  React.useLayoutEffect(() => {
    if (!wrap.current) return;
    const el = wrap.current;
    const read = () => setAvail(el.clientWidth);
    const ro = new ResizeObserver(read);
    ro.observe(el);
    read();
    return () => ro.disconnect();
  }, []);
  const s = fit && avail ? avail / sceneW : 1;
  const usedRoles = [...new Set(placed.map(n => n.role || "process"))];
  const usedEdges = [...new Set(edges.map(e => e.kind || "flow"))];
  const usedStatus = [...new Set(placed.map(n => n.status).filter(Boolean))];
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: "yoru-diagram",
    "data-dg-theme": theme,
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      background: "var(--dg-surface)",
      ...style
    }
  }, rest), (kicker || title) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-kicker)",
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--dg-fs-title)",
      lineHeight: 1.35,
      color: "var(--dg-fg)"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    style: {
      width: "100%",
      height: sceneH * s,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: sceneW,
      height: sceneH,
      transform: "scale(" + s + ")",
      transformOrigin: "top left"
    }
  }, grid && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "radial-gradient(var(--dg-grid) 1px, transparent 1px)",
      backgroundSize: "22px 22px",
      backgroundPosition: ox + "px " + oy + "px"
    }
  }), gboxes.map((b, i) => /*#__PURE__*/React.createElement(__ds_scope.DiagramGroup, {
    key: i,
    label: b.label,
    kind: b.kind,
    x: b.x + ox,
    y: b.y + oy,
    w: b.w,
    h: b.h
  })), /*#__PURE__*/React.createElement("svg", {
    width: sceneW,
    height: sceneH,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(" + ox + "," + oy + ")"
  }, edges.map((e, i) => /*#__PURE__*/React.createElement(__ds_scope.DiagramEdge, {
    key: i,
    from: map[e.from],
    to: map[e.to],
    kind: e.kind,
    label: e.label,
    both: e.both,
    arrow: e.arrow !== false,
    geo: g,
    axis: axis
  })))), placed.map(n => {
    const b = map[n.id];
    return /*#__PURE__*/React.createElement(__ds_scope.DiagramNode, {
      key: n.id,
      role: n.role,
      status: n.status,
      label: n.label,
      meta: n.meta,
      index: n.index,
      showRole: n.showRole !== false,
      statusLabel: n.statusLabel,
      x: b.x + ox,
      y: b.y + oy,
      w: b.w,
      h: b.h
    });
  }), aboxes.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.DiagramAnnotation, {
    key: i,
    text: a.text,
    side: a.side,
    width: NOTE_W,
    x: a.x + ox,
    y: a.y + oy
  })))), (legend || caption || source || notes.length > 0) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      borderTop: "1px solid var(--dg-line)",
      paddingTop: 14
    }
  }, notes.length > 0 && /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, notes.map((n, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 9,
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "yoru-num",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-note-label)",
      letterSpacing: ".1em",
      color: "var(--accent)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--dg-fs-note)",
      lineHeight: 1.6,
      color: "var(--dg-fg-2)"
    }
  }, n.label && /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500,
      color: "var(--dg-fg)"
    }
  }, n.label, " "), n.text)))), legend && /*#__PURE__*/React.createElement(__ds_scope.DiagramLegend, {
    roles: usedRoles,
    edges: usedEdges,
    statuses: usedStatus
  }), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--dg-fs-caption)",
      lineHeight: 1.6,
      color: "var(--dg-fg-3)"
    }
  }, caption), source && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-source)",
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--dg-fg-3)",
      opacity: .8
    }
  }, source)));
}
Object.assign(__ds_scope, { Diagram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagram/Diagram.jsx", error: String((e && e.message) || e) }); }

// components/labels/SectionMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The 01 / 06 corner mark. Also used as a run-in numeral for sections. */
function SectionMark({
  index,
  total,
  label,
  size = "md",
  style,
  ...rest
}) {
  const fs = size === "lg" ? "var(--fs-h3)" : "var(--fs-label)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: "var(--sp-2)",
      fontFamily: "var(--font-label)",
      fontSize: fs,
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "yoru-num",
    style: {
      color: "var(--accent)",
      fontWeight: 500
    }
  }, String(index).padStart(2, "0"), total ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, " / " + String(total).padStart(2, "0")) : null), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { SectionMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/SectionMark.jsx", error: String((e && e.message) || e) }); }

// components/labels/StatusLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MAP = {
  new: {
    c: "var(--accent-ink)",
    bg: "var(--accent-soft)",
    t: "NEW"
  },
  ok: {
    c: "var(--ok)",
    bg: "var(--ok-soft)",
    t: "推荐"
  },
  warn: {
    c: "var(--warn)",
    bg: "var(--warn-soft)",
    t: "注意"
  },
  stop: {
    c: "var(--stop)",
    bg: "var(--stop-soft)",
    t: "避坑"
  },
  note: {
    c: "var(--note)",
    bg: "var(--note-soft)",
    t: "备注"
  },
  beta: {
    c: "var(--note)",
    bg: "var(--note-soft)",
    t: "BETA"
  }
};
/* Verdict / state chip. Carries semantic colour — the only place non-accent colour is allowed. */
function StatusLabel({
  status = "new",
  children,
  style,
  ...rest
}) {
  const s = MAP[status] || MAP.new;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-1)",
      fontFamily: "var(--font-label)",
      fontWeight: 500,
      fontSize: "var(--fs-label)",
      letterSpacing: ".1em",
      textTransform: "uppercase",
      padding: "2px var(--sp-2)",
      borderRadius: "var(--radius-tag)",
      color: s.c,
      background: s.bg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    style: {
      width: "6px",
      height: "6px",
      borderRadius: "999px",
      background: s.c,
      display: "inline-block"
    }
  }), children || s.t);
}
Object.assign(__ds_scope, { StatusLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/StatusLabel.jsx", error: String((e && e.message) || e) }); }

// components/labels/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Topic tag. Shape comes from the variant: square in Signal/Lab, pill in Studio/Special. */
function Tag({
  children,
  tone = "accent",
  filled = false,
  style,
  ...rest
}) {
  const c = tone === "neutral" ? "var(--ink-3)" : "var(--accent)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-1)",
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--fs-label)",
      letterSpacing: ".06em",
      padding: "var(--sp-1) var(--sp-3)",
      borderRadius: "var(--radius-tag)",
      color: filled ? "#fff" : c,
      background: filled ? c : "transparent",
      border: filled ? "none" : "var(--hair) solid " + (tone === "neutral" ? "var(--border-rule)" : "var(--accent-hair)"),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Tag.jsx", error: String((e && e.message) || e) }); }

// components/media/Figure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

/* Screenshot / image frame. Empty state is an explicit placeholder, never a fake image.

   `fit` decides what happens when the image and the frame disagree:
   - "cover" (default) fills the frame and crops — right for photographs.
   - "contain" fits the whole image inside the frame — required for text
     screenshots (tweets, chat logs, code), which lose their meaning the
     moment the top or bottom is cropped away.
   `ratio="auto"` drops the fixed aspect ratio entirely and lets the image
   keep its natural proportions — the safest option for a tall screenshot. */
function Figure({
  src,
  alt = "",
  caption,
  index,
  treatment = "frame",
  ratio = "16 / 10",
  fit = "cover",
  placeholder = "拖入截图",
  style,
  ...rest
}) {
  const framed = treatment === "frame",
    inset = treatment === "inset",
    bleed = treatment === "bleed";
  const auto = ratio === "auto" && !bleed;
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: bleed || auto ? undefined : ratio,
      height: bleed ? "100%" : undefined,
      width: "100%",
      minHeight: auto && !src ? "var(--sp-9)" : undefined,
      overflow: "hidden",
      borderRadius: bleed ? 0 : "var(--radius-media)",
      border: framed ? "var(--hair) solid var(--border-rule)" : "none",
      background: inset ? "var(--surface-inset)" : "var(--paper-2)",
      boxShadow: inset || bleed ? "none" : "var(--shadow-media)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: auto ? "auto" : "100%",
      objectFit: fit,
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, placeholder)), caption && /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--sp-2)",
      fontSize: "var(--fs-caption)",
      lineHeight: "var(--lh-tight)",
      color: "var(--text-muted)"
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    className: "yoru-num",
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--accent)",
      flex: "none"
    }
  }, "图 " + String(index).padStart(2, "0")), /*#__PURE__*/React.createElement("span", null, caption))));
}
Object.assign(__ds_scope, { Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Figure.jsx", error: String((e && e.message) || e) }); }

// components/page/Masthead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The masthead — YORU's fixed page furniture, 铅字房版。

   左：一行月相（新月→上弦→满月→残月），满月吃 var(--accent)，所以每个变体的
   报头月色不同，其余月相永远是墨色。右：汉字页码（〇二 / 〇七）。下：文武线
   （粗 --wu + 细 --hair，隔 4px）。没有刊名、没有栏目名、没有日期——日期住在
   书脊栏（Page 的 spine），身份认同就是这行月相和这对线。

   MoonPhases 单独导出，封面和 EndCard 复用（竖排版转 90° 用 vertical 属性）。 */

const CN_DIGIT = "〇一二三四五六七八九";
const cnPage = n => String(n).padStart(2, "0").split("").map(d => CN_DIGIT[+d] ?? d).join("");
const cnIssue = n => {
  n = parseInt(n, 10);
  const t = "零一二三四五六七八九十";
  return n <= 10 ? t[n] : cnPage(n);
};
const cnDate = s => {
  const m = String(s).match(/(\d{4})\D?(\d{1,2})/);
  if (!m) return s;
  return m[1].split("").map(d => CN_DIGIT[+d]).join("") + "年" + cnIssue(m[2]) + "月";
};
function MoonPhases({
  size = "1em",
  vertical = false,
  ink = "currentColor",
  style,
  ...rest
}) {
  const uid = React.useId().replace(/[:]/g, "");
  const r = 10,
    cy = 13,
    xs = [12, 36, 60, 84],
    sw = 2.4;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 96 26",
    style: {
      height: vertical ? "auto" : size,
      width: vertical ? size : "auto",
      display: "block",
      transform: vertical ? "rotate(90deg)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: xs[0],
    cy: cy,
    r: r,
    fill: "none",
    stroke: ink,
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${xs[1]} ${cy - r} A${r} ${r} 0 0 1 ${xs[1]} ${cy + r} Z`,
    fill: ink
  }), /*#__PURE__*/React.createElement("circle", {
    cx: xs[1],
    cy: cy,
    r: r,
    fill: "none",
    stroke: ink,
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("circle", {
    cx: xs[2],
    cy: cy,
    r: r,
    fill: "var(--accent)",
    "data-uid": uid
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${xs[3]} ${cy - r} a${r} ${r} 0 0 1 0 ${2 * r} a${r * 0.55} ${r} 0 0 0 0 ${-2 * r}`,
    fill: ink
  }));
}
function Masthead({
  index,
  total,
  tone = "paper",
  column,
  date,
  rule,
  style,
  ...rest
}) {
  const ink = tone === "ink";
  const mk = ink ? "rgba(255,255,255,.88)" : "var(--ink-1)";
  const dim = ink ? "rgba(255,255,255,.55)" : "var(--text-muted)";
  const line = ink ? "rgba(255,255,255,.8)" : "var(--ink-1)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      paddingBottom: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement(MoonPhases, {
    size: "0.95em",
    ink: mk,
    style: {
      fontSize: "var(--fs-h3)"
    }
  }), index && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-fangsong)",
      fontSize: "var(--fs-label)",
      letterSpacing: ".14em",
      color: dim,
      lineHeight: 1
    }
  }, cnPage(index), total ? " / " + cnPage(total) : "")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--wu)",
      background: line
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "var(--hair)",
      background: line,
      marginTop: "4px"
    }
  }));
}
Object.assign(__ds_scope, { cnPage, cnIssue, cnDate, MoonPhases, Masthead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/page/Masthead.jsx", error: String((e && e.message) || e) }); }

// components/page/Page.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The XHS export canvas. Everything on a card page lives inside one <Page>.

   页面家具（铅字房版）：
   - 报头：月相 + 汉字页码 + 文武线（有 index/column/kicker 任一即显示；刊名不再渲染）。
   - spine：直排书脊栏，走右边距（仿宋、.42em 字距），装日期 · 卷号 · 标题。
   kicker 属性仍被接受（旧调用方），但只当作「要报头」的开关，不再显示文字；
   watermark 同理——水印已取消，属性保留为空操作。 */
function Page({
  variant = "signal",
  size = "1242x1656",
  column,
  date,
  kicker,
  index,
  total,
  spine,
  watermark,
  tone = "paper",
  align = "start",
  bleed = false,
  footer,
  children,
  style,
  className = "",
  ...rest
}) {
  const bg = tone === "ink" ? "var(--ink-1)" : tone === "tint" ? "var(--accent-soft)" : "var(--surface-page)";
  const fg = tone === "ink" ? "#fff" : "var(--text-body)";
  const mast = !!(column || kicker || index);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "yoru-card " + className,
    "data-yoru": variant,
    "data-size": size,
    "data-tone": tone,
    style: {
      background: bg,
      color: fg,
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), mast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(var(--page-pad-y) - var(--sp-6))",
      left: "var(--page-pad-x)",
      right: "var(--page-pad-x)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Masthead, {
    index: index,
    total: total,
    tone: tone
  })), spine && !bleed && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "var(--page-pad-y)",
      bottom: "calc(var(--page-pad-y) + var(--sp-8))",
      right: "calc(var(--page-pad-x)*0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      writingMode: "vertical-rl",
      textOrientation: "mixed",
      fontFamily: "var(--font-fangsong)",
      fontSize: "var(--fs-caption)",
      letterSpacing: ".4em",
      color: tone === "ink" ? "rgba(255,255,255,.5)" : "var(--text-muted)"
    }
  }, spine)), /*#__PURE__*/React.createElement("div", {
    "data-yoru-flow": "",
    style: {
      flex: 1,
      minHeight: 0,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: align === "center" ? "center" : "flex-start",
      padding: bleed ? 0 : "var(--page-pad-y) var(--page-pad-x)",
      paddingRight: bleed ? 0 : spine ? "calc(var(--page-pad-x) + var(--sp-6))" : "var(--page-pad-x)",
      paddingTop: bleed ? 0 : mast ? "calc(var(--page-pad-y) + var(--sp-7))" : "var(--page-pad-y)",
      gap: "var(--flow-block)"
    }
  }, children), footer);
}
Object.assign(__ds_scope, { Page });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/page/Page.jsx", error: String((e && e.message) || e) }); }

// components/covers/CoverOverprint.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Cover B — the "套印" cover.

   No more giant corner卷号. The title prints twice; issueNumber is still
   accepted (masthead + spine use cnIssue) but the cover renders none of its
   own. Optional cover image sits under the title as a quiet Figure. See
   the source jsx header for the full rationale. */
function CoverOverprint({
  variant = "signal",
  size = "1242x1656",
  column,
  date,
  index = 1,
  total,
  title,
  subtitle,
  tags = [],
  aside,
  issueNumber,
  image,
  imageCaption,
  imageRatio = "16 / 10",
  style,
  ...rest
}) {
  const ghost = "color-mix(in oklch, var(--accent) 55%, #fff)";
  return /*#__PURE__*/React.createElement(__ds_scope.Page, _extends({
    variant: variant,
    size: size,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(var(--page-pad-y) - var(--sp-6))",
      left: "var(--page-pad-x)",
      right: "var(--page-pad-x)",
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Masthead, {
    index: index,
    total: total
  })), /*#__PURE__*/React.createElement("div", {
    "data-yoru-plate": "",
    style: {
      position: "absolute",
      inset: "calc(var(--page-pad-y) + var(--sp-8)) var(--page-pad-x) calc(var(--page-pad-y) + var(--sp-8))",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "var(--sp-5)",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-.08em",
      left: ".11em",
      display: "block",
      fontFamily: "var(--font-title)",
      fontWeight: 900,
      fontSize: "var(--fs-cover)",
      lineHeight: "var(--lh-cover)",
      letterSpacing: "var(--ls-cover)",
      color: ghost,
      mixBlendMode: "multiply",
      pointerEvents: "none"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block",
      fontFamily: "var(--font-title)",
      fontWeight: 900,
      fontSize: "var(--fs-cover)",
      lineHeight: "var(--lh-cover)",
      letterSpacing: "var(--ls-cover)",
      color: "var(--text-title)"
    }
  }, title)), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "84%",
      fontFamily: "var(--font-fangsong)",
      fontWeight: 400,
      fontSize: "var(--fs-lede)",
      lineHeight: "var(--lh-body)",
      color: "var(--ink-3)"
    }
  }, subtitle), image && /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: imageRatio,
      overflow: "hidden",
      borderRadius: "var(--radius-media)",
      border: "var(--hair) solid var(--border-rule)",
      background: "var(--paper-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: typeof imageCaption === "string" ? imageCaption : "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), imageCaption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-caption)",
      lineHeight: "var(--lh-tight)",
      color: "var(--text-muted)"
    }
  }, imageCaption)), (tags.length > 0 || aside) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "var(--sp-3)",
      marginTop: "var(--sp-2)"
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--fs-label)",
      letterSpacing: ".06em",
      padding: "var(--sp-1) var(--sp-3)",
      color: "var(--accent-ink)",
      border: "var(--hair) solid var(--accent-hair)",
      borderRadius: "var(--radius-tag)"
    }
  }, t)), aside && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-small)",
      lineHeight: 1.5,
      transform: "rotate(-1.2deg)",
      borderBottom: "var(--hair) solid var(--border-rule)",
      paddingBottom: "var(--sp-1)",
      color: "var(--text-muted)"
    }
  }, aside))));
}
Object.assign(__ds_scope, { CoverOverprint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/covers/CoverOverprint.jsx", error: String((e && e.message) || e) }); }

// components/covers/CoverType.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Cover A — type only. The title is the image. No screenshot, no illustration.

   Layout: title + subtitle + tag row all live in one block, vertically centred
   between masthead and the bottom signature line. Tags sit inline right under
   the subtitle so the composition doesn't split into "big top / tiny bottom" —
   the whole meta cluster stays with the title. The bottom-right carries only
   the small issue line; readers already know this is a cover, so it doesn't
   need to shout. */
function CoverType({
  variant = "signal",
  size = "1242x1656",
  column,
  date,
  kicker,
  title,
  subtitle,
  tags = [],
  issue,
  aside,
  total,
  tone = "paper",
  style,
  ...rest
}) {
  const ink = tone === "ink";
  return /*#__PURE__*/React.createElement(__ds_scope.Page, _extends({
    variant: variant,
    size: size,
    tone: tone,
    align: "center",
    column: column || kicker,
    date: date,
    index: column || kicker ? 1 : undefined,
    total: total,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: 900,
      fontSize: "var(--fs-cover)",
      lineHeight: "var(--lh-cover)",
      letterSpacing: "var(--ls-cover)",
      color: ink ? "#fff" : "var(--text-title)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "88%",
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      fontSize: "var(--fs-lede)",
      lineHeight: "var(--lh-body)",
      color: ink ? "rgba(255,255,255,.72)" : "var(--ink-3)"
    }
  }, subtitle), (tags.length > 0 || aside) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "var(--sp-3)",
      marginTop: "var(--sp-3)"
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: "var(--fs-label)",
      letterSpacing: ".06em",
      padding: "var(--sp-1) var(--sp-3)",
      borderRadius: "var(--radius-tag)",
      color: ink ? "#fff" : "var(--accent-ink)",
      border: "var(--hair) solid " + (ink ? "rgba(255,255,255,.3)" : "var(--accent-hair)")
    }
  }, t)), aside && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-small)",
      lineHeight: 1.5,
      transform: "rotate(-1.2deg)",
      borderBottom: "var(--hair) solid var(--border-rule)",
      paddingBottom: "var(--sp-1)",
      color: ink ? "rgba(255,255,255,.72)" : "var(--text-muted)"
    }
  }, aside))), issue && /*#__PURE__*/React.createElement("span", {
    className: "yoru-num",
    style: {
      position: "absolute",
      right: "var(--page-pad-x)",
      bottom: "var(--page-pad-y)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      color: ink ? "rgba(255,255,255,.45)" : "var(--text-faint)"
    }
  }, issue));
}
Object.assign(__ds_scope, { CoverType });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/covers/CoverType.jsx", error: String((e && e.message) || e) }); }

// components/covers/EndCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The end card — the last page of a Xiaohongshu set.

   The whole set signs itself HERE, once. A large 完 mark sits in the bottom
   right corner in the same overprint style as the paired <CoverOverprint>: a
   solid ink pass and a pale accent pass 22px above and 30px to the left,
   multiply-blended so the two passes read as one riso print off-register.
   There is no text wordmark anywhere in the system: the sign-off is the
   vertical moon-phase strip (spine position, top-right) plus a fangsong
   note in the bottom-left plate margin. No @handle line. */
function EndCard({
  variant = "signal",
  size = "1242x1656",
  headline = "看完顺手点个收藏",
  lines = [],
  note,
  mark = "完",
  tone = "paper",
  style,
  ...rest
}) {
  const ink = tone === "ink";
  const ghost = ink ? "color-mix(in oklch, var(--accent) 55%, var(--ink-1))" : "color-mix(in oklch, var(--accent) 55%, #fff)";
  const bodyColor = ink ? "rgba(255,255,255,.78)" : "var(--ink-3)";
  const dimColor = ink ? "rgba(255,255,255,.55)" : "var(--text-faint)";
  const markColor = ink ? "#fff" : "var(--text-title)";
  return /*#__PURE__*/React.createElement(__ds_scope.Page, _extends({
    variant: variant,
    size: size,
    tone: tone,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "calc(var(--page-pad-x) * -.35)",
      bottom: "calc(var(--page-pad-y) * -.6)",
      zIndex: 1,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "-22px",
      left: "-30px",
      display: "block",
      fontFamily: "var(--font-title)",
      fontWeight: 900,
      fontSize: "calc(var(--fs-cover) * 4.4)",
      lineHeight: .82,
      color: ghost,
      mixBlendMode: "multiply"
    }
  }, mark), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block",
      fontFamily: "var(--font-title)",
      fontWeight: 900,
      fontSize: "calc(var(--fs-cover) * 4.4)",
      lineHeight: .82,
      color: markColor
    }
  }, mark)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(var(--page-pad-y) + var(--sp-8))",
      left: "var(--page-pad-x)",
      right: "calc(var(--page-pad-x) + var(--sp-9))",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "var(--sp-8)",
      height: "var(--rule)",
      background: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: 900,
      fontSize: "var(--fs-h1)",
      lineHeight: "var(--lh-h1)",
      color: ink ? "#fff" : "var(--text-title)"
    }
  }, headline), lines.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: bodyColor
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", null, l))))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "var(--page-pad-y)",
      right: "calc(var(--page-pad-x)*0.3)",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MoonPhases, {
    vertical: true,
    size: "var(--fs-label)",
    ink: ink ? "rgba(255,255,255,.7)" : "var(--ink-1)",
    style: {
      width: "var(--fs-h3)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--page-pad-x)",
      bottom: "var(--page-pad-y)",
      zIndex: 3,
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)"
    }
  }, note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-fangsong)",
      fontSize: "var(--fs-label)",
      letterSpacing: ".14em",
      color: dimColor
    }
  }, note)));
}
Object.assign(__ds_scope, { EndCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/covers/EndCard.jsx", error: String((e && e.message) || e) }); }

// components/page/PageFooter.jsx
try { (() => {
/* Authorship strip pinned to the bottom of a Page. */
function PageFooter({
  handle,
  note,
  mark = true,
  align = "between"
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-yoru-footer": "",
    style: {
      position: "absolute",
      left: "var(--page-pad-x)",
      right: "var(--page-pad-x)",
      bottom: "calc(var(--page-pad-y) - var(--sp-5))",
      display: "flex",
      justifyContent: align === "between" ? "space-between" : "flex-start",
      gap: "var(--sp-4)",
      alignItems: "center",
      borderTop: "var(--hair) solid var(--border-hair)",
      paddingTop: "var(--sp-3)",
      fontFamily: "var(--font-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      color: "var(--text-faint)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-2)"
    }
  }, handle && /*#__PURE__*/React.createElement("span", null, handle)), note && /*#__PURE__*/React.createElement("span", null, note));
}
Object.assign(__ds_scope, { PageFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/page/PageFooter.jsx", error: String((e && e.message) || e) }); }

// components/timeline/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Timeline. Flex-based, so it reflows instead of scaling — the one diagram type
   that has to survive a 375px WeChat column without shrinking its type.

   Marks are TINTED by the variant. Verified milestones use the variant's dark
   accent (--accent-ink) so a signal log reads blue-ink, a lab log teal-ink, a
   studio log mint-ink, a special log coral-ink — each timeline carries its own
   family colour instead of a shared neutral. Failures still take semantic red
   and unknowns still take the neutral ring: the eye should always find those
   two, regardless of variant.

   Every mark is mixed back toward the surface — the axis is a quiet index, not
   a string of lights, and at 9px a full-strength ink dot punches harder than
   the label beside it. Mixing toward --dg-surface (not white) keeps the same
   softening in dark mode. */
const SOFT = "color-mix(in oklch,var(--accent-ink) 68%,var(--dg-surface))";
const MARK = {
  verified: {
    fill: SOFT,
    stroke: SOFT
  },
  failed: {
    fill: "var(--dg-surface)",
    stroke: "color-mix(in oklch,var(--stop) 70%,var(--dg-surface))",
    weight: 2.5
  },
  unknown: {
    fill: "var(--dg-surface)",
    stroke: "color-mix(in oklch,var(--dg-fg-3) 62%,var(--dg-surface))"
  }
};
function dot(status, size = 9) {
  const m = MARK[status] || {
    fill: "var(--dg-surface)",
    stroke: "color-mix(in oklch,var(--dg-line) 75%,var(--dg-surface))"
  };
  return {
    width: size,
    height: size,
    borderRadius: 999,
    display: "block",
    boxSizing: "border-box",
    background: m.fill,
    border: (m.weight || 1.5) + "px solid " + m.stroke,
    boxShadow: "0 0 0 3px var(--dg-surface)"
  };
}
function Timeline({
  items = [],
  orientation = "vertical",
  title,
  kicker,
  caption,
  source,
  theme = "light",
  style,
  ...rest
}) {
  const h = orientation === "horizontal";
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: "yoru-diagram",
    "data-dg-theme": theme,
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      background: "var(--dg-surface)",
      ...style
    }
  }, rest), (kicker || title) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-kicker)",
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, kicker), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--dg-fs-title)",
      lineHeight: 1.35,
      color: "var(--dg-fg)"
    }
  }, title)), h ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridAutoFlow: "column",
      gridAutoColumns: "1fr",
      gap: 0,
      alignItems: "stretch"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      paddingRight: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "yoru-num",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-node-meta)",
      letterSpacing: ".1em",
      color: "var(--dg-fg-3)"
    }
  }, it.date), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 13,
      borderTop: "var(--dg-stroke-hair) solid var(--dg-line)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      position: "absolute",
      left: 0,
      top: -5,
      ...dot(it.status)
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "var(--dg-fs-node-label)",
      lineHeight: 1.45,
      color: "var(--dg-fg)"
    }
  }, it.label), it.meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-node-meta)",
      lineHeight: 1.5,
      color: "var(--dg-fg-3)"
    }
  }, it.meta)))) : /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column"
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "76px 22px",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "yoru-num",
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--dg-fs-node-meta)",
        letterSpacing: ".08em",
        color: "var(--dg-fg-3)",
        paddingTop: 3,
        textAlign: "right"
      }
    }, it.date), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
        paddingTop: 5
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: dot(it.status)
    }), !last && /*#__PURE__*/React.createElement("i", {
      style: {
        flex: 1,
        width: "var(--dg-stroke-hair)",
        background: "var(--dg-line)",
        marginTop: 7
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingLeft: 16,
        paddingBottom: last ? 0 : 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: "var(--dg-fs-node-label)",
        lineHeight: 1.45,
        color: "var(--dg-fg)"
      }
    }, it.label), it.meta && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--dg-fs-node-meta)",
        lineHeight: 1.6,
        color: "var(--dg-fg-3)",
        marginTop: 4
      }
    }, it.meta), it.body && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--dg-fs-note)",
        lineHeight: 1.7,
        color: "var(--dg-fg-2)",
        marginTop: 6
      }
    }, it.body)));
  })), (caption || source) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      borderTop: "1px solid var(--dg-line)",
      paddingTop: 14
    }
  }, caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--dg-fs-caption)",
      lineHeight: 1.6,
      color: "var(--dg-fg-3)"
    }
  }, caption), source && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--dg-fs-source)",
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--dg-fg-3)",
      opacity: .8
    }
  }, source)));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/timeline/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/typography/Body.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Body({
  children,
  size = "base",
  muted = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 400,
      fontSize: size === "small" ? "var(--fs-small)" : "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      letterSpacing: "var(--ls-body)",
      color: muted ? "var(--text-muted)" : "var(--text-body)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Body });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Body.jsx", error: String((e && e.message) || e) }); }

// components/typography/Caption.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Caption({
  children,
  index,
  align = "start",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "var(--sp-2)",
      alignItems: "baseline",
      justifyContent: align === "center" ? "center" : "flex-start",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-caption)",
      lineHeight: "var(--lh-tight)",
      color: "var(--text-muted)",
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    className: "yoru-num",
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--accent)",
      flex: "none"
    }
  }, "图 " + String(index).padStart(2, "0")), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Caption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Caption.jsx", error: String((e && e.message) || e) }); }

// components/typography/Emphasis.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 着重号 — Chinese emphasis dots, set under the run they mark.

   This is a real mark from Chinese print typography, not a decoration: it is how
   a Chinese text emphasises a phrase without bold, italic or colour. YORU uses it
   as the primary emphasis in titles and in body copy, which is why the system has
   no underline and no coloured body text.

   Latin runs get the dots too, but they read badly under lowercase descenders —
   prefer <Marker> for an English phrase. */
function Emphasis({
  children,
  color = "var(--accent)",
  shape = "dot",
  style,
  ...rest
}) {
  const s = {
    textEmphasis: "filled " + shape + " " + color,
    WebkitTextEmphasis: "filled " + shape + " " + color,
    textEmphasisPosition: "under right",
    WebkitTextEmphasisPosition: "under right",
    ...style
  };
  return /*#__PURE__*/React.createElement("em", _extends({
    style: {
      fontStyle: "normal",
      ...s
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Emphasis });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Emphasis.jsx", error: String((e && e.message) || e) }); }

// components/typography/Heading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Serif display headings. Level 1 is a page title, 2 a section, 3 a run-in.
   `mark` prints a heavy rule ABOVE the heading. There is no left-hand accent bar
   anywhere in this system — hierarchy comes from type, space and horizontal rules. */
function Heading({
  level = 2,
  children,
  mark = false,
  kicker,
  style,
  ...rest
}) {
  const size = {
    1: "var(--fs-h1)",
    2: "var(--fs-h2)",
    3: "var(--fs-h3)"
  }[level];
  const lh = {
    1: "var(--lh-h1)",
    2: "var(--lh-h2)",
    3: "var(--lh-tight)"
  }[level];
  const Tag = "h" + level;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)"
    }
  }, mark && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: "100%",
      height: "var(--bar)",
      background: "var(--border-strong)",
      marginBottom: "var(--sp-1)"
    }
  }), kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, kicker), /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: level === 1 ? 900 : 700,
      fontSize: size,
      lineHeight: lh,
      letterSpacing: "var(--ls-title)",
      color: "var(--text-title)",
      ...style
    }
  }, rest), children));
}
Object.assign(__ds_scope, { Heading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Heading.jsx", error: String((e && e.message) || e) }); }

// components/typography/Lede.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Opening paragraph of a page or article — one step up, slightly looser. */
function Lede({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      margin: 0,
      fontFamily: "var(--font-fangsong)",
      fontWeight: 400,
      fontSize: "var(--fs-lede)",
      lineHeight: "var(--lh-body)",
      color: "var(--ink-3)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Lede });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Lede.jsx", error: String((e && e.message) || e) }); }

// components/typography/Marker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 荧光笔 — a marker band behind a key phrase.

   The band is anchored to the em box, not the line box: an inset box-shadow on
   an inline element is drawn against font-size, so the same <Marker> sits in the
   same place on a card (line-height 1.95) and in an article (1.85). A percentage
   of the line box would drift between the two scales.

   Use it for the one phrase per page a reader should carry away — a second band
   on the same page cancels the first. Prefer this over <Emphasis> for Latin runs,
   code identifiers and quoted strings; emphasis dots under lowercase Latin
   collide with descenders. */
function Marker({
  children,
  color = "var(--accent-soft)",
  height = 55,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      boxShadow: `inset 0 -${height / 100}em 0 0 ${color}`,
      padding: "0 .08em",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Marker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Marker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/diagrams/examples.js
try { (() => {
/* Seven real diagrams, each written as data. This file is the contract an agent
   fills in: nodes, edges, groups, annotations — never coordinates or colours. */
window.YORU_DIAGRAMS = [{
  id: "pipeline",
  kind: "diagram",
  label: "流程图 · 内容生产",
  variant: "signal",
  spec: {
    kicker: "PIPELINE",
    title: "一篇内容怎么变成两个渠道的成品",
    layout: "layered",
    legend: true,
    nodes: [{
      id: "src",
      role: "input",
      label: "结构化内容",
      meta: "blocks[]"
    }, {
      id: "render",
      role: "process",
      label: "套 YORU 组件",
      meta: "React"
    }, {
      id: "page",
      role: "process",
      label: "自动分页",
      meta: "usePagination()"
    }, {
      id: "img",
      role: "output",
      label: "小红书图片卡",
      meta: "1242×1656 ×N"
    }, {
      id: "inline",
      role: "process",
      label: "冻结行内样式",
      meta: "inlineStyles()"
    }, {
      id: "wx",
      role: "output",
      label: "公众号 HTML",
      meta: "可直接粘贴"
    }],
    edges: [{
      from: "src",
      to: "render",
      kind: "data"
    }, {
      from: "render",
      to: "page"
    }, {
      from: "page",
      to: "img"
    }, {
      from: "render",
      to: "inline"
    }, {
      from: "inline",
      to: "wx"
    }],
    groups: [{
      label: "小红书",
      nodes: ["page", "img"]
    }, {
      label: "公众号",
      nodes: ["inline", "wx"]
    }],
    caption: "两条分支共用前两步。渠道差异只在版式，不在内容。",
    source: "来源：本设计系统 ui_kits/"
  }
}, {
  id: "mindmap",
  kind: "diagram",
  label: "思维导图 · 能力地图",
  variant: "lab",
  spec: {
    kicker: "MIND MAP",
    title: "Vibe Coding 到底要会什么",
    layout: "tree",
    legend: false,
    nodes: [{
      id: "root",
      role: "process",
      label: "Vibe Coding",
      showRole: false
    }, {
      id: "ctx",
      role: "data",
      label: "上下文管理",
      showRole: false,
      meta: "读什么 / 不读什么"
    }, {
      id: "skill",
      role: "agent",
      label: "Skill 设计",
      showRole: false,
      meta: "触发 / 步骤 / 兜底"
    }, {
      id: "loop",
      role: "human",
      label: "人机分工",
      showRole: false,
      meta: "谁拍板"
    }, {
      id: "ctx1",
      role: "external",
      label: "仓库结构",
      showRole: false
    }, {
      id: "ctx2",
      role: "external",
      label: "文档与注释",
      showRole: false
    }, {
      id: "sk1",
      role: "external",
      label: "写死触发条件",
      showRole: false
    }, {
      id: "sk2",
      role: "external",
      label: "失败要回什么",
      showRole: false
    }, {
      id: "lp1",
      role: "external",
      label: "验收标准",
      showRole: false
    }],
    edges: [{
      from: "root",
      to: "ctx",
      kind: "flow",
      arrow: false
    }, {
      from: "root",
      to: "skill",
      kind: "flow",
      arrow: false
    }, {
      from: "root",
      to: "loop",
      kind: "flow",
      arrow: false
    }, {
      from: "ctx",
      to: "ctx1",
      kind: "weak"
    }, {
      from: "ctx",
      to: "ctx2",
      kind: "weak"
    }, {
      from: "skill",
      to: "sk1",
      kind: "weak"
    }, {
      from: "skill",
      to: "sk2",
      kind: "weak"
    }, {
      from: "loop",
      to: "lp1",
      kind: "weak"
    }],
    caption: "三个分支，每支不超过两层。再深就该拆成两张图。"
  }
}, {
  id: "arch",
  kind: "diagram",
  label: "系统架构 · 本地与云端",
  variant: "lab",
  spec: {
    kicker: "ARCHITECTURE",
    title: "这套工作流跑在哪里",
    layout: "grid",
    legend: true,
    grid: true,
    nodes: [{
      id: "cli",
      role: "tool",
      label: "Claude Code CLI",
      meta: "本地进程",
      col: 0,
      row: 0
    }, {
      id: "repo",
      role: "data",
      label: "仓库",
      meta: "git",
      col: 0,
      row: 1
    }, {
      id: "skills",
      role: "data",
      label: ".claude/skills",
      meta: "版本受控",
      col: 0,
      row: 2
    }, {
      id: "api",
      role: "external",
      label: "模型 API",
      meta: "sonnet-4.5",
      col: 1,
      row: .5,
      status: "unknown"
    }, {
      id: "gh",
      role: "external",
      label: "GitHub",
      meta: "PR / Actions",
      col: 1,
      row: 1.5
    }, {
      id: "out",
      role: "output",
      label: "可合并的 PR",
      col: 2,
      row: 1
    }],
    edges: [{
      from: "cli",
      to: "api",
      kind: "data",
      label: "prompt"
    }, {
      from: "repo",
      to: "cli",
      kind: "dep"
    }, {
      from: "skills",
      to: "cli",
      kind: "dep"
    }, {
      from: "api",
      to: "out"
    }, {
      from: "gh",
      to: "out",
      kind: "weak"
    }, {
      from: "cli",
      to: "gh",
      kind: "data"
    }],
    groups: [{
      label: "我的机器",
      nodes: ["cli", "repo", "skills"]
    }, {
      label: "不受我控制",
      nodes: ["api", "gh"],
      kind: "dashed"
    }],
    annotations: [{
      at: "api",
      side: "right",
      text: "限流和版本变化都算外部风险，兜底逻辑必须写在本地。"
    }],
    caption: "虚线框是边界不在我这边的部分。",
    source: "来源：本地实测环境 M4 Pro / 48G"
  }
}, {
  id: "roles",
  kind: "diagram",
  label: "分工图 · 人 / Agent / 工具",
  variant: "signal",
  spec: {
    kicker: "WHO DOES WHAT",
    title: "一次代码审查的分工",
    layout: "layered",
    legend: true,
    nodes: [{
      id: "diff",
      role: "input",
      label: "git diff",
      meta: "只给改动"
    }, {
      id: "rg",
      role: "tool",
      label: "ripgrep",
      meta: "定位调用点"
    }, {
      id: "agent",
      role: "agent",
      label: "Claude Code",
      meta: "读 diff · 列风险",
      status: "verified"
    }, {
      id: "me",
      role: "human",
      label: "我拍板",
      meta: "业务影响",
      status: "verified"
    }, {
      id: "pr",
      role: "output",
      label: "PR 评论"
    }],
    edges: [{
      from: "diff",
      to: "agent",
      kind: "data",
      label: "unified"
    }, {
      from: "rg",
      to: "agent",
      kind: "dep"
    }, {
      from: "agent",
      to: "me",
      label: "风险清单"
    }, {
      from: "me",
      to: "pr"
    }, {
      from: "me",
      to: "agent",
      kind: "dep",
      label: "打回"
    }],
    annotations: [{
      at: "me",
      side: "right",
      text: "Agent 判断不了业务影响，这一步不能省。"
    }],
    caption: "回边就是返工。画出来才知道自己在哪一步反复。",
    source: "来源：自己的 commit 记录 2026.05–08"
  }
}, {
  id: "compare",
  kind: "diagram",
  label: "对比图 · 两种写法",
  variant: "studio",
  spec: {
    kicker: "BEFORE / AFTER",
    title: "一条提示词，和拆成模块",
    layout: "grid",
    legend: false,
    nodes: [{
      id: "b1",
      role: "input",
      label: "一条长提示词",
      showRole: false,
      col: 0,
      row: 0
    }, {
      id: "b2",
      role: "process",
      label: "整条重写",
      showRole: false,
      col: 0,
      row: 1,
      status: "failed"
    }, {
      id: "b3",
      role: "output",
      label: "能跑，但改不动",
      showRole: false,
      col: 0,
      row: 2
    }, {
      id: "a1",
      role: "input",
      label: "触发 / 步骤 / 兜底",
      showRole: false,
      col: 2,
      row: 0
    }, {
      id: "a2",
      role: "process",
      label: "只改一层",
      showRole: false,
      col: 2,
      row: 1,
      status: "verified"
    }, {
      id: "a3",
      role: "output",
      label: "能跑，也能改",
      showRole: false,
      col: 2,
      row: 2
    }],
    edges: [{
      from: "b1",
      to: "b2"
    }, {
      from: "b2",
      to: "b3"
    }, {
      from: "a1",
      to: "a2"
    }, {
      from: "a2",
      to: "a3"
    }],
    groups: [{
      label: "改之前",
      nodes: ["b1", "b2", "b3"]
    }, {
      label: "改之后",
      nodes: ["a1", "a2", "a3"]
    }],
    caption: "对比图用同一套形状，只让状态点不同——差异才看得出来。"
  }
}, {
  id: "workflow",
  kind: "diagram",
  label: "工作流 · 从想法到发布",
  variant: "special",
  spec: {
    kicker: "WORKFLOW",
    title: "一条内容从想法到两个渠道",
    layout: "layered",
    legend: true,
    nodes: [{
      id: "idea",
      role: "input",
      label: "想法",
      meta: "随手记",
      index: 1
    }, {
      id: "test",
      role: "human",
      label: "自己先跑一遍",
      meta: "不跑不写",
      index: 2,
      status: "verified"
    }, {
      id: "draft",
      role: "agent",
      label: "生成结构化草稿",
      meta: "blocks[]",
      index: 3
    }, {
      id: "edit",
      role: "human",
      label: "改语气",
      meta: "只有这一步不能外包",
      index: 4
    }, {
      id: "xhs",
      role: "output",
      label: "小红书",
      index: 5
    }, {
      id: "wx",
      role: "output",
      label: "公众号",
      index: 6
    }],
    edges: [{
      from: "idea",
      to: "test"
    }, {
      from: "test",
      to: "draft",
      kind: "data"
    }, {
      from: "draft",
      to: "edit"
    }, {
      from: "edit",
      to: "xhs"
    }, {
      from: "edit",
      to: "wx"
    }, {
      from: "edit",
      to: "test",
      kind: "dep",
      label: "证据不够"
    }],
    caption: "只有第 4 步不能外包。其余都可以让 Agent 先做一版。"
  }
}, {
  id: "log",
  kind: "timeline",
  label: "时间线 · 项目日志",
  variant: "studio",
  spec: {
    kicker: "PROJECT LOG",
    title: "这套系统怎么长出来的",
    orientation: "vertical",
    items: [{
      date: "2026.05",
      label: "一条提示词打天下",
      status: "failed",
      meta: "v0",
      body: "前十次都行，第十一次改需求就崩。"
    }, {
      date: "2026.06",
      label: "拆成三层",
      status: "verified",
      meta: "触发 / 步骤 / 兜底",
      body: "改需求只动一层，复用直接引用。"
    }, {
      date: "2026.07",
      label: "补上失败兜底",
      status: "verified",
      meta: "v1.2",
      body: "Agent 不再自由发挥。"
    }, {
      date: "2026.08",
      label: "接进内容系统",
      status: "unknown",
      meta: "进行中",
      body: "分页与公众号导出还在验。"
    }],
    caption: "失败的版本也留在轴上——那是这条线的一部分。",
    source: "来源：自己的 commit 记录"
  }
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/diagrams/examples.js", error: String((e && e.message) || e) }); }

// ui_kits/diagrams/gallery.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DG = window.YORUContentDesignSystem_a0b73e;
function Rail({
  items,
  sel,
  setSel
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 232,
      flex: "none",
      borderRight: "1px solid var(--line-1)",
      padding: "22px 0",
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rl",
    style: {
      padding: "0 22px 12px"
    }
  }, "\u56FE\u8C31\u7C7B\u578B"), items.map((d, i) => /*#__PURE__*/React.createElement("button", {
    key: d.id,
    onClick: () => setSel(i),
    style: {
      textAlign: "left",
      padding: "10px 22px",
      cursor: "pointer",
      border: "none",
      background: sel === i ? "var(--paper-3)" : "transparent",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: sel === i ? 500 : 400,
      color: sel === i ? "var(--ink-1)" : "var(--ink-3)"
    }
  }, d.label)), /*#__PURE__*/React.createElement("div", {
    className: "rl",
    style: {
      padding: "20px 22px 0",
      lineHeight: 1.8
    }
  }, "\u8282\u70B9\u4E0E\u8FB9\u662F\u6570\u636E\uFF0C", /*#__PURE__*/React.createElement("br", null), "\u5750\u6807\u4E0E\u989C\u8272\u4E0D\u662F\u3002"));
}
function SpecPanel({
  spec
}) {
  const json = JSON.stringify(spec, null, 2);
  const [open, setOpen] = React.useState(true);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      alignSelf: "flex-start",
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: 0,
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--ink-4)"
    }
  }, open ? "—" : "+", " \u8FD9\u5F20\u56FE\u7684\u8F93\u5165\u6570\u636E"), open && /*#__PURE__*/React.createElement(DG.CodeBlock, {
    lang: "json",
    filename: "diagram.spec.json",
    code: json
  }));
}
function DiagramGallery() {
  const items = window.YORU_DIAGRAMS;
  const [sel, setSel] = React.useState(0);
  const [theme, setTheme] = React.useState("light");
  const d = items[sel];
  const [variant, setVariant] = React.useState(d.variant);
  React.useEffect(() => setVariant(d.variant), [sel]);
  const dark = theme === "dark";
  const btn = on => ({
    padding: "6px 12px",
    cursor: "pointer",
    fontFamily: "var(--font-sans-latin)",
    fontSize: 12,
    fontWeight: 500,
    border: "1px solid " + (on ? "var(--ink-1)" : "var(--line-2)"),
    borderRadius: 2,
    background: on ? "var(--ink-1)" : "#fff",
    color: on ? "#fff" : "var(--ink-3)"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "#fff",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: "1px solid var(--line-1)",
      padding: "14px 28px",
      display: "flex",
      alignItems: "center",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 900,
      fontSize: 15,
      letterSpacing: ".24em",
      color: "var(--yoru-blue)"
    }
  }, "YORU"), /*#__PURE__*/React.createElement("span", {
    className: "rl"
  }, "\u56FE\u8C31\u7CFB\u7EDF")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, ["signal", "lab", "studio", "special"].map(v => /*#__PURE__*/React.createElement("span", {
    key: v,
    "data-yoru": v
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setVariant(v),
    style: {
      ...btn(variant === v),
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--accent)"
    }
  }), v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, ["light", "dark"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTheme(t),
    style: btn(theme === t)
  }, t))), /*#__PURE__*/React.createElement("span", {
    className: "rl",
    style: {
      marginLeft: "auto"
    }
  }, "nodes + edges \u2192 HTML / SVG")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "stretch",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Rail, {
    items: items,
    sel: sel,
    setSel: setSel
  }), /*#__PURE__*/React.createElement("main", {
    "data-yoru": variant,
    style: {
      flex: 1,
      minWidth: 0,
      padding: "30px 34px 70px",
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30,
      background: dark ? "#0E1014" : "#fff",
      border: "1px solid " + (dark ? "#0E1014" : "var(--line-1)")
    }
  }, d.kind === "timeline" ? /*#__PURE__*/React.createElement(DG.Timeline, _extends({}, d.spec, {
    theme: theme
  })) : /*#__PURE__*/React.createElement(DG.Diagram, _extends({}, d.spec, {
    theme: theme
  }))), /*#__PURE__*/React.createElement("div", {
    className: "yoru-article"
  }, /*#__PURE__*/React.createElement(SpecPanel, {
    spec: d.spec
  })))));
}
Object.assign(window, {
  DiagramGallery
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/diagrams/gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wechat/article.jsx
try { (() => {
const WX = window.YORUContentDesignSystem_a0b73e;

/* ---- inline-style export -------------------------------------------------
   The WeChat editor strips <style>, class attributes and external CSS.
   We walk the rendered article, freeze the computed value of a small property
   whitelist onto each node, drop the classes, and hand back paste-ready HTML. */
const KEEP = ["font-family", "font-size", "font-weight", "font-style", "line-height", "letter-spacing", "color", "background-color", "text-align", "text-transform", "white-space", "word-break", "margin-top", "margin-right", "margin-bottom", "margin-left", "padding-top", "padding-right", "padding-bottom", "padding-left", "border-top", "border-right", "border-bottom", "border-left", "border-radius", "box-shadow", "width", "max-width", "display", "overflow"];
function inlineStyles(live) {
  const clone = live.cloneNode(true);
  const a = [live, ...live.querySelectorAll("*")],
    b = [clone, ...clone.querySelectorAll("*")];
  a.forEach((el, i) => {
    const cs = getComputedStyle(el);
    const out = KEEP.map(p => {
      const v = cs.getPropertyValue(p);
      return v && v !== "none" && v !== "normal" && v !== "auto" ? p + ":" + v : null;
    }).filter(Boolean);
    b[i].setAttribute("style", out.join(";"));
    b[i].removeAttribute("class");
    b[i].removeAttribute("data-yoru");
  });
  return clone.outerHTML;
}
function Byline({
  post
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "var(--sp-3)",
      fontFamily: "var(--font-fangsong)",
      fontSize: "var(--fs-caption)",
      letterSpacing: ".14em",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, post.issue), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-6)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "\u7EA6\u516D\u5206\u949F"));
}
function Article({
  post,
  variant
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "yoru-article",
    "data-yoru": variant,
    id: "yoru-article",
    style: {
      background: "var(--surface-page)",
      padding: "var(--sp-8) var(--sp-6) var(--sp-9)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)",
      paddingBottom: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "2px solid var(--ink-1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--ink-1)",
      marginTop: 3
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, post.kicker), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-title)",
      fontWeight: 900,
      fontSize: "var(--fs-h1)",
      lineHeight: "var(--lh-h1)",
      color: "var(--text-title)"
    }
  }, post.cover.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-fangsong)",
      fontSize: "var(--fs-lede)",
      lineHeight: "var(--lh-body)",
      color: "var(--ink-3)"
    }
  }, post.cover.subtitle), /*#__PURE__*/React.createElement(Byline, {
    post: post
  })), post.blocks.map((b, i) => /*#__PURE__*/React.createElement(YoruBlock, {
    key: i,
    b: b
  })), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      borderTop: "1px solid var(--line-1)",
      paddingTop: "var(--sp-5)",
      fontFamily: "var(--font-sans-latin)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: "var(--fs-h3)",
      color: "var(--text-title)"
    }
  }, post.end.headline), post.end.lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", null, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-3)",
      fontFamily: "var(--font-fangsong)",
      letterSpacing: ".14em"
    }
  }, /*#__PURE__*/React.createElement("span", null, post.issue, " \xB7 \u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904"))));
}
function WeChatKit() {
  const post = window.YORU_POST;
  const [variant, setVariant] = React.useState(post.variant);
  const [width, setWidth] = React.useState(677);
  const [copied, setCopied] = React.useState("");
  const copy = async () => {
    const html = inlineStyles(document.getElementById("yoru-article"));
    try {
      await navigator.clipboard.writeText(html);
      setCopied("已复制 " + Math.round(html.length / 1024) + "KB 行内样式 HTML");
    } catch (e) {
      setCopied("复制失败，请手动导出");
    }
    setTimeout(() => setCopied(""), 2600);
  };
  const btn = on => ({
    padding: "6px 12px",
    cursor: "pointer",
    fontFamily: "var(--font-sans-latin)",
    fontSize: 12,
    fontWeight: 500,
    border: "1px solid " + (on ? "var(--ink-1)" : "var(--line-2)"),
    borderRadius: 2,
    background: on ? "var(--ink-1)" : "#fff",
    color: on ? "#fff" : "var(--ink-3)"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--paper-3)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 5,
      background: "rgba(255,255,255,.94)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--line-1)",
      padding: "14px 28px",
      display: "flex",
      alignItems: "center",
      gap: 22,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 900,
      fontSize: 15,
      letterSpacing: ".24em",
      color: "var(--yoru-blue)"
    }
  }, "YORU"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--ink-4)"
    }
  }, "\u516C\u4F17\u53F7\u6392\u7248")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, ["signal", "lab", "studio", "special"].map(v => /*#__PURE__*/React.createElement("span", {
    key: v,
    "data-yoru": v
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setVariant(v),
    style: {
      ...btn(variant === v),
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--accent)"
    }
  }), v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [677, 375].map(w => /*#__PURE__*/React.createElement("button", {
    key: w,
    onClick: () => setWidth(w),
    style: btn(width === w)
  }, w === 677 ? "677 编辑器" : "375 手机"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, copied && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".08em",
      color: "var(--yoru-blue)"
    }
  }, copied), /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    style: {
      padding: "7px 14px",
      cursor: "pointer",
      fontFamily: "var(--font-sans-latin)",
      fontSize: 12,
      fontWeight: 500,
      border: "1px solid var(--yoru-blue)",
      borderRadius: 2,
      background: "var(--yoru-blue)",
      color: "#fff"
    }
  }, "\u590D\u5236\u5230\u516C\u4F17\u53F7"))), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "32px 0 80px",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      maxWidth: "100%",
      boxShadow: "0 1px 2px rgba(17,24,39,.06),0 14px 40px rgba(17,24,39,.09)"
    }
  }, /*#__PURE__*/React.createElement(Article, {
    post: post,
    variant: variant
  }))));
}
Object.assign(window, {
  WeChatKit,
  inlineStyles,
  Article
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wechat/article.jsx", error: String((e && e.message) || e) }); }

// ui_kits/xiaohongshu/blocks.jsx
try { (() => {
/* Maps the content stream onto YORU components. The only place block types are interpreted. */
const YB = window.YORUContentDesignSystem_a0b73e;
function YoruBlock({
  b
}) {
  switch (b.t) {
    case "heading":
      return /*#__PURE__*/React.createElement(YB.Heading, {
        level: b.level,
        mark: b.mark,
        kicker: b.kicker
      }, b.text);
    case "lede":
      return /*#__PURE__*/React.createElement(YB.Lede, null, b.text);
    case "body":
      return /*#__PURE__*/React.createElement(YB.Body, null, b.text);
    case "callout":
      return /*#__PURE__*/React.createElement(YB.Callout, {
        kind: b.kind,
        title: b.title
      }, b.text);
    case "quote":
      return /*#__PURE__*/React.createElement(YB.Quote, {
        cite: b.cite,
        source: b.source
      }, b.text);
    case "code":
      return /*#__PURE__*/React.createElement(YB.CodeBlock, {
        filename: b.filename,
        lang: b.lang,
        code: b.code
      });
    case "prompt":
      return /*#__PURE__*/React.createElement(YB.PromptBlock, {
        model: b.model
      }, b.text);
    case "steps":
      return /*#__PURE__*/React.createElement(YB.StepList, {
        start: b.start,
        steps: b.items
      });
    case "compare":
      return /*#__PURE__*/React.createElement(YB.CompareTable, {
        columns: b.columns,
        rows: b.rows,
        highlight: b.highlight,
        caption: b.caption
      });
    case "figure":
      return /*#__PURE__*/React.createElement(YB.Figure, {
        ratio: b.ratio,
        index: b.index,
        caption: b.caption,
        src: b.src,
        placeholder: b.placeholder
      });
    case "refs":
      return /*#__PURE__*/React.createElement(YB.ReferenceList, {
        items: b.items
      });
    default:
      return null;
  }
}
Object.assign(window, {
  YoruBlock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/xiaohongshu/blocks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/xiaohongshu/content.js
try { (() => {
/* One real post, written as a linear block stream. This is the shape the pagination engine eats. */
window.YORU_POST = {
  variant: "lab",
  kicker: "VIBE CODING",
  issue: "2026.08 / 04",
  cover: {
    column: "VIBE CODING",
    date: "2026.08",
    issueNumber: "04",
    title: "把提示词写成模块",
    subtitle: "四十遍之后留下来的写法。",
    tags: ["工作流", "Claude Code"],
    aside: "第四十遍才定下来"
  },
  blocks: [{
    t: "heading",
    level: 1,
    text: "为什么单条提示词撑不住"
  }, {
    t: "lede",
    text: "三个月里我把这套流程跑了四十多遍，下面是留下来的部分。"
  }, {
    t: "body",
    text: "一开始我也是把所有要求堆在一条提示词里。前十次都还行，第十一次改需求的时候就傻眼了 —— 不知道该动哪一句。"
  }, {
    t: "callout",
    kind: "warn",
    title: "先说清楚",
    text: "这套流程依赖 Claude Code 的本地权限，云端 IDE 里跑不通。"
  }, {
    t: "heading",
    level: 2,
    text: "拆成三层"
  }, {
    t: "steps",
    start: 1,
    items: [{
      title: "触发条件",
      body: "什么时候该用这个模块。写死，不要写“视情况”。"
    }, {
      title: "执行步骤",
      body: "按顺序列出来，每一步只做一件事。"
    }, {
      title: "失败兜底",
      body: "做不到的时候要回什么。缺这层，Agent 就开始自由发挥。"
    }]
  }, {
    t: "code",
    filename: ".claude/skills/review.md",
    lang: "md",
    code: "---\nname: review\ndescription: 只在有 diff 的时候触发\n---\n\n1. 先读 diff，不要读整个文件\n2. 先说风险，再说风格\n3. 拿不准就问，不要猜"
  }, {
    t: "heading",
    level: 2,
    text: "写完之后怎么验"
  }, {
    t: "body",
    text: "把同一段需求分别丢给改之前和改之后的配置，比较两次输出。差异不明显就说明这个模块没起作用，删掉。"
  }, {
    t: "prompt",
    model: "Claude Sonnet 4.5",
    text: "你是我的代码审查搭子。只看 diff，先说风险，再说风格。拿不准的地方直接问我，不要猜。"
  }, {
    t: "figure",
    ratio: "16 / 10",
    index: 1,
    caption: "左边是默认输出，右边加了模块约束之后的输出。"
  }, {
    t: "compare",
    highlight: 2,
    columns: ["", "单条提示词", "模块化"],
    rows: [["改需求", "整条重写", "改一层"], ["复用", "复制粘贴", "直接引用"], ["排错", "看不出哪句错", "定位到层"]],
    caption: "同一个任务，四十次之后的体感差异。"
  }, {
    t: "quote",
    text: "Skills 是给 Agent 的说明书，不是给人的文档。",
    cite: "Anthropic",
    source: "Claude Code docs"
  }, {
    t: "refs",
    items: [{
      title: "Claude Code 文档",
      source: "Anthropic",
      url: "docs.anthropic.com/claude-code"
    }, {
      title: "Agent Skills 规范",
      source: "Anthropic",
      url: "docs.anthropic.com/agent-skills"
    }]
  }],
  end: {
    headline: "下期讲怎么让它自己写测试",
    lines: ["模块模板在评论区", "有问题直接问，我都看"]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/xiaohongshu/content.js", error: String((e && e.message) || e) }); }

// ui_kits/xiaohongshu/paginate.jsx
try { (() => {
/* Automatic pagination.
   Renders the whole block stream once into an off-screen column of the real content width,
   measures every block, then greedily fills pages. Headings never end a page alone.

   Safety: every block gets a small padding on its measured height, and code/prompt
   blocks get a larger one — the probe's height and the final rendered height can
   drift by a few px per row from font-metric rounding, and the drift accumulates
   with big multi-line blocks. Better to leave a bit of empty space at the bottom
   of a page than to have the footer bleed into the code block. */
function usePagination(blocks, {
  variant,
  size,
  contentHeight,
  contentWidth,
  gap
}) {
  const [pages, setPages] = React.useState(null);
  const probe = React.useRef(null);
  React.useLayoutEffect(() => {
    const el = probe.current;
    if (!el) return;
    let raf = requestAnimationFrame(() => {
      const hs = Array.from(el.children).map((c, i) => {
        const t = blocks[i]?.t;
        const pad = t === "code" || t === "prompt" ? 24 : 6;
        return c.getBoundingClientRect().height + pad;
      });
      const out = [];
      let cur = [];
      let h = 0;
      blocks.forEach((b, i) => {
        const bh = hs[i] || 0;
        const need = cur.length ? h + gap + bh : bh;
        if (cur.length && need > contentHeight) {
          out.push(cur);
          cur = [i];
          h = bh;
        } else {
          cur.push(i);
          h = need;
        }
      });
      if (cur.length) out.push(cur);
      // a heading stranded as the last block of a page moves forward
      for (let p = 0; p < out.length - 1; p++) {
        const last = out[p][out[p].length - 1];
        if (out[p].length > 1 && blocks[last].t === "heading") {
          out[p].pop();
          out[p + 1].unshift(last);
        }
      }
      setPages(out);
    });
    return () => cancelAnimationFrame(raf);
  }, [blocks, variant, size, contentHeight, contentWidth, gap]);
  const Probe = /*#__PURE__*/React.createElement("div", {
    className: "yoru-card",
    "data-yoru": variant,
    "data-size": size,
    "aria-hidden": "true",
    style: {
      position: "fixed",
      left: -99999,
      top: 0,
      height: "auto",
      width: contentWidth,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: probe,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0,
      width: contentWidth
    }
  }, blocks.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(YoruBlock, {
    b: b
  })))));
  return {
    pages,
    Probe
  };
}
Object.assign(window, {
  usePagination
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/xiaohongshu/paginate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/xiaohongshu/workbench.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WB = window.YORUContentDesignSystem_a0b73e;
const CN_D = "〇一二三四五六七八九";
const cnDate = s => {
  const m = String(s).match(/(\d{4})\D?(\d{1,2})/);
  if (!m) return s;
  const t = "零一二三四五六七八九十";
  const mo = +m[2];
  return m[1].split("").map(d => CN_D[+d]).join("") + "年" + (mo <= 10 ? t[mo] : "十" + t[mo - 10]) + "月";
};
const cnIss = n => {
  n = parseInt(n, 10);
  const t = "零一二三四五六七八九十";
  return n <= 10 ? t[n] : String(n).split("").map(d => CN_D[+d]).join("");
};
const SIZES = {
  "1242x1656": {
    w: 1242,
    h: 1656,
    px: 96,
    py: 104,
    footer: 110,
    gap: 32
  },
  "1080x1440": {
    w: 1080,
    h: 1440,
    px: 84,
    py: 90,
    footer: 96,
    gap: 32
  },
  "1080x1350": {
    w: 1080,
    h: 1350,
    px: 84,
    py: 80,
    footer: 88,
    gap: 32
  }
};
const VARIANTS = [{
  id: "signal",
  label: "Signal",
  desc: "AI 新闻 · 工具速评"
}, {
  id: "lab",
  label: "Lab",
  desc: "教程 · 工作流 · 排错"
}, {
  id: "studio",
  label: "Studio",
  desc: "创作项目 · 视觉实验"
}, {
  id: "special",
  label: "Special",
  desc: "FPV · 摄影 · 生活"
}];
function Chip({
  active,
  onClick,
  children,
  dot
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "6px 12px",
      cursor: "pointer",
      fontFamily: "var(--font-sans-latin)",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: ".02em",
      border: "1px solid " + (active ? "var(--ink-1)" : "var(--line-2)"),
      borderRadius: 2,
      background: active ? "var(--ink-1)" : "#fff",
      color: active ? "#fff" : "var(--ink-3)",
      transition: "background .12s,color .12s,border-color .12s"
    }
  }, dot && /*#__PURE__*/React.createElement("i", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: dot
    }
  }), children);
}
function Toolbar({
  variant,
  setVariant,
  size,
  setSize,
  scale,
  setScale,
  count
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 5,
      background: "rgba(255,255,255,.94)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--line-1)",
      padding: "14px 28px",
      display: "flex",
      alignItems: "center",
      gap: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 900,
      fontSize: 15,
      letterSpacing: ".24em",
      color: "var(--yoru-blue)"
    }
  }, "YORU"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--ink-4)"
    }
  }, "\u5C0F\u7EA2\u4E66\u56FE\u6587\u53F0")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, VARIANTS.map(v => /*#__PURE__*/React.createElement("span", {
    key: v.id,
    "data-yoru": v.id
  }, /*#__PURE__*/React.createElement(Chip, {
    active: variant === v.id,
    onClick: () => setVariant(v.id),
    dot: "var(--accent)"
  }, v.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, Object.keys(SIZES).map(s => /*#__PURE__*/React.createElement(Chip, {
    key: s,
    active: size === s,
    onClick: () => setSize(s)
  }, s))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".1em",
      color: "var(--ink-4)"
    }
  }, "\u7F29\u653E ", /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "18",
    max: "60",
    value: scale * 100,
    onChange: e => setScale(e.target.value / 100),
    style: {
      width: 96,
      accentColor: "var(--yoru-blue)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      color: "var(--ink-2)"
    }
  }, Math.round(scale * 100), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".1em",
      color: "var(--ink-4)"
    }
  }, "\u81EA\u52A8\u5206\u9875 \xB7 \u5171 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--yoru-blue)"
    }
  }, String(count).padStart(2, "0")), " \u9875"), /*#__PURE__*/React.createElement("button", {
    onClick: () => window.print(),
    style: {
      padding: "7px 14px",
      cursor: "pointer",
      fontFamily: "var(--font-sans-latin)",
      fontSize: 12,
      fontWeight: 500,
      border: "1px solid var(--yoru-blue)",
      borderRadius: 2,
      background: "var(--yoru-blue)",
      color: "#fff"
    }
  }, "\u5BFC\u51FA\u56FE\u7247")));
}
function Slot({
  n,
  total,
  scale,
  w,
  h,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w * scale,
      height: h * scale,
      overflow: "hidden",
      boxShadow: "0 1px 2px rgba(17,24,39,.06),0 14px 40px rgba(17,24,39,.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: "scale(" + scale + ")",
      transformOrigin: "top left"
    }
  }, children)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".1em",
      color: "var(--ink-5)"
    }
  }, /*#__PURE__*/React.createElement("span", null, String(n).padStart(2, "0"), " / ", String(total).padStart(2, "0")), /*#__PURE__*/React.createElement("span", null, n === 1 ? "COVER" : n === total ? "END" : "CONTENT")));
}
function Workbench() {
  const post = window.YORU_POST;
  const [variant, setVariant] = React.useState(post.variant);
  const [size, setSize] = React.useState("1242x1656");
  const [scale, setScale] = React.useState(0.3);
  const S = SIZES[size];
  const {
    pages,
    Probe
  } = usePagination(post.blocks, {
    variant,
    size,
    contentWidth: S.w - S.px * 2,
    contentHeight: S.h - S.py * 2 - S.footer,
    gap: S.gap
  });
  const list = pages || [];
  const total = list.length + 2;
  const foot = /*#__PURE__*/React.createElement(WB.PageFooter, {
    note: post.issue
  });
  const wh = {
    w: S.w,
    h: S.h
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--paper-3)"
    }
  }, Probe, /*#__PURE__*/React.createElement(Toolbar, {
    variant,
    setVariant,
    size,
    setSize,
    scale,
    setScale,
    count: total
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "36px 28px 72px",
      display: "flex",
      flexWrap: "wrap",
      gap: 32,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Slot, _extends({
    n: 1,
    total: total,
    scale: scale
  }, wh), /*#__PURE__*/React.createElement(WB.CoverOverprint, {
    variant: variant,
    size: size,
    column: post.cover.column,
    date: post.cover.date,
    index: 1,
    total: total,
    title: post.cover.title,
    subtitle: post.cover.subtitle,
    tags: post.cover.tags,
    aside: post.cover.aside,
    issueNumber: post.cover.issueNumber
  })), list.map((idxs, i) => /*#__PURE__*/React.createElement(Slot, _extends({
    key: i,
    n: i + 2,
    total: total,
    scale: scale
  }, wh), /*#__PURE__*/React.createElement(WB.Page, {
    variant: variant,
    size: size,
    kicker: post.kicker,
    index: i + 2,
    total: total,
    footer: foot,
    spine: cnDate(post.cover.date) + " · 卷" + cnIss(post.cover.issueNumber) + " · " + post.cover.title
  }, idxs.map(j => /*#__PURE__*/React.createElement(YoruBlock, {
    key: j,
    b: post.blocks[j]
  }))))), pages && /*#__PURE__*/React.createElement(Slot, _extends({
    n: total,
    total: total,
    scale: scale
  }, wh), /*#__PURE__*/React.createElement(WB.EndCard, {
    variant: variant,
    size: size,
    headline: post.end.headline,
    lines: post.end.lines,
    note: post.issue
  }))));
}
Object.assign(window, {
  Workbench
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/xiaohongshu/workbench.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.CompareTable = __ds_scope.CompareTable;

__ds_ns.MarginNote = __ds_scope.MarginNote;

__ds_ns.PromptBlock = __ds_scope.PromptBlock;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.ReferenceList = __ds_scope.ReferenceList;

__ds_ns.StepList = __ds_scope.StepList;

__ds_ns.CoverOverprint = __ds_scope.CoverOverprint;

__ds_ns.CoverType = __ds_scope.CoverType;

__ds_ns.EndCard = __ds_scope.EndCard;

__ds_ns.Diagram = __ds_scope.Diagram;

__ds_ns.DiagramAnnotation = __ds_scope.DiagramAnnotation;

__ds_ns.DiagramEdge = __ds_scope.DiagramEdge;

__ds_ns.DiagramGroup = __ds_scope.DiagramGroup;

__ds_ns.DiagramLegend = __ds_scope.DiagramLegend;

__ds_ns.DiagramNode = __ds_scope.DiagramNode;

__ds_ns.GEO = __ds_scope.GEO;

__ds_ns.GEO_COMPACT = __ds_scope.GEO_COMPACT;

__ds_ns.SectionMark = __ds_scope.SectionMark;

__ds_ns.StatusLabel = __ds_scope.StatusLabel;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.MoonPhases = __ds_scope.MoonPhases;

__ds_ns.Masthead = __ds_scope.Masthead;

__ds_ns.Page = __ds_scope.Page;

__ds_ns.PageFooter = __ds_scope.PageFooter;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Body = __ds_scope.Body;

__ds_ns.Caption = __ds_scope.Caption;

__ds_ns.Emphasis = __ds_scope.Emphasis;

__ds_ns.Heading = __ds_scope.Heading;

__ds_ns.Lede = __ds_scope.Lede;

__ds_ns.Marker = __ds_scope.Marker;

})();
