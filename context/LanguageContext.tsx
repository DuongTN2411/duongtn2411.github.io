"use client";

import { createContext, useContext, useState, useMemo, ReactNode, useEffect } from "react";
import { translations, Lang } from "@/lib/translations";

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: (typeof translations)[Lang];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    if (stored === "vi" || stored === "en") setLang(stored);
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "vi" ? "en" : "vi";
    setLang(next);
    window.localStorage.setItem("lang", next);
  };

  const value = useMemo(
    () => ({ lang, toggleLang, t: translations[lang] }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
