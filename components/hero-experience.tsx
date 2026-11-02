"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  Mail,
  Code2,
  Terminal,
  Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/github-icon";
import { Button } from "@/components/ui/button";
import { TextScramble } from "@/components/text-scramble";
import { PORTFOLIO_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type AvailabilityStatus = "limited" | "available" | "busy";

interface StatusOption {
  id: AvailabilityStatus;
  label: string;
  badgeLabel: string;
  dotColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
}

const STATUS_CONFIG: Record<AvailabilityStatus, StatusOption> = {
  limited: {
    id: "limited",
    label: "Limited Availability",
    badgeLabel: "Limited",
    dotColor: "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)]",
    badgeBg: "bg-red-500/10",
    badgeText: "text-red-400",
    badgeBorder: "border-red-500/30",
  },
  available: {
    id: "available",
    label: "Open For Projects",
    badgeLabel: "Available",
    dotColor: "bg-[#b0ea87] shadow-[0_0_10px_rgba(176,234,135,0.9)]",
    badgeBg: "bg-[#b0ea87]/10",
    badgeText: "text-[#b0ea87]",
    badgeBorder: "border-[#b0ea87]/30",
  },
  busy: {
    id: "busy",
    label: "Currently Busy",
    badgeLabel: "Busy",
    dotColor: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.9)]",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-400",
    badgeBorder: "border-amber-500/30",
  },
};

// Change this constant in code to update your site's availability status:
// Options: "limited" | "available" | "busy"
const CURRENT_AVAILABILITY: AvailabilityStatus = "limited";

export function HeroExperience() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const currentStatus = STATUS_CONFIG[CURRENT_AVAILABILITY];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 15,
        y: (e.clientY / innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-background text-foreground select-none pt-28 pb-20 px-6">
      {/* Dynamic Parallax Background Glows */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 rounded-full blur-[180px]" />
      </div>

      {/* Grid overlay with smooth bottom fade */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-overlay bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Developer Manifesto */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-border bg-card/60 backdrop-blur-xl shadow-md mb-6 text-primary">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase font-bold">
              Product-Focused Builder
            </span>
          </div>

          <p className="text-xs uppercase tracking-[0.6em] text-[#b0ea87] font-semibold mb-2">
            Software Engineer & Creator
          </p>

          <TextScramble
            text="FARHAN AHMAD"
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 font-bungee leading-[1.1] drop-shadow-sm text-foreground"
          />

          <p className="text-base sm:text-lg text-muted-foreground font-sans max-w-2xl leading-relaxed mb-8 font-normal">
            I&apos;m a <span style={{ color: PORTFOLIO_COLORS.primaryGreen, fontWeight: 600 }}>Philomath</span> and self-taught full-stack developer building practical, high-impact products — from micro-SaaS tools and AI agents to mobile applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 font-sans w-full sm:w-auto">
            <Button
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-9 py-6 rounded-full text-xs tracking-[0.25em] uppercase shadow-xl border border-border transition-all duration-300 group flex items-center justify-center gap-3 font-bungee hover:scale-105"
              onClick={() => {
                const el = document.getElementById("projects");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-border text-foreground hover:bg-accent/15 px-9 py-6 rounded-full text-xs tracking-[0.25em] uppercase font-bold bg-card/80 backdrop-blur-xl shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              onClick={() => {
                const el = document.getElementById("skills");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Explore Skills</span>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/farhanahmad15"
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub"
              className="rounded-full border border-border bg-card/60 p-3 transition hover:border-primary/60 hover:text-primary"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:thefarhan@duck.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email Me"
              className="rounded-full border border-border bg-card/60 p-3 transition hover:border-primary/60 hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Key Metrics & Status Card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl border border-border bg-card/80 backdrop-blur-2xl p-8 sm:p-10 shadow-2xl overflow-hidden">
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-muted-foreground font-semibold block mb-1">
                  Availability
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-bungee text-foreground flex items-center gap-2.5">
                  <span className={cn("h-3 w-3 rounded-full animate-pulse", currentStatus.dotColor)} />
                  <span>{currentStatus.label}</span>
                </h3>
              </div>
{/* 
              <div
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans font-semibold select-none",
                  currentStatus.badgeBg,
                  currentStatus.badgeText,
                  currentStatus.badgeBorder
                )}
              >
                <span className={cn("h-2 w-2 rounded-full", currentStatus.dotColor)} />
                <span>{currentStatus.badgeLabel}</span>
              </div> */}
            </div>

            <div className="space-y-6 font-sans">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/50 border border-border">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Hours Shipped
                    </p>
                    <p className="text-sm font-bold font-bungee text-foreground">
                      6,000+ Hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/50 border border-border">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Products Built
                    </p>
                    <p className="text-sm font-bold font-bungee text-foreground">
                      20+ Completed
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/50 border border-border">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Core Focus
                    </p>
                    <p className="text-sm font-bold font-bungee text-foreground">
                      MVP Velocity & UX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs font-sans text-muted-foreground">
              {/* <span>Location:</span> */}
              <span className="font-bungee text-primary font-bold text-[5px]">
                Hi :)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition blend gradient to smoothly mix into projects section */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none z-[5]" />
    </section>
  );
}

