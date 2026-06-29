import Image from "next/image";
import { Check } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";

const points = [
  "Specialized exclusively in industrial — not a generalist shop",
  "Granular submarket intelligence across Orange, Seminole & Osceola counties",
  "Institutional-grade underwriting and execution",
  "Conflict-free representation aligned to your interests",
];

export function WhyApex() {
  return (
    <section className="bg-background py-24">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <p className="label-eyebrow mb-3">Why Apex</p>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            An edge built on focus, data, and conviction.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We built Apex Capital Realty to do one thing exceptionally well:
            advise on Central Florida industrial real estate. That focus lets us
            see the market more clearly, move faster, and negotiate harder for
            the clients we serve.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-navy">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            {/* PLACEHOLDER image */}
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
              alt="Interior of a modern distribution warehouse"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
