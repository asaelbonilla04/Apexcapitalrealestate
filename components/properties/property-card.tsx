import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Maximize } from "lucide-react";

import type { Property } from "@/lib/data/types";
import { getAgentById } from "@/lib/data/agents";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { cn, formatSqFt, priceLabel } from "@/lib/utils";

/** Map listing status to a badge color treatment. */
function statusVariant(status: Property["status"]): BadgeProps["variant"] {
  switch (status) {
    case "For Sale":
      return "default";
    case "For Lease":
      return "secondary";
    case "Under Contract":
      return "warning";
    case "Sold":
      return "muted";
    default:
      return "default";
  }
}

export function PropertyCard({ property }: { property: Property }) {
  const agent = getAgentById(property.agentId);
  const sizeText =
    property.sizeSqFt > 0
      ? `${formatSqFt(property.sizeSqFt)} SF`
      : property.lotSizeAcres
        ? `${property.lotSizeAcres} acres`
        : "—";

  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={property.images[0]}
          alt={`${property.name} — ${property.type} in ${property.submarket}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge variant={statusVariant(property.status)}>
            {property.status}
          </Badge>
        </div>
        <div className="absolute right-3 top-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/0 text-white opacity-0 transition-opacity group-hover:bg-brand group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">
          {property.type}
        </p>
        <h3 className="mt-1 text-lg font-bold leading-snug text-navy">
          {property.name}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          {property.address}, {property.submarket}
        </p>

        <div className="mt-4 flex items-center gap-4 text-sm text-navy">
          <span className="flex items-center gap-1.5 font-medium">
            <Maximize className="h-3.5 w-3.5 text-muted-foreground" />
            {sizeText}
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            <p className="text-xs text-muted-foreground">
              {property.status === "For Lease" ? "Lease Rate" : "Price"}
            </p>
            <p className={cn("text-lg font-bold text-navy")}>
              {priceLabel(property)}
            </p>
          </div>
          {agent && (
            <p className="max-w-[45%] text-right text-xs text-muted-foreground">
              {agent.name}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
