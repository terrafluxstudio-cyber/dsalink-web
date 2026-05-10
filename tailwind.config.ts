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
          DEFAULT: "#0c3d5c",
          dark: "#082a42",
          light: "#134a6e",
          muted: "#3d6d8c",
        },
        champagne: {
          DEFAULT: "#c6a24a",
          light: "#d4b86a",
          dark: "#9a7d38",
          subtle: "#f5f0e4",
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
        "hero-mesh":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(198, 162, 74, 0.12), transparent 55%), radial-gradient(ellipse 60% 50% at 100% 0%, rgba(12, 61, 92, 0.08), transparent 45%), linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,240,228,0.4) 100%)",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(12, 61, 92, 0.08), 0 8px 16px -8px rgba(12, 61, 92, 0.06)",
        gold: "0 1px 0 0 rgba(198, 162, 74, 0.35)",
      },
      keyframes: {
        "gold-breathe": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(198, 162, 74, 0.32)",
            borderColor: "rgba(198, 162, 74, 0.38)",
          },
          "50%": {
            boxShadow: "0 0 26px 7px rgba(198, 162, 74, 0.22)",
            borderColor: "rgba(198, 162, 74, 0.72)",
          },
        },
      },
      animation: {
        "gold-breathe": "gold-breathe 2.75s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
