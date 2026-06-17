import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CoursesExplorer from "@/components/CoursesExplorer";

export const metadata: Metadata = {
  title: "Courses & Programs",
  description:
    "Browse 200+ mentor-led courses across Data & AI, Development, Cloud, Design, Business and Cybersecurity. Filter by category and find your path.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title={
          <>
            Explore our <span className="text-brand-green">courses</span>
          </>
        }
        subtitle="Project-based programs designed with industry experts. Filter by category to find the perfect fit for your goals."
      />
      <CoursesExplorer />
    </>
  );
}
