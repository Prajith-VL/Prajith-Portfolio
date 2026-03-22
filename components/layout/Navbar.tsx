"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-[60] w-full transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-black/60 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ paddingTop: "max(0px, env(safe-area-inset-top))" }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="min-h-11 min-w-0 shrink-0 py-2 font-mono text-xs font-semibold tracking-widest text-white sm:text-sm"
        >
          PRAJITH<span className="text-[var(--accent)]">.DEV</span>
        </Link>

        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-widest transition-colors hover:text-[var(--accent)] ${
                    active ? "text-[var(--accent)]" : "text-[var(--muted)]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX className="h-7 w-7" /> : <HiMenuAlt3 className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,18.5rem)] flex-col border-l border-white/10 bg-black/98 shadow-2xl backdrop-blur-xl md:hidden"
              style={{
                paddingTop: "max(4.5rem, calc(3.5rem + env(safe-area-inset-top)))",
                paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
              }}
            >
              <ul className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-3 pb-6">
                {links.map(({ href, label }) => {
                  const active = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`flex min-h-12 items-center rounded-lg px-4 font-mono text-sm uppercase tracking-widest ${
                          active
                            ? "bg-[var(--accent-dim)] text-[var(--accent)]"
                            : "text-[var(--muted)] active:bg-white/10 active:text-white"
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
