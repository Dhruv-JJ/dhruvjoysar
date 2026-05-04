"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .319.21.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

interface ProjectItem {
  name: string;
  description: string;
  tags?: string[];
  githubUrl?: string;   // TODO: ADD_GITHUB_LINK — fill in your GitHub repo URL
  deploymentUrl?: string; // TODO: ADD_DEPLOYMENT_LINK — fill in your live deployment URL
}

const projects: ProjectItem[] = [
  {
    name: "Cart Abandonment Using ML",
    description: "A system that predicts cart abandonment in e-commerce using ML.",
    tags: ["Machine Learning", "E-commerce"],
    githubUrl: "https://github.com/Dhruv-JJ/Cart_abandonment_using_ML",
    deploymentUrl: "https://cartabandonmentusingml.streamlit.app/",
  },
  {
    name: "Quantiml",
    description: "Automated spare-change micro-investing PWA prototype.",
    tags: ["Fintech", "PWA"],
    githubUrl: "https://github.com/Dhruv-JJ/Quantiml",
  },

  // TODO: ADD_NEW_PROJECT — Copy a block above and fill in details
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
      <h2 className="text-2xl font-bold mb-8 text-[var(--foreground)]">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card-glow p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-[var(--foreground)] mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-3">
                  {project.description}
                </p>
                {project.tags && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full border border-[var(--accent)]/20 text-[var(--accent-light)] bg-[var(--accent-glow)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View source on GitHub"
                    className="p-2 rounded-lg hover:bg-[var(--accent-glow)] text-[var(--muted-foreground)] hover:text-[var(--accent-light)] transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.deploymentUrl && (
                  <a
                    href={project.deploymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View live deployment"
                    className="p-2 rounded-lg hover:bg-[var(--accent-glow)] text-[var(--muted-foreground)] hover:text-[var(--accent-light)] transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
