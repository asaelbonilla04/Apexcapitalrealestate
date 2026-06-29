import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Handshake,
  LineChart,
  Truck,
} from "lucide-react";

import { getCapabilities, getCapability } from "@/lib/data/capabilities";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

const iconMap = {
  Building2,
  Truck,
  Handshake,
  Landmark: Building2,
  LineChart,
} as const;

export function generateStaticParams() {
  return getCapabilities().map((capability) => ({ slug: capability.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const capability = getCapability(params.slug);
  if (!capability) return { title: "Capability not found" };
  return {
    title: capability.title,
    description: capability.summary,
  };
}

export default function CapabilityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const capability = getCapability(params.slug);
  if (!capability) notFound();

  const Icon = iconMap[capability.icon];
  const others = getCapabilities().filter((c) => c.slug !== capability.slug);

  return (
    <>
      <section className="bg-navy">
        <div className="container-wide py-16 md:py-20">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1 text-sm text-slate-400"
          >
            <Link href="/capabilities" className="hover:text-white">
              Capabilities
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{capability.title}</span>
          </nav>
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand text-white">
            <Icon className="h-7 w-7" />
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {capability.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            {capability.summary}
          </p>
        </div>
      </section>

      <section className="container-wide grid gap-12 py-16 lg:grid-cols-[1fr_360px]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>{capability.description}</p>
          </div>

          <h2 className="mb-4 mt-10 text-xl font-bold text-navy">
            What we deliver
          </h2>
          <ul className="space-y-3">
            {capability.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-navy">{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/contact">
                Discuss your requirement
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-border bg-white p-6">
            <p className="label-eyebrow mb-4">Other capabilities</p>
            <ul className="space-y-1">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/capabilities/${other.slug}`}
                    className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-accent"
                  >
                    {other.title}
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
