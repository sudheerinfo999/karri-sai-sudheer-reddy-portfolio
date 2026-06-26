import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[rgb(var(--border))] py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-6">
        <p className="text-xs text-muted">
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted">
          Built with React · Next.js · Tailwind CSS · Framer Motion
        </p>
        <div className="flex items-center gap-2">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgb(var(--border))] text-muted transition-colors hover:text-[rgb(var(--foreground))]"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgb(var(--border))] text-muted transition-colors hover:text-[rgb(var(--foreground))]"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`WhatsApp ${site.whatsappDisplay}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgb(var(--border))] text-muted transition-colors hover:text-[#25D366] hover:border-[#25D366]/40"
          >
            <WhatsAppIcon size={16} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgb(var(--border))] text-muted transition-colors hover:text-[rgb(var(--foreground))]"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
