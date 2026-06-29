import Link from "next/link";
import { Building2, Handshake, LineChart, Truck, ArrowRight } from "lucide-react";

import { getCapabilities } from "@/lib/data/capabilities";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const iconMap = {
  Building2,
  Truck,
  Handshake,
  Landmark: Building2,
  LineChart,
} as const;

export function CapabilitiesSection() {
  const capabilities = getCapabilities();

  return (
    <section className="bg-white py-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Capabilities"
          title="A full-service industrial platform"
          description="From investment sales to last-mile network strategy, we cover the disciplines that move industrial real estate."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, i) => {
            const Icon = iconMap[capability.icon];
            return (
              <Reveal key={capability.slug} delay={i * 0.08}>
                <Link
                  href={`/capabilities/${capability.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">
                    {capability.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {capability.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
