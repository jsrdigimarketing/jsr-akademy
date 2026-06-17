import type { Metadata } from "next";
import Image from "next/image";
import { Target, Heart, Lightbulb, Globe } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import GradientBg from "@/components/ui/GradientBg";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";
import Reveal, { RevealItem } from "@/components/ui/Reveal";
import Instructors from "@/components/Instructors";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "JSR Akademy is on a mission to make world-class, career-changing education accessible to ambitious learners everywhere.",
};

const values = [
  {
    icon: Target,
    title: "Outcomes first",
    description: "We measure success by your success — real skills, real careers.",
  },
  {
    icon: Heart,
    title: "Learner obsessed",
    description: "Every decision starts with what's best for the people we teach.",
  },
  {
    icon: Lightbulb,
    title: "Always current",
    description: "Curriculum updated constantly to match what the industry needs now.",
  },
  {
    icon: Globe,
    title: "Open to all",
    description: "Quality education shouldn't depend on where you happen to be.",
  },
];

const stats = [
  { value: 50, suffix: "k+", label: "Learners" },
  { value: 200, suffix: "+", label: "Courses" },
  { value: 120, suffix: "+", label: "Countries" },
  { value: 95, suffix: "%", label: "Completion" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title={
          <>
            Education that <span className="text-brand-green">moves the world</span>
          </>
        }
        subtitle="JSR Akademy started with one belief: world-class, career-changing skills should be within everyone's reach."
      />

      {/* Mission + image */}
      <GradientBg variant="alt" className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-section font-bold text-brand-white accent-underline">
              Our mission
            </h2>
            <div className="mt-8 space-y-5 text-brand-white/80">
              <p className="leading-relaxed">
                Traditional education is slow, expensive, and often out of step with what
                employers actually need. We set out to fix that — building practical,
                mentor-led programs that take people from curious to career-ready.
              </p>
              <p className="leading-relaxed">
                Today, JSR Akademy is home to a global community of learners and a faculty
                of practitioners who&apos;ve shipped real products at the companies you
                admire. Every course is built around projects, feedback, and outcomes that
                matter.
              </p>
              <p className="leading-relaxed">
                We&apos;re just getting started — and we&apos;d love for you to be part of
                what comes next.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-card">
              <Image
                src="https://unsplash.com/s/photos/indian-college-students"
                alt="Team collaborating in a bright workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-darkblue/50 to-transparent" />
            </div>
          </Reveal>
        </Container>
      </GradientBg>

      {/* Stats */}
      <GradientBg className="py-16">
        <Container>
          <Reveal stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <RevealItem key={stat.label} className="text-center">
                <p className="font-display text-4xl font-extrabold text-brand-green sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-brand-white/75">{stat.label}</p>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </GradientBg>

      {/* Values */}
      <GradientBg variant="alt" className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we value"
            title={
              <>
                Principles that <span className="text-brand-green">guide us</span>
              </>
            }
          />
          <Reveal stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <RevealItem key={value.title} className="h-full">
                <div className="glass h-full rounded-3xl p-7">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green ring-1 ring-brand-green/30">
                    <value.icon size={26} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-white/70">
                    {value.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </Container>
      </GradientBg>

      {/* Team reuses the Instructors section */}
      <Instructors />

      <FinalCTA />
    </>
  );
}
