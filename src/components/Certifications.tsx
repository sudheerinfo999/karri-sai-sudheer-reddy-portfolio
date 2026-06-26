import { ArrowUpRight, FolderOpen } from "lucide-react";
import { certifications } from "@/lib/data";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeader
        eyebrow="Certifications"
        title="Recognized credentials and ongoing learning."
        description="Continuous upskilling across testing, cloud, networking, and security foundations."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, idx) => (
          <Reveal key={cert.title} delay={idx * 0.04}>
            <article className="card-surface flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-indigo-500/15 text-[rgb(var(--accent))]">
                <cert.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold tracking-tight">
                {cert.title}
              </h3>
              <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <a
          href={site.certificatesRepo}
          target="_blank"
          rel="noreferrer noopener"
          className="card-surface group mt-6 flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow sm:flex-row sm:items-center sm:justify-between"
          aria-label="View the full certificates repository on Google Drive"
        >
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-indigo-500/15 text-[rgb(var(--accent))]">
              <FolderOpen className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight">
                Full certificates repository
              </p>
              <p className="mt-1 text-xs text-muted">
                Every certificate above plus AWS EC2 &amp; S3 fundamentals,
                CCNA Cybersecurity, Cybersecurity Essentials, JIRA, Cisco
                NetAcad, and more — hosted on Google Drive.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[rgb(var(--accent))]">
            Open on Google Drive
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </Reveal>
    </section>
  );
}
