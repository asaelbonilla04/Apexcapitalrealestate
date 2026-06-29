import type { Agent } from "./types";

// ---------------------------------------------------------------------------
// PLACEHOLDER DATA — sample agents.
//
// Replace names, titles, phone numbers, emails, bios, and photos with real
// Apex Capital Realty team members before launch. Headshots currently point
// at Unsplash placeholders; swap them for real photography stored under
// /public/images/team/.
// ---------------------------------------------------------------------------

export const agents: Agent[] = [
  {
    id: "agent-001",
    name: "Marcus Delgado", // PLACEHOLDER
    title: "Principal & Managing Director",
    phone: "(305) 555-0142", // PLACEHOLDER
    email: "mdelgado@apexcapitalrealty.com", // PLACEHOLDER
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    bio: "Marcus leads Apex's industrial practice with over 18 years brokering warehouse and distribution assets across South Florida. He specializes in institutional dispositions and build-to-suit advisory.",
  },
  {
    id: "agent-002",
    name: "Sofia Reyes", // PLACEHOLDER
    title: "Senior Vice President, Tenant Representation",
    phone: "(305) 555-0188", // PLACEHOLDER
    email: "sreyes@apexcapitalrealty.com", // PLACEHOLDER
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Sofia advises e-commerce and 3PL occupiers on last-mile and distribution requirements, with a track record of complex multi-market portfolio assignments.",
  },
  {
    id: "agent-003",
    name: "Daniel Kohl", // PLACEHOLDER
    title: "Vice President, Investment Sales",
    phone: "(305) 555-0211", // PLACEHOLDER
    email: "dkohl@apexcapitalrealty.com", // PLACEHOLDER
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Daniel focuses on infill industrial and IOS investment sales, pairing capital markets fluency with deep submarket knowledge in Medley and Hialeah.",
  },
  {
    id: "agent-004",
    name: "Priya Nair", // PLACEHOLDER
    title: "Director, Landlord Representation",
    phone: "(305) 555-0263", // PLACEHOLDER
    email: "pnair@apexcapitalrealty.com", // PLACEHOLDER
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Priya represents institutional and private landlords on lease-up strategy and repositioning across the Airport West and Doral corridors.",
  },
  {
    id: "agent-005",
    name: "Andre Thompson", // PLACEHOLDER
    title: "Associate, Industrial Brokerage",
    phone: "(305) 555-0299", // PLACEHOLDER
    email: "athompson@apexcapitalrealty.com", // PLACEHOLDER
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    bio: "Andre supports the team's leasing and sales assignments with market research, financial analysis, and tour coordination across Broward and Palm Beach.",
  },
];

/**
 * Look up a single agent by id.
 *
 * NOTE: Reads from the local seed array today. When a CMS/database is added,
 * swap the body for an async fetch and update callers accordingly.
 */
export function getAgentById(id: string): Agent | undefined {
  return agents.find((agent) => agent.id === id);
}

export function getAgents(): Agent[] {
  return agents;
}
