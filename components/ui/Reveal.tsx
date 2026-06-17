"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the reveal starts. */
  delay?: number;
  /** When true, children animate with a stagger (use <RevealItem> inside). */
  stagger?: boolean;
  as?: "div" | "ul" | "section";
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const single: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/** Scroll-triggered fade + slide-up wrapper. Set `stagger` to animate children. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger ? container : single}
      transition={stagger ? undefined : { delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Child element for a staggered Reveal container. */
export function RevealItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={single}>
      {children}
    </motion.div>
  );
}
