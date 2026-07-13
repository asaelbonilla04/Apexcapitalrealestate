import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Terramap — Central Florida industrial space, owned and operated in-house.",
};

export default function CompanyPage() {
  return (
    <>
      <section className="bg-background pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="container-wide">
          <p className="label-eyebrow">About Terramap</p>
          <h1 className="display-section mt-6">
            Space, done<br />differently.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            Terramap owns and operates industrial space across Central
            Florida — small-bay flex, warehouse, and dealer-approved
            corridors. Everything you see on this site is ours, so getting
            into a space skips the usual real-estate friction.
          </p>
        </div>
      </section>

      <section className="border-t border-cream-border bg-background py-20 md:py-28">
        <div className="container-wide grid gap-16 md:grid-cols-2">
          <Reveal>
            <p className="label-eyebrow">What we do</p>
            <h2 className="mt-6 text-3xl font-semibold text-ink sm:text-4xl">
              Buy it. Build it. Lease it.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              We acquire under-utilized industrial buildings in and around
              Orlando, bring them back to move-in condition, and lease them
              directly to the operators who use them: contractors,
              wholesale auto dealers, e-commerce operators, mechanics,
              detailers, fabricators, and small manufacturers.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label-eyebrow">Why it&rsquo;s different</p>
            <h2 className="mt-6 text-3xl font-semibold text-ink sm:text-4xl">
              No middlemen.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Because we own the space, you deal directly with us — from
              first tour to signed lease to move-in. That means faster
              answers, simpler terms, and space that&rsquo;s actually ready
              on day one.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="border-t border-cream-border bg-background py-20 md:py-24">
        <div className="container-wide flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="label-eyebrow">Get in touch</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">
              Ready to see a space?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-label text-cream transition-colors hover:bg-ink/85"
          >
            Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
