"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "./ui/Container";
import GradientBg from "./ui/GradientBg";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { faqs } from "@/lib/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <GradientBg variant="alt" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions? <span className="text-brand-green">We&apos;ve got answers</span>
            </>
          }
        />

        <Reveal className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.question}
                className="glass overflow-hidden rounded-2xl"
              >
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-brand-white sm:text-lg">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green"
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-brand-white/75">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </GradientBg>
  );
}
