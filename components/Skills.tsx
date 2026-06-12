"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { skillGroups } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

export default function Skills() {
  const { lang, t } = useLanguage();

  return (
    <section id="skills" className="py-10 px-6 border-t border-border scroll-mt-14">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-xl font-semibold tracking-tight mb-1"
        >
          {t.skills.title}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-sm text-muted mb-6"
        >
          {t.skills.subtitle}
        </motion.p>

        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.key}>
              <h3 className="text-xs text-accent-2 font-semibold uppercase tracking-wider mb-3">
                {t.skills.categories[group.key]}
              </h3>
              <motion.div
                key={lang}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={fadeUp}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-muted hover:text-text hover:border-accent/40 transition-colors"
                  >
                    <i className={`${skill.icon} text-base`} aria-hidden />
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
