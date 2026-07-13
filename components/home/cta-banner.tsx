import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { company } from "@/lib/data/company";

/**
 * Bottom-of-home CTA. Cream section, editorial layout — headline on the
 * left, phone / email + primary CTA on the right.
 */
export function CtaBanner() {
  return (
    <section className="border-t border-cream-border bg-background py-24 md:py-32">
      <div className="container-wide grid gap-12 md:grid-cols-2 md:items-end">
        <Reveal>
          <p className="label-eyebrow">Ready to move</p>
          <h2 className="display-section mt-6">
            Let&rsquo;s find your space.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 md:pl-8">
            <div>
              <p className="label-eyebrow">Call or text</p>
              <a
                href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                className="mt-2 block text-2xl font-semibold text-ink hover:text-brand"
              >
                {company.phone}
              </a>
            </div>
            <div>
              <p className="label-eyebrow">Email</p>
              <a
                href={`mailto:${company.email}`}
                className="mt-2 block text-2xl font-semibold text-ink hover:text-brand"
              >
                {company.email}
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-label text-cream transition-colors hover:bg-ink/85"
            >
              Send a message
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
