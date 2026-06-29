import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getFeaturedProperties } from "@/lib/data/properties";
import { PropertyCard } from "@/components/properties/property-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function FeaturedProperties() {
  const featured = getFeaturedProperties(4);

  return (
    <section className="bg-background py-24">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Properties"
            title="Featured industrial listings"
            description="A snapshot of current opportunities from across the Apex library — for sale and for lease."
          />
          <Reveal delay={0.1}>
            <Button asChild variant="outline">
              <Link href="/properties">
                View all properties
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((property, i) => (
            <Reveal key={property.id} delay={i * 0.08}>
              <PropertyCard property={property} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
