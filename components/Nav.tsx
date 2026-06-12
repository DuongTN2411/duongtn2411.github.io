"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const sections = [
  { id: "about", key: "about" as const },
  { id: "skills", key: "skills" as const },
  { id: "projects", key: "projects" as const },
  { id: "services", key: "services" as const },
  { id: "contact", key: "contact" as const },
];

export default function Nav() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/95 border-b border-border" : "bg-bg border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-4xl px-6 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="font-semibold text-sm tracking-tight flex items-center gap-2"
        >
          tnduz<span className="text-accent">.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm text-muted">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="hover:text-accent transition-colors"
            >
              {t.nav[s.key]}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="text-xs border border-border rounded-md px-2 py-1 hover:text-accent hover:border-accent transition-colors"
            aria-label="Switch language"
          >
            {lang === "vi" ? "EN" : "VI"}
          </button>
        </div>

        <button
          className="md:hidden text-sm text-muted hover:text-text"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            if (menu) menu.classList.toggle("hidden");
          }}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>

      <div id="mobile-menu" className="hidden md:hidden bg-bg border-t border-border px-6 py-4 flex flex-col gap-3 text-sm text-muted">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.add("hidden");
            }}
            className="hover:text-accent transition-colors"
          >
            {t.nav[s.key]}
          </a>
        ))}
        <button
          onClick={toggleLang}
          className="text-xs border border-border rounded-md px-2 py-1 w-fit hover:text-accent"
        >
          {lang === "vi" ? "English" : "Tiếng Việt"}
        </button>
      </div>
    </header>
  );
}
