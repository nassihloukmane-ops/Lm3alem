import {
  getFaqSchema,
  mobileApplicationSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo-data";

export function JsonLd() {
  const schemas = [
    websiteSchema,
    mobileApplicationSchema,
    organizationSchema,
    getFaqSchema(),
  ];

  return (
    //dsd
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
