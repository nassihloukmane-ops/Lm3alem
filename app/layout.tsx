import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import {
  googleSiteVerification,
  siteName,
  siteUrl,
} from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "lm3alem – Trouvez un Artisan au Maroc | Plombier, Électricien, Menuisier",
    template: "%s | lm3alem",
  },
  description:
    "lm3alem connecte les clients avec des artisans qualifiés au Maroc. Trouvez rapidement un plombier, électricien, menuisier ou peintre près de chez vous. Disponible sur iOS et Android.",
  keywords: [
    "artisan maroc",
    "plombier maroc",
    "électricien maroc",
    "menuisier casablanca",
    "trouver artisan",
    "application artisan maroc",
    "معلم",
    "سباك",
    "كهربائي",
    "lm3alem",
    "المعلم",
    "artisan casablanca",
    "dépannage maroc",
    "services maison maroc",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    alternateLocale: "ar_MA",
    url: siteUrl,
    siteName,
    title: "lm3alem – Trouvez un Artisan qualifié au Maroc",
    description:
      "L'application qui connecte clients et artisans au Maroc. Plombiers, électriciens, menuisiers disponibles près de chez vous.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "lm3alem – Application Artisan Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "lm3alem – Trouvez un Artisan au Maroc",
    description:
      "Connectez-vous avec des artisans qualifiés au Maroc en quelques secondes.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/site.webmanifest",
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-MA" dir="ltr" className={`${inter.variable} ${notoArabic.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
