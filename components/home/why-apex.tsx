import { Reveal } from "@/components/shared/reveal";

const steps = [
  {
    number: "01",
    title: "Browse",
    body: "Explore available warehouse, flex, and small-bay spaces across Central Florida.",
  },
  {
    number: "02",
    title: "Tour",
    body: "Text or call to set up a walk-through — usually same or next day.",
  },
  {
    number: "03",
    title: "Move in",
    body: "Sign, get the keys, and get your business running. Most spaces are move-in ready.",
  },
];

/**
 * Kept the WhyApex export name for backward-compatibility with app/page.tsx,
 * but the content is now a tenant-focused "How it works" section.
 */
export function WhyApex() {
  return (
    <section className="border-t border-cream-border bg-background py-24 md:py-32">
      <div className="container-wide">
        <Reveal>
          <p className="label-eyebrow">How it works</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-section mt-6">Simple, direct.</h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <p className="font-mono text-sm text-ink-muted">{step.number}</p>
              <h3 className="mt-4 text-2xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
