"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useApp } from "./Providers";
import { links, pipeline, stats, ui } from "@/content";

export function Hero() {
  const { t } = useApp();
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-4 pt-28 sm:px-6 md:pt-36">
      <div className="grid items-center gap-12 md:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t(ui.available)}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Maha El Yamni
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-xl font-medium text-accent sm:text-2xl"
          >
            {t(ui.role)}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {t(ui.heroText)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-text transition hover:-translate-y-0.5 hover:opacity-90"
            >
              {t(ui.seeProjects)} <ArrowDown size={16} />
            </a>
            <a
              href={links.cv}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-accent"
            >
              <Download size={16} /> {t(ui.cv)}
            </a>
            <div className="ml-1 flex items-center gap-1">
              <IconLink href={links.linkedin} label="LinkedIn"><Linkedin size={18} /></IconLink>
              <IconLink href={links.github} label="GitHub"><Github size={18} /></IconLink>
              <IconLink href={`mailto:${links.email}`} label="Email"><Mail size={18} /></IconLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 -z-10 rotate-3 rounded-3xl bg-accent-soft" />
          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-xl shadow-black/5">
            <Image
              src="/images/maha.jpg"
              alt="Maha El Yamni"
              width={960}
              height={1280}
              priority
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-surface px-4 py-3 shadow-lg shadow-black/5">
            <p className="font-mono text-xs text-muted">EMSI Rabat</p>
            <p className="text-sm font-semibold">IA & Data Science</p>
          </div>
        </motion.div>
      </div>

      <Pipeline />
      <Stats />
    </section>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="rounded-lg p-2.5 text-muted transition hover:bg-surface-2 hover:text-text"
    >
      {children}
    </a>
  );
}

function Pipeline() {
  const { t } = useApp();
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setStep((s) => (s + 1) % (pipeline.length + 1)), 1300);
    return () => clearInterval(id);
  }, [paused]);

  const progress = Math.min(step, pipeline.length - 1) / (pipeline.length - 1);

  return (
    <div
      className="mt-20 rounded-2xl border border-border bg-surface p-5 sm:p-7"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-medium">{t(ui.pipelineTitle)}</p>
        <p className="font-mono text-xs text-muted">LangGraph · RAG · Gemini</p>
      </div>

      <div className="relative">
        <div className="absolute left-[10%] right-[10%] top-5 hidden h-0.5 bg-border sm:block">
          <motion.div
            className="h-full origin-left bg-accent"
            animate={{ scaleX: progress }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </div>
        <ol className="relative grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-2">
          {pipeline.map((p, i) => {
            const on = i <= step && step < pipeline.length + 1;
            const current = i === step;
            return (
              <li key={i} className="flex items-center gap-3 sm:flex-col sm:text-center">
                <motion.button
                  type="button"
                  onClick={() => setStep(i)}
                  animate={{ scale: current ? 1.12 : 1 }}
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-mono text-sm transition-colors ${
                    on ? "border-accent bg-accent text-accent-text" : "border-border bg-surface text-muted"
                  }`}
                  aria-label={t(p)}
                >
                  {i + 1}
                </motion.button>
                <span className={`text-sm transition-colors ${on ? "text-text" : "text-muted"}`}>{t(p)}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

function Stats() {
  const { t } = useApp();
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
      {stats.map((s, i) => (
        <div key={i} className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
            <Counter value={s.value} suffix={s.suffix} />
          </p>
          <p className="mt-1 text-sm leading-snug text-muted">{t(s.label)}</p>
        </div>
      ))}
    </div>
  );
}
