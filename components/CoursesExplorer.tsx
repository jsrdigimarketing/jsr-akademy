"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import GradientBg from "./ui/GradientBg";
import CourseCard from "./CourseCard";
import { courses, categories, type CourseCategory } from "@/lib/courses";

type Filter = "All" | CourseCategory;

const filters: Filter[] = ["All", ...categories];

export default function CoursesExplorer() {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All" ? courses : courses.filter((c) => c.category === active);

  return (
    <GradientBg variant="alt" className="py-16 sm:py-20">
      <Container>
        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => {
            const isActive = active === filter;
            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-brand-green text-brand-darkblue shadow-glow-sm"
                    : "border border-white/15 text-brand-white/80 hover:border-brand-green/60 hover:text-brand-green"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => (
            <motion.div
              key={course.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="h-full"
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>

        {visible.length === 0 && (
          <p className="mt-12 text-center text-brand-white/60">
            No courses in this category yet — check back soon.
          </p>
        )}
      </Container>
    </GradientBg>
  );
}
