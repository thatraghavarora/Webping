"use client";

import { motion, useReducedMotion } from "motion/react";

// One-time viewport reveal, adapted from the React Bits Animated Content pattern.
export default function AnimatedContent({ children, className, stablePreview = false }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      data-static-preview={stablePreview ? "" : undefined}
      initial={reducedMotion || stablePreview ? false : { y: 16 }}
      whileInView={stablePreview ? undefined : { y: 0 }}
      whileHover={stablePreview && !reducedMotion ? { y: -4 } : undefined}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reducedMotion ? 0 : 0.48, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
