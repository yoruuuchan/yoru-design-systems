/* RIFT cursor + click ripple. Drop once near the end of <body>:
     <script src="path/to/cursor-fx.js"></script>
   Pairs with #rift-cursor / .rift-ripple styles in effects.css. */
(function () {
  if (typeof document === "undefined") return;
  if (document.getElementById("rift-cursor")) return;

  var dot = document.createElement("div");
  dot.id = "rift-cursor";
  document.body.appendChild(dot);

  var mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;

  addEventListener("mousemove", function (e) {
    mx = e.clientX; my = e.clientY;
    dot.style.opacity = "1";
  });
  addEventListener("mouseout", function () { dot.style.opacity = "0"; });
  addEventListener("pointerdown", function (e) {
    var r = document.createElement("div");
    r.className = "rift-ripple";
    r.style.left = e.clientX + "px";
    r.style.top  = e.clientY + "px";
    document.body.appendChild(r);
    setTimeout(function () { r.remove(); }, 640);
  });

  (function loop() {
    cx += (mx - cx) * 0.30;
    cy += (my - cy) * 0.30;
    dot.style.transform = "translate(" + cx + "px," + cy + "px)";
    requestAnimationFrame(loop);
  })();
})();
