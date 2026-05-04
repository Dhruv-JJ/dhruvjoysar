"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">About</h2>
      <div className="border-l-2 border-[var(--accent)] pl-6">
        <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
          I'm a developer and EXTC student with a deep-rooted love for the
          intersection of{" "}
          <strong className="text-[var(--accent-light)]">AI and hardware</strong>. My
          journey involves working with{" "}
          <strong className="text-[var(--accent-light)]">Machine Learning, MLOps,</strong>{" "}
          and{" "}
          <strong className="text-[var(--accent-light)]">Verilog programming</strong>{" "}
          for FPGA design. I live for the energy of building practical
          prototypes—whether it's implementing hardware multipliers, designing
          privacy-first systems like Shadow AI, or building a fintech
          micro-investing PWA.
        </p>
      </div>
    </motion.section>
  );
}
