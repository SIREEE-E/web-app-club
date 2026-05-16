import { ArrowRight } from "lucide-react";
import { AmbientBackground } from "@/components/ambient-background";
import { AnimatedSection } from "@/components/animated-section";
import { ButtonLink } from "@/components/button-link";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    icon: "code",
    title: "Modern Web Craft",
    description: "Learn production-ready patterns across Next.js, TypeScript, Tailwind CSS, APIs, databases, and deployment workflows."
  },
  {
    icon: "rocket",
    title: "Impactful Products",
    description: "Shape course projects into useful applications with clearer product thinking, better UX, and stronger engineering habits."
  },
  {
    icon: "users",
    title: "Peer Collaboration",
    description: "Connect juniors and seniors through project teams, code reviews, mentoring, demos, and focused build sessions."
  },
  {
    icon: "lightbulb",
    title: "Beyond Academics",
    description: "Turn promising student ideas into portfolios, research directions, startup experiments, and real community value."
  }
] as const;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AmbientBackground />

      <section className="relative flex min-h-screen items-center px-5 pb-20 pt-32 text-center sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <AnimatedSection className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
            <h1 className="mx-auto max-w-5xl font-display text-5xl font-semibold leading-[0.96] text-slate-950 text-balance sm:text-7xl lg:text-8xl">
              From Classroom Projects to Real-World Innovation.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Web App Club helps students continue developing their web application course projects into real-world products,
              research opportunities, and startup ideas through collaboration and innovation.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/projects" icon={ArrowRight}>
                Explore Projects
              </ButtonLink>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="about" className="relative px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeading
            eyebrow="About the club"
            title="A focused community for students who want to build with momentum."
            description="The club gives web application builders a place to learn, ship, refine, and grow ideas with people who care about craft and impact."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-28 sm:px-8 lg:px-12">
        <AnimatedSection className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Vision</p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-slate-950 text-balance sm:text-6xl">
            Helping student ideas grow beyond classroom grading into impactful real-world innovation.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            We believe the strongest projects deserve a second life: deeper research, cleaner interfaces,
            stronger engineering, and a path toward people who can actually use them.
          </p>
        </AnimatedSection>
      </section>

      <section className="relative px-5 pb-28 pt-10 sm:px-8 lg:px-12">
        <AnimatedSection className="mx-auto max-w-7xl rounded-lg border border-slate-200 bg-white/80 p-8 text-center shadow-soft-white backdrop-blur-xl sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Showcase</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-slate-950 text-balance sm:text-6xl">
            Explore the projects taking shape inside the club.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
            The showcase starts with placeholders today and becomes the living portfolio of builders, teams, and ideas tomorrow.
          </p>
          <div className="mt-9">
            <ButtonLink href="/projects" icon={ArrowRight}>
              View Projects
            </ButtonLink>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
