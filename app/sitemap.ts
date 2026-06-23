import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://lm3alem.ma",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://lm3alem.ma/#features",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://lm3alem.ma/#categories",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://lm3alem.ma/#how-it-works",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://lm3alem.ma/#faq",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
