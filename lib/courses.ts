export type CourseCategory =
  | "Data & AI"
  | "Development"
  | "Cloud & DevOps"
  | "Design"
  | "Business"
  | "Cybersecurity";

export interface CurriculumModule {
  title: string;
  lessons: string[];
}

export interface Course {
  slug: string;
  title: string;
  category: CourseCategory;
  blurb: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  instructorId: string;
  popular?: boolean;
  outcomes: string[];
  curriculum: CurriculumModule[];
}

export const categories: CourseCategory[] = [
  "Data & AI",
  "Development",
  "Cloud & DevOps",
  "Design",
  "Business",
  "Cybersecurity",
];

export const courses: Course[] = [
  {
    slug: "applied-machine-learning",
    title: "Applied Machine Learning",
    category: "Data & AI",
    blurb: "Build, train, and ship real ML models with Python and modern tooling.",
    description:
      "Go from fundamentals to production. This hands-on program covers supervised and unsupervised learning, feature engineering, model evaluation, and deployment — all through real datasets and capstone projects reviewed by mentors.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviews: 2143,
    duration: "10 weeks",
    level: "Intermediate",
    price: 499,
    instructorId: "amara-okoye",
    popular: true,
    outcomes: [
      "Frame business problems as ML tasks",
      "Engineer features that actually move metrics",
      "Evaluate models with the right metrics",
      "Deploy a model behind a live API",
    ],
    curriculum: [
      {
        title: "Foundations",
        lessons: ["The ML workflow", "Python for data", "Exploratory analysis"],
      },
      {
        title: "Core Models",
        lessons: ["Regression & classification", "Trees & ensembles", "Model selection"],
      },
      {
        title: "Production",
        lessons: ["Pipelines & packaging", "Serving with FastAPI", "Monitoring drift"],
      },
    ],
  },
  {
    slug: "fullstack-web-development",
    title: "Full-Stack Web Development",
    category: "Development",
    blurb: "Master React, Node, and databases to ship complete web products.",
    description:
      "A project-driven path through the modern web stack. Build responsive front-ends with React and Next.js, design REST and realtime APIs with Node, and connect everything to a production database with auth and testing.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviews: 3891,
    duration: "12 weeks",
    level: "Beginner",
    price: 549,
    instructorId: "diego-marin",
    popular: true,
    outcomes: [
      "Build accessible UIs with React & Next.js",
      "Design and secure REST APIs",
      "Model data with SQL and an ORM",
      "Deploy a full product to the cloud",
    ],
    curriculum: [
      {
        title: "Front-End",
        lessons: ["Modern JavaScript", "React fundamentals", "Next.js & routing"],
      },
      {
        title: "Back-End",
        lessons: ["Node & Express", "Auth & sessions", "Databases & ORMs"],
      },
      {
        title: "Ship It",
        lessons: ["Testing", "CI/CD basics", "Deploying to Vercel"],
      },
    ],
  },
  {
    slug: "cloud-engineering-aws",
    title: "Cloud Engineering on AWS",
    category: "Cloud & DevOps",
    blurb: "Design, secure, and automate scalable infrastructure on AWS.",
    description:
      "Learn cloud architecture the way teams actually work. Provision infrastructure as code, design for high availability, and automate delivery pipelines while keeping cost and security front of mind.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviews: 1576,
    duration: "8 weeks",
    level: "Intermediate",
    price: 599,
    instructorId: "priya-nair",
    popular: true,
    outcomes: [
      "Provision infra with Terraform",
      "Design highly available systems",
      "Automate CI/CD pipelines",
      "Apply cloud security best practices",
    ],
    curriculum: [
      {
        title: "Core Services",
        lessons: ["Compute & storage", "Networking & VPC", "IAM & security"],
      },
      {
        title: "Automation",
        lessons: ["Infrastructure as code", "Containers & ECS", "CI/CD pipelines"],
      },
      {
        title: "Operate",
        lessons: ["Observability", "Cost optimization", "Incident response"],
      },
    ],
  },
  {
    slug: "ux-ui-product-design",
    title: "UX/UI Product Design",
    category: "Design",
    blurb: "Design intuitive, beautiful products users love — from research to prototype.",
    description:
      "A complete design journey covering user research, information architecture, interaction design, and high-fidelity prototyping in Figma. Finish with a portfolio-ready case study.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    reviews: 1224,
    duration: "9 weeks",
    level: "Beginner",
    price: 449,
    instructorId: "sofia-rossi",
    popular: true,
    outcomes: [
      "Run user research & synthesis",
      "Design systems & components",
      "Prototype interactions in Figma",
      "Present a portfolio case study",
    ],
    curriculum: [
      {
        title: "Discover",
        lessons: ["User research", "Personas & journeys", "Problem framing"],
      },
      {
        title: "Design",
        lessons: ["Wireframing", "Visual design", "Design systems"],
      },
      {
        title: "Validate",
        lessons: ["Prototyping", "Usability testing", "Handoff"],
      },
    ],
  },
  {
    slug: "data-analytics-bootcamp",
    title: "Data Analytics Bootcamp",
    category: "Data & AI",
    blurb: "Turn raw data into decisions with SQL, dashboards, and storytelling.",
    description:
      "Become the analyst every team needs. Master SQL, build interactive dashboards, and learn to communicate insights that drive real business decisions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviews: 2670,
    duration: "8 weeks",
    level: "Beginner",
    price: 399,
    instructorId: "amara-okoye",
    popular: true,
    outcomes: [
      "Query data fluently with SQL",
      "Build dashboards stakeholders trust",
      "Apply statistics to real questions",
      "Tell stories with data",
    ],
    curriculum: [
      {
        title: "Data Basics",
        lessons: ["Spreadsheets to databases", "SQL essentials", "Joins & aggregation"],
      },
      {
        title: "Analysis",
        lessons: ["Descriptive statistics", "A/B testing", "Cohort analysis"],
      },
      {
        title: "Communicate",
        lessons: ["Dashboards", "Data storytelling", "Stakeholder presentations"],
      },
    ],
  },
  {
    slug: "cybersecurity-essentials",
    title: "Cybersecurity Essentials",
    category: "Cybersecurity",
    blurb: "Defend systems and data with hands-on security fundamentals.",
    description:
      "Build a strong security foundation. Understand threats, harden systems, and respond to incidents through guided labs that mirror real-world scenarios — no prior experience required.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    reviews: 980,
    duration: "7 weeks",
    level: "Beginner",
    price: 479,
    instructorId: "diego-marin",
    popular: true,
    outcomes: [
      "Identify common attack vectors",
      "Harden networks and endpoints",
      "Apply cryptography fundamentals",
      "Respond to security incidents",
    ],
    curriculum: [
      {
        title: "Foundations",
        lessons: ["Security mindset", "Threats & risk", "Cryptography basics"],
      },
      {
        title: "Defense",
        lessons: ["Network security", "Endpoint hardening", "Access control"],
      },
      {
        title: "Respond",
        lessons: ["Monitoring & detection", "Incident response", "Compliance"],
      },
    ],
  },
  {
    slug: "product-management-leadership",
    title: "Product Management & Leadership",
    category: "Business",
    blurb: "Lead products from idea to launch with strategy and confidence.",
    description:
      "Learn the craft of modern product management — discovery, roadmapping, prioritization, and stakeholder leadership — guided by mentors who have shipped products at scale.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    reviews: 1410,
    duration: "6 weeks",
    level: "Intermediate",
    price: 529,
    instructorId: "priya-nair",
    outcomes: [
      "Run effective product discovery",
      "Prioritize with frameworks that scale",
      "Build and communicate roadmaps",
      "Lead cross-functional teams",
    ],
    curriculum: [
      {
        title: "Strategy",
        lessons: ["Product vision", "Market & users", "Metrics that matter"],
      },
      {
        title: "Execution",
        lessons: ["Discovery", "Prioritization", "Roadmapping"],
      },
      {
        title: "Leadership",
        lessons: ["Stakeholder management", "Team dynamics", "Launch & iterate"],
      },
    ],
  },
  {
    slug: "generative-ai-engineering",
    title: "Generative AI Engineering",
    category: "Data & AI",
    blurb: "Build LLM-powered apps with prompts, RAG, and agents.",
    description:
      "Ship production AI features. Learn prompt engineering, retrieval-augmented generation, evaluation, and agentic workflows using modern model APIs and frameworks.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviews: 1862,
    duration: "8 weeks",
    level: "Advanced",
    price: 649,
    instructorId: "sofia-rossi",
    outcomes: [
      "Engineer reliable prompts",
      "Build RAG pipelines over your data",
      "Evaluate and guardrail LLM outputs",
      "Design multi-step agent workflows",
    ],
    curriculum: [
      {
        title: "Foundations",
        lessons: ["How LLMs work", "Prompt engineering", "Structured outputs"],
      },
      {
        title: "Retrieval",
        lessons: ["Embeddings", "Vector search", "RAG pipelines"],
      },
      {
        title: "Agents",
        lessons: ["Tool use", "Evaluation", "Production guardrails"],
      },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export const popularCourses = courses.filter((c) => c.popular);
