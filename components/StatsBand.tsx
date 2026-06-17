import Container from "./ui/Container";
import GradientBg from "./ui/GradientBg";
import Counter from "./ui/Counter";
import Reveal, { RevealItem } from "./ui/Reveal";

const stats = [
  { value: 200, suffix: "+", label: "Expert-led courses" },
  { value: 50, suffix: "k+", label: "Learners worldwide" },
  { value: 95, suffix: "%", label: "Completion rate" },
  { value: 4.9, suffix: "★", label: "Average rating", decimals: 1 },
];

export default function StatsBand() {
  return (
    <GradientBg variant="alt" className="py-16">
      <Container>
        <Reveal stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-brand-green sm:text-5xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </p>
              <p className="mt-2 text-sm text-brand-white/75">{stat.label}</p>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </GradientBg>
  );
}
