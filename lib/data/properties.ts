import type {
  Property,
  PropertyStatus,
  PropertyType,
} from "./types";

// ---------------------------------------------------------------------------
// PLACEHOLDER DATA — sample industrial listings.
//
// Every property below is fictional and exists only to exercise the UI
// (filters, cards, detail pages, maps). Replace the entire array with real
// Apex Capital Realty listings before launch, and swap the Unsplash image
// URLs for real photography stored under /public/images/properties/.
//
// DATA LAYER CONTRACT
// -------------------
// The rest of the app talks to properties exclusively through the helper
// functions exported at the bottom of this file (getProperties, getProperty,
// getFeaturedProperties, getSimilarProperties). They are intentionally thin
// and synchronous today, but are the single seam to replace when wiring up a
// real database or CMS — make those functions async and update the (few)
// call sites; no component reaches into the raw array directly.
// ---------------------------------------------------------------------------

// Shared Unsplash placeholders grouped loosely by look. PLACEHOLDER imagery.
const WAREHOUSE_EXTERIOR =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80";
const WAREHOUSE_INTERIOR =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80";
const LOADING_DOCKS =
  "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1600&q=80";
const DISTRIBUTION_AISLE =
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80";
const INDUSTRIAL_YARD =
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80";
const FLEX_BUILDING =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80";
const COLD_STORAGE =
  "https://images.unsplash.com/photo-1606836576983-8b458e75221d?auto=format&fit=crop&w=1600&q=80";
const LAND_PARCEL =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80";

export const properties: Property[] = [
  {
    id: "prop-001",
    slug: "doral-logistics-center-3550-nw-112",
    name: "Doral Logistics Center",
    address: "3550 NW 112th Ave",
    submarket: "Doral",
    city: "Doral",
    state: "FL",
    zip: "33178",
    lat: 25.7956,
    lng: -80.3884,
    status: "For Lease",
    type: "Warehouse/Distribution",
    leaseRate: 16.5,
    sizeSqFt: 142000,
    clearHeightFt: 32,
    dockHighDoors: 24,
    driveInDoors: 2,
    powerAmps: 2000,
    sprinklered: true,
    railAccess: false,
    yearBuilt: 2021,
    zoning: "IU-2",
    officeBuildOutPct: 8,
    trailerParkingSpaces: 40,
    description:
      "Class A cross-dock distribution facility in the heart of Doral, minutes from Miami International Airport and the Palmetto Expressway. Built in 2021 with 32' clear heights, an ESFR sprinkler system, and ample trailer parking for regional and last-mile operators. Divisible to 60,000 SF.",
    images: [WAREHOUSE_EXTERIOR, LOADING_DOCKS, DISTRIBUTION_AISLE],
    agentId: "agent-001",
    featured: true,
  },
  {
    id: "prop-002",
    slug: "medley-infill-warehouse-7900-nw-102",
    name: "Medley Infill Warehouse",
    address: "7900 NW 102nd St",
    submarket: "Medley",
    city: "Medley",
    state: "FL",
    zip: "33178",
    lat: 25.8489,
    lng: -80.3367,
    status: "For Sale",
    type: "Warehouse/Distribution",
    price: 18750000,
    sizeSqFt: 96500,
    clearHeightFt: 26,
    dockHighDoors: 14,
    driveInDoors: 3,
    powerAmps: 1200,
    sprinklered: true,
    railAccess: true,
    yearBuilt: 2004,
    zoning: "M-1",
    officeBuildOutPct: 12,
    trailerParkingSpaces: 18,
    description:
      "Rare infill industrial offering in supply-constrained Medley with rail access and a fenced, secured yard. Long-term credit tenant in place, providing stable income with mark-to-market upside at renewal. Ideal for a 1031 buyer seeking core-plus South Florida exposure.",
    images: [WAREHOUSE_INTERIOR, LOADING_DOCKS, INDUSTRIAL_YARD],
    agentId: "agent-003",
    featured: true,
  },
  {
    id: "prop-003",
    slug: "hialeah-flex-rd-campus-4200-e-10",
    name: "Hialeah Flex & R&D Campus",
    address: "4200 E 10th Ct",
    submarket: "Hialeah",
    city: "Hialeah",
    state: "FL",
    zip: "33013",
    lat: 25.8693,
    lng: -80.2731,
    status: "For Lease",
    type: "Flex/R&D",
    leaseRate: 21.0,
    sizeSqFt: 38400,
    clearHeightFt: 18,
    dockHighDoors: 4,
    driveInDoors: 6,
    powerAmps: 800,
    sprinklered: true,
    railAccess: false,
    yearBuilt: 2016,
    zoning: "M-1",
    officeBuildOutPct: 45,
    trailerParkingSpaces: 0,
    description:
      "Flexible R&D and light-industrial campus offering generous office build-out, high parking ratios, and showroom-quality frontage. Suites available from 6,000 SF, suitable for medical device, light manufacturing, and tech-enabled logistics users.",
    images: [FLEX_BUILDING, WAREHOUSE_INTERIOR],
    agentId: "agent-004",
    featured: true,
  },
  {
    id: "prop-004",
    slug: "opa-locka-last-mile-hub-13800-nw-27",
    name: "Opa-locka Last-Mile Hub",
    address: "13800 NW 27th Ave",
    submarket: "Opa-locka",
    city: "Opa-locka",
    state: "FL",
    zip: "33054",
    lat: 25.9279,
    lng: -80.2456,
    status: "For Lease",
    type: "Last-Mile Logistics",
    leaseRate: 18.75,
    sizeSqFt: 64000,
    clearHeightFt: 28,
    dockHighDoors: 30,
    driveInDoors: 2,
    powerAmps: 1600,
    sprinklered: true,
    railAccess: false,
    yearBuilt: 2022,
    zoning: "IU-1",
    officeBuildOutPct: 6,
    trailerParkingSpaces: 55,
    description:
      "Purpose-built last-mile parcel delivery station with a heavy dock-door count, secured van staging, and direct access to I-95 and the Gratigny Parkway. Designed around modern parcel and same-day delivery operations.",
    images: [LOADING_DOCKS, WAREHOUSE_EXTERIOR, DISTRIBUTION_AISLE],
    agentId: "agent-002",
    featured: true,
  },
  {
    id: "prop-005",
    slug: "airport-west-manufacturing-2450-nw-72",
    name: "Airport West Manufacturing Facility",
    address: "2450 NW 72nd Ave",
    submarket: "Airport West",
    city: "Miami",
    state: "FL",
    zip: "33122",
    lat: 25.7951,
    lng: -80.3151,
    status: "For Sale",
    type: "Manufacturing",
    price: 24200000,
    sizeSqFt: 128000,
    clearHeightFt: 24,
    dockHighDoors: 10,
    driveInDoors: 4,
    powerAmps: 4000,
    sprinklered: true,
    railAccess: false,
    yearBuilt: 1998,
    zoning: "IU-3",
    officeBuildOutPct: 18,
    trailerParkingSpaces: 22,
    description:
      "Heavy-power manufacturing facility in the Airport West submarket with 4,000-amp service, reinforced floors, and bridge-crane infrastructure in place. A strong owner-user opportunity within minutes of MIA cargo operations.",
    images: [WAREHOUSE_INTERIOR, WAREHOUSE_EXTERIOR],
    agentId: "agent-001",
  },
  {
    id: "prop-006",
    slug: "pompano-cold-storage-1500-sw-12",
    name: "Pompano Cold Storage",
    address: "1500 SW 12th Ave",
    submarket: "Broward — Pompano",
    city: "Pompano Beach",
    state: "FL",
    zip: "33069",
    lat: 26.2105,
    lng: -80.1456,
    status: "Under Contract",
    type: "Cold Storage",
    price: 41500000,
    sizeSqFt: 110000,
    clearHeightFt: 36,
    dockHighDoors: 20,
    driveInDoors: 1,
    powerAmps: 3000,
    sprinklered: true,
    railAccess: false,
    yearBuilt: 2020,
    zoning: "I-1",
    officeBuildOutPct: 5,
    trailerParkingSpaces: 30,
    description:
      "State-of-the-art temperature-controlled distribution facility with multi-temp zones from frozen to ambient, 36' clear heights, and energy-efficient refrigeration. Strategically located off the Florida Turnpike for regional grocery and food-service distribution.",
    images: [COLD_STORAGE, LOADING_DOCKS],
    agentId: "agent-003",
  },
  {
    id: "prop-007",
    slug: "medley-ios-yard-9100-nw-105",
    name: "Medley IOS Yard",
    address: "9100 NW 105th Way",
    submarket: "Medley",
    city: "Medley",
    state: "FL",
    zip: "33178",
    lat: 25.8531,
    lng: -80.3589,
    status: "For Lease",
    type: "IOS",
    leaseRate: 9.5,
    sizeSqFt: 12000,
    lotSizeAcres: 4.2,
    clearHeightFt: 16,
    driveInDoors: 4,
    powerAmps: 400,
    sprinklered: false,
    railAccess: false,
    yearBuilt: 1985,
    zoning: "M-2",
    trailerParkingSpaces: 120,
    description:
      "Industrial outdoor storage (IOS) yard on 4.2 stabilized acres with a small service building, heavy trailer parking capacity, and full perimeter fencing. Increasingly scarce zoning makes this ideal for trucking, equipment, and container operators.",
    images: [INDUSTRIAL_YARD, WAREHOUSE_EXTERIOR],
    agentId: "agent-005",
  },
  {
    id: "prop-008",
    slug: "riviera-beach-industrial-land-3700-australian",
    name: "Riviera Beach Industrial Land",
    address: "3700 Australian Ave",
    submarket: "Palm Beach — Riviera Beach",
    city: "Riviera Beach",
    state: "FL",
    zip: "33404",
    lat: 26.7793,
    lng: -80.0703,
    status: "For Sale",
    type: "Industrial Land",
    price: 8900000,
    sizeSqFt: 0,
    lotSizeAcres: 9.8,
    zoning: "IND",
    railAccess: true,
    description:
      "Entitled industrial development site totaling 9.8 acres with rail frontage and flexible zoning supporting up to ~180,000 SF of distribution or IOS use. A shovel-ready opportunity in northern Palm Beach County's growing logistics corridor.",
    images: [LAND_PARCEL, INDUSTRIAL_YARD],
    agentId: "agent-002",
  },
  {
    id: "prop-009",
    slug: "dania-beach-distribution-110-gulfstream",
    name: "Dania Beach Distribution Center",
    address: "110 Gulfstream Way",
    submarket: "Broward — Dania",
    city: "Dania Beach",
    state: "FL",
    zip: "33004",
    lat: 26.0529,
    lng: -80.1437,
    status: "Sold",
    type: "Warehouse/Distribution",
    price: 32000000,
    sizeSqFt: 184000,
    clearHeightFt: 30,
    dockHighDoors: 28,
    driveInDoors: 2,
    powerAmps: 2000,
    sprinklered: true,
    railAccess: false,
    yearBuilt: 2019,
    zoning: "IROM",
    officeBuildOutPct: 7,
    trailerParkingSpaces: 48,
    description:
      "Recently closed Class A distribution center adjacent to Fort Lauderdale-Hollywood International Airport and Port Everglades. Apex represented the seller in this institutional disposition. Included here as a representative SOLD comparable.",
    images: [WAREHOUSE_EXTERIOR, DISTRIBUTION_AISLE, LOADING_DOCKS],
    agentId: "agent-001",
  },
  {
    id: "prop-010",
    slug: "hialeah-gardens-warehouse-11200-nw-122",
    name: "Hialeah Gardens Warehouse",
    address: "11200 NW 122nd St",
    submarket: "Hialeah",
    city: "Hialeah Gardens",
    state: "FL",
    zip: "33018",
    lat: 25.8762,
    lng: -80.3789,
    status: "For Lease",
    type: "Warehouse/Distribution",
    leaseRate: 15.25,
    sizeSqFt: 52000,
    clearHeightFt: 24,
    dockHighDoors: 8,
    driveInDoors: 2,
    powerAmps: 1000,
    sprinklered: true,
    railAccess: false,
    yearBuilt: 2008,
    zoning: "M-1",
    officeBuildOutPct: 10,
    trailerParkingSpaces: 12,
    description:
      "Well-located mid-bay warehouse offering efficient distribution space with a functional dock ratio and modest office build-out. Strong access to the Palmetto and Okeechobee Road for regional distribution tenants.",
    images: [WAREHOUSE_INTERIOR, LOADING_DOCKS],
    agentId: "agent-005",
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
