"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .319.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export function FloatingDock() {
  const dockItems: Array<{
    icon: any;
    href: string;
    label: string;
    target?: string;
  }> = [
    {
      icon: GithubIcon,
      href: "https://github.com/Dhruv-JJ",
      label: "GitHub",
      target: "_blank",
    },
    {
      icon: LinkedInIcon,
      href: "https://linkedin.com/in/dhruvjoysar",
      label: "LinkedIn",
      target: "_blank",
    },
    {
      icon: Mail,
      href: "mailto:dhruvjoysar@gmail.com",
      label: "Email",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass flex items-center gap-1 px-4 py-3 rounded-full shadow-lg shadow-black/20">
        {dockItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={item.target}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            title={item.label}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-full hover:bg-[var(--accent-glow)] transition-all duration-200 text-[var(--muted-foreground)] hover:text-[var(--accent-light)]"
          >
            <item.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
