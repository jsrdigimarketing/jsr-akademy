export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: 29,
    period: "/month",
    description: "Perfect for curious learners exploring a new skill.",
    features: [
      "Access to 20+ foundational courses",
      "Self-paced learning",
      "Community forum access",
      "Course completion certificates",
    ],
    cta: "Start Learning",
  },
  {
    name: "Pro",
    price: 59,
    period: "/month",
    description: "For serious learners ready to go from skill to career.",
    features: [
      "Access to all 200+ courses",
      "Mentor-reviewed projects",
      "Live workshops & Q&A sessions",
      "Career coaching & resume reviews",
      "Verified certifications",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Team",
    price: 49,
    period: "/seat/mo",
    description: "Upskill your whole team with admin tools and reporting.",
    features: [
      "Everything in Pro",
      "Centralized team dashboard",
      "Progress reporting & analytics",
      "Custom learning paths",
      "Dedicated success manager",
    ],
    cta: "Talk to Sales",
  },
];
