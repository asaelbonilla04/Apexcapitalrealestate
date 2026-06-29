import type { Agent } from "./types";

// ---------------------------------------------------------------------------
// Real agents.
//
// Add new team members here. The `photo` field expects a URL (Unsplash
// placeholder used until a real headshot is provided — replace with a real
// photo under /public/images/team/ and update the path).
// ---------------------------------------------------------------------------

export const agents: Agent[] = [
  {
    id: "agent-miguel-pinto",
    name: "Miguel Pinto",
    title: "Broker", // TODO: confirm exact title
    phone: "(407) 337-4312",
    email: "miguel@apexcapitalrealty.com",
    // PLACEHOLDER headshot — replace with Miguel's real photo (ideally hosted
    // locally under /public/images/team/miguel-pinto.jpg).
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    // PLACEHOLDER bio — replace with Miguel's real bio.
    bio: "Miguel advises clients on industrial sales and leasing across Central Florida, with a focus on small-bay flex, warehouse, and last-mile opportunities in the Orlando market.",
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
