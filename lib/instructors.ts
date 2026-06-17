export interface Instructor {
  id: string;
  name: string;
  expertise: string;
  bio: string;
  photo: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const instructors: Instructor[] = [
  {
    id: "amara-okoye",
    name: "Dr. Amara Okoye",
    expertise: "Machine Learning & Data Science",
    bio: "Former lead data scientist with a decade of experience building ML systems at scale across fintech and healthcare.",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    socials: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: "diego-marin",
    name: "Diego Marín",
    expertise: "Full-Stack & Security Engineering",
    bio: "Staff engineer and open-source contributor who has shipped products used by millions and mentored 500+ developers.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    socials: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    expertise: "Cloud Architecture & Product",
    bio: "Cloud solutions architect and product leader focused on resilient infrastructure and teams that ship with confidence.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: "sofia-rossi",
    name: "Sofia Rossi",
    expertise: "Product Design & Generative AI",
    bio: "Design leader and AI tinkerer who blends human-centered design with cutting-edge model-powered experiences.",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    socials: { twitter: "#", linkedin: "#", github: "#" },
  },
];

export function getInstructor(id: string): Instructor | undefined {
  return instructors.find((i) => i.id === id);
}
