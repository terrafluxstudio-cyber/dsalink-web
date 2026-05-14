import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        intellectual: {
          DEFAULT: "#0d3f5f",
          dark: "#082c44",
          light: "#145070",
          muted: "#4a7a9b",
        },
        champagne: {
          DEFAULT: "#c6a24a",
          light: "#d4b86a",
          dark: "#9a7d38",
          subtle: "#faf5e8",
        },
        surface: {
          DEFAULT: "#f8f6f1",
          subtle: "#f2efe8",
          warm: "#ebe7df",
          card: "#ffffff",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "var(--font-noto)",
          "var(--font-noto-tamil)",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-sans)",
          "var(--font-noto)",
          "var(--font-noto-tamil)",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        /* Light hero — warm bloom on cream-white */
        "hero-mesh":
          "radial-gradient(ellipse 65% 55% at 25% -15%, rgba(198,162,74,0.09), transparent 52%), radial-gradient(ellipse 55% 45% at 85% 110%, rgba(13,63,95,0.06), transparent 50%), linear-gradient(170deg, #ffffff 0%, #f8f6f1 100%)",
        /* Subtle section tint */
        "surface-mesh":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(198,162,74,0.05), transparent 55%), linear-gradient(180deg, #f8f6f1 0%, #f2efe8 100%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,240,228,0.4) 100%)",
        "hero-right":
          "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(198,162,74,0.06), transparent 60%)",
      },
      boxShadow: {
        /* Card resting */
        card: "0 1px 2px rgba(13,63,95,0.04), 0 3px 12px -2px rgba(13,63,95,0.07)",
        /* Card on hover */
        "card-hover": "0 2px 4px rgba(13,63,95,0.05), 0 10px 28px -4px rgba(13,63,95,0.12)",
        /* Header drop */
        nav: "0 1px 0 0 rgba(255,255,255,0.06)",
        soft: "0 2px 8px rgba(13,63,95,0.06), 0 8px 24px -4px rgba(13,63,95,0.09)",
        gold: "0 1px 0 0 rgba(198,162,74,0.35)",
        section: "0 -1px 0 0 rgba(198,162,74,0.12), 0 1px 0 0 rgba(198,162,74,0.12)",
      },
      keyframes: {
        "gold-breathe": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(198,162,74,0.32)",
            borderColor: "rgba(198,162,74,0.38)",
          },
          "50%": {
            boxShadow: "0 0 26px 7px rgba(198,162,74,0.22)",
            borderColor: "rgba(198,162,74,0.72)",
          },
        },
        "glossary-pop": {
          "0%": { opacity: "0", transform: "scale(0.96) translateY(4px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        "gold-breathe": "gold-breathe 2.75s ease-in-out infinite",
        "glossary-pop": "glossary-pop 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
