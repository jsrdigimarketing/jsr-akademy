import { type ReactNode } from "react";
import Container from "./Container";
import GradientBg from "./GradientBg";
import Reveal from "./Reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
}

/** Compact hero used at the top of inner pages. */
export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <GradientBg glow className="pt-32 pb-16 sm:pt-36 sm:pb-20">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-green">
              {eyebrow}
            </span>
          )}
          <h1 className="text-hero font-extrabold text-balance text-brand-white">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-2xl text-lg leading-relaxed text-brand-white/80">
              {subtitle}
            </p>
          )}
        </Reveal>
      </Container>
    </GradientBg>
  );
}
