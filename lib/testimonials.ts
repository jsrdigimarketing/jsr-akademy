export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Lee",
    role: "Data Analyst @ Stripe",
    quote:
      "The Data Analytics Bootcamp completely changed my career. Within two months of finishing I landed a role with a 40% pay bump.",
    avatar: "https://i.pravatar.cc/160?img=11",
  },
  {
    name: "Elena Petrova",
    role: "Frontend Engineer @ Shopify",
    quote:
      "I went from zero coding experience to shipping production React. The mentors and project reviews made all the difference.",
    avatar: "https://i.pravatar.cc/160?img=32",
  },
  {
    name: "Kwame Mensah",
    role: "Cloud Engineer @ Atlassian",
    quote:
      "Hands-on labs that mirror real work. I walked into my AWS interview confident and got the offer the same week.",
    avatar: "https://i.pravatar.cc/160?img=14",
  },
  {
    name: "Hana Suzuki",
    role: "Product Designer @ Figma",
    quote:
      "The portfolio case study I built here is what got me noticed. The feedback was honest, specific, and incredibly useful.",
    avatar: "https://i.pravatar.cc/160?img=45",
  },
  {
    name: "Liam O'Connor",
    role: "ML Engineer @ Spotify",
    quote:
      "Finally a program that goes beyond theory and teaches you how to actually deploy models. Worth every minute.",
    avatar: "https://i.pravatar.cc/160?img=51",
  },
  {
    name: "Aisha Rahman",
    role: "Product Manager @ Notion",
    quote:
      "The leadership track gave me frameworks I use every single day. My team ships faster and with way more clarity now.",
    avatar: "https://i.pravatar.cc/160?img=27",
  },
];
