"use client";

import { useTheme } from "next-themes";
import {
  Moon,
  Sun,
  LucideIcon,
  X,
  Mail,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

export function FloatingDock() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      icon: Briefcase,
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

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 px-4 py-3 rounded-full bg-background/50 backdrop-blur-md border border-border">
        {dockItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={item.target}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            title={item.label}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors text-foreground"
          >
            <item.icon className="w-5 h-5" />
          </motion.a>
        ))}

        <div className="w-px h-6 bg-border mx-1" />

        <motion.button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full hover:bg-foreground/10 transition-colors text-foreground"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {resolvedTheme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
