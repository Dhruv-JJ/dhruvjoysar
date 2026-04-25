"use client";

import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  school: string;
  date: string;
  icon: string;
  cgpa?: string;
}

const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Electronics and Telecommunication (EXTC)",
    school: "SIES GST",
    date: "Expected 2027",
    icon: "🎓",
    cgpa: "8.29",
  },
];

export function EducationSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h2 className="text-2xl font-bold mb-8 text-foreground">Education</h2>
      <div className="space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0 text-xl">
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <strong className="text-foreground">{item.degree}</strong>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.school}</p>
              {item.cgpa && (
                <p className="text-sm text-muted-foreground mt-1">
                  CGPA: <span className="font-medium text-foreground">{item.cgpa}</span>
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
