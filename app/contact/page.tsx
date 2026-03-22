import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageHeader from "@/components/layout/PageHeader";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { HiEnvelope } from "react-icons/hi2";
import { siteConfig } from "@/lib/site-config";

const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  loading: () => <div className="mx-auto h-80 max-w-lg animate-pulse rounded-2xl bg-white/5" />,
});

export const metadata: Metadata = {
  title: "Contact",
  description: "Email, social links, and contact form.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pb-[max(2.5rem,env(safe-area-inset-bottom))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(7rem,calc(5.5rem+env(safe-area-inset-top)))] sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="// Connect"
        title="Contact"
        subtitle="Reach out for collaborations, internships, or technical discussions."
      />

      <div className="mx-auto mb-12 flex max-w-lg flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-white transition [overflow-wrap:anywhere] hover:border-[var(--accent)] sm:w-auto sm:min-h-11 sm:px-5 sm:py-2.5 sm:text-xs"
        >
          <HiEnvelope className="h-4 w-4 shrink-0 text-[var(--accent)]" />
          <span className="text-center">{siteConfig.email}</span>
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 font-mono text-xs uppercase tracking-wider text-white transition hover:border-[var(--accent)] sm:w-auto sm:min-h-11 sm:py-2.5"
        >
          <FaLinkedinIn className="h-4 w-4 text-[var(--accent)]" />
          LinkedIn
        </a>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 font-mono text-xs uppercase tracking-wider text-white transition hover:border-[var(--accent)] sm:w-auto sm:min-h-11 sm:py-2.5"
        >
          <SiGithub className="h-4 w-4 text-[var(--accent)]" />
          GitHub
        </a>
      </div>

      <p className="mb-8 px-1 text-center text-sm leading-relaxed text-[var(--muted)] [text-wrap:balance]">
        {siteConfig.location} · {siteConfig.phone}
      </p>

      <ContactForm />
    </div>
  );
}
