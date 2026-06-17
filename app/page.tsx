import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import StatsBand from "@/components/StatsBand";
import Features from "@/components/Features";
import PopularCourses from "@/components/PopularCourses";
import HowItWorks from "@/components/HowItWorks";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsBand />
      <Features />
      <PopularCourses />
      <HowItWorks />
      <Instructors />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
