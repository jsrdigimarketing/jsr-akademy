"use client";

import { motion } from "framer-motion";
import type { Feature } from "@/lib/features";

export default function FeatureCard({ feature }: { feature: Feature }) {
  const { icon: Icon, title, description } = feature;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="glass group h-full rounded-3xl p-7 transition-all hover:border-brand-green/50 hover:shadow-glow-sm"
    >
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green ring-1 ring-brand-green/30 transition-colors group-hover:bg-brand-green/25">
        <Icon size={26} />
      </div>
      <h3 className="font-display text-lg font-semibold text-brand-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-white/70">{description}</p>
    </motion.div>
  );
}
