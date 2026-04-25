"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export function GitHubActivitySection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-2xl font-bold mb-8 text-foreground">GitHub Activity</h2>
      <div className="border border-border rounded-xl p-4 overflow-x-auto">
        {mounted ? (
          <GitHubCalendar username="Dhruv-JJ" />
        ) : (
          <div className="h-48 bg-gray-100 dark:bg-gray-900 rounded-xl animate-pulse" />
        )}
      </div>
    </motion.section>
  );
}
