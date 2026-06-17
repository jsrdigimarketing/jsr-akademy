import { type ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/** Consistent section header: eyebrow chip, title, optional subtitle. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-green">
          {eyebrow}
        </span>
      )}
      <h2 className="text-section font-bold text-balance text-brand-white">{title}</h2>
      {subtitle && (
        <p className="text-base leading-relaxed text-brand-white/75 sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
