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
    "Apex Capital Realty's industrial service lines: sales & leasing, last-mile logistics advisory, landlord & tenant representation, and debt & advisory services.",
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
      <section className="bg-navy">
        <div className="container-wide py-16 md:py-20">
          <p className="label-eyebrow text-brand-light">Capabilities</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            How we create an edge for clients
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            A focused set of industrial disciplines, executed at an
            institutional level.
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
