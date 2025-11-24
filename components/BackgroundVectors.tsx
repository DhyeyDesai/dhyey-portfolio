"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundVectors() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Abstract Gradient Blob 1 */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]"
      />

      {/* Abstract Gradient Blob 2 */}
      <motion.div
        style={{ y: y2, rotate: rotate }}
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[100px]"
      />

      {/* Geometric Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
