import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  Clock,
  BarChart3,
  Check,
  CircleDot,
  ArrowLeft,
} from "lucide-react";
import Container from "@/components/ui/Container";
import GradientBg from "@/components/ui/GradientBg";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { courses, getCourse } from "@/lib/courses";
import { getInstructor } from "@/lib/instructors";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const course = getCourse(params.slug);
  if (!course) return { title: "Course not found" };
  return {
    title: course.title,
    description: course.blurb,
    openGraph: {
      title: course.title,
      description: course.blurb,
      images: [{ url: course.image, width: 1200, height: 630, alt: course.title }],
    },
  };
}

export default function CourseDetailPage({ params }: Params) {
  const course = getCourse(params.slug);
  if (!course) notFound();

  const instructor = getInstructor(course.instructorId);

  return (
    <>
      {/* Hero */}
      <GradientBg glow className="pt-32 pb-16 sm:pt-36">
        <Container>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-white/70 transition-colors hover:text-brand-green"
          >
            <ArrowLeft size={16} /> All courses
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="flex flex-col gap-5">
              <span className="inline-flex w-fit rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-brand-darkblue">
                {course.category}
              </span>
              <h1 className="text-hero font-extrabold text-balance text-brand-white">
                {course.title}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-brand-white/80">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-5 text-sm text-brand-white/80">
                <span className="inline-flex items-center gap-1.5 text-brand-green">
                  <Star size={16} className="fill-brand-green" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-brand-white/55">
                    ({course.reviews.toLocaleString()} reviews)
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={16} /> {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BarChart3 size={16} /> {course.level}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-white/10 shadow-card">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-darkblue/50 to-transparent" />
              </div>
            </Reveal>
          </div>
        </Container>
      </GradientBg>

      {/* Body */}
      <GradientBg variant="alt" className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            {/* What you'll learn */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-brand-white accent-underline">
                What you&apos;ll learn
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-brand-white/85">
                    <Check size={20} className="mt-0.5 flex-shrink-0 text-brand-green" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Curriculum */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-brand-white accent-underline">
                Curriculum
              </h2>
              <div className="mt-8 space-y-4">
                {course.curriculum.map((module, i) => (
                  <div key={module.title} className="glass rounded-2xl p-6">
                    <h3 className="font-display text-lg font-semibold text-brand-white">
                      <span className="mr-2 text-brand-green">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {module.title}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {module.lessons.map((lesson) => (
                        <li
                          key={lesson}
                          className="flex items-center gap-3 text-sm text-brand-white/75"
                        >
                          <CircleDot size={15} className="flex-shrink-0 text-brand-green/70" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Instructor */}
            {instructor && (
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-brand-white accent-underline">
                  Your instructor
                </h2>
                <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                  <span className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl ring-2 ring-brand-green/40">
                    <Image
                      src={instructor.photo}
                      alt={instructor.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-brand-white">
                      {instructor.name}
                    </h3>
                    <p className="text-sm font-medium text-brand-green">
                      {instructor.expertise}
                    </p>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-brand-white/70">
                      {instructor.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          {/* Enroll card */}
          <div className="lg:col-span-1">
            <Reveal className="lg:sticky lg:top-28">
              <div className="glass rounded-3xl p-7 shadow-card">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-extrabold text-brand-green">
                    ${course.price}
                  </span>
                  <span className="text-sm text-brand-white/60">one-time</span>
                </div>
                <Button href="/contact" className="mt-6 w-full" size="lg">
                  Enroll Now
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  className="mt-3 w-full"
                >
                  Request syllabus
                </Button>

                <ul className="mt-7 space-y-3 text-sm text-brand-white/80">
                  {[
                    `${course.duration} of content`,
                    "Mentor-reviewed projects",
                    "Verified certificate",
                    "Lifetime access",
                    "30-day money-back guarantee",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check size={16} className="flex-shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </GradientBg>
    </>
  );
}
