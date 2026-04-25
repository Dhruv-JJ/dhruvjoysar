"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
        <Badge>Contact</Badge>
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
        Get in Touch
      </h2>

      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Want to chat? Feel free to reach out via{" "}
        <a
          href="mailto:dhruvjoysar@gmail.com"
          className="text-blue-500 hover:underline transition-colors"
        >
          email
        </a>{" "}
        or connect with me on{" "}
        <a
          href="https://linkedin.com/in/dhruvjoysar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline transition-colors"
        >
          LinkedIn
        </a>
        . I'm always open to discussing new projects and opportunities.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Book a call
      </motion.button>
    </motion.section>
  );
}
