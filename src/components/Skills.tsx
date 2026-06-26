import { skills, type SkillItem } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";

function getName(item: SkillItem): string {
  return typeof item === "string" ? item : item.name;
}

function getHref(item: SkillItem): string | undefined {
  return typeof item === "string" ? undefined : item.href;
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader
        eyebrow="Technical Skills"
        title="A modern test stack — from devices to data layers."
        description="The tools, languages, and platforms I use day-to-day to build dependable automation."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, idx) => (
          <Reveal key={group.title} delay={idx * 0.04}>
            <article className="card-surface group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent)/0.6)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-indigo-500/15 text-[rgb(var(--accent))]">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold tracking-tight">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const name = getName(item);
                  const href = getHref(item);
                  if (href) {
                    return (
                      <li key={name}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="chip inline-flex items-center gap-1 transition-all hover:border-[rgb(var(--accent)/0.5)] hover:text-[rgb(var(--accent))] hover:shadow-soft"
                          aria-label={`Open ${name} in a new tab`}
                        >
                          {name}
                          <ArrowUpRight className="h-3 w-3 opacity-60" />
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={name} className="chip">
                      {name}
                    </li>
                  );
                })}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
