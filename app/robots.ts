import type { MetadataRoute } from "next";

// Update to the production domain before launch.
const baseUrl = "https://terramapproperties.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
