import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import {
  googleSiteVerification,
  siteDescription,
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
  description: siteDescription,
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
    title: "lm3alem – L'app pour trouver un artisan au Maroc",
    description: siteDescription,
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "lm3alem – Application artisan Maroc",
      },
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
    description: siteDescription,
    images: ["/apple-touch-icon.png"],
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
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
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
