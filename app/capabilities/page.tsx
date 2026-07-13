import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Handshake,
  LineChart,
  Truck,
} from "lucide-react";

import { getCapabilities } from "@/lib/data/capabilities";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Terramap's industrial service lines: sales & leasing, last-mile logistics advisory, landlord & tenant representation, and debt & advisory services.",
};

const iconMap = {
  Building2,
  Truck,
  Handshake,
  Landmark: Building2,
  LineChart,
} as const;

export default function CapabilitiesPage() {
  const capabilities = getCapabilities();

  return (
    <>
      <section className="bg-background pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="container-wide">
          <p className="label-eyebrow">Capabilities</p>
          <h1 className="display-section mt-6">What we do.</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            A focused set of industrial disciplines across the Central
            Florida market.
          </p>
        </div>
      </section>

      <section className="container-wide py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((capability, i) => {
            const Icon = iconMap[capability.icon];
            return (
              <Reveal key={capability.slug} delay={i * 0.08}>
                <Link
                  href={`/capabilities/${capability.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h2 className="mt-6 text-2xl font-bold text-navy">
                    {capability.title}
                  </h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                    {capability.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 font-semibold text-brand">
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
