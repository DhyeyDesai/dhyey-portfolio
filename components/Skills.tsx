"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Git", category: "Tools" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A curated list of technologies I use to build performant and scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1 cursor-default transition-colors"
            >
              <h3 className="font-medium text-gray-200">{skill.name}</h3>
              <span className="text-xs text-gray-500">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
