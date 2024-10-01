import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/cleansing",
    },
    sitemap: "https://www.mindclean.site/sitemap.xml",
  };
}
