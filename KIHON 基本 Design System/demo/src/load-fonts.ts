// Load Google Fonts (Instrument Sans + B612 Mono) for Latin text.
// If loading fails (network), the CSS font-stack falls back to Source Han Sans SC.

export const googleFontsStatus = {
  instrumentSans: false,
  b612Mono: false,
};

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { loadFont } = require("@remotion/google-fonts/InstrumentSans");
  // Instrument Sans has NO weight 300 — do not request it
  loadFont("normal", {
    weights: ["400", "500", "600", "700"] as const,
    subsets: ["latin"] as const,
  });
  googleFontsStatus.instrumentSans = true;
} catch {
  // Instrument Sans unavailable — Latin falls to Source Han Sans SC
}

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { loadFont } = require("@remotion/google-fonts/B612Mono");
  loadFont("normal", {
    weights: ["400", "700"] as const,
    subsets: ["latin"] as const,
  });
  googleFontsStatus.b612Mono = true;
} catch {
  // B612 Mono unavailable — numerals fall to Source Han Sans SC
}
