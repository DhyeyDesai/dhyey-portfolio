"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-20 bg-background relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400">
            Have a project in mind or just want to say hi? I&apos;m open to
            building new stuff.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactLink
            href="mailto:21desaidhyey@gmail.com"
            icon={<Mail size={20} />}
            label="Email"
            sublabel="21desaidhyey@gmail.com"
            delay={0.1}
          />
          <ContactLink
            href="https://www.linkedin.com/in/desai-dhyey/"
            icon={<Linkedin size={20} />}
            label="LinkedIn"
            sublabel="/in/desai-dhyey"
            delay={0.2}
          />
          <ContactLink
            href="https://x.com/dhyeytwt"
            icon={<Twitter size={20} />}
            label="X (Twitter)"
            sublabel="@dhyeytwt"
            delay={0.3}
          />
          <ContactLink
            href="https://drive.google.com/file/d/1EoxoTRWv3iv2L9OvS_F6wTORk1abok2G"
            icon={<FileText size={20} />}
            label="Resume"
            sublabel="View PDF"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  sublabel,
  delay,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
    >
      <div className="p-3 rounded-full bg-white/5 text-gray-300 group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-white">{label}</h3>
        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
          {sublabel}
        </p>
      </div>
    </motion.a>
  );
}
