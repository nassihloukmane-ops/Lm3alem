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
        saffron: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
          light: "#FCD34D",
        },
        teal: {
          DEFAULT: "#0F4C6E",
          light: "#1A6B94",
          dark: "#0A3549",
        },
        warm: {
          white: "#FAFAF7",
          cream: "#F5F0E8",
        },
        terracotta: {
          DEFAULT: "#C05E3C",
          light: "#D4785A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-noto-arabic)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        warm: "0 10px 40px -10px rgba(245, 158, 11, 0.25)",
        card: "0 4px 24px -4px rgba(15, 76, 110, 0.12)",
        "card-hover": "0 20px 40px -12px rgba(245, 158, 11, 0.3)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #FAFAF7 0%, #F5F0E8 50%, #FAFAF7 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #C05E3C 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
