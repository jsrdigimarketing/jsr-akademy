import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://jsr-akademy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JSR Akademy — Premium Skills Training & Certification",
    template: "%s | JSR Akademy",
  },
  description:
    "Master in-demand skills with mentor-led, project-based courses in Data & AI, Development, Cloud, Design and more. Trusted by 10,000+ learners.",
  keywords: [
    "online courses",
    "tech training",
    "certification",
    "data science",
    "web development",
    "upskilling",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "JSR Akademy",
    title: "JSR Akademy — Premium Skills Training & Certification",
    description:
      "Mentor-led, project-based courses that turn ambition into in-demand skills.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "JSR Akademy learners collaborating",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSR Akademy — Premium Skills Training",
    description:
      "Mentor-led, project-based courses that turn ambition into in-demand skills.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
