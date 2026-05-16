"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { clsx } from "clsx";
import { Code2 } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" }
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 90], ["rgba(255,255,255,0)", "rgba(255,255,255,0.82)"]);
  const borderColor = useTransform(scrollY, [0, 90], ["rgba(148,163,184,0)", "rgba(148,163,184,0.22)"]);

  return (
    <motion.header
      style={{ background, borderColor }}
      className="fixed inset-x-0 top-0 z-50 border-b px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white shadow-glow transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="font-brand text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">Web App Club</span>
        </Link>

        <div className="flex items-center rounded-full border border-slate-200 bg-white/75 p-1 shadow-sm backdrop-blur">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition duration-300 sm:px-5",
                  active ? "text-white" : "text-slate-600 hover:text-slate-950"
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-slate-950"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
