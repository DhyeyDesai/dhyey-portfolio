"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function SlatBackground() {
  const { scrollY } = useScroll();
  
  // Create 10 slats
  const slats = Array.from({ length: 10 });

  return (
    <div className="fixed inset-0 z-0 flex pointer-events-none">
      {slats.map((_, i) => (
        <Slat key={i} index={i} total={slats.length} scrollY={scrollY} />
      ))}
    </div>
  );
}

function Slat({ index, total, scrollY }: { index: number; total: number; scrollY: any }) {
  // Stagger // Rotate from 0 to 90 degrees based on scroll
  const rotation = useTransform(
    scrollY,
    [0, 500], // Adjust scroll range as needed
    [0, 90 + (index % 2 === 0 ? 5 : -5)] // Reduced variation for cleaner look
  );
  
  // Fade out completely as we scroll past the hero
  const opacity = useTransform(scrollY, [0, 300, 600], [0.4, 0.2, 0]);

  return (
    <motion.div
      style={{ 
        rotateY: rotation,
        opacity: opacity,
      }}
      className="h-full flex-1 bg-gradient-to-b from-white/5 via-white/10 to-white/5 border-r border-white/5 origin-left transform-style-3d transition-colors duration-300"
    />
  );
}
