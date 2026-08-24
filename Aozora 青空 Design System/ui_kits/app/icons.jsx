// Shared monoline icons used across the Aozora App UI kit.
// Inlined SVG (not a CDN) so the kit previews offline. Stroke 2px, round caps.

const ic = (path, opts = {}) => function Icon({ size = 20, color = "currentColor", ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={opts.fill || "none"}
         stroke={opts.fill ? "none" : color} strokeWidth={opts.sw || 2}
         strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {path}
    </svg>
  );
};

const Home     = ic(<><path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/></>);
const Search   = ic(<><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>);
const Heart    = ic(<><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></>);
const HeartFill= ic(<path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/>, { fill:'currentColor' });
const User     = ic(<><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></>);
const Plus     = ic(<><path d="M12 5v14M5 12h14"/></>);
const Arrow    = ic(<><path d="M5 12h14M13 6l6 6-6 6"/></>);
const Back     = ic(<><path d="M19 12H5M11 6l-6 6 6 6"/></>);
const Bell     = ic(<><path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8z"/><path d="M10 21a2 2 0 0 0 4 0"/></>);
const Settings = ic(<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></>);
const Chev     = ic(<><path d="m9 6 6 6-6 6"/></>);
const Drop     = ic(<path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"/>, { fill:'currentColor' });
const Star     = ic(<path d="m12 3 2.6 6 6.4.6-4.8 4.4 1.4 6.4L12 17.3 6.4 20.4 7.8 14 3 9.6 9.4 9z"/>, { fill:'currentColor' });
const Cart     = ic(<><circle cx="9" cy="20" r="1.6"/><circle cx="17" cy="20" r="1.6"/><path d="M3 4h2l2.5 11h11l2-7H6"/></>);

Object.assign(window, { IcHome:Home, IcSearch:Search, IcHeart:Heart, IcHeartFill:HeartFill, IcUser:User, IcPlus:Plus, IcArrow:Arrow, IcBack:Back, IcBell:Bell, IcSettings:Settings, IcChev:Chev, IcDrop:Drop, IcStar:Star, IcCart:Cart });
