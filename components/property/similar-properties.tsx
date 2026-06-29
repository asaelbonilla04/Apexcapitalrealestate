import type { Property } from "@/lib/data/types";
import { PropertyCard } from "@/components/properties/property-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function SimilarProperties({
  properties,
}: {
  properties: Property[];
}) {
  if (properties.length === 0) return null;

  return (
    <section className="border-t border-border bg-background py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Keep exploring"
          title="Similar properties"
          description="Comparable listings by type and submarket."
        />
        {/* Horizontal scroll on mobile, grid on larger screens. */}
        <div className="mt-10 flex snap-x gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className="w-[80vw] shrink-0 snap-start sm:w-auto"
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
