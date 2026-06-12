"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { contactInfo } from "@/lib/data";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="pt-20 pb-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl flex flex-col md:flex-row gap-8 items-start"
      >
        <img
          src={contactInfo.avatar}
          alt="Tran Nam Duong"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-border shrink-0"
        />

        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
            Trần Nam Dương
          </h1>
          <p className="text-lg text-muted mt-1">{t.hero.eyebrow}</p>
          <p className="text-sm text-muted mt-3 max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="text-sm bg-accent text-bg font-medium rounded-md px-4 py-2 hover:brightness-110 transition-all"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="text-sm border border-border rounded-md px-4 py-2 text-muted hover:text-text hover:border-accent transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
