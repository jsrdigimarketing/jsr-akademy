import { type ReactNode } from "react";

type GradientVariant = "default" | "alt" | "soft";

const gradients: Record<GradientVariant, string> = {
  default: "bg-brand-gradient",
  alt: "bg-brand-gradient-alt",
  soft: "bg-brand-gradient-soft",
};

interface GradientBgProps {
  children: ReactNode;
  variant?: GradientVariant;
  /** Render a low-opacity neon-green glow blob for depth. */
  glow?: boolean;
  className?: string;
  id?: string;
}

/** Section wrapper that paints a brand gradient + optional green glow accent. */
export default function GradientBg({
  children,
  variant = "default",
  glow = false,
  className = "",
  id,
}: GradientBgProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${gradients[variant]} ${className}`}
    >
      {glow && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-green/20 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-brand-green/10 blur-[120px]"
          />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
