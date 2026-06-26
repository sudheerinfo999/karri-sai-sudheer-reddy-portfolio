"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";
import { achievements } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  React.useEffect(() => {
    if (!inView) return;
    if (reduce) {
      count.set(to);
      return;
    }
    const controls = animate(count, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, to, count, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section className="section pt-0">
      <SectionHeader
        eyebrow="By the numbers"
        title="Impact you can measure."
        align="center"
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {achievements.map((a) => (
          <li key={a.label}>
            <article className="card-surface flex h-full flex-col items-center p-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-indigo-500/15 text-[rgb(var(--accent))]">
                <a.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                <Counter to={a.value} suffix={a.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted">{a.label}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
