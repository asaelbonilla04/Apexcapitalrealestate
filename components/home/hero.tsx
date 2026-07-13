import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";

/**
 * Editorial hero — cream background, massive display headline, minimal
 * subhead and CTA row. No background imagery, no dark overlay.
 */
export function Hero() {
  return (
    <section className="bg-background pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="container-wide">
        <Reveal>
          <p className="label-eyebrow">Central Florida industrial</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display-hero mt-6">
            Spaces built
            <br />
            for your business.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            Warehouse, flex, and small-bay space across Orlando and
            surrounding Central Florida — ready when you are, without the
            traditional real estate friction.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-label text-cream transition-colors hover:bg-ink/85"
            >
              View available spaces
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold uppercase tracking-label text-ink underline-offset-4 hover:underline"
            >
              Talk to us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
