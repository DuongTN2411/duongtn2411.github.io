"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export default function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="py-10 px-6 border-t border-border scroll-mt-14">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-xl font-semibold tracking-tight mb-1"
        >
          {t.projects.title}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-sm text-muted mb-6"
        >
          {t.projects.subtitle}
        </motion.p>

        <motion.div
          key={lang}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project) => {
            const card = (
              <motion.div
                variants={fadeUp}
                className="group relative h-full flex flex-col rounded-lg border border-border bg-surface p-4 hover:border-accent/40 transition-colors"
              >
                <span className={`absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider rounded-full px-2 py-0.5 border ${
                  project.status === "deployed"
                    ? "text-[#27c93f] border-[#27c93f]/30 bg-[#27c93f]/10"
                    : "text-accent border-accent/30 bg-accent/10"
                }`}>
                  {project.status === "deployed" ? "Live" : "In progress"}
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold text-sm text-accent truncate">
                    {project.name}
                  </h3>
                </div>

                <p className="text-sm text-muted leading-relaxed flex-1 mb-4">
                  {project.description[lang]}
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-accent-2 border border-border rounded-full px-2 py-0.5">
                    {project.category[lang]}
                  </span>
                </div>
              </motion.div>
            );

            return project.url ? (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {card}
              </a>
            ) : (
              <div key={project.name} className="h-full">{card}</div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
