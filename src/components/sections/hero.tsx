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
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
          Hi, I'm Dhruv 👋
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
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
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-border bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
          <span className="text-6xl">💻</span>
        </div>
      </motion.div>
    </section>
  );
}
