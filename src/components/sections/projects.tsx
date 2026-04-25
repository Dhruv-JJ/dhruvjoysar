"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectItem {
  name: string;
  description: string;
  url?: string;
}

const projects: ProjectItem[] = [
  {
    name: "OrbitCore",
    description:
      "GaN-based processor architecture pitch for space data centers.",
  },
  {
    name: "Quantiml",
    description: "Automated spare-change micro-investing PWA prototype.",
  },
];

export function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-2xl font-bold mb-8 text-foreground">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start justify-between p-4 rounded-lg border border-border hover:border-foreground transition-colors"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 flex-shrink-0 text-foreground hover:text-muted-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
