import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Frameworks and engines I've designed and shipped."
        description="A snapshot of representative work — from cross-platform mobile harnesses to LLM-powered self-healing engines."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delay={idx * 0.04}>
            <article className="card-surface group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow">
              <div
                aria-hidden
                className="relative h-36 overflow-hidden bg-gradient-to-br from-brand-500/15 via-indigo-500/10 to-transparent"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(56,189,248,0.35),transparent_55%)]"
                />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--border))] to-transparent" />
                <div className="absolute left-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[rgb(var(--card)/0.9)] text-[rgb(var(--accent))] shadow-soft backdrop-blur">
                  <p.icon className="h-5 w-5" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[rgb(var(--accent))]">
                  {p.summary}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-[rgb(var(--border))] px-2 py-0.5 text-[11px] font-medium text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3 text-xs">
                  <a
                    href={p.github ?? "#"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-[rgb(var(--foreground))]"
                    aria-label={`${p.title} on GitHub`}
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                  <span aria-hidden className="text-muted">
                    ·
                  </span>
                  <a
                    href={p.demo ?? "#"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-[rgb(var(--foreground))]"
                    aria-label={`${p.title} live demo`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live demo
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
