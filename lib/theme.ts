/**
 * =============================================================================
 * THEME LMAALEM — source unique light / dark
 * =============================================================================
 * Toute couleur du site et des mockups app passe par ce fichier.
 * Les variables CSS dans `app/globals.css` doivent rester alignées.
 *
 * Usage composants :
 *   text-ink | text-ink-secondary | bg-surface | bg-surface-muted | bg-band
 *   border-outline | text-primary | bg-primary | …
 *
 * Usage styles inline (mockups) :
 *   import { themes, getTheme } from "@/lib/theme"
 * =============================================================================
 */

export type AppTheme = "light" | "dark";

/** Canaux RGB "r g b" pour `rgb(var(--x) / <alpha>)` */
type Rgb = `${number} ${number} ${number}`;

export type ThemeTokens = {
  /** Fond page / écran app */
  bg: string;
  /** Fond page (dégradé light / uni dark) */
  pageStart: string;
  pageMid: string;
  pageEnd: string;
  /** Cartes / surfaces élevées */
  surface: string;
  /** Bandes de section (confiance, footer) + zones atténuées */
  surfaceMuted: string;
  band: string;
  /** Texte */
  text: string;
  textSecondary: string;
  /** Bordures */
  outline: string;
  divider: string;
  /** Marque */
  primary: string;
  primaryDark: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  track: string;
  success: string;
  rating: string;
  /** Accents mockup app */
  indigo: string;
  indigoLight: string;
  selectedBg: string;
  iconTools: string;
  logoPlate: string;
  shadow: string;
  navBg: string;
  /** Canaux pour CSS */
  css: Record<string, Rgb | string>;
};

export const themes: Record<AppTheme, ThemeTokens> = {
  light: {
    bg: "#FFFBF7",
    pageStart: "#FFFBF7",
    pageMid: "#FFF4ED",
    pageEnd: "#FFE8DC",
    surface: "#FFFFFF",
    surfaceMuted: "#FFF5EE",
    band: "#FFF5EE",
    text: "#1C1917",
    textSecondary: "#57534E",
    outline: "#F3E8DD",
    divider: "#EDE0D4",
    primary: "#BE185D",
    primaryDark: "#9F1239",
    primaryContainer: "#FCE7F3",
    onPrimaryContainer: "#9F1239",
    track: "#FDF2F8",
    success: "#059669",
    rating: "#D97706",
    indigo: "#6366F1",
    indigoLight: "#818CF8",
    selectedBg: "#FFFBEB",
    iconTools: "linear-gradient(135deg, #047857 0%, #6B21A8 100%)",
    logoPlate: "#0D0B21",
    shadow: "0 6px 20px rgba(28, 25, 23, 0.06)",
    navBg: "rgba(255, 251, 247, 0.94)",
    css: {
      "--bg-page-start": "255 251 247",
      "--bg-page-mid": "255 244 237",
      "--bg-page-end": "255 232 220",
      "--surface": "255 255 255",
      "--surface-muted": "255 245 238",
      "--band": "255 245 238",
      "--outline": "243 232 221",
      "--divider": "237 224 212",
      "--track": "253 242 248",
      "--text": "28 25 23",
      "--text-secondary": "87 83 78",
      "--on-primary-container": "159 18 57",
      "--primary": "190 24 93",
      "--primary-dark": "159 18 57",
      "--primary-container": "252 231 243",
      "--success": "5 150 105",
      "--rating": "217 119 6",
      "--shadow-soft": "0 8px 28px -8px rgba(28, 25, 23, 0.12)",
      "--shadow-card": "0 4px 24px -4px rgba(28, 25, 23, 0.08)",
      "--nav-bg": "rgba(255, 251, 247, 0.94)",
      "--ring-offset": "255 251 247",
      "--brand-gradient": "linear-gradient(135deg, #047857 0%, #6B21A8 100%)",
      "--phone-glow": "drop-shadow(0 24px 40px rgba(190, 24, 93, 0.18))",
      "--scrollbar-thumb": "rgba(190, 24, 93, 0.35)",
      "--scrollbar-thumb-hover": "rgba(190, 24, 93, 0.5)",
    },
  },
  dark: {
    bg: "#020617",
    pageStart: "#020617",
    pageMid: "#020617",
    pageEnd: "#020617",
    surface: "#1E293B",
    surfaceMuted: "#0F172A",
    band: "#0F172A",
    text: "#FFFFFF",
    textSecondary: "#CBD5E1",
    outline: "#334155",
    divider: "#475569",
    primary: "#E11D6E",
    primaryDark: "#FB71A8",
    primaryContainer: "#4C0519",
    onPrimaryContainer: "#FCE7F3",
    track: "#4C0519",
    success: "#22C55E",
    rating: "#F59E0B",
    indigo: "#6366F1",
    indigoLight: "#818CF8",
    selectedBg: "rgba(245, 158, 11, 0.15)",
    iconTools: "linear-gradient(135deg, #6366F1 0%, #A855F7 100%)",
    logoPlate: "#0D0B21",
    shadow: "0 8px 24px rgba(0, 0, 0, 0.45)",
    navBg: "rgba(2, 6, 23, 0.94)",
    css: {
      "--bg-page-start": "2 6 23",
      "--bg-page-mid": "2 6 23",
      "--bg-page-end": "2 6 23",
      "--surface": "30 41 59",
      "--surface-muted": "15 23 42",
      "--band": "15 23 42",
      "--outline": "51 65 85",
      "--divider": "71 85 105",
      "--track": "76 5 25",
      "--text": "255 255 255",
      "--text-secondary": "203 213 225",
      "--on-primary-container": "252 231 243",
      "--primary": "225 29 110",
      "--primary-dark": "251 113 168",
      "--primary-container": "76 5 25",
      "--success": "34 197 94",
      "--rating": "245 158 11",
      "--shadow-soft": "0 8px 28px -8px rgba(0, 0, 0, 0.55)",
      "--shadow-card": "0 4px 24px -4px rgba(0, 0, 0, 0.5)",
      "--nav-bg": "rgba(2, 6, 23, 0.94)",
      "--ring-offset": "2 6 23",
      "--brand-gradient": "linear-gradient(135deg, #6366F1 0%, #A855F7 100%)",
      "--phone-glow": "drop-shadow(0 24px 40px rgba(99, 102, 241, 0.28))",
      "--scrollbar-thumb": "rgba(225, 29, 110, 0.4)",
      "--scrollbar-thumb-hover": "rgba(225, 29, 110, 0.55)",
    },
  },
};

export function getTheme(mode: AppTheme): ThemeTokens {
  return themes[mode];
}

/** Alias mockups app (compat) */
export const lightPalette = themes.light;
export const darkPalette = themes.dark;
