"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  items: string[];
  index: number;
};

export default function SkillCard({ title, items, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-[var(--accent)]/40 hover:bg-[var(--accent-dim)]"
    >
      <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-sm text-[var(--muted)] transition group-hover:border-white/20 group-hover:text-white"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
