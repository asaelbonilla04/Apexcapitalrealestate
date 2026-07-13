import { Hero } from "@/components/home/hero";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { WhyApex } from "@/components/home/why-apex";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhyApex />
      <CtaBanner />
    </>
  );
}
