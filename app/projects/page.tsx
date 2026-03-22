import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PageHeader from "@/components/layout/PageHeader";
import { projects } from "@/projects/content";

const ProjectCard = dynamic(() => import("@/components/projects/ProjectCard"), {
  loading: () => <div className="h-64 animate-pulse rounded-2xl bg-white/5" />,
});

export const metadata: Metadata = {
  title: "Projects",
  description:
    "SafePath AI, TruthLens, CAPE — computer vision, ML, and full-stack AI systems.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pb-[max(2.5rem,env(safe-area-inset-bottom))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(7rem,calc(5.5rem+env(safe-area-inset-top)))] sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="// Work"
        title="Projects"
        subtitle="Selected builds spanning computer vision, ML pipelines, and full-stack AI products."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
