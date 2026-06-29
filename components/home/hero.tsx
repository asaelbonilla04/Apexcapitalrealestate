import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MoveDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { company } from "@/lib/data/company";
import { QuickSearch } from "./quick-search";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {/* PLACEHOLDER hero image — replace with branded warehouse/industrial
          photography or a looping background video before launch. */}
      <Image
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80"
        alt="Aerial view of an industrial distribution warehouse"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/70 to-navy/95" />

      <div className="container-wide relative flex min-h-[88vh] flex-col justify-center py-24">
        <Reveal>
          <p className="label-eyebrow text-brand-light">
            Industrial Real Estate · Miami, FL
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {company.tagline}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Warehouse, distribution, last-mile logistics, and industrial land
            across South Florida — represented with sharper insight and
            institutional execution.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/properties">
                Explore Properties
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Talk to a broker</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.32} className="mt-12">
          <QuickSearch className="max-w-4xl" />
        </Reveal>

        <div className="mt-12 hidden items-center gap-2 text-xs uppercase tracking-label text-slate-400 md:flex">
          <MoveDown className="h-4 w-4 animate-bounce" />
          Scroll
        </div>
      </div>
    </section>
  );
}
