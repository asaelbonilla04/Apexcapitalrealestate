import type { MetadataRoute } from "next";

import { getProperties } from "@/lib/data/properties";
import { getCapabilities } from "@/lib/data/capabilities";

// Update to the production domain before launch.
const baseUrl = "https://terramapproperties.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/properties",
    "/company",
    "/team",
    "/capabilities",
    "/careers",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const propertyRoutes = getProperties().map((property) => ({
    url: `${baseUrl}/properties/${property.slug}`,
    lastModified: new Date(),
  }));

  const capabilityRoutes = getCapabilities().map((capability) => ({
    url: `${baseUrl}/capabilities/${capability.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...propertyRoutes, ...capabilityRoutes];
}
