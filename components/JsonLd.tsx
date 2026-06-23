import {
  getFaqSchema,
  mobileApplicationSchema,
  organizationSchema,
} from "@/lib/seo-data";

export function JsonLd() {
  const schemas = [
    mobileApplicationSchema,
    organizationSchema,
    getFaqSchema(),
  ];

  return (
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
