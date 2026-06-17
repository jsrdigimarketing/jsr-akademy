"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, Twitter, Youtube, Send } from "lucide-react";
import Container from "./ui/Container";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const categoryLinks = [
  "Data & AI",
  "Development",
  "Cloud & DevOps",
  "Design",
  "Cybersecurity",
];

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative border-t-2 border-brand-green/60 bg-brand-darkblue">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <span className="font-display text-brand-white">
                JSR<span className="text-brand-green"> Akademy</span>
              </span>
              <span className="h-2 w-2 rounded-full bg-brand-green shadow-glow-sm" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-white/70">
              Premium, mentor-led training that turns ambition into in-demand skills.
              Learn from industry experts and build a career you love.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-brand-white/80 transition-all hover:border-brand-green hover:text-brand-green hover:shadow-glow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-white/70 transition-colors hover:text-brand-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-white">
              Categories
            </h3>
            <ul className="mt-4 space-y-3">
              {categoryLinks.map((cat) => (
                <li key={cat}>
                  <Link
                    href="/courses"
                    className="text-sm text-brand-white/70 transition-colors hover:text-brand-green"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-white">
              Stay in the loop
            </h3>
            <p className="mt-4 text-sm text-brand-white/70">
              Get new course drops and learning tips in your inbox.
            </p>
            <form onSubmit={onSubscribe} className="mt-4">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-brand-white placeholder:text-brand-white/40 focus:border-brand-green focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-green text-brand-darkblue transition-all hover:shadow-glow"
                >
                  <Send size={16} />
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-xs font-medium text-brand-green">
                  You&apos;re in! Check your inbox to confirm. 🎉
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-brand-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} JSR Akademy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-brand-green">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-brand-green">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
