import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageHeader from "@/components/layout/PageHeader";
import FadeIn from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/site-config";

const Timeline = dynamic(() => import("@/components/achievements/Timeline"), {
  loading: () => <div className="h-96 animate-pulse rounded-2xl bg-white/5" />,
});

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "LeetCode milestones, hackathon win, internship experience, and certifications.",
};

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pb-[max(2.5rem,env(safe-area-inset-bottom))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(7rem,calc(5.5rem+env(safe-area-inset-top)))] sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="// Milestones"
        title="Achievements"
        subtitle="Highlights from internships, competitions, and continuous technical growth."
      />

      <Timeline />

      <FadeIn className="mt-20">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          Certifications
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.certifications.map(({ label, url }) => (
            <li key={label}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[3.25rem] flex-col justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[var(--muted)] transition hover:border-[var(--accent)]/40 hover:bg-[var(--accent-dim)] hover:text-white active:bg-white/5"
              >
                <span className="font-medium text-white">{label}</span>
                <span className="mt-1 font-mono text-[11px] uppercase tracking-wider text-[var(--accent)]">
                  View on Google Drive →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>
    </div>
  );
}
