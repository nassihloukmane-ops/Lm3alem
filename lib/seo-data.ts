import { siteDescription, siteUrl } from "@/lib/site-config";

export const faqItems = [
  {
    question: "lm3alem est-il gratuit ?",
    answer:
      "Oui. Le téléchargement et l'inscription sont gratuits. Vous ne payez que le service de l'artisan que vous choisissez.",
  },
  {
    question: "Comment sont vérifiés les professionnels ?",
    answer:
      "Chaque professionnel passe une vérification d'identité et de profil. Les avis clients authentiques vous aident à choisir en confiance.",
  },
  {
    question: "Quelles zones sont couvertes ?",
    answer:
      "lm3alem se déploie progressivement au Maroc. Les disponibilités près de chez vous s'affichent directement dans l'application.",
  },
  {
    question: "Comment devenir artisan sur lm3alem ?",
    answer:
      "Téléchargez l'app, inscrivez-vous en tant que professionnel, complétez votre profil et la vérification, puis recevez des missions près de chez vous.",
  },
  {
    question: "Puis-je discuter avec l'artisan avant la mission ?",
    answer:
      "Oui. Le chat in-app et les appels vous permettent de coordonner la mission sans quitter lm3alem.",
  },
  {
    question: "L'application est-elle disponible en arabe ?",
    answer:
      "Oui. lm3alem est disponible en français, en arabe (interface RTL) et en anglais.",
  },
] as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "lm3alem",
  alternateName: ["lm3alem", "المْعَلَّم", "Lm3alem"],
  url: siteUrl,
  description: siteDescription,
  inLanguage: ["fr-MA", "ar-MA", "en"],
};

export const mobileApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "lm3alem",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Android, iOS",
  description: siteDescription,
  offers: { "@type": "Offer", price: "0", priceCurrency: "MAD" },
  url: siteUrl,
  inLanguage: ["fr", "ar", "en"],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "lm3alem",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDescription,
  address: { "@type": "PostalAddress", addressCountry: "MA" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contact@lm3alem.com",
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
