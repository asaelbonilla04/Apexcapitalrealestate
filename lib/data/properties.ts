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
    id: "prop-300-sw-17th-ave",
    slug: "300-sw-17th-ave-miami-fl",
    name: "300 SW 17th Avenue",
    address: "300 SW 17th Avenue, Suite 4",
    submarket: "Miami",
    city: "Miami",
    state: "FL",
    zip: "33135",
    lat: 25.7686,
    lng: -80.2148,
    status: "For Lease",
    // NOTE: source flyer lists Space Use as Retail. The data model doesn't
    // have a Retail type; Flex/R&D best matches the "blank canvas for kitchen
    // or production facility" positioning.
    type: "Flex/R&D",
    leaseRate: 40.0, // $40.00/SF/YR NNN (reference)
    monthlyRent: 7670,
    sizeSqFt: 1770,
    driveInDoors: 1, // grade-level bay door
    powerAmps: 300, // 3-phase, 300A
    description:
      "Turnkey blank canvas at 300 SW 17th Avenue, Suite 4 — a versatile 1,770 SF ground-floor space rehabbed in 2022 and ready to build out as a commercial kitchen, ghost kitchen, production facility, or retail space. Includes a grease trap already installed on site, 3-phase 300A electrical service, two brand-new 3.5-ton AC units, and grade-level bay door access. Term is negotiable. $40.00/SF/YR NNN — lease rate does not include utilities, property expenses, or building services.",
    images: [
      "/images/properties/300-sw-17th-ave/01-1.jpg",
      "/images/properties/300-sw-17th-ave/03-1.jpg",
      "/images/properties/300-sw-17th-ave/04-1.jpg",
      "/images/properties/300-sw-17th-ave/05-1.jpg",
      "/images/properties/300-sw-17th-ave/06-1.jpg",
    ],
    agentId: "agent-miguel-pinto",
    featured: true,
  },
  {
    id: "prop-1110-sligh",
    slug: "1110-sligh-blvd-orlando-fl",
    name: "1110 Sligh Boulevard",
    address: "1110 Sligh Boulevard",
    submarket: "Orlando",
    city: "Orlando",
    state: "FL",
    zip: "32806",
    lat: 28.5289,
    lng: -81.3778,
    status: "For Lease",
    type: "Flex/R&D",
    leaseRate: 22.2, // $6,475/mo × 12 ÷ 3,500 SF (reference)
    monthlyRent: 6475,
    // NOTE: listing headline says 3,700 SF; pricing block says 3,500 SF.
    // Using 3,500 (paired with the rate); confirm the correct size.
    sizeSqFt: 3500,
    driveInDoors: 1,
    description:
      "Versatile warehouse/flex space in a prime central Orlando corridor with fast access to I-4 and major routes. 3,500 SF unit combining warehouse and flex use — ideal for storage, production, or a showroom — with a roll-up drive-in door for easy loading and vehicle access, high ceilings suited to equipment and racking, a private office and restroom, ample parking for employees and clients, and 24/7 access. Well-suited for contractors and trades (HVAC, plumbing, electrical), auto dealers, detailers and repair shops, e-commerce, fulfillment and distribution, light manufacturing and fabrication, and creative studios or production.",
    images: [
      "/images/properties/1110-sligh/01-1.jpg",
      "/images/properties/1110-sligh/02-1.jpg",
      "/images/properties/1110-sligh/03-1.jpg",
      "/images/properties/1110-sligh/04-1.jpg",
    ],
    agentId: "agent-miguel-pinto",
    featured: true,
  },
  {
    id: "prop-2020-combee",
    slug: "2020-s-combee-rd-lakeland-fl",
    name: "2020 S Combee Road",
    address: "2020 S Combee Road",
    submarket: "Lakeland",
    city: "Lakeland",
    state: "FL",
    zip: "33801",
    lat: 28.0195,
    lng: -81.9075,
    status: "For Lease",
    type: "Flex/R&D",
    leaseRate: 17.76, // $1,850/mo × 12 ÷ 1,250 SF (typical unit — reference)
    monthlyRent: 1850,
    sizeSqFt: 1250, // per unit; four units currently available
    clearHeightFt: 15,
    driveInDoors: 1, // 12' × 12' roll-up
    description:
      "Well-maintained small-bay warehouses in one of Lakeland's most accessible commercial corridors, with quick access to I-4, US-98, and the Polk Parkway. Four ~1,250 SF units currently available: Unit 6 at $1,900/mo and Units 12, 17, and 18 at $1,850/mo each. Every unit features a 12' × 12' roll-up drive-in door, 15' ceilings for racking, vehicles or equipment, a private office and restroom, ample parking, and 24/7 access. Ideal for contractors and trades (HVAC, plumbing, electrical, flooring), auto detailing and light mechanical, e-commerce and fulfillment, light manufacturing and fabrication, and storage or distribution.",
    images: [
      "https://i.imgur.com/15qVdPE.jpeg",
      "https://i.imgur.com/Kp4hqXh.jpeg",
      "https://i.imgur.com/KoRtur4.jpeg",
      "https://i.imgur.com/SDnz7aG.jpeg",
      "https://i.imgur.com/ckoGlQ9.png",
    ],
    agentId: "agent-miguel-pinto",
    featured: true,
  },
  {
    id: "prop-1495-seminola",
    slug: "1495-seminola-blvd-casselberry-fl",
    name: "Seminola Collective",
    address: "1495 Seminola Boulevard",
    submarket: "Casselberry",
    city: "Casselberry",
    state: "FL",
    zip: "32707",
    lat: 28.6558,
    lng: -81.3345,
    status: "For Lease",
    type: "Flex/R&D",
    // Rate reflects Unit 1015 (smaller — reference). Unit 1023 is $4,800/mo.
    leaseRate: 22.4, // $2,800/mo × 12 ÷ 1,500 SF (reference)
    monthlyRent: 2800,
    sizeSqFt: 1500, // Unit 1015; Unit 1023 is 2,800 SF (see description)
    driveInDoors: 1,
    description:
      "Seminola Collective — flex industrial units with DMV Wholesale Dealer License–approved zoning in one of Casselberry's most accessible commercial corridors, minutes from SR-436, I-4, and the Winter Park / Fern Park corridor. Two units currently available: Unit 1015 (1,500 SF at $2,800/mo) and Unit 1023 (2,800 SF at $4,800/mo). Each includes a private warehouse bay with a roll-up drive-in door, private office and restroom, professional business address, ample parking for inventory/crew/customers, and 24/7 access. Ideal for wholesale auto dealers and brokers, auto detailers, wrappers and mechanics, contractors and trades (HVAC, plumbing, electrical, flooring), fabricators and custom builders, and e-commerce, fulfillment or mobile business HQ. Limited-time incentive: one month free on qualified 24-month leases.",
    images: [
      "https://i.imgur.com/omduoqE.jpeg",
      "https://i.imgur.com/laCiE4q.jpeg",
      "https://i.imgur.com/ZEQsgTz.jpeg",
    ],
    agentId: "agent-miguel-pinto",
    featured: true,
  },
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
    leaseRate: 22.8, // $1,900/mo × 12 ÷ 1,000 SF (reference)
    monthlyRent: 1900,
    sizeSqFt: 1000, // per available unit
    driveInDoors: 1,
    description:
      "Rare dealer-approved warehouse bays in the Orange City / DeLand corridor — one of the only DMV Wholesale Dealer License–approved properties available in the market. Two ~1,000 SF units currently available (Unit 9 and Unit E) at $1,900/month each, each featuring a roll-up door, a private office and restroom, 24/7 access, and ample parking for inventory, employees, and customers. Gated property with daytime access for tenants and minutes from I-4 and US-17. Ideal for used car dealers, auto brokers, mechanics, detailers, contractors (HVAC, plumbing, electrical, flooring), e-commerce, and light distribution. Limited-time incentive: one month free with a 30-month lease.",
    images: [
      // Hero shot: exterior with numbered bay doors (Imgur).
      "https://i.imgur.com/50tIYs0.jpeg",
      // Self-hosted photos from the property photo set.
      "/images/properties/1046-shadick/02-unit-9-exterior-1.jpg",
      "https://i.imgur.com/QpfeHZJ.jpeg",
      "/images/properties/1046-shadick/04-bathroom-a-1.jpg",
      "/images/properties/1046-shadick/03-office-1.jpg",
    ],
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
    leaseRate: 28.0, // $3,500/mo × 12 ÷ 1,500 SF (reference)
    monthlyRent: 3500,
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
