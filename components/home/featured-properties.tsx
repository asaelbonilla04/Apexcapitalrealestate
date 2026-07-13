import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getFeaturedProperties } from "@/lib/data/properties";
import { PropertyCard } from "@/components/properties/property-card";
import { Reveal } from "@/components/shared/reveal";

export function FeaturedProperties() {
  const featured = getFeaturedProperties(6);

  return (
    <section className="border-t border-cream-border bg-background py-24 md:py-32">
      <div className="container-wide">
        <Reveal>
          <p className="label-eyebrow">Currently available</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-section mt-6">Available spaces.</h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-base text-ink-muted">
            Every space is owned and operated in-house — no middlemen, no
            surprises.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property, i) => (
            <Reveal key={property.id} delay={i * 0.06}>
              <PropertyCard property={property} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex justify-start">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-sm font-semibold uppercase tracking-label text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              See all spaces
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
