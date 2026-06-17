import type { MetadataRoute } from "next";
import { courses } from "@/lib/courses";

const siteUrl = "https://jsr-akademy.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/courses", "/about", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const courseRoutes = courses.map((course) => ({
    url: `${siteUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes];
}
