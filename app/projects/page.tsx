"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";

const projects = [
  {
    name: "FormSense",
    madeBy: "Md. Iftekhar Munim",
    domain: "AI / Productivity / Data Analytics",
    description:
      "FormSense is an AI-powered form building and insight analysis platform designed to simplify survey creation, response collection, and intelligent data interpretation. Unlike traditional form platforms, FormSense integrates AI-driven workflows to automate form generation, improve survey quality, generate summaries, and transform raw responses into actionable insights within a single unified system.",
    scope:
      "FormSense demonstrates the future of AI-assisted data collection and intelligent survey automation. The platform has strong startup potential in business analytics, customer feedback systems, educational technology, market research, and enterprise productivity solutions. With scalable AI-driven workflows and automated insight generation, FormSense could evolve into a modern SaaS platform for organizations seeking faster and smarter decision-making tools.",
    liveLink: "https://formsense-frontend.onrender.com/",
    githubLink: "https://github.com/SIREEE-E/formsense-ai-app",
    accent: "from-zinc-950 via-zinc-700 to-zinc-300",
    glow: "bg-zinc-900/10",
    visualDomain: "Data Collection",
    metric: "1.8k",
    metricLabel: "Responses",
    signal: "AI summaries"
  },
  {
    name: "Online Healthcare & Support",
    madeBy: "Sajeed Ahmed Ghalib & Jakiya Annan Joly",
    domain: "Healthcare / HealthTech / Management Systems",
    description:
      "Online Healthcare & Support is a unified digital healthcare ecosystem that combines multiple healthcare-focused applications into one connected platform. The system includes solutions for blood donation services, healthcare management, pharmacy systems, AI-assisted healthcare tools, dental management, and electronic health records.",
    scope:
      "Online Healthcare & Support explores the potential of building a unified digital healthcare ecosystem through interconnected medical web applications. The platform demonstrates strong scalability in telemedicine, digital hospital infrastructure, healthcare workflow management, pharmacy systems, and patient-centered care solutions. Its modular architecture creates opportunities for future expansion into large-scale healthcare technology platforms and smart medical service systems.",
    liveLink: "http://sagacity.pythonanywhere.com/?authuser=6",
    githubLink: "https://github.com/BloodRiver/online-health-care-and-support?authuser=6",
    accent: "from-stone-950 via-neutral-600 to-zinc-200",
    glow: "bg-neutral-900/10",
    visualDomain: "Healthcare",
    metric: "12",
    metricLabel: "Modules",
    signal: "Care workflow"
  },
  {
    name: "LegalInfo BD",
    madeBy: "Aranya Mondal",
    domain: "LegalTech / Artificial Intelligence / Social Impact",
    description:
      "LegalInfo BD is an AI-powered legal information platform focused on Bangladesh Labour Law. Using Retrieval-Augmented Generation (RAG) technology, the system provides reliable labor law guidance in Bangla and English while generating responses with verified legal citations for workers and legal professionals.",
    scope:
      "LegalInfo BD demonstrates how AI-powered legal accessibility platforms can simplify complex labor law information for workers and legal professionals in Bangladesh. The project shows strong potential as a scalable LegalTech solution focused on multilingual legal assistance, public legal awareness, AI-assisted case support, and accessible digital legal services. With further development, the platform could evolve into a modern legal support ecosystem for underserved communities.",
    liveLink: "https://legal-info-bd-9q7f.vercel.app/?authuser=6",
    githubLink: "https://github.com/Aranya3004/legal_info_BD?authuser=6",
    accent: "from-black via-zinc-700 to-stone-200",
    glow: "bg-stone-900/10",
    visualDomain: "LegalTech",
    metric: "2",
    metricLabel: "Languages",
    signal: "Verified citations"
  },
  {
    name: "Smart Mushroom Farming",
    madeBy: "Mst. Shahida Araby Tisha",
    domain: "Agriculture / AgriTech / Smart Farming",
    description:
      "Smart Mushroom Farming is a digital farming support platform designed to help mushroom growers in Bangladesh through cultivation guidance, disease diagnosis assistance, weather-based recommendations, AI-powered farming support, and market insights. The platform simplifies mushroom farming for beginners while promoting sustainable and scalable agricultural practices.",
    scope:
      "The project demonstrates the future potential of smart agriculture platforms powered by digital advisory systems and AI-assisted farming support. With scalable agricultural guidance, crop monitoring, and farming analytics, the platform could evolve into a modern AgriTech solution focused on empowering small-scale farmers and improving sustainable food production.",
    liveLink: "https://tisha.infinityfree.me/home.html",
    githubLink: "https://github.com/s77tisha/MashroomFarming",
    accent: "from-zinc-950 via-neutral-600 to-stone-200",
    glow: "bg-stone-900/10",
    visualDomain: "Smart Farming",
    metric: "87%",
    metricLabel: "Humidity",
    signal: "Growth tracking"
  },
  {
    name: "Unimanage",
    madeBy: "Abu Hurairah",
    domain: "Education / SaaS / Campus Management",
    description:
      "Unimanage is a multi-tenant SaaS educational ERP and AI-powered peer tutoring platform designed to improve academic management and student collaboration within universities. The system combines academic tools, tutoring services, lost-and-found management, and centralized campus workflows into one connected educational ecosystem.",
    scope:
      "The platform demonstrates strong startup potential as a scalable educational SaaS solution for universities and institutions seeking smarter campus management systems. With modular academic infrastructure and AI-assisted student services, Unimanage could evolve into a complete digital campus ecosystem for modern educational institutions.",
    liveLink: "https://uni-manage-eta.vercel.app/",
    githubLink: "https://github.com/Abu-Hurairah-Rifat/UniManage",
    accent: "from-black via-zinc-600 to-neutral-200",
    glow: "bg-zinc-900/10",
    visualDomain: "Campus SaaS",
    metric: "4",
    metricLabel: "Workflows",
    signal: "Tutoring activity"
  },
  {
    name: "BloodLink BD",
    madeBy: "Lianna Akter Liya",
    domain: "Healthcare / Emergency Services / Social Impact",
    description:
      "BloodLink BD is a blood donation management platform designed to connect blood donors and recipients during emergencies through GPS-based donor discovery, donor verification systems, and intelligent blood matching features. The platform focuses on reducing emergency response time and improving access to life-saving blood donation services.",
    scope:
      "The project demonstrates the potential of digital emergency response systems in improving healthcare accessibility and social impact services. With scalable donor networks, location-based matching, and emergency coordination tools, BloodLink BD could evolve into a nationwide healthcare support and emergency assistance platform.",
    liveLink: "https://bloodlink-bd-eta.vercel.app/",
    githubLink: "https://github.com/liannaliya/bloodlink-bd",
    accent: "from-zinc-950 via-stone-700 to-zinc-200",
    glow: "bg-neutral-900/10",
    visualDomain: "Emergency Care",
    metric: "24/7",
    metricLabel: "Response",
    signal: "Live blood requests"
  },
  {
    name: "AgriAssist",
    madeBy: "Ahnaf Tahmid Sarin",
    domain: "Agriculture / Advisory Systems / AgriTech",
    description:
      "AgriAssist is a web-based agricultural advisory and crop case management platform that connects farmers, agricultural officers, and experts through a centralized digital support system. The platform allows farmers to report crop issues, receive expert recommendations, and access agricultural guidance through modern web technologies.",
    scope:
      "The platform highlights the future of digital agricultural advisory systems and scalable farming support infrastructure. With expert coordination, crop analytics, and AI-assisted recommendations, AgriAssist has strong potential as a modern AgriTech platform focused on improving farming efficiency and rural agricultural accessibility.",
    liveLink: "https://agriassistbyahnaf.netlify.app/?authuser=6",
    githubLink: "https://github.com/awesomeahnaf/agriassist?authuser=6",
    accent: "from-black via-neutral-700 to-stone-300",
    glow: "bg-black/10",
    visualDomain: "Agri Advisory",
    metric: "63",
    metricLabel: "Crop Cases",
    signal: "Expert responses"
  },
  {
    name: "Matchmaking",
    madeBy: "Afrin Mahmud Tisha",
    domain: "Social Platform / Matching System / Community",
    description:
      "Matchmaking is a secure digital platform designed to modernize traditional partner searching through profile management, compatibility-based discovery, secure communication, and verification-driven interactions. The platform focuses on creating a safer and more organized matchmaking experience.",
    scope:
      "The project demonstrates how digital matchmaking systems can modernize traditional relationship discovery through scalable user management and intelligent matching workflows. With secure communication systems and compatibility-focused interactions, the platform could evolve into a modern social matching ecosystem.",
    liveLink: "https://matchmaking-webapp.netlify.app/",
    githubLink: "https://github.com/Afrin908/Matchmaking-WebApp-Project-CSE309.git",
    accent: "from-zinc-950 via-zinc-700 to-neutral-200",
    glow: "bg-zinc-800/10",
    visualDomain: "Social Matching",
    metric: "91%",
    metricLabel: "Match Fit",
    signal: "Profile activity"
  },
  {
    name: "Lost and Found",
    madeBy: "Rafid Mohammad Shafiq",
    domain: "Campus Utility / Management System / Community",
    description:
      "Lost and Found is a web-based management platform designed for educational institutions to help students and staff report, search, verify, and recover lost belongings through centralized reporting and item tracking systems.",
    scope:
      "The project demonstrates how simple digital utility systems can improve campus organization and community support services. With scalable reporting systems, QR-based recovery workflows, and centralized verification, the platform could evolve into a smart campus utility ecosystem for institutions and organizations.",
    liveLink: "https://webapp-project-henna.vercel.app/index.html?authuser=6",
    githubLink: "https://github.com/moldyb/webapp-project.git?authuser=6",
    accent: "from-black via-stone-600 to-zinc-200",
    glow: "bg-stone-950/10",
    visualDomain: "Campus Utility",
    metric: "38",
    metricLabel: "Tracked Items",
    signal: "QR verification"
  },
  {
    name: "IATRMS",
    madeBy: "Arif Faisal",
    domain: "Education / Talent Management / Collaboration",
    description:
      "IATRMS is an Integrated Academic Talent & Resource Management System designed to help universities manage student talent development, extracurricular activities, event participation, and collaborative communication between students, faculty, and administration.",
    scope:
      "The platform demonstrates the future potential of centralized talent and resource management systems within educational institutions. With scalable collaboration tools and student engagement workflows, IATRMS could evolve into a comprehensive academic networking and talent development platform.",
    liveLink: "https://69ec70da0f78a65902da48f8--magical-kulfi-20d352.netlify.app/",
    githubLink: "https://github.com/Arif90999/WebApp-cse-309-.git",
    accent: "from-zinc-950 via-neutral-700 to-zinc-300",
    glow: "bg-neutral-950/10",
    visualDomain: "Talent Network",
    metric: "128",
    metricLabel: "Profiles",
    signal: "Event participation"
  },
  {
    name: "IgnitED",
    madeBy: "Sunjoy Chandra Paul",
    domain: "EdTech / Learning Platform / AI Education",
    description:
      "IgnitED is an AI-assisted educational learning platform built for Cambridge and Pearson Edexcel students, providing syllabus-based practice systems, adaptive learning workflows, mock examinations, performance tracking, and personalized learning support.",
    scope:
      "The project highlights the growing demand for AI-powered personalized learning systems and scalable EdTech platforms. With adaptive academic workflows and intelligent performance tracking, IgnitED could evolve into a modern educational technology ecosystem for competitive and international education programs.",
    liveLink: "https://ignited-gamma.vercel.app/",
    githubLink: "https://github.com/sunjoyp6767/ignited",
    accent: "from-black via-zinc-600 to-stone-200",
    glow: "bg-zinc-900/10",
    visualDomain: "Adaptive Learning",
    metric: "86%",
    metricLabel: "Progress",
    signal: "Mock exam gains"
  },
  {
    name: "DSMS",
    madeBy: "Sulthana Tasnim Riza",
    domain: "Education / School Management / Administration",
    description:
      "DSMS is a role-based Digital School Management System designed to streamline school operations through attendance tracking, assignment management, examination workflows, classroom coordination, and multi-school administrative management.",
    scope:
      "The platform demonstrates the scalability of centralized digital school infrastructure for modern educational administration. With integrated academic workflows and administrative automation, DSMS could evolve into a complete school management ecosystem for institutions and educational authorities.",
    liveLink: "https://digital-schooling-system.vercel.app/",
    githubLink: "https://github.com/TasnimRiza/Web_Project-DSMS-Sulthana_Tasnim_Riza-2111329-Section-3.git",
    accent: "from-zinc-950 via-stone-700 to-neutral-200",
    glow: "bg-stone-900/10",
    visualDomain: "School Ops",
    metric: "96%",
    metricLabel: "Attendance",
    signal: "Exam workflows"
  },
  {
    name: "Ramadan App",
    madeBy: "Fahim Mahtab",
    domain: "Lifestyle / SpiritualTech / Productivity",
    description:
      "Ramadan App is a holistic spiritual companion platform designed to support users during Ramadan through prayer tracking, Quran reading progress, productivity monitoring, community engagement, and AI-assisted administrative tools.",
    scope:
      "The platform demonstrates how digital lifestyle and spirituality-focused applications can improve personal productivity, community engagement, and religious habit tracking through modern mobile experiences. With scalable engagement systems and personalized activity tracking, the project could evolve into a broader spiritual lifestyle ecosystem.",
    liveLink: "https://dashboardbot23123123.netlify.app/",
    githubLink: "https://github.com/Fahim-Mahtab/ramadan_planner",
    accent: "from-black via-neutral-600 to-zinc-300",
    glow: "bg-black/10",
    visualDomain: "SpiritualTech",
    metric: "30",
    metricLabel: "Day Plan",
    signal: "Quran progress"
  },
  {
    name: "VoiceScribe AI",
    madeBy: "Akhi Ketu Chakma",
    domain: "AI / Productivity / Speech Technology",
    description:
      "VoiceScribe AI is a browser-based AI speech-to-text platform that converts audio, video, and live speech into readable text through real-time transcription technologies. The application supports media uploads, live recording, language selection, transcript segmentation, downloadable outputs, and local transcript history while prioritizing privacy through browser-side AI processing.",
    scope:
      "The project demonstrates the growing potential of browser-native AI productivity tools powered by lightweight speech recognition systems. With scalable transcription workflows, multilingual processing, and privacy-focused local execution, VoiceScribe AI could evolve into a modern AI transcription platform for students, professionals, meetings, accessibility services, and digital content creation.",
    liveLink: "https://voicescribe-flax.vercel.app/",
    githubLink: "https://github.com/AkhiKetu/voiceScribe",
    accent: "from-zinc-950 via-neutral-700 to-zinc-200",
    glow: "bg-zinc-950/10",
    visualDomain: "Speech AI",
    metric: "Live",
    metricLabel: "Transcription",
    signal: "Waveform activity"
  },
  {
    name: "SkinCare AI",
    madeBy: "Mahanaj Alamgir",
    domain: "Healthcare / AI / Skin Analytics",
    description:
      "SkinCare AI is an AI-powered skin health tracking and healthcare support platform that allows users to monitor skin conditions through image-based analysis, personalized skincare routines, diet recommendations, doctor consultation systems, and visual progress tracking dashboards.",
    scope:
      "The platform demonstrates the future potential of AI-assisted preventive healthcare and digital dermatology systems. With scalable skin analysis workflows, personalized healthcare recommendations, and patient-doctor connectivity features, SkinCare AI could evolve into a modern digital skincare and telehealth ecosystem focused on accessible AI-driven healthcare support.",
    liveLink: "https://skin-care-ai.vercel.app/",
    githubLink: "https://github.com/meehuuu/SkinCareAi",
    accent: "from-black via-stone-600 to-neutral-200",
    glow: "bg-neutral-900/10",
    visualDomain: "Skin Analytics",
    metric: "92%",
    metricLabel: "Health Score",
    signal: "Care plan updates"
  },
  {
    name: "PersonaLearn",
    madeBy: "Atia Ibnat Mouni",
    domain: "EdTech / AI Learning / Personalization",
    description:
      "PersonaLearn is an AI-powered personalized adaptive learning platform designed to create customized educational experiences based on each student's goals, learning pace, interests, confidence level, and study preferences. The platform combines adaptive learning paths, AI-assisted tutoring, personalized study planning, and intelligent assessment workflows to improve learning outcomes through context-aware education systems.",
    scope:
      "The project highlights the future of AI-driven personalized education platforms and adaptive digital learning ecosystems. With scalable learner profiling, intelligent recommendation systems, and contextual tutoring support, PersonaLearn could evolve into a next-generation EdTech platform focused on personalized academic growth and adaptive online education.",
    liveLink: "https://persona-learn-def1ud9vc-atia002s-projects.vercel.app/",
    githubLink: "https://github.com/Atia002/PersonaLearn",
    accent: "from-zinc-950 via-zinc-600 to-stone-200",
    glow: "bg-stone-950/10",
    visualDomain: "Adaptive EdTech",
    metric: "AI",
    metricLabel: "Tutor Mode",
    signal: "Learning path tuned"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 }
};

export default function ProjectsPage() {
  const pageRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: pageRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  const heroY = useTransform(scrollYProgress, [0, 0.16], [0, -86]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0.25]);

  useEffect(() => {
    pageRef.current?.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <main ref={pageRef} className="relative h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth bg-[#fbfaf7] text-black">
      <motion.div
        className="fixed right-4 top-24 z-40 hidden h-[calc(100vh-8rem)] w-px origin-top bg-black md:block"
        style={{ scaleY }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.38]">
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "72px 72px"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)] bg-[size:72px_72px]"
        />
        <motion.div
          animate={{ opacity: [0.16, 0.25, 0.16] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="noise absolute inset-0"
        />
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white to-transparent" />
      </div>

      <header
        id="projects-hero"
        className="relative z-10 flex min-h-screen snap-start items-center overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
      >
        <motion.div
          aria-hidden
          animate={{ y: [0, -18, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[18%] h-32 w-32 rounded-full border border-black/10 bg-white/20 blur-sm"
        />
        <motion.div
          aria-hidden
          animate={{ y: [0, 22, 0], x: [0, 12, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[18%] right-[12%] h-44 w-44 rounded-full border border-black/10 bg-black/[0.025] blur-sm"
        />
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: heroY, opacity: heroOpacity }}
          className="mx-auto w-full max-w-7xl text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.15, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto h-px w-full max-w-5xl origin-center bg-black/10"
          />
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-black/50">Selected Projects</p>
          <div className="mx-auto mt-8 max-w-6xl">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-5xl font-display text-5xl font-semibold leading-[0.96] tracking-tight text-black sm:text-7xl lg:text-8xl"
            >
              Student innovation, presented like a digital exhibition.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-black/60 sm:text-lg"
            >
              Projects developed by IUB students during the Web Application & Internet (CSE309) course, Spring 2026.
            </motion.p>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.15, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-12 h-px w-full max-w-3xl origin-center bg-black/10"
          />
        </motion.div>
      </header>

      <div className="relative z-10">
        {projects.map((project, index) => (
          <section
            id={`project-${index + 1}`}
            key={project.name}
            className="relative min-h-screen snap-start border-t border-black/10 px-5 py-20 sm:px-8 lg:px-12"
          >
            {index === 0 && (
              <div className="pointer-events-none absolute inset-x-0 -top-28 h-56 bg-gradient-to-b from-transparent via-white/55 to-transparent" />
            )}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: index === 0 ? 0.24 : 0.35 }}
              transition={{ staggerChildren: 0.09 }}
              className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]"
            >
              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="lg:sticky lg:top-28"
              >
                <div className="flex items-center gap-4 text-sm font-medium text-black/45">
                  <span className="font-display text-4xl font-semibold text-black/20">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px w-20 bg-black/15" />
                </div>

                <div className="mt-8 inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black/55 shadow-sm backdrop-blur-xl">
                  {project.domain}
                </div>

                <h2 className="mt-8 max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-black sm:text-6xl lg:text-7xl">
                  {project.name}
                </h2>

                <p className="mt-7 max-w-2xl text-base leading-8 text-black/62">{project.description}</p>

                <div className="mt-8 border-l border-black/15 pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">Scope / Impact</p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-black/58">{project.scope}</p>
                </div>

                <div className="mt-8 flex flex-col gap-2 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-black/48">
                    Made by <span className="font-semibold text-black">{project.madeBy}</span>
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <ShowcaseButton href={project.githubLink} label="GitHub" icon="github" />
                    <ShowcaseButton href={project.liveLink} label="Live Demo" icon="external" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative min-h-[520px] overflow-hidden rounded-[2rem] border border-black/10 bg-white/55 p-4 shadow-[0_36px_120px_rgba(0,0,0,0.12)] backdrop-blur-2xl sm:min-h-[620px] sm:p-6"
              >
                <div className={`absolute -right-20 -top-24 h-80 w-80 rounded-full ${project.glow} blur-3xl transition duration-700 group-hover:scale-125`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,255,255,0.96),transparent_28rem),linear-gradient(135deg,rgba(255,255,255,0.76),rgba(245,245,244,0.42))]" />
                <div className="relative flex h-full min-h-[490px] flex-col overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#f7f6f2]/80 sm:min-h-[570px]">
                  <div className="flex items-center justify-between border-b border-black/10 bg-white/70 px-5 py-4 backdrop-blur-xl">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-black/12" />
                      <span className="h-2.5 w-2.5 rounded-full bg-black/8" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/35">Preview</span>
                  </div>

                  <div className="relative flex flex-1 items-center justify-center overflow-hidden p-5 sm:p-8">
                    <div className={`absolute inset-x-8 top-10 h-48 rounded-full bg-gradient-to-r ${project.accent} opacity-15 blur-3xl`} />
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.76),transparent)] opacity-0 transition duration-700 group-hover:opacity-100" />

                    <div className="relative w-full max-w-xl">
                      <div className="min-h-[430px] rounded-[1.4rem] border border-black/10 bg-white/72 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.14)] backdrop-blur-xl transition duration-500 group-hover:-translate-y-2 group-hover:rotate-1 sm:aspect-[16/10] sm:min-h-0">
                        <div className="h-full rounded-[1rem] border border-black/10 bg-gradient-to-br from-white via-zinc-100 to-zinc-300 p-5">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/35">Project Interface</p>
                              <h3 className="mt-3 font-display text-3xl font-semibold text-black">{project.name}</h3>
                            </div>
                            <ArrowUpRight className="h-7 w-7 text-black/30" />
                          </div>
                          <div className="mt-8 grid grid-cols-[1fr_0.8fr] gap-3">
                            <div className="rounded-2xl border border-black/10 bg-white/58 p-4 shadow-sm">
                              <div className="flex items-end justify-between">
                                <div>
                                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-black/35">
                                    {project.metricLabel}
                                  </p>
                                  <p className="mt-2 font-display text-3xl font-semibold text-black/80">{project.metric}</p>
                                </div>
                                <span className="h-2.5 w-2.5 rounded-full bg-black/55 shadow-[0_0_18px_rgba(0,0,0,0.28)]" />
                              </div>
                              <MiniBars />
                            </div>
                            <div className="grid gap-3">
                              <MetricPill label="Quality" value="94%" />
                              <MetricPill label="Signal" value="Live" />
                            </div>
                          </div>
                          <div className="mt-4 grid grid-cols-4 gap-2">
                            {[72, 48, 86, 61].map((height) => (
                              <span
                                key={height}
                                className="flex h-20 items-end rounded-2xl border border-black/8 bg-white/42 px-2 pb-2"
                              >
                                <span className="w-full rounded-full bg-black/15" style={{ height: `${height}%` }} />
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-black/45" />
                            <div className="h-2 flex-1 rounded-full bg-black/10" />
                            <div className="h-2 w-1/3 rounded-full bg-black/7" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute -bottom-10 -left-4 w-52 rounded-2xl border border-black/10 bg-white/80 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-500 group-hover:-translate-x-2 group-hover:translate-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">Impact</p>
                        <div className="mt-4 flex items-center gap-3">
                          <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-xs font-semibold text-white">
                            +{index + 3}
                          </span>
                          <div className="flex-1">
                            <div className="h-2 rounded-full bg-black/10" />
                            <div className="mt-2 h-2 w-2/3 rounded-full bg-black/10" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -right-3 -top-8 w-44 rounded-2xl border border-white/70 bg-black/85 p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition duration-500 group-hover:translate-x-2 group-hover:-translate-y-1">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/45">Domain</p>
                        <p className="mt-3 text-sm font-semibold leading-5">{project.visualDomain}</p>
                      </div>
                      <div className="absolute -right-6 bottom-12 w-48 rounded-2xl border border-black/10 bg-white/85 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-500 group-hover:translate-x-1 group-hover:translate-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">Activity</p>
                          <span className="h-2 w-2 rounded-full bg-black/55 shadow-[0_0_16px_rgba(0,0,0,0.35)]" />
                        </div>
                        <p className="mt-3 text-sm font-semibold text-black/75">{project.signal}</p>
                        <div className="mt-4 grid grid-cols-5 gap-1.5">
                          {[36, 62, 44, 78, 55].map((height) => (
                            <span key={height} className="flex h-10 items-end rounded-full bg-black/7 px-1">
                              <span className="w-full rounded-full bg-black/24" style={{ height: `${height}%` }} />
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </section>
        ))}
      </div>
    </main>
  );
}

function MiniBars() {
  return (
    <div className="mt-4 flex items-end gap-1.5">
      {[38, 52, 47, 70, 58, 82, 64].map((height) => (
        <span key={height} className="h-12 flex-1 rounded-full bg-black/7 p-1">
          <span className="block w-full rounded-full bg-black/22" style={{ height: `${height}%`, marginTop: `${100 - height}%` }} />
        </span>
      ))}
    </div>
  );
}

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/52 p-3 shadow-sm">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-black/34">{label}</p>
      <p className="mt-2 text-sm font-semibold text-black/72">{value}</p>
    </div>
  );
}

function ShowcaseButton({ href, label, icon }: { href: string; label: string; icon: "github" | "external" }) {
  const Icon = icon === "github" ? Github : ExternalLink;
  const isPlaceholder = href === "#";

  return (
    <a
      href={href}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noreferrer"}
      className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/72 px-5 text-sm font-semibold text-black shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-black/25 hover:bg-black hover:text-white"
      aria-disabled={isPlaceholder}
    >
      <Icon className="h-4 w-4 transition duration-300 group-hover:scale-110" />
      {label}
    </a>
  );
}
