"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Languages",
    color: "from-stone-700/8 to-stone-800/5",
    border: "border-stone-500/15",
    dot: "bg-stone-400/40",
    skills: ["TypeScript", "JavaScript", "Python"],
  },
  {
    label: "Frontend",
    color: "from-stone-700/8 to-stone-800/5",
    border: "border-yellow-700/12",
    dot: "bg-yellow-600/30",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    color: "from-stone-700/8 to-stone-800/5",
    border: "border-stone-500/15",
    dot: "bg-stone-400/40",
    skills: ["Node.js", "Express", "Fastify", "REST APIs", "Prisma"],
  },
  {
    label: "Databases",
    color: "from-stone-700/8 to-stone-800/5",
    border: "border-yellow-700/12",
    dot: "bg-yellow-600/30",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "Infrastructure & DevOps",
    color: "from-stone-700/8 to-stone-800/5",
    border: "border-stone-500/15",
    dot: "bg-stone-400/40",
    skills: ["AWS", "Docker", "RabbitMQ", "Linux", "Git"],
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className={`rounded-2xl bg-gradient-to-br ${category.color} border ${category.border} p-6 backdrop-blur-sm`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2 h-2 rounded-full ${category.dot}`} />
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  {category.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-200 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
