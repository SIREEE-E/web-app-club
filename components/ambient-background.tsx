"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white">
      <motion.div
        className="absolute inset-0 bg-grid-white bg-[size:56px_56px] opacity-[0.75]"
        animate={{ opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.14),transparent_66%)]" />
      <motion.div
        className="absolute -left-1/4 top-1/4 h-[34rem] w-[150%] rotate-[-8deg] bg-[linear-gradient(90deg,transparent,rgba(20,184,166,0.08),rgba(37,99,235,0.08),transparent)] blur-3xl"
        animate={{ x: ["-8%", "8%", "-8%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="noise absolute inset-0 opacity-[0.025]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2),rgba(255,255,255,0.88)_72%,#ffffff)]" />
    </div>
  );
}
