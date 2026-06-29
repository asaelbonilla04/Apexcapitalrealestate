// ---------------------------------------------------------------------------
// PLACEHOLDER COPY — service lines / capabilities.
//
// Marketing copy below is sample text written to demonstrate layout and tone.
// Review and replace with approved Terramap messaging before launch.
// ---------------------------------------------------------------------------

export interface Capability {
  slug: string;
  title: string;
  /** One-line summary used on cards. */
  summary: string;
  /** Longer positioning paragraph for the detail page. */
  description: string;
  /** Bullet points describing what the service includes. */
  highlights: string[];
  /** Lucide icon name (resolved in the UI). */
  icon: "Building2" | "Truck" | "Handshake" | "Landmark" | "LineChart";
}

export const capabilities: Capability[] = [
  {
    slug: "industrial-sales-leasing",
    title: "Industrial Sales & Leasing",
    summary:
      "Full-service brokerage for warehouse, distribution, and manufacturing assets across Central Florida.",
    description:
      "We advise owners, investors, and occupiers on the full lifecycle of industrial real estate — from acquisition and disposition to lease structuring. Our team pairs granular submarket intelligence with institutional execution to position every asset for its highest and best outcome.",
    highlights: [
      "Investment sales and dispositions",
      "Acquisition advisory and underwriting",
      "Lease negotiation and renewals",
      "Build-to-suit and pre-leasing strategy",
    ],
    icon: "Building2",
  },
  {
    slug: "last-mile-logistics-advisory",
    title: "Last-Mile Logistics Advisory",
    summary:
      "Site selection and network strategy for parcel, e-commerce, and same-day delivery operators.",
    description:
      "As consumer delivery expectations compress, location is everything. We help logistics operators model drive-time coverage, evaluate dock and trailer requirements, and secure infill sites that shorten the last mile without overpaying for scarce urban industrial.",
    highlights: [
      "Drive-time and coverage modeling",
      "Infill and urban site selection",
      "Parcel and van-staging requirements",
      "Multi-market network planning",
    ],
    icon: "Truck",
  },
  {
    slug: "landlord-tenant-representation",
    title: "Landlord & Tenant Representation",
    summary:
      "Dedicated representation on both sides of the table, never compromised by conflicts.",
    description:
      "Whether we represent the landlord pursuing optimal lease-up or the tenant negotiating favorable terms, our clients get a fiduciary fully aligned to their interests. We bring real-time comps, leverage analysis, and disciplined negotiation to every assignment.",
    highlights: [
      "Landlord lease-up and repositioning",
      "Tenant requirement and relocation strategy",
      "Lease audit and renewal leverage",
      "Portfolio and multi-site management",
    ],
    icon: "Handshake",
  },
  {
    slug: "debt-advisory-services",
    title: "Debt & Advisory Services",
    summary:
      "Capital markets guidance to structure financing and maximize asset value.",
    description:
      "We connect owners with the right capital — sourcing debt and structuring transactions through our lender relationships. From acquisition financing to refinancing and recapitalization, we help clients optimize their capital stack with clarity and speed.",
    highlights: [
      "Acquisition and construction financing",
      "Refinancing and recapitalization",
      "Lender sourcing and term negotiation",
      "Valuation and hold/sell analysis",
    ],
    icon: "LineChart",
  },
];

export function getCapability(slug: string): Capability | undefined {
  return capabilities.find((capability) => capability.slug === slug);
}

export function getCapabilities(): Capability[] {
  return capabilities;
}
