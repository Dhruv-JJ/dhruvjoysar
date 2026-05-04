"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-sm text-[var(--muted-foreground)] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
          Available for opportunities
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="gradient-text">Hi, I'm Dhruv</span>{" "}
          <span>👋</span>
        </h1>
        <p className="text-xl text-[var(--muted-foreground)] mb-8 leading-relaxed">
          Electronics & Telecommunication Engineer. I build scalable ML models,
          design FPGA hardware, and turn ideas into impactful systems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <div className="relative w-48 h-48 md:w-56 md:h-56">
          {/* Animated gradient ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent)] via-[var(--accent-light)] to-emerald-400 opacity-60 blur-xl animate-pulse" />
          <div className="relative w-full h-full rounded-full border-2 border-[var(--card-border)] bg-[var(--background)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-glow)] to-transparent" />
            <span className="relative text-6xl">💻</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
