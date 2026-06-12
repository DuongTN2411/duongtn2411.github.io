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

const icons = [
  <path key="0" d="M3 5h18v14H3V5zM3 9h18M8 13h8M8 16h5" />,
  <path key="1" d="M12 3l4 6H8l4-6zM8 9h8l-2 12h-4L8 9z" />,
  <path key="2" d="M4 4h16v16H4V4zM4 9h16M9 13l3 2-3 2v-4z" />,
  <path key="3" d="M14 7a3 3 0 10-4 4l-6 6 2 2 6-6a3 3 0 004-4l3-3-2-2-3 3z" />,
  <path key="4" d="M6 6h4v4H6V6zM14 14h4v4h-4v-4zM10 8h4M10 8v4h4" />,
  <path key="5" d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.3.2.5.6.5 1V15h6v-.1c0-.4.2-.8.5-1A6 6 0 0012 3z" />,
];

export default function Services() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="py-10 px-6 border-t border-border scroll-mt-14">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-xl font-semibold tracking-tight mb-1"
        >
          {t.services.title}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-sm text-muted mb-6"
        >
          {t.services.subtitle}
        </motion.p>

        <motion.div
          key={lang}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {t.services.items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-lg border border-border bg-surface p-4 hover:border-accent/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                <svg
                  className="w-4 h-4 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[i]}
                </svg>
              </div>
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
