import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { getAgents } from "@/lib/data/agents";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Terramap team — industrial real estate brokers and advisors serving Central Florida.",
};

export default function TeamPage() {
  const agents = getAgents();

  return (
    <>
      <section className="bg-navy">
        <div className="container-wide py-16 md:py-20">
          <p className="label-eyebrow text-brand-light">Team</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The people behind the deals
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            A focused team of industrial specialists with deep roots across the
            Central Florida market.
          </p>
        </div>
      </section>

      <section className="container-wide py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, i) => (
            <Reveal key={agent.id} delay={i * 0.06}>
              <article className="group overflow-hidden rounded-xl border border-border bg-white">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  {/* PLACEHOLDER headshot */}
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold text-navy">{agent.name}</h2>
                  <p className="text-sm font-medium text-brand">
                    {agent.title}
                  </p>
                  {agent.bio && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {agent.bio}
                    </p>
                  )}
                  <div className="mt-4 space-y-1.5 border-t border-border pt-4">
                    <a
                      href={`tel:${agent.phone.replace(/[^\d+]/g, "")}`}
                      className="flex items-center gap-2 text-sm text-navy hover:text-brand"
                    >
                      <Phone className="h-4 w-4 text-brand" />
                      {agent.phone}
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-2 text-sm text-navy hover:text-brand"
                    >
                      <Mail className="h-4 w-4 text-brand" />
                      {agent.email}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
