import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Compass, Handshake, Sparkles, Wrench } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Framework Architecture",
    body: "Design Playwright, Appium, and REST Assured frameworks that scale across teams, devices, and CI runners.",
  },
  {
    icon: Sparkles,
    title: "AI-Augmented Quality",
    body: "Build agents on CrewAI and LLMs to generate tests, self-heal locators, mask PII, and stabilize flaky flows.",
  },
  {
    icon: Handshake,
    title: "Multi-Industry POC Delivery",
    body: "Scope, build, and ship client Proof of Concepts across fintech, healthcare, telecom, media, and SaaS — end to end, independently.",
  },
  {
    icon: Wrench,
    title: "Internal Tooling Mindset",
    body: "Build purpose-made mobile test apps — Flutter cross-OS, OCR, scanner, mock banking, on-screen keyboard simulator — when off-the-shelf tools fall short.",
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeader
        eyebrow="About"
        title="Engineering quality at the speed of product."
        description="I'm a Senior QA Automation Engineer with 7+ years building reliable, scalable test systems for mobile, web, and API products. My recent work spans agentic AI test automation, multi-industry client POC delivery, and from-scratch internal mobile apps that exercise edge cases off-the-shelf tools can't reach."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <article className="card-surface h-full p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-indigo-500/15 text-[rgb(var(--accent))]">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
