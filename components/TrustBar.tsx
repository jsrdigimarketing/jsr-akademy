import Container from "./ui/Container";
import GradientBg from "./ui/GradientBg";
import Reveal from "./ui/Reveal";

const partners = ["Stripe", "Shopify", "Notion", "Figma", "Spotify", "Atlassian"];

export default function TrustBar() {
  return (
    <GradientBg variant="soft" className="border-y border-white/5 py-10">
      <Container>
        <Reveal className="flex flex-col items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-white/55">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((name) => (
              <span
                key={name}
                className="font-display text-xl font-bold text-brand-white/40 transition-colors hover:text-brand-white/70 sm:text-2xl"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </GradientBg>
  );
}
