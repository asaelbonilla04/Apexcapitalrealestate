import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, TrendingUp, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Apex Capital Realty. We're building a focused team of industrial real estate professionals in Central Florida.",
};

// PLACEHOLDER value props — replace with real culture/benefits copy.
const reasons = [
  {
    Icon: TrendingUp,
    title: "Uncapped upside",
    body: "A meritocratic platform where production is rewarded and great brokers grow fast.",
  },
  {
    Icon: Compass,
    title: "Specialist focus",
    body: "Go deep on industrial in one of the country's most dynamic markets.",
  },
  {
    Icon: Users,
    title: "A real team",
    body: "Collaborative, low-ego, and genuinely invested in each other's success.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="container-wide py-16 md:py-24">
          <p className="label-eyebrow text-brand-light">Careers</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            We&apos;re hiring driven people who want an edge.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Apex Capital Realty is growing. If you&apos;re ambitious about
            industrial real estate and want a platform that rewards
            performance, we want to hear from you.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Introduce yourself
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-wide py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-border bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-xl font-bold text-navy">{title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-2xl border border-border bg-background p-10 text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            Don&apos;t see an open role?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We&apos;re always interested in connecting with talented brokers and
            analysts. Reach out and start a conversation.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
