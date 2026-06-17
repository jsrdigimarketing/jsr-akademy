"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Clock, ArrowRight } from "lucide-react";
import type { Course } from "@/lib/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-shadow hover:shadow-card"
    >
      <Link href={`/courses/${course.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue/80 via-brand-darkblue/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-brand-darkblue">
          {course.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-4 text-xs text-brand-white/70">
          <span className="inline-flex items-center gap-1 text-brand-green">
            <Star size={14} className="fill-brand-green" />
            <span className="font-semibold">{course.rating}</span>
            <span className="text-brand-white/50">({course.reviews.toLocaleString()})</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            {course.duration}
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold leading-snug text-brand-white">
          <Link href={`/courses/${course.slug}`} className="hover:text-brand-green">
            {course.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-white/70">
          {course.blurb}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-brand-green">
            ${course.price}
          </span>
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-white transition-colors hover:text-brand-green"
          >
            View Course
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
