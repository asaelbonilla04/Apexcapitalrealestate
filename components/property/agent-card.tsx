import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import type { Agent } from "@/lib/data/types";

export function AgentCard({
  agent,
  heading = "Listing Agent",
}: {
  agent: Agent;
  heading?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-6">
      <p className="label-eyebrow mb-4">{heading}</p>
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-slate-100">
          <Image
            src={agent.photo}
            alt={agent.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-ink">{agent.name}</p>
          <p className="text-sm text-muted-foreground">{agent.title}</p>
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <a
          href={`tel:${agent.phone.replace(/[^\d+]/g, "")}`}
          className="flex items-center gap-2 text-sm text-ink transition-colors hover:text-brand"
        >
          <Phone className="h-4 w-4 text-brand" />
          {agent.phone}
        </a>
        <a
          href={`mailto:${agent.email}`}
          className="flex items-center gap-2 text-sm text-ink transition-colors hover:text-brand"
        >
          <Mail className="h-4 w-4 text-brand" />
          {agent.email}
        </a>
      </div>
    </div>
  );
}
