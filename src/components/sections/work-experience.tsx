"use client";

import { motion } from "framer-motion";

interface WorkItem {
  role: string;
  company: string;
  date: string;
  description: string;
  icon: string;
}

const workExperience: WorkItem[] = [
  {
    role: "Growth Intern",
    company: "LitStudio",
    date: "Dec 2025 - March 2026",
    description:
      "Driving platform growth by connecting clients with professional photographers via online promotion and creating digital presence across platforms like Reddit.",
    icon: "📸",
  },
];

export function WorkExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-2xl font-bold mb-8 text-[var(--foreground)]">Work Experience</h2>
      <div className="space-y-4">
        {workExperience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card-glow flex gap-4 p-5"
          >
            <div className="w-12 h-12 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-glow)] flex items-center justify-center flex-shrink-0 text-xl">
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <strong className="text-[var(--foreground)]">{item.role}</strong>
                </div>
                <span className="text-sm text-[var(--muted-foreground)]">{item.date}</span>
              </div>
              <p className="text-sm text-[var(--accent-light)] mb-2 font-medium">{item.company}</p>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
