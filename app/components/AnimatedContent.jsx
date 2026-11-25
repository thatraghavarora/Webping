"use client";

import { motion, useReducedMotion } from "motion/react";

// One-time viewport reveal, adapted from the React Bits Animated Content pattern.
export default function AnimatedContent({ children, className }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reducedMotion ? 0 : 0.48, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
