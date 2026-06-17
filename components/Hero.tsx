"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import GradientBg from "./ui/GradientBg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <GradientBg glow className="pt-28 sm:pt-32">
      <Container className="grid items-center gap-12 pb-20 pt-10 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        {/* Copy */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-green"
          >
            <Sparkles size={14} />
            New cohorts open now
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-hero font-extrabold text-balance text-brand-white"
          >
            Master skills that{" "}
            <span className="text-brand-green">move you forward</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-xl text-lg leading-relaxed text-brand-white/80"
          >
            Mentor-led, project-based courses in Data &amp; AI, development, cloud, and
            design — built with industry experts to take you from curious to career-ready.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="/courses" size="lg">
              Explore Courses
            </Button>
            <Button href="/about" size="lg" variant="secondary">
              How it works
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3 pt-2"
          >
            <div className="flex -space-x-3">
              {[11, 32, 14, 45].map((n) => (
                <span
                  key={n}
                  className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-brand-darkblue"
                >
                  <Image
                    src={`https://i.pravatar.cc/80?img=${n}`}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </span>
              ))}
            </div>
            <p className="text-sm text-brand-white/75">
              <span className="inline-flex items-center gap-1 text-brand-green">
                <Star size={14} className="fill-brand-green" /> 4.9
              </span>{" "}
              — trusted by 10,000+ learners
            </p>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-card sm:aspect-[5/5]">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="Learners collaborating on a project"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-darkblue/50 via-transparent to-transparent" />
          </div>

          {/* Floating stat card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -bottom-5 -left-3 rounded-2xl px-5 py-4 shadow-glow-sm sm:-left-6"
          >
            <p className="font-display text-2xl font-bold text-brand-green">95%</p>
            <p className="text-xs text-brand-white/80">Completion rate</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="glass absolute -right-3 top-8 rounded-2xl px-5 py-4 shadow-glow-sm sm:-right-6"
          >
            <p className="font-display text-2xl font-bold text-brand-green">200+</p>
            <p className="text-xs text-brand-white/80">Expert-led courses</p>
          </motion.div>
        </motion.div>
      </Container>
    </GradientBg>
  );
}
