"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FloatingCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FloatingCard({ children, className, delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      className={`glass rounded-lg p-6 ${className ?? ""}`}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: [0, -12, 0], scale: 1 }}
      transition={{
        opacity: { duration: 0.7, delay },
        scale: { duration: 0.7, delay },
        y: { duration: 6, delay, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      {children}
    </motion.div>
  );
}
