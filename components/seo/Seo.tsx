import {
  getFaqSchema,
  mobileApplicationSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo-data";

/**
 * Injecte les données structurées JSON-LD (Organization, WebSite, App, FAQ).
 * À placer une fois dans le document de la page d’accueil.
 */
export function Seo() {
  const schemas = [
    organizationSchema,
    websiteSchema,
    mobileApplicationSchema,
    getFaqSchema(),
  ] as const;

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
