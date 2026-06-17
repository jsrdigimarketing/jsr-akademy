"use client";

import Container from "./ui/Container";
import GradientBg from "./ui/GradientBg";
import SectionHeading from "./ui/SectionHeading";
import Reveal, { RevealItem } from "./ui/Reveal";
import FeatureCard from "./FeatureCard";
import { features } from "@/lib/features";

export default function Features() {
  return (
    <GradientBg className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why JSR Akademy"
          title={
            <>
              Everything you need to{" "}
              <span className="text-brand-green">actually learn</span>
            </>
          }
          subtitle="We obsess over outcomes. From the curriculum to the mentorship, every part of the experience is designed to help you build real, lasting skills."
        />

        <Reveal
          stagger
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <RevealItem key={feature.title} className="h-full">
              <FeatureCard feature={feature} />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </GradientBg>
  );
}
