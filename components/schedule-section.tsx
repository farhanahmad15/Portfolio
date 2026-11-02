"use client";

import React, { useRef, useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  ArrowDown,
  Calendar,
  Code2,
  Sparkles,
  Terminal,
  Trophy,
  Rocket,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { PROJECTS_DATA, PORTFOLIO_COLORS } from "@/lib/constants";

type TimelineEvent = {
  time: string;
  title: string;
  location: string;
  club: string;
  desc: string;
  mood: string;
};

type TimelineChapter = {
  id: string;
  day: string;
  date: string;
  title: string;
  description: string;
  icon: typeof Rocket;
  events: TimelineEvent[];
};

const chapters: TimelineChapter[] = [
  {
    id: "chapter-1",
    day: "Phase 01",
    date: "Flagship Products",
    title: "Community & Live Platform MVPs",
    description:
      "Deploying interactive web applications with real users and active domain ecosystems.",
    icon: Rocket,
    events: [
      {
        time: "ccpac.vercel.app",
        title: "CCPAC — Chittagong College Physics & Astronomy Club",
        location: "Next.js • Tailwind CSS • Vercel",
        club: "Live Project",
        desc: "A student-driven community exploring the laws of nature, from quantum scales to galactic horizons.",
        mood: "Active Community",
      },
      {
        time: "autoinsight-app.vercel.app",
        title: "AutoInsight — AI Meeting & Media Analyzer",
        location: "Next.js • AI Speech/Text APIs • Tailwind",
        club: "Live SaaS",
        desc: "AI-powered meeting summary and actionable insights extractor to automate workflow documentation.",
        mood: "AI Utility",
      },
      {
        time: "momentum-fit.vercel.app",
        title: "Momentum — Fitness & Workout Planning",
        location: "React • Progressive Web App • Analytics",
        club: "Live App",
        desc: "Fitness tracking and habit formation suite designed for seamless session logging and progress analytics.",
        mood: "Health & Habit",
      },
    ],
  },
  {
    id: "chapter-2",
    day: "Phase 02",
    date: "Specialized Tools",
    title: "AI & Productivity Suite",
    description:
      "Crafting focused utilities for spaced repetition, lecture tracking, and autonomous intelligence.",
    icon: Terminal,
    events: [
      {
        time: "In Active Development",
        title: "Memora — Spaced Repetition Learning System",
        location: "FSRS Algorithm • Adaptive Quiz • React",
        club: "In Progress",
        desc: "Next-generation revision suite utilizing FSRS algorithms for optimized retention and active recall.",
        mood: "EdTech Innovation",
      },
      {
        time: "Autonomous Cognition",
        title: "Sivjar — Self-Directed Autonomous Intelligence",
        location: "AI Agent Orchestration • LLM Reasoning",
        club: "Internal Engine",
        desc: "Autonomous intelligence capable of independent cognition, adaptive reasoning, and domain execution.",
        mood: "Deep AI Engineering",
      },
      {
        time: "Productivity",
        title: "Brainwave, Cash & Stride",
        location: "Full-Stack Micro-Apps",
        club: "Utility Apps",
        desc: "Suite of single-purpose productivity applications covering lecture tracking, AI study assistance, and expense management.",
        mood: "Daily Utility",
      },
    ],
  },
];

function EventMoment({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 70, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative sm:ml-[9rem]"
    >
      <div className="relative rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/60 group-hover:shadow-[0_20px_70px_rgba(176,234,135,0.12)] sm:p-8">
        <div className="absolute -left-[1rem] top-8 h-3 w-3 rounded-full border-2 border-background bg-primary shadow-[0_0_0_3px_rgba(176,234,135,0.15),0_0_14px_rgba(176,234,135,0.7)] sm:-left-[4.1rem] sm:h-4 sm:w-4 sm:border-4" />
        <div className="absolute right-6 top-6 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:right-8 sm:top-8 sm:text-xs">
          {event.time}
        </div>
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-border/70 pb-5 pr-24 sm:pr-28">
          <div>
            <p className="mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              {event.club}
            </p>
            <h4 className="max-w-2xl font-bungee text-xl font-bold leading-tight text-foreground sm:text-2xl">
              {event.title}
            </h4>
          </div>
        </div>
        <p className="max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
          {event.desc}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 font-sans text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-2">
            <Code2 className="h-3.5 w-3.5 text-primary" /> {event.location}
          </span>
          <span className="inline-flex items-center gap-2 text-primary/80">
            <Sparkles className="h-3.5 w-3.5" /> {event.mood}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function ScheduleSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasFiredConfetti, setHasFiredConfetti] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 80%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const glowY = useTransform(progress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= 0.95 && !hasFiredConfetti) {
        setHasFiredConfetti(true);

        // Center burst
        confetti({
          particleCount: 75,
          spread: 100,
          origin: { y: 0.85 },
          colors: ["#b0ea87", "#7a1a95", "#dd3a51", "#ebfae4", "#ffffff"],
          disableForReducedMotion: true,
        });

        // Dual side cannons
        setTimeout(() => {
          confetti({
            particleCount: 40,
            angle: 60,
            spread: 60,
            origin: { x: 0.1, y: 0.8 },
            colors: ["#b0ea87", "#7a1a95", "#dd3a51"],
          });
          confetti({
            particleCount: 40,
            angle: 120,
            spread: 60,
            origin: { x: 0.9, y: 0.8 },
            colors: ["#b0ea87", "#7a1a95", "#dd3a51"],
          });
        }, 150);
      } else if (latest < 0.4 && hasFiredConfetti) {
        // Reset when user scrolls back up
        setHasFiredConfetti(false);
      }
    });

    return () => unsubscribe();
  }, [progress, hasFiredConfetti]);

  return (
    <section
      id="timeline"
      className="relative overflow-hidden border-y border-border bg-background px-5 py-32 sm:px-8 sm:py-44"
    >
      <motion.div
        style={{ top: glowY }}
        className="pointer-events-none absolute left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28 max-w-3xl"
        >
          <div className="mb-7 inline-flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.3em] text-primary">
            <Calendar className="h-4 w-4" /> The Project Timeline
          </div>
          <h2 className="font-bungee text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-7xl">
            Building with purpose.
            <span className="block font-sans font-light text-primary text-2xl sm:text-4xl mt-3">
              From concept to deployed products.
            </span>
          </h2>
          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore the key products, architecture choices, and tools engineered across various domains.
          </p>
          <div className="mt-10 flex items-center gap-4 font-sans text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
            <ArrowDown className="h-4 w-4 animate-bounce text-primary" /> Timeline Showcase
          </div>
        </motion.header>

        <div ref={containerRef} className="relative">
          <div className="absolute bottom-12 left-[5.35rem] top-0 hidden w-px bg-border sm:block" />
          <motion.div
            style={{ scaleY: progress, transformOrigin: "top" }}
            className="absolute bottom-12 left-[5.35rem] top-0 hidden w-[2px] bg-gradient-to-b from-primary via-accent to-primary shadow-[0_0_18px_rgba(176,234,135,0.8)] sm:block"
          />

          {chapters.map((chapter, chapterIndex) => {
            const ChapterIcon = chapter.icon;
            return (
              <div key={chapter.id} className="relative mb-36 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="mb-12 flex items-start gap-5 sm:mb-16 sm:gap-8"
                >
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/60 bg-background text-primary shadow-[0_0_30px_rgba(176,234,135,0.2)] sm:ml-[3.975rem]">
                    <ChapterIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-primary">
                      {chapter.day} / {chapter.date}
                    </p>
                    <h3 className="mt-3 font-bungee text-2xl font-bold text-foreground sm:text-4xl">
                      {chapter.title}
                    </h3>
                    <p className="mt-3 max-w-lg font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {chapter.description}
                    </p>
                  </div>
                </motion.div>
                <div className="space-y-6 sm:ml-0">
                  {chapter.events.map((event, index) => (
                    <EventMoment
                      key={event.title}
                      event={event}
                      index={index}
                    />
                  ))}
                </div>
                {chapterIndex === chapters.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="mt-24 flex flex-col items-center text-center"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary bg-primary/10 text-primary shadow-[0_0_45px_rgba(176,234,135,0.35)]">
                      <Trophy className="h-7 w-7" />
                    </div>
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-primary">
                      Continuous Engineering
                    </p>
                    <h3 className="mt-4 font-bungee text-2xl font-bold text-foreground sm:text-4xl">
                      Always Shipping Next.
                    </h3>
                    <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
                      Refining user experiences, performance metrics, and building high-impact tools.
                    </p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

