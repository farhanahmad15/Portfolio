"use client";

import { useState } from "react";
import { TextScramble } from "@/components/TextScramble";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { EasterEgg } from "@/components/EasterEgg";
import { ConsoleArt } from "@/components/ConsoleArt";
import { bungee } from "@/lib/font-config";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  Atom,
  Bot,
  Code2,
  Database,
  Github,
  Mail,
  Paintbrush,
  PenTool,
  Ship,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  type LucideIcon,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

type Skill = {
  label: string;
  icon: LucideIcon;
};

const skills: Skill[] = [
  { label: "Next.js", icon: Sparkles },
  { label: "React", icon: Atom },
  { label: "Node.js", icon: Server },
  { label: "TypeScript", icon: Code2 },
  { label: "PostgreSQL", icon: Database },
  { label: "MongoDB", icon: Database },
  { label: "Docker", icon: Ship },
  { label: "Tailwind CSS", icon: Paintbrush },
  { label: "Framer Motion", icon: Activity },
  { label: "API Design", icon: Terminal },
  { label: "Auth & Security", icon: ShieldCheck },
  { label: "AI Agents", icon: Bot },
  { label: "Product UX", icon: PenTool },
];

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Independent",
    period: "2022 - Present",
    summary:
      "Building micro-SaaS products, AI tools, and responsive web experiences with a focus on speed and clarity.",
  },
  {
    role: "Product Engineer",
    company: "Client Projects",
    period: "2021 - Present",
    summary:
      "Shipping lean MVPs, designing data flows, and refining UI systems for ambitious founders.",
  },
];

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <ConsoleArt />
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#040901]/80 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl px-6 py-2 sm:py-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            <div className="flex items-center justify-between sm:justify-start sm:gap-4">
              <Link
                href="#hero"
                className={`${bungee.className} text-sm uppercase tracking-[0.4em] text-[#ebfae4]`}
              >
                Farhan Ahmad
              </Link>
              <button
                type="button"
                className="rounded-full border border-white/10 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[#ebfae4]/70 transition hover:border-[#b0ea87]/60 hover:text-[#b0ea87] sm:hidden"
                aria-expanded={isNavOpen}
                aria-controls="site-nav"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                Menu
              </button>
            </div>
            <nav
              id="site-nav"
              className={`grid grid-cols-2 gap-2 overflow-hidden text-[9px] uppercase tracking-[0.2em] text-[#ebfae4]/70 transition-[max-height,opacity] duration-300 ease-out sm:flex sm:items-center sm:justify-center sm:gap-4 sm:overflow-visible sm:text-xs sm:tracking-[0.3em] ${
                isNavOpen
                  ? "max-h-48 opacity-100"
                  : "pointer-events-none max-h-0 opacity-0"
              } sm:pointer-events-auto sm:max-h-none sm:opacity-100`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-full whitespace-nowrap rounded-full border border-white/10 px-2.5 py-1.5 text-center leading-none transition hover:border-[#b0ea87]/60 hover:text-[#b0ea87]"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:thefarhan@duck.com"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 inline-flex w-full items-center justify-center rounded-full border border-[#b0ea87]/50 px-3 py-1.5 text-center text-[9px] uppercase tracking-[0.2em] text-[#b0ea87] transition hover:bg-[#b0ea87] hover:text-[#040901] sm:hidden"
              >
                Let&apos;s Talk ↗
              </a>
            </nav>
            <a
              href="mailto:thefarhan@duck.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center justify-center rounded-full border border-[#b0ea87]/50 px-4 py-2 text-center text-xs uppercase tracking-[0.25em] text-[#b0ea87] transition hover:bg-[#b0ea87] hover:text-[#040901] sm:inline-flex"
            >
              Let&apos;s Talk ↗
            </a>
          </div>
        </div>
      </header>

      <main className="relative min-h-screen w-full overflow-hidden">
        <section
          id="hero"
          className="relative flex min-h-screen items-center justify-center px-6 py-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 top-24 h-52 w-52 rounded-full border border-[#b0ea87]/25" />
            <div className="absolute left-10 bottom-16 h-32 w-32 rotate-12 rounded-3xl border border-[#7a1a95]/35" />
            <div className="absolute left-1/2 top-16 h-6 w-40 -translate-x-1/2 rounded-full bg-[#dd3a51]/40 blur-2xl" />
          </div>

          <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <p className="text-xs uppercase tracking-[0.6em] text-[#b0ea87]">
              Product-Focused Builder
            </p>
            <TextScramble
              text="FARHAN AHMAD"
              className={`${bungee.className} mt-6 text-4xl uppercase tracking-[0.2em] text-[#ebfae4] sm:text-6xl`}
            />
            <motion.p
              className="mt-6 text-base leading-relaxed text-[#ebfae4]/80 sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              I&apos;m a <span className="text-[#b0ea87]">Philomath</span> and
              self-taught full-stack developer building practical, high-impact
              products — from micro-SaaS tools and AI agents to mobile apps.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                href="#projects"
                className="rounded-full bg-[#b0ea87] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#040901] transition hover:-translate-y-0.5"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#ebfae4] transition hover:border-[#b0ea87]/60 hover:text-[#b0ea87]"
              >
                Get in Touch
              </Link>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-[#ebfae4]/60">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#b0ea87]" />
                Limited availability
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#dd3a51]" />
                Remote friendly
              </span>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="https://github.com/farhanahmad15"
                target="_blank"
                rel="noopener noreferrer"
                title="View My GitHub Projects"
                className="rounded-full border border-white/10 p-3 transition hover:border-[#b0ea87]/60"
              >
                <Github className="h-5 w-5 text-[#ebfae4]" aria-hidden />
              </a>
              <a
                href="mailto:thefarhan@duck.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Email Me"
                className="rounded-full border border-white/10 p-3 transition hover:border-[#b0ea87]/60"
              >
                <Mail className="h-5 w-5 text-[#ebfae4]" aria-hidden />
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="relative py-24 sm:py-28">
          <div className="mx-auto w-full max-w-6xl px-6">
            <motion.div
              className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#7a1a95]">
                  About
                </p>
                <h2
                  className={`${bungee.className} mt-4 text-3xl font-normal text-[#ebfae4] sm:text-4xl`}
                >
                  Building bold, minimal, and reliable digital products.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-[#ebfae4]/75">
                  I focus on the intersection of clean UI, clear messaging, and
                  dependable engineering. My work blends structured front-end
                  systems with thoughtful back-end architecture to ship products
                  that feel fast, intentional, and polished.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  { label: "Hours shipped", value: "5,555+" },
                  { label: "Products built", value: "18+" },
                  { label: "Focused on", value: "MVP velocity" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-[#0b1308]/70 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#ebfae4]/50">
                      {item.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[#ebfae4]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <ProjectsGallery />

        <section id="skills" className="relative py-24 sm:py-28">
          <div className="mx-auto w-full max-w-6xl px-6">
            <motion.div
              className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#dd3a51]">
                  Skills
                </p>
                <h2
                  className={`${bungee.className} mt-4 text-3xl font-normal text-[#ebfae4] sm:text-4xl`}
                >
                  Tech stack with a product-first mindset.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-[#ebfae4]/75">
                  I build full-stack experiences with a focus on speed, clarity,
                  and reliability. Modern frameworks, crisp UI, and flexible
                  infrastructure keep projects shippable.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <span
                      key={skill.label}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0b1308]/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#ebfae4]/70"
                    >
                      <Icon className="h-4 w-4 text-[#b0ea87]" aria-hidden />
                      {skill.label}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="relative py-24 sm:py-28">
          <div className="mx-auto w-full max-w-6xl px-6">
            <motion.div
              className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#b0ea87]">
                  Experience
                </p>
                <h2
                  className={`${bungee.className} mt-4 text-3xl font-normal text-[#ebfae4] sm:text-4xl`}
                >
                  Shipping with intent, iteration, and momentum.
                </h2>
              </div>
              <div className="space-y-6">
                {experiences.map((item) => (
                  <div
                    key={item.role}
                    className="rounded-3xl border border-white/10 bg-[#0b1308]/70 p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-[#ebfae4]">
                        {item.role}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#ebfae4]/50">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#7a1a95]">
                      {item.company}
                    </p>
                    <p className="mt-4 text-sm text-[#ebfae4]/70">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="relative py-24 sm:py-28">
          <div className="mx-auto w-full max-w-5xl px-6">
            <motion.div
              className="rounded-3xl border border-white/10 bg-[#0b1308]/70 px-8 py-12 text-center sm:px-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-[#b0ea87]">
                Contact
              </p>
              <h2
                className={`${bungee.className} mt-4 text-3xl font-normal text-[#ebfae4] sm:text-4xl`}
              >
                Let&apos;s build something sharp.
              </h2>
              <p className="mt-4 text-base text-[#ebfae4]/75">
                Have an idea or a product you want to refine? I&apos;d love to
                hear about it.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:thefarhan@duck.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#b0ea87] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#040901] transition hover:-translate-y-0.5"
                >
                  thefarhan@duck.com
                </a>
                <a
                  href="https://github.com/farhanahmad15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#ebfae4] transition hover:border-[#b0ea87]/60 hover:text-[#b0ea87]"
                >
                  GitHub ↗
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <EasterEgg />
      </main>
    </>
  );
}
