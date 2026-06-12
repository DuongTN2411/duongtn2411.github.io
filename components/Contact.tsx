"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { contactInfo } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function ContactField({
  label,
  value,
  href,
  actionLabel,
  actionHref,
}: {
  label: string;
  value: string;
  href: string;
  actionLabel: string;
  actionHref: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg border border-border bg-surface p-4">
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted mb-0.5">{label}</p>
        <a
          href={href}
          className="font-semibold text-sm hover:text-accent transition-colors break-all"
        >
          {value}
        </a>
      </div>
      <a
        href={actionHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs border border-border rounded-md px-3 py-1.5 text-muted hover:text-text hover:border-accent-2 transition-colors shrink-0 text-center"
      >
        {actionLabel}
      </a>
    </div>
  );
}

export default function Contact() {
  const { lang, t } = useLanguage();

  return (
    <section id="contact" className="py-10 px-6 border-t border-border scroll-mt-14">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-xl font-semibold tracking-tight mb-1"
        >
          {t.contact.title}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-sm text-muted mb-6 max-w-lg mx-auto"
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.div
          key={lang}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="max-w-lg mx-auto space-y-3 text-left"
        >
          <motion.div variants={fadeUp}>
            <ContactField
              label={t.contact.emailLabel}
              value={contactInfo.email}
              href={`mailto:${contactInfo.email}`}
              actionLabel="Email"
              actionHref={`mailto:${contactInfo.email}`}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <ContactField
              label={t.contact.phoneLabel}
              value={contactInfo.phone}
              href={`tel:${contactInfo.phoneRaw}`}
              actionLabel="Zalo"
              actionHref={`https://zalo.me/${contactInfo.phoneRaw}`}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <ContactField
              label={t.contact.phoneLabel2}
              value={contactInfo.phone2}
              href={`tel:${contactInfo.phoneRaw2}`}
              actionLabel="Gọi"
              actionHref={`tel:${contactInfo.phoneRaw2}`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
