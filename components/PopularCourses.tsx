import Container from "./ui/Container";
import GradientBg from "./ui/GradientBg";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import Reveal, { RevealItem } from "./ui/Reveal";
import CourseCard from "./CourseCard";
import { popularCourses } from "@/lib/courses";

export default function PopularCourses() {
  return (
    <GradientBg variant="alt" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Popular programs"
            title={
              <>
                Courses learners <span className="text-brand-green">love most</span>
              </>
            }
            subtitle="Hand-picked, career-defining programs across the most in-demand fields."
            className="mx-0"
          />
          <Button href="/courses" variant="secondary" size="sm" className="flex-shrink-0">
            View all courses
          </Button>
        </div>

        <Reveal stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularCourses.slice(0, 6).map((course) => (
            <RevealItem key={course.slug} className="h-full">
              <CourseCard course={course} />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </GradientBg>
  );
}
