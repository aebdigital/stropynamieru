"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function HeroReveal({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  yOffset = 30 
}: HeroRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}

export const revealVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
