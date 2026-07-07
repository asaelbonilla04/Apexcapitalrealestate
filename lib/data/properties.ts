import type {
  Property,
  PropertyStatus,
  PropertyType,
} from "./types";

// ---------------------------------------------------------------------------
// Terramap property listings.
//
// REAL DATA. Add new listings to the `properties` array below. The data
// access functions at the bottom of this file are the single seam to replace
// when wiring up a real database/CMS — components never reach into the array
// directly.
//
// PHOTO HANDLING
// --------------
// Image URLs in each listing's `images` array point at the source where the
// photos are hosted. The hostnames must be whitelisted in next.config.mjs
// (currently: images.unsplash.com, i.imgur.com). For the best long-term
// experience, drop real photos into /public/images/properties/<slug>/ and
// reference them as `/images/properties/<slug>/01.jpg` etc.
// ---------------------------------------------------------------------------

// Temporary Unsplash placeholder URLs used until real photography is in place.
// PLACEHOLDER — replace with real listing photos.
const FLEX_BUILDING =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80";
const WAREHOUSE_INTERIOR =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80";
const LOADING_DOCKS =
  "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1600&q=80";

export const properties: Property[] = [
  {
    id: "prop-1046-shadick",
    slug: "1046-shadick-dr-orange-city-fl",
    name: "1046 Shadick Drive",
    address: "1046 Shadick Drive",
    submarket: "Orange City / DeLand",
    city: "Orange City",
    state: "FL",
    zip: "32763",
    lat: 28.9483,
    lng: -81.2937,
    status: "For Lease",
    type: "Flex/R&D",
    leaseRate: 22.8, // $1,900/month × 12 ÷ 1,000 SF = $22.80/SF/YR
    sizeSqFt: 1000, // per available unit
    driveInDoors: 1,
    description:
      "Rare dealer-approved warehouse bays in the Orange City / DeLand corridor — one of the only DMV Wholesale Dealer License–approved properties available in the market. Two ~1,000 SF units currently available (Unit 9 and Unit E) at $1,900/month each, each featuring a roll-up door, a private office and restroom, 24/7 access, and ample parking for inventory, employees, and customers. Gated property with daytime access for tenants and minutes from I-4 and US-17. Ideal for used car dealers, auto brokers, mechanics, detailers, contractors (HVAC, plumbing, electrical, flooring), e-commerce, and light distribution. Limited-time incentive: one month free with a 30-month lease.",
    // PLACEHOLDER image — replace with real photos hosted on Imgur (the
    // 1046 Shadick Drive photo set the user shared from their Desktop).
    images: [FLEX_BUILDING],
    agentId: "agent-miguel-pinto",
    featured: true,
  },
  {
    id: "prop-401-enterprise",
    slug: "401-enterprise-st-ocoee-fl",
    name: "401 Enterprise Street",
    address: "401 Enterprise Street",
    submarket: "Ocoee / West Orlando",
    city: "Ocoee",
    state: "FL",
    zip: "34761",
    lat: 28.5605,
    lng: -81.5340,
    status: "For Lease",
    type: "Flex/R&D",
    leaseRate: 28.0, // $3,500/month × 12 ÷ 1,500 SF = $28.00/SF/YR
    sizeSqFt: 1500,
    driveInDoors: 1, // 14' x 10' roll-up door
    description:
      "Hard-to-find 1,500 SF small-bay warehouse in one of Ocoee's most convenient industrial corridors — ideal for contractors (HVAC, plumbing, electrical), auto-related businesses, light distribution, and service companies needing clean, functional workspace. The bay features a 14' x 10' roll-up door, high ceilings, a private office and restroom, and 24/7 access. Minutes to major highways and central to Ocoee, Winter Garden, and West Orlando. Limited-time incentive: one month free base rent with a 30-month lease. Immediate move-in available.",
    // Real listing photos (hosted on Imgur). Add additional URLs to this
    // array as more photos are provided; the first item is used as the card
    // cover and the gallery on the detail page paginates through all of them.
    images: [
      "https://i.imgur.com/KuY1Qad.jpeg",
      "https://i.imgur.com/S7ITtb2.jpeg",
      "https://i.imgur.com/kDpOFqi.jpeg",
      "https://i.imgur.com/r7tijnA.png",
      "https://i.imgur.com/Uq9i2Hz.png",
    ],
    agentId: "agent-miguel-pinto",
    featured: true,
  },
];

// ---------------------------------------------------------------------------
// Data access layer.
//
// These functions are the ONLY supported way to read property data. Today
// they operate on the in-memory seed array; tomorrow they can be swapped for
// async API/database calls without touching component code.
// ---------------------------------------------------------------------------

export function getProperties(): Property[] {
  return properties;
}

export function getProperty(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug);
}

export function getFeaturedProperties(limit = 4): Property[] {
  return properties.filter((property) => property.featured).slice(0, limit);
}

/**
 * Find listings related to a given property, preferring the same type, then
 * the same submarket. Excludes the source property itself.
 */
export function getSimilarProperties(slug: string, limit = 4): Property[] {
  const source = getProperty(slug);
  if (!source) return [];

  const scored = properties
    .filter((property) => property.slug !== slug)
    .map((property) => {
      let score = 0;
      if (property.type === source.type) score += 2;
      if (property.submarket === source.submarket) score += 1;
      return { property, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((entry) => entry.property);
}

// Static option lists used by the filter UI. Derived from the type union so
// they stay in sync with the data model.
export const PROPERTY_TYPES: PropertyType[] = [
  "Warehouse/Distribution",
  "Manufacturing",
  "Flex/R&D",
  "Industrial Land",
  "Last-Mile Logistics",
  "Cold Storage",
  "IOS",
];

export const PROPERTY_STATUSES: PropertyStatus[] = [
  "For Sale",
  "For Lease",
  "Sold",
  "Under Contract",
];

/** Unique, sorted submarket list derived from the current data set. */
export const SUBMARKETS: string[] = Array.from(
  new Set(properties.map((property) => property.submarket)),
).sort();
