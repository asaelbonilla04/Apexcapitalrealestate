import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MapPin } from "lucide-react";

import {
  getProperties,
  getProperty,
  getSimilarProperties,
} from "@/lib/data/properties";
import { getAgentById } from "@/lib/data/agents";
import { Badge } from "@/components/ui/badge";
import { Gallery } from "@/components/property/gallery";
import { SpecGrid } from "@/components/property/spec-grid";
import { AgentCard } from "@/components/property/agent-card";
import { InquiryForm } from "@/components/property/inquiry-form";
import { SimilarProperties } from "@/components/property/similar-properties";
import { MapEmbed } from "@/components/shared/map-embed";
import { priceLabel } from "@/lib/utils";

// Pre-render every property at build time.
export function generateStaticParams() {
  return getProperties().map((property) => ({ slug: property.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const property = getProperty(params.slug);
  if (!property) return { title: "Property not found" };

  const title = `${property.name} — ${property.status}`;
  const description = property.description.slice(0, 155);
  return {
    title,
    description,
    openGraph: {
      title: `${property.name} | Terramap`,
      description,
      images: property.images[0] ? [{ url: property.images[0] }] : undefined,
    },
  };
}

export default function PropertyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const property = getProperty(params.slug);
  if (!property) notFound();

  const agent = getAgentById(property.agentId);
  const similar = getSimilarProperties(property.slug, 4);

  return (
    <>
      <div className="container-wide pt-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1 text-sm text-muted-foreground"
        >
          <Link href="/" className="hover:text-ink/70">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/properties" className="hover:text-ink/70">
            Properties
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-ink">{property.name}</span>
        </nav>
      </div>

      <div className="container-wide grid gap-10 py-8 lg:grid-cols-[1fr_360px]">
        {/* Main column */}
        <div className="space-y-10">
          <Gallery images={property.images} alt={property.name} />

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{property.status}</Badge>
              <span className="text-sm font-medium uppercase tracking-wide text-ink">
                {property.type}
              </span>
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {property.name}
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {property.address}, {property.city}, {property.state}{" "}
              {property.zip} · {property.submarket}
            </p>
            <p className="mt-4 text-2xl font-bold text-ink">
              {priceLabel(property)}
              {property.status === "For Lease" && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  NNN
                </span>
              )}
            </p>
          </div>

          {/* Specs */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-ink">
              Property specifications
            </h2>
            <SpecGrid property={property} />
          </section>

          {/* Description */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-ink">
              About this property
            </h2>
            <div className="prose-sm max-w-none text-base leading-relaxed text-muted-foreground">
              <p>{property.description}</p>
            </div>
          </section>

          {/* Map */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-ink">Location</h2>
            <MapEmbed
              lat={property.lat}
              lng={property.lng}
              label={`${property.name}, ${property.submarket}`}
              className="overflow-hidden rounded-xl"
            />
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {agent && <AgentCard agent={agent} />}
          <InquiryForm propertyName={property.name} />
        </aside>
      </div>

      <SimilarProperties properties={similar} />
    </>
  );
}
