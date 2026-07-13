import type { Metadata } from "next";

import { getProperties, SUBMARKETS, PROPERTY_TYPES } from "@/lib/data/properties";
import type { PropertyType } from "@/lib/data/types";
import {
  PropertyLibrary,
  type InitialFilters,
} from "@/components/properties/property-library";

export const metadata: Metadata = {
  title: "Property Library — Industrial Listings",
  description:
    "Browse Terramap's library of industrial properties for sale and lease across Central Florida — warehouse, distribution, flex, cold storage, IOS, and industrial land.",
  openGraph: {
    title: "Industrial Property Library | Terramap",
    description:
      "Searchable catalog of Central Florida industrial real estate for sale and lease.",
  },
};

type SearchParams = {
  type?: string;
  submarket?: string;
  status?: string;
};

/**
 * Translate incoming URL search params (set by the home page quick-search)
 * into the initial filter state for the client library component.
 */
function parseInitialFilters(params: SearchParams): InitialFilters {
  const types =
    params.type && PROPERTY_TYPES.includes(params.type as PropertyType)
      ? [params.type as PropertyType]
      : undefined;
  const submarkets =
    params.submarket && SUBMARKETS.includes(params.submarket)
      ? [params.submarket]
      : undefined;
  const status =
    params.status === "For Sale" ||
    params.status === "For Lease" ||
    params.status === "Sold"
      ? params.status
      : undefined;
  return { types, submarkets, status };
}

export default function PropertiesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Data is fetched here on the server via the data layer. Swapping
  // getProperties() for an async API/DB call later only touches this file.
  const properties = getProperties();
  const initial = parseInitialFilters(searchParams);

  return (
    <>
      <section className="bg-background pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="container-wide">
          <p className="label-eyebrow">Available now</p>
          <h1 className="display-section mt-6">Spaces.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Warehouse, flex, and small-bay space across Central Florida.
            Filter to find something that fits your business.
          </p>
        </div>
      </section>

      <PropertyLibrary
        properties={properties}
        submarkets={SUBMARKETS}
        initial={initial}
      />
    </>
  );
}
