import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageHeader from "@/components/layout/PageHeader";
import FadeIn from "@/components/ui/FadeIn";

const Timeline = dynamic(() => import("@/components/achievements/Timeline"), {
  loading: () => <div className="h-96 animate-pulse rounded-2xl bg-white/5" />,
});

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "LeetCode milestones, hackathon win, internship experience, and certifications.",
};

const certifications = [
  "Databricks Generative AI Certifications",
  "IBM SkillsBuild AI Certifications",
  "BYTEXL Programming Certifications",
];

export default function AchievementsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
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
          {certifications.map((c) => (
            <li
              key={c}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[var(--muted)]"
            >
              {c}
            </li>
          ))}
        </ul>
      </FadeIn>
    </div>
  );
}
