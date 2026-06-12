"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export default function About() {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-10 px-6 border-t border-border scroll-mt-14">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-xl font-semibold tracking-tight mb-6"
        >
          {t.about.highlightsTitle}
        </motion.h2>

        <motion.div
          key={lang}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid sm:grid-cols-2 gap-4"
        >
          {t.about.highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={fadeUp}
              className="rounded-lg border border-border bg-surface p-4 hover:border-accent/40 transition-colors"
            >
              <h3 className="font-semibold text-sm mb-1">{h.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
