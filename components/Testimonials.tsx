"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "./ui/Container";
import GradientBg from "./ui/GradientBg";
import SectionHeading from "./ui/SectionHeading";
import { testimonials } from "@/lib/testimonials";

const AUTO_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTO_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[index];

  return (
    <GradientBg glow className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Loved by learners"
          title={
            <>
              Real people, <span className="text-brand-green">real results</span>
            </>
          }
        />

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <Quote className="absolute right-8 top-8 text-brand-green/20" size={64} />
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <blockquote className="text-lg leading-relaxed text-brand-white/90 sm:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-brand-green/50">
                    <Image src={t.avatar} alt={t.name} fill sizes="48px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block font-display font-semibold text-brand-white">
                      {t.name}
                    </span>
                    <span className="block text-sm text-brand-green">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-brand-white transition-all hover:border-brand-green hover:text-brand-green"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-brand-green" : "w-2 bg-white/25 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-brand-white transition-all hover:border-brand-green hover:text-brand-green"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </GradientBg>
  );
}
