/* Tiny typed wrappers over Lucide so component JSX stays clean.
   Usage: <Icon name="message-square-text" />
   Lucide is loaded via <script src="https://unpkg.com/lucide@0.452.0/..."> in index.html. */

function Icon({ name, size = 18, stroke = 1.75, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && window.lucide.icons) {
      ref.current.innerHTML = "";
      const iconKey = name.split("-").map((p, i) => i === 0 ? p : p[0].toUpperCase() + p.slice(1)).join("");
      const icon = window.lucide.icons[iconKey[0].toUpperCase() + iconKey.slice(1)];
      if (icon) {
        const svg = window.lucide.createElement(icon);
        svg.setAttribute("width", size);
        svg.setAttribute("height", size);
        svg.setAttribute("stroke-width", stroke);
        ref.current.appendChild(svg);
      } else {
        // fallback: render an empty span so layout doesn't shift
        ref.current.textContent = "";
      }
    }
  }, [name, size, stroke]);
  return <span ref={ref} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: size, height: size }} {...rest} />;
}

Object.assign(window, { Icon });
