import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Noto_Sans_Arabic } from "next/font/google";
import {
  googleSiteVerification,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/site-config";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-arabic",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

const defaultTitle = "lm3alem — Services à domicile avec artisans vérifiés";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFBF7" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "services à domicile Maroc",
    "trouver un plombier près de moi",
    "trouver un électricien près de moi",
    "artisans vérifiés",
    "application services maison",
    "lm3alem app",
    "réserver un professionnel",
    "lm3alem",
    "plombier Maroc",
    "électricien Maroc",
    "معلم",
    "سباك",
    "كهربائي",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "services",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      fr: "/?lang=fr",
      ar: "/?lang=ar",
      en: "/?lang=en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    alternateLocale: ["ar_MA", "en_US"],
    url: "/",
    siteName,
    title: defaultTitle,
    description: siteDescription,
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
    title: defaultTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

const themeInitScript = `
(function(){
  try {
    var k='lmaalem-theme';
    var t=localStorage.getItem(k);
    if(t!=='light'&&t!=='dark'){
      t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
    }
    if(t==='dark') document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme=t;
  } catch(e){}
  try {
    var lk='lmaalem-locale';
    var p=new URLSearchParams(location.search).get('lang');
    var l=p||localStorage.getItem(lk)||'fr';
    if(l!=='fr'&&l!=='ar'&&l!=='en') l='fr';
    document.documentElement.lang=l==='ar'?'ar-MA':l==='en'?'en':'fr-MA';
    document.documentElement.dir=l==='ar'?'rtl':'ltr';
    if(l==='ar'){
      document.documentElement.classList.add('locale-ar');
      document.documentElement.classList.add('font-arabic');
    }
  } catch(e){}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr-MA"
      dir="ltr"
      className={`${fraunces.variable} ${manrope.variable} ${notoArabic.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
