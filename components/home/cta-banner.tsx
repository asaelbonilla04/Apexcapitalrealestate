import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function CtaBanner() {
  return (
    <section className="bg-brand">
      <div className="container-tight flex flex-col items-center gap-6 py-20 text-center">
        <Reveal>
          <p className="label-eyebrow text-white/70">Let&apos;s talk</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Have a requirement or an asset to position? Let&apos;s build the
            strategy.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get in touch</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white text-brand hover:bg-slate-100"
          >
            <Link href="/properties">Browse the library</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
