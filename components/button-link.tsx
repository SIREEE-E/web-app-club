import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { clsx } from "clsx";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  icon?: LucideIcon;
};

export function ButtonLink({ children, href, variant = "primary", icon: Icon }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300",
        "focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:ring-offset-2 focus:ring-offset-white",
        variant === "primary"
          ? "bg-slate-950 text-white shadow-glow hover:-translate-y-0.5 hover:bg-slate-800"
          : "border border-slate-200 bg-white/70 text-slate-800 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
      )}
    >
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" /> : null}
    </Link>
  );
}
