// ---------------------------------------------------------------------------
// Core domain types for the Apex Capital Realty property library.
//
// These types describe industrial real estate listings and the agents who
// represent them. Keep this file as the single source of truth for shapes
// consumed across the app (cards, detail pages, filters, etc.).
// ---------------------------------------------------------------------------

export type PropertyStatus =
  | "For Sale"
  | "For Lease"
  | "Sold"
  | "Under Contract";

export type PropertyType =
  | "Warehouse/Distribution"
  | "Manufacturing"
  | "Flex/R&D"
  | "Industrial Land"
  | "Last-Mile Logistics"
  | "Cold Storage"
  | "IOS";

export interface Property {
  id: string;
  /** URL-safe identifier used for /properties/[slug]. */
  slug: string;
  name: string;
  address: string;
  /** South Florida submarket, e.g. "Doral", "Medley", "Airport West". */
  submarket: string;
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
  status: PropertyStatus;
  type: PropertyType;
  /** Asking price for sale listings (USD). */
  price?: number;
  /** Asking lease rate in $/SF/YR for lease listings. */
  leaseRate?: number;
  sizeSqFt: number;
  lotSizeAcres?: number;
  // --- Industrial spec sheet fields ---
  clearHeightFt?: number;
  dockHighDoors?: number;
  driveInDoors?: number;
  powerAmps?: number;
  sprinklered?: boolean;
  railAccess?: boolean;
  yearBuilt?: number;
  zoning?: string;
  officeBuildOutPct?: number;
  trailerParkingSpaces?: number;
  description: string;
  /** Ordered list of image URLs; first item is the primary/cover photo. */
  images: string[];
  /** FK into the agents data set. */
  agentId: string;
  /** Surfaced on the home page "Featured Properties" section. */
  featured?: boolean;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  photo: string;
  bio?: string;
}
