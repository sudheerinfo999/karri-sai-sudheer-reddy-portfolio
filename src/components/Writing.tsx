import { ArrowUpRight, BookOpen } from "lucide-react";
import { articles } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Writing() {
  return (
    <section id="writing" className="section">
      <SectionHeader
        eyebrow="Writing"
        title="Articles from the field."
        description="Field notes on AI-assisted engineering, vibe coding, agentic test automation, and the tools I build with — published on Hashnode."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {articles.map((article, idx) => (
          <Reveal key={article.url} delay={idx * 0.04}>
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer noopener"
              className="card-surface group relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
              aria-label={`Read article: ${article.title}`}
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent)/0.6)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--card)/0.6)] px-2.5 py-1 text-[11px] font-medium text-muted">
                  <BookOpen className="h-3 w-3" />
                  {article.source}
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[rgb(var(--accent))]" />
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">
                {article.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {article.summary}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[rgb(var(--border))] px-2 py-0.5 text-[11px] font-medium text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-[rgb(var(--accent))]">
                Read on Hashnode
                <ArrowUpRight className="h-3 w-3" />
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
