import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "rgb(var(--text) / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          dark: "rgb(var(--primary-dark) / <alpha-value>)",
          container: "rgb(var(--primary-container) / <alpha-value>)",
        },
        "on-primary": {
          container: "rgb(var(--on-primary-container) / <alpha-value>)",
        },
        emerald: {
          brand: "#047857",
        },
        violet: {
          brand: "#6B21A8",
        },
        page: {
          start: "rgb(var(--bg-page-start) / <alpha-value>)",
          mid: "rgb(var(--bg-page-mid) / <alpha-value>)",
          end: "rgb(var(--bg-page-end) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          muted: "rgb(var(--surface-muted) / <alpha-value>)",
        },
        band: "rgb(var(--band) / <alpha-value>)",
        outline: {
          DEFAULT: "rgb(var(--outline) / <alpha-value>)",
          strong: "rgb(var(--divider) / <alpha-value>)",
        },
        track: "rgb(var(--track) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        rating: "rgb(var(--rating) / <alpha-value>)",
        indigo: {
          app: "#6366F1",
          light: "#818CF8",
          deep: "#4F46E5",
        },
        cat: {
          meca: "#5C6BC0",
          bois: "#A1887F",
          clean: "#26A69A",
          plomb: "#42A5F5",
          elec: "#FFB300",
          peint: "#BA68C8",
          jard: "#66BB6A",
          clim: "#29B6F6",
          vitr: "#90A4AE",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        arabic: ["var(--font-noto-arabic)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "12": "12px",
        "16": "16px",
        "20": "20px",
        "24": "24px",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        "soft-lg": "0 16px 40px -12px rgba(0, 0, 0, 0.25)",
        card: "var(--shadow-card)",
        "card-hover": "0 12px 32px -8px rgba(190, 24, 93, 0.2)",
      },
      height: {
        btn: "52px",
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
        "brand-gradient": "var(--brand-gradient)",
      },
    },
  },
  plugins: [],
};

export default config;
