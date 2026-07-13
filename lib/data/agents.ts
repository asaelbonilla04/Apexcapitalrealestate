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
    title: "Property Owner",
    phone: "(407) 337-4312",
    email: "miguel@terramap.com",
    photo:
      "https://i0.wp.com/apexcapitalrealty.com/wp-content/uploads/2021/06/96-3.jpeg?fit=896%2C1088&ssl=1",
    bio: "Reach out directly for showings, inquiries, and additional details on available listings.",
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
