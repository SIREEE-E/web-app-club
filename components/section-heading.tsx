import { AnimatedSection } from "@/components/animated-section";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <AnimatedSection className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">{eyebrow}</p>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-slate-950 text-balance sm:text-6xl">
        {title}
      </h2>
      <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </AnimatedSection>
  );
}
