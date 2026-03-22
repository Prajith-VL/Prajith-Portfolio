"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { HiArrowDownTray } from "react-icons/hi2";
import { siteConfig } from "@/lib/site-config";

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white transition hover:border-[var(--accent)] hover:bg-[var(--accent-dim)] hover:text-[var(--accent)]";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[100svh] flex-col justify-center px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex items-stretch gap-4"
        >
          <span
            className="hidden w-px shrink-0 bg-[var(--muted)] sm:block"
            aria-hidden
            style={{ minHeight: "4.5rem" }}
          />
          <div>
            <motion.h1
              className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {siteConfig.name.split(" ")[0]}
              <br />
              <span className="text-[var(--muted)]">{siteConfig.name.split(" ").slice(1).join(" ")}</span>
            </motion.h1>
            <motion.p
              className="mt-4 font-mono text-sm text-[var(--accent)] sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              {`// ${siteConfig.title}`}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="mb-10 h-px max-w-md bg-gradient-to-r from-white/40 to-transparent"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.p
          className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.55 }}
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className={btnBase}>
            <SiGithub className="h-4 w-4" />
            GitHub
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={btnBase}>
            <FaLinkedinIn className="h-4 w-4" />
            LinkedIn
          </a>
          <a href={siteConfig.leetcode} target="_blank" rel="noopener noreferrer" className={btnBase}>
            <SiLeetcode className="h-4 w-4" />
            LeetCode
          </a>
          <a href={siteConfig.resumePath} download className={btnBase}>
            <HiArrowDownTray className="h-4 w-4" />
            Resume
          </a>
        </motion.div>

        <motion.div
          className="mt-20 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link href="/projects" className="inline-flex items-center gap-2 hover:text-[var(--accent)]">
            Explore my work
            <span aria-hidden className="text-[var(--accent)]">
              ↓
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
