import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import RegisterSteps from "@/components/RegisterSteps";
import WhyUs from "@/components/WhyUs";
import AboutSection from "@/components/AboutSection";
import CoverageStrip from "@/components/CoverageStrip";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <WhyUs />
      <RegisterSteps />
      <AboutSection />
      <CoverageStrip />
      <FinalCTA />
    </>
  );
}
