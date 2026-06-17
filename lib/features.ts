import {
  type LucideIcon,
  GraduationCap,
  Users,
  Rocket,
  ShieldCheck,
  Clock,
  Award,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: GraduationCap,
    title: "Industry-Led Curriculum",
    description:
      "Courses built and taught by practitioners from leading tech companies, updated to match what teams actually use today.",
  },
  {
    icon: Users,
    title: "Mentor Support",
    description:
      "Get unstuck fast with personal feedback on your projects and live Q&A sessions with experienced mentors.",
  },
  {
    icon: Rocket,
    title: "Project-Based Learning",
    description:
      "Learn by building. Every program centers on real-world projects that become portfolio pieces employers notice.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Certifications",
    description:
      "Earn shareable, verified credentials that prove your skills to employers and strengthen your profile.",
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description:
      "Flexible, self-paced tracks fit around your life — on-demand lessons you can revisit anytime, on any device.",
  },
  {
    icon: Award,
    title: "Career Outcomes",
    description:
      "From resume reviews to interview prep, our career support is designed to turn new skills into real opportunities.",
  },
];
