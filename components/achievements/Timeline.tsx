"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { siteConfig } from "@/lib/site-config";

const entries = [
  {
    title: "LeetCode",
    body: "Solved 180+ problems — consistent practice in algorithms and data structures.",
    action: { href: siteConfig.leetcode, label: "View profile", icon: SiLeetcode },
  },
  {
    title: "SNS GenAI Sprint Hackathon",
    body: "Winner — first place for an AI-driven solution built during the internal sprint.",
    action: {
      href: siteConfig.hackathonArticle,
      label: "Hackathon article",
      icon: FaLinkedinIn,
    },
  },
  {
    title: "Software Developer Intern",
    body: "Yuga Yathra Retail OPC Pvt Ltd — AI-powered automation and full-stack contributions.",
    action: null,
  },
] as const;

export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div
        className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)] via-white/20 to-transparent sm:left-[15px]"
        aria-hidden
      />
      <ul className="space-y-10">
        {entries.map((item, i) => {
          const ActionIcon = item.action?.icon;
          return (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative pl-10 sm:pl-12"
            >
              <span
                className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--accent)] bg-black sm:left-1"
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
              {item.action && ActionIcon && (
                <a
                  href={item.action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg py-1 font-mono text-xs uppercase tracking-wider text-[var(--accent)] active:bg-[var(--accent-dim)] hover:underline"
                >
                  <ActionIcon className="h-4 w-4" />
                  {item.action.label}
                </a>
              )}
            </motion.li>
          );
        })}
      </ul>

      <motion.div
        className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <a
          href={siteConfig.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-wider text-white hover:border-[var(--accent)]"
        >
          <SiLeetcode className="h-4 w-4 text-[var(--accent)]" />
          LeetCode
        </a>
        <a
          href={siteConfig.hackathonArticle}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-white active:bg-white/5 sm:w-auto sm:justify-start hover:border-[var(--accent)]"
        >
          <FaLinkedinIn className="h-4 w-4 text-[var(--accent)]" />
          Hackathon article
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[var(--accent)]/50 bg-[var(--accent-dim)] px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-[var(--accent)] active:bg-[var(--accent)]/20 sm:w-auto sm:justify-start"
        >
          Get in touch
        </Link>
      </motion.div>
    </div>
  );
}
