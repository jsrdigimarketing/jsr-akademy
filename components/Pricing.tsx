"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Container from "./ui/Container";
import GradientBg from "./ui/GradientBg";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import Reveal, { RevealItem } from "./ui/Reveal";
import { pricingPlans } from "@/lib/pricing";

export default function Pricing() {
  return (
    <GradientBg className="py-20 sm:py-28" id="pricing">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple plans, <span className="text-brand-green">serious value</span>
            </>
          }
          subtitle="Start free to explore, then upgrade when you're ready to commit. Cancel anytime."
        />

        <Reveal stagger className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <RevealItem key={plan.name} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  plan.popular
                    ? "border-2 border-brand-green bg-white/10 shadow-glow-sm"
                    : "glass"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-green px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-darkblue shadow-glow-sm">
                    Most Popular
                  </span>
                )}

                <h3 className="font-display text-xl font-bold text-brand-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-brand-white/70">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-extrabold text-brand-white">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-brand-white/60">{plan.period}</span>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-brand-white/85">
                      <Check
                        size={18}
                        className="mt-0.5 flex-shrink-0 text-brand-green"
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={plan.popular ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </GradientBg>
  );
}
