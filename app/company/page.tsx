import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { companyStats } from "@/lib/data/company";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Company",
  description:
    "About Apex Capital Realty — a Miami-based industrial real estate brokerage breaking from tradition to bring an edge to South Florida's market.",
};

// PLACEHOLDER award/recognition logos. Replace with real recognitions.
const awards = ["NAIOP", "SIOR", "CoStar Power Broker", "CCIM", "ULI"];

export default function CompanyPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-wide py-16 md:py-24">
          <p className="label-eyebrow text-brand-light">Company</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Breaking away from traditional industrial brokerage.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Apex Capital Realty was founded to bring sharper insight, faster
            execution, and a genuine edge to South Florida industrial real
            estate. We are specialists — not generalists — and our clients feel
            the difference.
          </p>
        </div>
      </section>

      {/* Mission / positioning */}
      <section className="container-wide grid items-center gap-12 py-20 lg:grid-cols-2">
        <Reveal>
          <p className="label-eyebrow mb-3">Our positioning</p>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Focused on industrial. Obsessed with outcomes.
          </h2>
          {/* PLACEHOLDER copy */}
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              South Florida&apos;s industrial market moves fast. Supply is
              scarce, capital is competitive, and the operators who win are the
              ones with the best information. That&apos;s the gap we set out to
              close.
            </p>
            <p>
              We pair institutional-grade underwriting with street-level
              submarket intelligence across Miami-Dade, Broward, and Palm Beach
              — advising owners, occupiers, and investors with total alignment
              to their goals.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            {/* PLACEHOLDER image */}
            <Image
              src="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1600&q=80"
              alt="Loading docks at an industrial distribution facility"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="bg-navy">
        <div className="container-wide grid grid-cols-2 gap-8 py-16 lg:grid-cols-4">
          {/* PLACEHOLDER stats — edit in lib/data/company.ts */}
          {companyStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-label text-slate-400">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="container-wide py-20">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards & affiliations"
          description="Placeholder recognitions — replace with Apex Capital Realty's actual awards, designations, and memberships."
          align="center"
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {awards.map((award) => (
            <span
              key={award}
              className="text-lg font-bold uppercase tracking-wide text-slate-400"
            >
              {award}
            </span>
          ))}
        </div>
      </section>

      {/* Careers teaser */}
      <section className="border-t border-border bg-background">
        <div className="container-wide flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <p className="label-eyebrow mb-2">Careers</p>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Build your career at Apex
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              We&apos;re always looking for sharp, driven people to join the
              team.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/careers">
              View careers
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
