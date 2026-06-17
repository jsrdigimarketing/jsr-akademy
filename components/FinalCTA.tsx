import Container from "./ui/Container";
import GradientBg from "./ui/GradientBg";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";

export default function FinalCTA() {
  return (
    <GradientBg variant="soft" className="py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-brand-green/30 bg-brand-gradient px-6 py-16 text-center shadow-glow-sm sm:px-12">
          {/* Strong green glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-green/30 blur-[120px]"
          />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-section font-extrabold text-balance text-brand-white">
              Ready to build skills that{" "}
              <span className="text-brand-green">move you forward?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-white/80">
              Join 50,000+ learners leveling up their careers. Start today — your first
              lessons are on us.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/courses" size="lg">
                Get Started Free
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Talk to us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </GradientBg>
  );
}
