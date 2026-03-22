"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
] as const;

/** Below header (60) so logo + menu button stay tappable and visible. */
const MENU_BACKDROP_Z = 58;
const MENU_PANEL_Z = 59;
const HEADER_LAYER = 60;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyTouch = body.style.touchAction;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyWidth = body.style.width;
    const scrollY = window.scrollY;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.touchAction = prevBodyTouch;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open && (
          <div key="mobile-menu-root" className="md:hidden">
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-[2px]"
              style={{ zIndex: MENU_BACKDROP_Z }}
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              id="mobile-nav-dialog"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 flex w-[min(100vw,20rem)] flex-col border-l border-white/15 bg-[#050505] shadow-2xl"
              style={{
                zIndex: MENU_PANEL_Z,
                top: "max(4.25rem, calc(3.25rem + env(safe-area-inset-top)))",
                bottom: 0,
                paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
              }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                  Menu
                </span>
                <button
                  type="button"
                  className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white active:bg-white/10"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <HiX className="h-7 w-7" />
                </button>
              </div>
              <nav className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-2 py-2">
                <ul className="flex flex-col gap-0.5">
                  {links.map(({ href, label }) => {
                    const active = pathname === href;
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={() => setOpen(false)}
                          className={`flex min-h-[3rem] items-center rounded-lg px-4 font-mono text-sm uppercase tracking-widest transition-colors ${
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
              </nav>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>,
      document.body
    );

  return (
    <>
      {mobileMenu}
      <header
        className={`fixed top-0 left-0 right-0 transition-[background-color,backdrop-filter,border-color] duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-black/70 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
        style={{
          zIndex: HEADER_LAYER,
          paddingTop: "max(0px, env(safe-area-inset-top))",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <Link
            href="/"
            className="min-h-11 min-w-0 shrink-0 py-2 font-mono text-xs font-semibold tracking-widest text-white sm:text-sm"
          >
            PRAJITH<span className="text-[var(--accent)]">.DEV</span>
          </Link>

          <ul className="hidden items-center gap-6 md:flex lg:gap-8">
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
            className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg text-white active:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav-dialog"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX className="h-7 w-7" /> : <HiMenuAlt3 className="h-7 w-7" />}
          </button>
        </div>
      </header>
    </>
  );
}
