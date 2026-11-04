"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Menu, Moon, Sun, X } from "lucide-react";
import { useApp } from "./Providers";
import { links, ui } from "@/content";

const ids = ["about", "experience", "projects", "skills", "certifications", "education", "contact"] as const;

export function Nav() {
  const { t, lang, setLang, dark, toggleDark } = useApp();
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-semibold tracking-tight">
          Maha El Yamni<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {ids.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                  active === id ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {active === id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-md bg-surface-2" />
                )}
                {t(ui.nav[id])}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="rounded-md border border-border px-2.5 py-1.5 font-mono text-xs hover:bg-surface-2"
            aria-label="Changer de langue / Switch language"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border p-1.5 hover:bg-surface-2"
            aria-label="GitHub"
            title="github.com/maha-yam"
          >
            <Github size={16} />
          </a>
          <button
            onClick={toggleDark}
            className="rounded-md border border-border p-1.5 hover:bg-surface-2"
            aria-label="Thème clair ou sombre"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={links.cv}
            download
            className="hidden rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-text hover:opacity-90 sm:inline-block"
          >
            CV
          </a>
          <button className="rounded-md p-1.5 lg:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-bg px-4 lg:hidden"
          >
            {ids.map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-base">
                  {t(ui.nav[id])}
                </a>
              </li>
            ))}
            <li>
              <a href={links.cv} download className="block py-3 pb-4 font-medium text-accent">
                {t(ui.cv)}
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
