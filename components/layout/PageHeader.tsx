"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <header className="mb-12 max-w-3xl">
      {eyebrow && (
        <motion.p
          className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent)]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </header>
  );
}
