"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Experience() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <SectionHeader
        eyebrow="Experience"
        title="A timeline of building and leading test automation."
        description="Six years across CPaaS, telecom super-apps, and AI test automation products — from consultant to lead engineer."
      />

      <ol className="relative ml-3 sm:ml-6">
        <div
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[rgb(var(--border))] to-transparent sm:left-[11px]"
        />

        {experience.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <Reveal key={item.company} delay={idx * 0.04} as="li" className="mb-6 last:mb-0 pl-8 sm:pl-12">
              <span
                aria-hidden
                className="absolute left-0 mt-2 flex h-4 w-4 items-center justify-center sm:left-1"
              >
                <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-brand-500/30" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brand-500 to-indigo-500 ring-4 ring-[rgb(var(--background))]" />
              </span>

              <article className="card-surface overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`exp-panel-${idx}`}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <div>
                    <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                      {item.company}
                    </h3>
                    <p className="mt-1 text-sm text-[rgb(var(--accent))]">
                      {item.role}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                      <span>{item.period}</span>
                      <span aria-hidden>·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </span>
                    </div>
                    {item.note ? (
                      <p className="mt-2 text-xs italic text-muted">
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                  <span
                    className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgb(var(--border))] text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[rgb(var(--accent))]" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`exp-panel-${idx}`}
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: "auto", opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden border-t border-[rgb(var(--border))]"
                    >
                      <ul className="space-y-3 p-5 sm:p-6">
                        {item.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm leading-relaxed text-muted"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent))]"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
