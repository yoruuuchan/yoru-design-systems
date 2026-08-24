/* RIFT theme toggle — drop once per card / page.
   Adds a small fixed chip top-right that flips <html data-theme>.
   Choice persists across reloads via localStorage. */
(function () {
  if (typeof document === "undefined") return;
  if (document.getElementById("rift-theme-toggle")) return;

  // Apply persisted preference immediately, before paint.
  try {
    var saved = localStorage.getItem("rift-theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.dataset.theme = saved;
    }
  } catch (e) {}

  function mount() {
    if (document.getElementById("rift-theme-toggle")) return;
    var btn = document.createElement("button");
    btn.id = "rift-theme-toggle";
    btn.type = "button";
    btn.setAttribute("aria-label", "Toggle theme");
    btn.style.cssText = [
      "position:fixed",
      "top:10px",
      "right:10px",
      "z-index:9999",
      "height:26px",
      "padding:0 12px",
      "display:inline-flex",
      "align-items:center",
      "gap:6px",
      "font-family:var(--font-mono, ui-monospace, monospace)",
      "font-size:10px",
      "letter-spacing:0.14em",
      "text-transform:uppercase",
      "color:var(--ink-2, #A7B4D2)",
      "background:var(--glass-2-bg, rgba(30,50,90,0.32))",
      "border:1px solid var(--line-2, rgba(184,220,255,0.15))",
      "border-radius:var(--r-pill, 999px)",
      "cursor:pointer",
      "-webkit-backdrop-filter:blur(10px) saturate(170%)",
      "backdrop-filter:blur(10px) saturate(170%)",
      "box-shadow:inset 0 1px 0 var(--glass-inner-hi, rgba(255,255,255,0.10))",
      "transition:color 200ms, border-color 200ms",
    ].join(";");

    function render() {
      var cur = document.documentElement.dataset.theme || "dark";
      btn.textContent = cur === "dark" ? "◐  dark" : "◑  light";
    }
    btn.addEventListener("mouseenter", function () { btn.style.color = "var(--ink-1)"; btn.style.borderColor = "var(--line-strong)"; });
    btn.addEventListener("mouseleave", function () { btn.style.color = "var(--ink-2)"; btn.style.borderColor = "var(--line-2)"; });
    btn.addEventListener("click", function () {
      var cur = document.documentElement.dataset.theme || "dark";
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("rift-theme", next); } catch (e) {}
      render();
    });
    render();
    document.body.appendChild(btn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
