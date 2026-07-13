import Image from "next/image";
import Link from "next/link";

import type { Property } from "@/lib/data/types";
import { formatSqFt, priceLabel } from "@/lib/utils";

/**
 * Minimal editorial property card.
 *
 * Photo → eyebrow (city + type) → address → thin divider → size + rate.
 * No hover-lift, no floating badge, no arrow chrome — kept intentionally
 * quiet, in line with the terramap.co portfolio card.
 */
export function PropertyCard({ property }: { property: Property }) {
  const sizeText =
    property.sizeSqFt > 0
      ? `${formatSqFt(property.sizeSqFt)} SF`
      : property.lotSizeAcres
        ? `${property.lotSizeAcres} acres`
        : "—";

  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group flex h-full flex-col focus-visible:outline-none"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-border">
        <Image
          src={property.images[0]}
          alt={`${property.name} — ${property.type} in ${property.city}, ${property.state}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p className="label-eyebrow">
          {property.city}, {property.state} · {property.type}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-ink">
          {property.name}
        </h3>

        <div className="mt-4 border-t border-cream-border" aria-hidden />

        <dl className="mt-4 flex items-baseline justify-between">
          <div>
            <dt className="sr-only">Size</dt>
            <dd className="text-sm font-medium text-ink">{sizeText}</dd>
          </div>
          <div className="text-right">
            <dt className="sr-only">
              {property.status === "For Lease" ? "Lease rate" : "Price"}
            </dt>
            <dd className="text-sm font-medium text-ink-muted">
              {priceLabel(property)}
            </dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}
