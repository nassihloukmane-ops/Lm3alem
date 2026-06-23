export const siteUrl = "https://lm3alem.ma";

export const faqItems = [
  {
    question: "Comment trouver un plombier au Maroc ?",
    answer:
      "Avec lm3alem, téléchargez l'application, choisissez la catégorie Plombier, et trouvez un artisan disponible près de chez vous en quelques secondes.",
  },
  {
    question: "lm3alem est-il disponible dans toutes les villes du Maroc ?",
    answer:
      "lm3alem est disponible à Casablanca, Rabat, Marrakech, Fès, Tanger et s'étend progressivement à d'autres villes.",
  },
  {
    question: "كيف أجد معلم سباكة في المغرب؟",
    answer:
      "مع تطبيق لمعلم، حمّل التطبيق، اختر فئة السباكة، وابحث عن معلم متاح بالقرب منك في ثوانٍ.",
  },
  {
    question: "L'application lm3alem est-elle gratuite ?",
    answer:
      "Oui, le téléchargement et l'inscription sur lm3alem sont entièrement gratuits. Vous ne payez que le service de l'artisan que vous choisissez.",
  },
  {
    question: "Comment sont vérifiés les artisans sur lm3alem ?",
    answer:
      "Chaque artisan passe par un processus de vérification d'identité et de compétences. Les avis clients authentiques vous permettent de choisir en toute confiance.",
  },
] as const;

export const mobileApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "lm3alem",
  description:
    "Application mobile qui connecte clients et artisans qualifiés au Maroc",
  operatingSystem: "Android, iOS",
  applicationCategory: "UtilitiesApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "MAD" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "320",
  },
  url: siteUrl,
  inLanguage: ["fr", "ar"],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "lm3alem",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Plateforme marocaine de mise en relation entre clients et artisans",
  address: { "@type": "PostalAddress", addressCountry: "MA" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contact@lm3alem.ma",
  },
  sameAs: [
    "https://www.facebook.com/lm3alem",
    "https://www.instagram.com/lm3alem",
  ],
};

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
