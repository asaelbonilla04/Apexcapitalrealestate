import { Hero } from "@/components/home/hero";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { StatsStrip } from "@/components/home/stats-strip";
import { WhyApex } from "@/components/home/why-apex";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <CapabilitiesSection />
      <StatsStrip />
      <WhyApex />
      <CtaBanner />
    </>
  );
}
