"use client";

import * as React from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Contact() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">(
    "idle"
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Hello from your portfolio");
    const message = String(data.get("message") || "");

    const body = encodeURIComponent(
      `Hi Sudheer,\n\n${message}\n\n— ${name} (${email})`
    );
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    window.location.href = mailto;

    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 600);
  };

  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: site.whatsappDisplay,
      href: site.whatsapp,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sudheer-reddy-…",
      href: site.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Sudheer-CodeCrusader",
      href: site.github,
    },
    {
      icon: MapPin,
      label: "Location",
      value: site.location,
    },
  ];

  return (
    <section id="contact" className="section">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build resilient quality together."
        description="Always open to senior automation, SDET, or AI-in-QA conversations. Drop a message and I'll respond within 24 hours."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="card-surface flex h-full flex-col p-6">
            <h3 className="text-lg font-semibold tracking-tight">
              Reach out directly
            </h3>
            <p className="mt-2 text-sm text-muted">
              The fastest channels to start a conversation.
            </p>
            <ul className="mt-6 space-y-3">
              {channels.map((c) => {
                const Tag = c.href ? "a" : "div";
                return (
                  <li key={c.label}>
                    <Tag
                      {...(c.href
                        ? {
                            href: c.href,
                            target: c.href.startsWith("http")
                              ? "_blank"
                              : undefined,
                            rel: c.href.startsWith("http")
                              ? "noreferrer noopener"
                              : undefined,
                          }
                        : {})}
                      className="group flex items-center gap-3 rounded-xl border border-transparent p-3 transition-colors hover:border-[rgb(var(--border))] hover:bg-[rgb(var(--card)/0.7)]"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500/15 to-indigo-500/15 text-[rgb(var(--accent))]">
                        <c.icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wider text-muted">
                          {c.label}
                        </span>
                        <span className="block truncate text-sm">
                          {c.value}
                        </span>
                      </span>
                    </Tag>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="lg:col-span-3">
          <form
            onSubmit={onSubmit}
            className="card-surface flex flex-col gap-4 p-6"
            aria-label="Contact form"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required autoComplete="name" />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>
            <Field
              label="Subject"
              name="subject"
              autoComplete="off"
              placeholder="What are you reaching out about?"
            />
            <FieldArea
              label="Message"
              name="message"
              required
              placeholder="Tell me a bit about your team, role, or project…"
            />
            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="text-xs text-muted">
                Or email me directly at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-[rgb(var(--foreground))] underline decoration-[rgb(var(--accent)/0.5)] underline-offset-4 hover:decoration-[rgb(var(--accent))]"
                >
                  {site.email}
                </a>
                .
              </p>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === "sending"}
              >
                <Send className="h-4 w-4" />
                {status === "sending"
                  ? "Sending…"
                  : status === "sent"
                  ? "Email opened"
                  : "Send message"}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function Field({ label, name, ...rest }: FieldProps) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-wider text-muted">
        {label}
      </span>
      <input
        name={name}
        id={name}
        {...rest}
        className="mt-1.5 block w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card)/0.6)] px-3.5 py-2.5 text-sm placeholder:text-muted focus:border-[rgb(var(--accent))] focus:outline-none"
      />
    </label>
  );
}

type AreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

function FieldArea({ label, name, ...rest }: AreaProps) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-wider text-muted">
        {label}
      </span>
      <textarea
        name={name}
        id={name}
        rows={5}
        {...rest}
        className="mt-1.5 block w-full resize-y rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card)/0.6)] px-3.5 py-2.5 text-sm placeholder:text-muted focus:border-[rgb(var(--accent))] focus:outline-none"
      />
    </label>
  );
}
