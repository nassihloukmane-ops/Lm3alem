import type { Metadata } from "next";
import { Seo } from "@/components/seo/Seo";
import { LandingPage } from "@/components/LandingPage";
import { siteDescription, siteName, siteUrl } from "@/lib/site-config";

const pageTitle = "lm3alem — Services à domicile avec artisans vérifiés";

/** Metadata unique de la page d’accueil (complète le layout racine). */
export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: pageTitle,
    description: siteDescription,
    siteName,
    locale: "fr_MA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "lm3alem — Application services à domicile Maroc",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Seo />
      <LandingPage />
    </main>
  );
}
