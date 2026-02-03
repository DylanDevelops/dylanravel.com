import type { MetadataRoute } from "next";

import { DomainURL } from "@/lib/links";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DomainURL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
