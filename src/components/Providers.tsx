"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Lang } from "@/content";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (v: { fr: string; en: string }) => string;
  dark: boolean;
  toggleDark: () => void;
};

const AppContext = createContext<Ctx | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  const [dark, setDark] = useState(false);

  // Sync with the theme/lang chosen before hydration (inline script + localStorage).
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "fr" || saved === "en") setLangState(saved);
    } catch {}
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }, []);

  const toggleDark = useCallback(() => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {}
      return next;
    });
  }, []);

  const t = useCallback((v: { fr: string; en: string }) => v[lang], [lang]);

  return <AppContext.Provider value={{ lang, setLang, t, dark, toggleDark }}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside Providers");
  return ctx;
}
