import type { MetadataRoute } from "next";

import { getProperties } from "@/lib/data/properties";

const baseUrl = "https://terramapproperties.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/properties",
    "/company",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const propertyRoutes = getProperties().map((property) => ({
    url: `${baseUrl}/properties/${property.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...propertyRoutes];
}
