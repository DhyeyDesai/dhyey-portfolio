"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50  backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
        <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
          <Image 
            src="/avatar.png" 
            alt="Dhyey Logo" 
            width={50} 
            height={50} 
            className="rounded-full"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-background border-b border-white/10 overflow-hidden"
        >
          <div className="flex flex-col items-center gap-4 py-6">
            <NavLink href="#about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink href="#skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
            <NavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-400 hover:text-white font-serif italic text-lg transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
    </a>
  );
}
