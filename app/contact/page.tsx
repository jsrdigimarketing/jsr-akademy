import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import GradientBg from "@/components/ui/GradientBg";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the JSR Akademy team. Questions about courses, teams, or partnerships? We're here to help.",
};

const details = [
  { icon: Mail, label: "Email", value: "hello@jsrakademy.com", href: "mailto:hello@jsrakademy.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 012-3456", href: "tel:+15550123456" },
  { icon: MapPin, label: "Office", value: "221 Innovation Ave, San Francisco, CA" },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9am – 6pm PT" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <span className="text-brand-green">talk</span>
          </>
        }
        subtitle="Have a question about a course, your team, or a partnership? Drop us a line and we'll get back to you within one business day."
      />

      <GradientBg variant="alt" className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          {/* Details */}
          <Reveal className="flex flex-col gap-8">
            <div>
              <h2 className="text-section font-bold text-brand-white accent-underline">
                Get in touch
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-brand-white/80">
                Whether you&apos;re choosing your first course or rolling out training to a
                whole team, our team is happy to help you find the right path.
              </p>
            </div>

            <ul className="space-y-5">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green ring-1 ring-brand-green/30">
                    <item.icon size={22} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-white/55">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-brand-white transition-colors hover:text-brand-green"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-brand-white">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </Container>
      </GradientBg>
    </>
  );
}
