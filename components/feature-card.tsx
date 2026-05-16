"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, UsersRound } from "lucide-react";

const icons = {
  code: Code2,
  rocket: Rocket,
  users: UsersRound,
  lightbulb: Lightbulb
};

type FeatureCardProps = {
  icon: keyof typeof icons;
  title: string;
  description: string;
  delay?: number;
};

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  const IconComponent = icons[Icon];

  return (
    <motion.article
      className="shine glass flex min-h-72 flex-col items-center rounded-lg p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white">
        <IconComponent className="h-5 w-5" />
      </div>
      <h3 className="mt-8 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </motion.article>
  );
}
