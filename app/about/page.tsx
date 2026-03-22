import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import SkillCard from "@/components/about/SkillCard";
import FadeIn from "@/components/ui/FadeIn";
import { skillCategories } from "@/lib/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "Education, skills, and background — AI, machine learning, and full-stack development.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pb-[max(2.5rem,env(safe-area-inset-bottom))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(7rem,calc(5.5rem+env(safe-area-inset-top)))] sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="// About"
        title="About Me"
        subtitle="Computer Science undergraduate focused on AI and software development — building intelligent systems end to end, from models to full-stack delivery."
      />

      <FadeIn>
        <section className="mb-16">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Introduction
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            I am a motivated Computer Science student specializing in Artificial Intelligence and
            software development, with hands-on experience in AI-driven applications, machine
            learning, and full-stack systems. I enjoy computer vision, modern web technologies,
            and turning complex problems into clear, scalable software — complemented by competitive
            programming and continuous project work.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={0.08}>
        <section className="mb-16">
          <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Education
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">SNS College of Technology</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">B.E. Computer Science Engineering</p>
              <p className="mt-3 font-mono text-sm text-[var(--accent)]">CGPA: 8.91</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">
                Vijayalakshmi Matric Hr. Sec. School
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">Sirumugai</p>
            </article>
          </div>
        </section>
      </FadeIn>

      <section>
        <FadeIn>
          <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Skills
          </h2>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} title={cat.title} items={cat.items} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
