"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";
import Container from "./ui/Container";
import GradientBg from "./ui/GradientBg";
import SectionHeading from "./ui/SectionHeading";
import Reveal, { RevealItem } from "./ui/Reveal";
import { instructors } from "@/lib/instructors";

const socialIcons = { twitter: Twitter, linkedin: Linkedin, github: Github };

export default function Instructors() {
  return (
    <GradientBg variant="alt" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Meet your mentors"
          title={
            <>
              Learn from people who&apos;ve{" "}
              <span className="text-brand-green">done the work</span>
            </>
          }
          subtitle="Our instructors are active practitioners from leading companies — not just lecturers."
        />

        <Reveal stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((person) => (
            <RevealItem key={person.id} className="h-full">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-shadow hover:shadow-card"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue/85 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {Object.entries(person.socials).map(([key, href]) => {
                      const Icon = socialIcons[key as keyof typeof socialIcons];
                      if (!Icon || !href) return null;
                      return (
                        <a
                          key={key}
                          href={href}
                          aria-label={`${person.name} on ${key}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand-white backdrop-blur transition-all hover:bg-brand-green hover:text-brand-darkblue"
                        >
                          <Icon size={16} />
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-brand-white">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-green">
                    {person.expertise}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-white/70">
                    {person.bio}
                  </p>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </GradientBg>
  );
}
