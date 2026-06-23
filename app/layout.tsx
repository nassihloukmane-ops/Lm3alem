import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
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
  title: "Lmaalem — Trouvez le bon artisan au Maroc",
  description:
    "Plombiers, électriciens, menuisiers — disponibles près de chez vous au Maroc. L'application qui connecte les clients aux meilleurs artisans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${notoArabic.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
