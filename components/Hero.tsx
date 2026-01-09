"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import SlatBackground from "./SlatBackground";
import { useEffect } from "react";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse values
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  // Parallax transforms for different elements
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const textX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const textY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to -0.5 to 0.5
      x.set(event.clientX / window.innerWidth - 0.5);
      y.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden bg-background perspective-1000">
      <SlatBackground />

      <div className="z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl transform-style-3d">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 backdrop-blur-sm">
            Ready to build something?
          </span>
        </motion.div>

        <motion.h1
          // style={{ x: textX, y: textY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.2,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 bg-clip-text text-transparent mb-6 drop-shadow-lg"
        >
          Hi, I am{" "}
          <span className="relative inline-block group">
            <span className="font-black italic bg-gradient-to-r from-amber-100 via-orange-100 to-amber-200 bg-clip-text text-transparent px-1">
              Dhyey.
            </span>
            <span className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/90 text-white text-base rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap backdrop-blur-sm border border-white/10 shadow-lg tracking-wide">
              Pronounced &apos;Dh-yay&apos;
              <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-black/90"></span>
            </span>
          </span>
        </motion.h1>

        {/* Tagline - Static */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="perspective-1000"
        >
          <div className="p-8 group transition-colors">
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-medium font-serif">
              I press buttons on a keyboard to solve problems and build stuff.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex gap-4 mt-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gray-200 text-black font-medium hover:bg-gray-300 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  );
}
