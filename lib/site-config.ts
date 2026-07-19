import { brandAr, brandName } from "@/lib/brand";

/** URL canonique du site — source unique pour tout le SEO */
export const siteUrl = "https://lm3alem.com";

export const siteName = brandName;
export { brandAr, brandName };

/** Description affichée dans Google, réseaux sociaux et partages */
export const siteDescription =
  "Trouvez un plombier, électricien ou professionnel vérifié près de chez vous en quelques minutes. Téléchargez lm3alem.";

/** Balise Google Search Console (optionnelle — la vérification par fichier HTML est dans public/) */
export const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const storeLinks = {
  appStore: "#download",
  googlePlay: "#download",
} as const;
