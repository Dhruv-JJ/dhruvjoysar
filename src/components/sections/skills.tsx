"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "Verilog",
  "C++",
  "Machine Learning",
  "Deep Learning",
  "MLOps",
  "Xilinx ISim",
  "Git",
  "Next.js",
  "Tailwind CSS",
];

export function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-2xl font-bold mb-8 text-[var(--foreground)]">Skills</h2>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, y: -2 }}
          >
            <span className="inline-flex items-center rounded-lg px-3.5 py-1.5 text-sm font-medium border border-[var(--accent)]/20 text-[var(--accent-light)] bg-[var(--accent-glow)] hover:border-[var(--accent)]/40 hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-200 cursor-default">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
