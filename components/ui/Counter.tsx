"use client";

import { useEffect, useRef, useState } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  animate,
} from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

/** Counts up from 0 to `value` once it scrolls into view. */
export default function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.8,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setDisplay(value.toFixed(decimals));
      return;
    }

    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals, duration, motionValue, reduceMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
