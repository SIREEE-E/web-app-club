"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const icons = {
  external: ExternalLink,
  github: Github
};

type ProjectAction = {
  label: string;
  href: string;
  icon: keyof typeof icons;
};

type ProjectCardProps = {
  name: string;
  team: string;
  description: string;
  actions: readonly ProjectAction[];
  delay?: number;
};

export function ProjectCard({ name, team, description, actions, delay = 0 }: ProjectCardProps) {
  return (
    <motion.article
      className="glass shine flex min-h-80 flex-col rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-8 flex items-center justify-between">
        <div className="h-12 w-12 rounded-lg border border-slate-200 bg-gradient-to-br from-blue-50 to-teal-50" />
        <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-500">
          Placeholder
        </span>
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{team}</p>
      <h2 className="mt-3 text-2xl font-semibold text-slate-950">{name}</h2>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{description}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {actions.map((action) => {
          const Icon = icons[action.icon];

          return (
            <Link
              key={action.label}
              href={action.href}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-950 hover:text-white"
            >
              <Icon className="h-4 w-4" />
              {action.label}
            </Link>
          );
        })}
      </div>
    </motion.article>
  );
}
