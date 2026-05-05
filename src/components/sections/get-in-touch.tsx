"use client";

import { motion } from "framer-motion";

export function GetInTouchSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12 text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--accent-light)]">
          Contact
        </span>
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-[var(--foreground)]">
        Get in Touch
      </h2>

      <p className="text-lg text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto leading-relaxed">
        Want to chat? Feel free to reach out via{" "}
        <a
          href="mailto:joysardhruv@gmail.com"
          className="accent-link"
        >
          email
        </a>{" "}
        or connect with me on{" "}
        <a
          href="https://linkedin.com/in/dhruvjoysar"
          target="_blank"
          rel="noopener noreferrer"
          className="accent-link"
        >
          LinkedIn
        </a>
        . I'm always open to discussing new projects and opportunities.
      </p>

      <motion.a
        href="mailto:dhruvjoysar@gmail.com"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-8 py-3 bg-[var(--accent)] text-white rounded-lg font-semibold hover:bg-[var(--accent-light)] hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300"
      >
        Send an Email
      </motion.a>
    </motion.section>
  );
}
