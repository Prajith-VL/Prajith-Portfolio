"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/projects/content";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex min-w-0 flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 sm:p-8"
    >
      <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{project.name}</h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-[var(--accent)]/30 bg-[var(--accent-dim)] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-[var(--accent)]"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-3 font-mono text-xs uppercase tracking-wider text-white transition active:bg-white/5 sm:w-fit sm:min-h-11 sm:justify-start sm:py-2 hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        <SiGithub className="h-4 w-4" />
        GitHub
      </a>
    </motion.article>
  );
}
