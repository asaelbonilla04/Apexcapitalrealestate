import { companyStats } from "@/lib/data/company";
import { Reveal } from "@/components/shared/reveal";

export function StatsStrip() {
  return (
    <section className="bg-navy">
      <div className="container-wide grid grid-cols-2 gap-8 py-16 lg:grid-cols-4">
        {/* PLACEHOLDER stats — edit values in lib/data/company.ts */}
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
  );
}
