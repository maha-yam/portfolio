"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Award, Check, ChevronDown, Copy, Download, Github, Linkedin, Lock, Mail, MapPin, X } from "lucide-react";
import { useApp } from "./Providers";
import { Reveal, Section, Tag } from "./ui";
import {
  categories,
  certifications,
  education,
  experiences,
  leadership,
  links,
  projects,
  skills,
  ui,
  type Category,
  type Project,
} from "@/content";

export function About() {
  const { t, lang } = useApp();
  const facts = [
    { k: { fr: "Localisation", en: "Location" }, v: { fr: "Rabat, Maroc", en: "Rabat, Morocco" } },
    { k: { fr: "Disponibilité", en: "Availability" }, v: { fr: "Février 2027, 6 mois", en: "February 2027, 6 months" } },
    { k: ui.languages, v: ui.langList },
    { k: ui.interests, v: ui.interestList },
  ];
  return (
    <Section id="about" index="01" title={t(ui.sections.about)}>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted sm:text-xl">{t(ui.aboutText)}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {(lang === "fr"
              ? ["IA générative", "Systèmes multi-agents", "Deep learning", "NLP", "Vision par ordinateur", "Big Data & BI"]
              : ["Generative AI", "Multi-agent systems", "Deep learning", "NLP", "Computer vision", "Big Data & BI"]
            ).map((x) => (
              <span key={x} className="rounded-full bg-accent-soft px-3 py-1 text-sm text-accent">
                {x}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="divide-y divide-border rounded-2xl border border-border bg-surface">
            {facts.map((f, i) => (
              <div key={i} className="px-5 py-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">{t(f.k)}</dt>
                <dd className="mt-1 text-sm">{t(f.v)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

export function Experience() {
  const { t } = useApp();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="experience" index="02" title={t(ui.sections.experience)}>
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-10">
        {experiences.map((e, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={i * 0.08}>
              <li className="relative">
                <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[47px]" />
                <div className="rounded-2xl border border-border bg-surface transition hover:border-accent/50">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <p className="font-mono text-xs text-accent">{t(e.period)}</p>
                      <h3 className="mt-1 text-lg font-semibold leading-snug sm:text-xl">{t(e.title)}</h3>
                      <p className="mt-1 text-sm text-muted">{t(e.org)}</p>
                      <p className="mt-3 text-sm leading-relaxed sm:text-base">{t(e.summary)}</p>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`mt-1 shrink-0 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border px-5 pb-5 pt-4 sm:px-6">
                          <ul className="space-y-2">
                            {e.bullets.map((b, j) => (
                              <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted">
                                <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                                {t(b)}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {e.tags.map((tag) => (
                              <Tag key={tag}>{tag}</Tag>
                            ))}
                          </div>
                          <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted">
                            <Lock size={12} /> {t(ui.confidential)}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}

export function Projects() {
  const { t } = useApp();
  const [filter, setFilter] = useState<Category | "all">("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const list = useMemo(() => (filter === "all" ? projects : projects.filter((p) => p.category === filter)), [filter]);

  return (
    <Section id="projects" index="03" title={t(ui.sections.projects)}>
      <Reveal>
        <div className="mb-8 flex flex-wrap gap-2">
          {[{ id: "all" as const, label: ui.all }, ...categories].map((c) => {
            const count = c.id === "all" ? projects.length : projects.filter((p) => p.category === c.id).length;
            const on = filter === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`relative rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  on ? "border-accent text-accent-text" : "border-border text-muted hover:text-text"
                }`}
              >
                {on && <motion.span layoutId="filter-pill" className="absolute inset-0 -z-10 rounded-full bg-accent" />}
                {t(c.label)} <span className="font-mono text-xs opacity-70">{count}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.button
              layout
              key={p.slug}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelected(p)}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 text-left transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted">
                  {t(categories.find((c) => c.id === p.category)!.label)} · {p.year}
                </span>
                <ArrowUpRight size={18} className="text-muted transition group-hover:rotate-45 group-hover:text-accent" />
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{t(p.title)}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t(p.short)}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 4).map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              {p.featured && (
                <span className="mt-4 self-start rounded-full bg-accent-soft px-2.5 py-0.5 text-xs text-accent">
                  {t({ fr: "Projet phare", en: "Featured" })}
                </span>
              )}
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { t } = useApp();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t(project.title)}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-border bg-surface p-6 sm:rounded-3xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-accent">
                  {t(categories.find((c) => c.id === project.category)!.label)} · {project.year}
                </p>
                <h3 className="mt-1 text-2xl font-semibold leading-snug">{t(project.title)}</h3>
              </div>
              <button onClick={onClose} className="rounded-lg p-2 hover:bg-surface-2" aria-label={t(ui.close)}>
                <X size={20} />
              </button>
            </div>

            <div className="mt-6 space-y-5">
              {[
                { label: ui.problem, text: project.problem },
                { label: ui.approach, text: project.approach },
                { label: ui.results, text: project.results },
              ].map((b, i) => (
                <div key={i}>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">{t(b.label)}</p>
                  <p className="mt-1.5 leading-relaxed">{t(b.text)}</p>
                </div>
              ))}
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">{t(ui.stack)}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>

            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-text hover:opacity-90"
              >
                <Github size={16} /> {t(ui.code)}
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Skills() {
  const { t } = useApp();
  return (
    <Section id="skills" index="04" title={t(ui.sections.skills)}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-semibold">{t(s.title)}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <motion.span
                    key={it}
                    whileHover={{ y: -2 }}
                    className="cursor-default rounded-lg border border-border bg-bg px-2.5 py-1 text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {it}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  const { t } = useApp();
  return (
    <Section id="certifications" index="05" title={t(ui.sections.certifications)}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.05}>
            <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:border-accent/60">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-110">
                <Award size={20} />
              </span>
              <div>
                <p className="font-semibold leading-snug">{c.name}</p>
                <p className="mt-1.5 font-mono text-xs text-muted">
                  {c.year ? `${c.year} · ` : ""}
                  {t(c.tag)}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  const { t } = useApp();
  return (
    <Section id="education" index="06" title={t(ui.sections.education)}>
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
            {t({ fr: "Formation", en: "Education" })}
          </h3>
          <ol className="space-y-3">
            {education.map((e, i) => (
              <li key={i} className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-mono text-xs text-accent">{e.period}</p>
                <p className="mt-1 font-semibold leading-snug">{t(e.title)}</p>
                <p className="mt-1 text-sm text-muted">{t(e.place)}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
            {t({ fr: "Engagement associatif & gestion de projets", en: "Leadership & project management" })}
          </h3>
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/images/maha-enactus.jpg"
                alt={t({ fr: "Maha El Yamni lors d'un événement associatif", en: "Maha El Yamni at a student event" })}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-[50%_35%] transition duration-700 hover:scale-105"
              />
            </div>
            <div className="divide-y divide-border">
              {leadership.map((l, i) => (
                <div key={i} className="p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-semibold">{t(l.title)}</p>
                    <p className="font-mono text-xs text-muted">{l.period}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-accent">{t(l.role)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t(l.text)}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Contact() {
  const { t } = useApp();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };
  return (
    <Section id="contact" index="07" title={t(ui.sections.contact)}>
      <Reveal>
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{t(ui.contactText)}</p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={14} /> {t({ fr: "Rabat, Maroc", en: "Rabat, Morocco" })}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-text hover:opacity-90"
            >
              <Mail size={16} /> {links.email}
            </a>
            <button
              onClick={copy}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium hover:border-accent"
            >
              {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              {copied ? t(ui.copied) : t(ui.copy)}
            </button>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium hover:border-accent"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium hover:border-accent"
            >
              <Github size={16} /> github.com/maha-yam
            </a>
            <a
              href={links.cv}
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium hover:border-accent"
            >
              <Download size={16} /> {t(ui.cv)}
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  const { t } = useApp();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          {t(ui.footer)} · {new Date().getFullYear()}
        </p>
        <a href="#top" className="hover:text-text">
          {t({ fr: "Retour en haut", en: "Back to top" })}
        </a>
      </div>
    </footer>
  );
}
