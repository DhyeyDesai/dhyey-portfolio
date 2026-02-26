"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "URL Shortener",
    description:
      "Engineered a scalable URL shortener using Base62 encoding, Redis cache-aside caching (with negative cache TTLs), and fixed-window rate limiting. Decoupled analytics from the redirect path via an asynchronous Redis message queue and a batch-processing worker, incorporating IP hashing for privacy-compliant metrics.",
    tags: ["Node.js", "PostgreSQL", "Redis", "Next.js"],
    link: "https://dd-url-shortener.vercel.app/",
    github: "https://github.com/DhyeyDesai/url-shortener/",
  },
  {
    title: "Notification Service",
    description:
      "Async notification platform with a decoupled API-worker architecture using RabbitMQ for message queuing, exponential backoff retries with a DLQ, idempotency keys for exactly-once delivery, and optimistic locking for concurrent worker safety.",
    tags: ["Fastify", "PostgreSQL", "RabbitMQ", "Docker Compose"],
    link: "",
    github: "https://github.com/DhyeyDesai/notification-service",
  },
  {
    title: "Portfolio Website",
    description: "This very website!",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-20 bg-background relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Selected Work
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A collection of projects that showcase my passion for building clean
            and functional software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-white/10">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                {project.link && (
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
