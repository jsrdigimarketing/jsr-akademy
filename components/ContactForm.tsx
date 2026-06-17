"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "./ui/Button";

interface FormState {
  name: string;
  email: string;
  topic: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const topics = ["General enquiry", "Course advice", "Teams & enterprise", "Partnerships"];

const emptyForm: FormState = { name: "", email: "", topic: topics[0], message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: FormState): Errors => {
    const next: Errors = {};
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!data.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (data.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSubmitted(true);
      setForm(emptyForm);
    }
  };

  const fieldClass =
    "w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-brand-white placeholder:text-brand-white/40 focus:outline-none focus:border-brand-green transition-colors";

  if (submitted) {
    return (
      <div className="glass flex flex-col items-center gap-4 rounded-3xl p-10 text-center">
        <CheckCircle2 size={48} className="text-brand-green" />
        <h3 className="font-display text-xl font-semibold text-brand-white">
          Message sent!
        </h3>
        <p className="max-w-sm text-sm text-brand-white/70">
          Thanks for reaching out. Our team will get back to you within one business day.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="secondary" size="sm">
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-7 sm:p-8">
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-white">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            className={`${fieldClass} ${errors.name ? "border-red-400" : "border-white/15"}`}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-300">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@email.com"
            aria-invalid={!!errors.email}
            className={`${fieldClass} ${errors.email ? "border-red-400" : "border-white/15"}`}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-300">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-brand-white">
            Topic
          </label>
          <select
            id="topic"
            value={form.topic}
            onChange={(e) => update("topic", e.target.value)}
            className={`${fieldClass} border-white/15`}
          >
            {topics.map((topic) => (
              <option key={topic} value={topic} className="bg-brand-darkblue">
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-white">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us how we can help…"
            aria-invalid={!!errors.message}
            className={`${fieldClass} resize-none ${
              errors.message ? "border-red-400" : "border-white/15"
            }`}
          />
          {errors.message && <p className="mt-1.5 text-xs text-red-300">{errors.message}</p>}
        </div>

        <Button type="submit" size="lg" className="w-full">
          Send message
        </Button>
      </div>
    </form>
  );
}
