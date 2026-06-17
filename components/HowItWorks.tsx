import { Search, UserPlus, BookOpen, Award } from "lucide-react";
import Container from "./ui/Container";
import GradientBg from "./ui/GradientBg";
import SectionHeading from "./ui/SectionHeading";
import Reveal, { RevealItem } from "./ui/Reveal";

const steps = [
  {
    icon: Search,
    title: "Browse",
    description: "Explore 200+ courses and find the perfect path for your goals.",
  },
  {
    icon: UserPlus,
    title: "Enroll",
    description: "Pick a plan, join a cohort, and get instant access to your program.",
  },
  {
    icon: BookOpen,
    title: "Learn",
    description: "Build real projects with mentor feedback at your own pace.",
  },
  {
    icon: Award,
    title: "Get Certified",
    description: "Earn a verified certificate and showcase your new skills.",
  },
];

export default function HowItWorks() {
  return (
    <GradientBg className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Your path from <span className="text-brand-green">curious to certified</span>
            </>
          }
          subtitle="Four simple steps stand between you and your next opportunity."
        />

        <Reveal stagger className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-green/40 to-transparent lg:block"
          />
          {steps.map((step, i) => (
            <RevealItem key={step.title}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green text-brand-darkblue shadow-glow-sm">
                  <step.icon size={28} />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-brand-darkblue bg-brand-white text-xs font-bold text-brand-darkblue">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-brand-white">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-brand-white/70">
                  {step.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </GradientBg>
  );
}
