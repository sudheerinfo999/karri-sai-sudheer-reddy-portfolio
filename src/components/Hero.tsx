"use client";

import {
  ArrowRight,
  FolderOpen,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const expertise = [
  "Mobile Automation",
  "Web Automation",
  "API Testing",
  "AI-driven Test Automation",
  "Playwright",
  "Appium",
  "Flutter Cross-OS",
  "CI/CD",
  "Performance Testing",
  "Test Framework Development",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-6 sm:pt-40 lg:pt-44"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--card)/0.6)] px-3 py-1 text-xs font-medium text-muted backdrop-blur"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Open to senior automation roles · {site.location}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
      >
        {site.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 max-w-3xl text-balance text-lg leading-relaxed sm:text-xl"
      >
        <span className="gradient-text font-medium">{site.tagline}</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="mt-2 text-sm font-medium text-muted"
      >
        {site.yearsOfExperience} Years of Experience
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
      >
        I design and ship scalable test automation systems for mobile, web,
        and API surfaces — combining Playwright and Appium with AI agents
        on top of CrewAI and Large Language Models (LLMs) to make
        enterprise quality faster, smarter, and self-healing.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <a href="#contact" className="btn btn-primary">
          Contact Me
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-ghost"
          aria-label="LinkedIn profile"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-ghost"
          aria-label="GitHub profile"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={`mailto:${site.email}`}
          className="btn btn-ghost"
          aria-label="Email Sai Sudheer"
        >
          <Mail className="h-4 w-4" />
          Email
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-ghost"
          aria-label={`Chat with Sai Sudheer on WhatsApp at ${site.whatsappDisplay}`}
        >
          <WhatsAppIcon size={16} />
          WhatsApp
        </a>
        <a
          href={site.certificatesRepo}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-ghost"
          aria-label="Open the full certificates repository on Google Drive"
        >
          <FolderOpen className="h-4 w-4" />
          Certificates Repo
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.45 }}
        className="mt-14"
      >
        <p className="eyebrow">Core expertise</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {expertise.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
