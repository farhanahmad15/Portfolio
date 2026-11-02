"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Terminal, Code2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { PORTFOLIO_COLORS } from "@/lib/constants";

export function CinematicIntro({ onEnter }: { onEnter: () => void }) {
  // Cosmic phases: 'orbiting' -> 'merging' -> 'fused'
  const [phase, setPhase] = useState<"orbiting" | "merging" | "fused">(
    "orbiting",
  );
  const [step, setStep] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const tMerge = setTimeout(() => {
      setPhase("merging");
    }, 2600);

    const tFused = setTimeout(() => {
      setPhase("fused");
    }, 4200);

    const t1 = setTimeout(() => setStep(1), 4600);
    const t2 = setTimeout(() => setStep(2), 5000);
    const t3 = setTimeout(() => setStep(3), 5400);
    const t4 = setTimeout(() => setStep(4), 5700);

    return () => {
      clearTimeout(tMerge);
      clearTimeout(tFused);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleEnterRealm = () => {
    setFadingOut(true);
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-background text-foreground flex flex-col items-center justify-center p-6 sm:p-12 transition-all duration-700 overflow-hidden ${
        fadingOut
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Dynamic Binary Star Cosmic System & Collapsing Fusion Orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        {/* Soft atmospheric ambient glow */}
        <div className="absolute w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-primary/10 blur-[130px] transition-opacity duration-1000 opacity-70" />

        {/* Continuous uninterrupted spin container */}
        <div
          className={`absolute flex items-center justify-center pointer-events-none transition-opacity duration-700 ${
            phase === "fused" ? "opacity-0" : "opacity-100"
          }`}
          style={{
            animation: "spin 3s linear infinite",
          }}
        >
          {/* Yin-Yang swirling container */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] flex items-center justify-center">
            {/* Star 1 (Green/Lime) */}
            <div
              className="absolute flex items-center justify-center transition-all duration-[1600ms] ease-in-out z-20 dark:z-10"
              style={{
                transform:
                  phase === "orbiting"
                    ? "translate(-85px, -50px) rotate(-25deg) scale(1)"
                    : "translate(0px, 0px) rotate(180deg) scale(0.85)",
              }}
            >
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-[45%_55%_65%_35%/50%_60%_40%_50%] bg-gradient-to-tr from-emerald-600/80 via-lime-500/70 to-green-300/60 blur-[35px] sm:blur-[50px] transform rotate-12" />
              <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-[50%_65%_40%_60%/60%_40%_60%_40%] bg-[#b0ea87]/90 blur-[18px] shadow-[0_0_80px_rgba(176,234,135,1)]" />
              <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-100 shadow-[0_0_50px_rgba(235,250,228,1)]" />
            </div>

            {/* Star 2 (Purple/Violet) */}
            <div
              className="absolute flex items-center justify-center transition-all duration-[1600ms] ease-in-out z-10 dark:z-20"
              style={{
                transform:
                  phase === "orbiting"
                    ? "translate(85px, 50px) rotate(-25deg) scale(1)"
                    : "translate(0px, 0px) rotate(180deg) scale(0.85)",
              }}
            >
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-[65%_35%_45%_55%/40%_50%_50%_60%] bg-gradient-to-tr from-red-800/80 via-red-600/70 to-red-400/60 blur-[35px] sm:blur-[50px] transform -rotate-12" />
              <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-[40%_60%_50%_65%/60%_40%_60%_40%] bg-red-200 blur-[18px] shadow-[0_0_80px_rgba(122,26,149,1)]" />
              <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-100 shadow-[0_0_50px_rgba(243,217,255,1)]" />
            </div>
          </div>
        </div>

        {/* Merged Unified Orb */}
        <div
          className={`absolute flex items-center justify-center transition-all duration-1200 ease-out transform ${
            phase === "fused"
              ? "scale-100 opacity-100"
              : "scale-20 opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-tr from-primary/55 via-accent/45 to-primary/35 blur-[65px] sm:blur-[90px] animate-[pulse_3.5s_ease-in-out_infinite]" />
          <div className="absolute w-44 h-44 sm:w-72 sm:h-72 rounded-full bg-primary/45 blur-[30px] sm:blur-[45px] shadow-[0_0_90px_var(--primary)]" />
          <div className="absolute w-14 h-14 sm:w-24 sm:h-24 rounded-full bg-primary/70 blur-[10px] shadow-[0_0_70px_var(--primary)]" />
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top Bar Controls */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 flex flex-wrap items-center justify-end gap-2 sm:gap-4 z-20 font-sans max-w-[calc(100vw-2rem)]">
        <ThemeToggle />
        <button
          onClick={handleEnterRealm}
          className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-border bg-card/80 backdrop-blur-xl text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-foreground hover:bg-card hover:text-primary transition-all font-semibold shadow-lg shrink-0"
        >
          Skip Intro ⟶
        </button>
      </div>

      {/* Cinematic Intro Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center justify-center px-4 pt-12 sm:pt-16 pb-12 my-auto">
        <div className="w-full flex flex-col items-center justify-center transition-all duration-700 ease-out">
          <div
            className={`transition-all duration-700 ease-out transform ${
              step >= 1
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-95"
            }`}
          >
            <div
              className={`transition-all duration-700 ease-out transform mb-6 sm:mb-8 ${
                step >= 2
                  ? "opacity-100 translate-y-0 scale-100 animate-[pulse_1s_ease-in-out_1]"
                  : "opacity-0 translate-y-6 scale-125"
              }`}
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-2 sm:py-2.5 rounded-full border border-border bg-card/80 backdrop-blur-2xl text-primary tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[10px] sm:text-xs font-sans shadow-lg text-center max-w-full">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span className="truncate">Product-Focused Developer</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-6xl md:text-8xl font-bold font-bungee tracking-wide mb-4 sm:mb-6 text-foreground drop-shadow-md max-w-5xl mx-auto px-2">
              <span className="text-[#b0ea87]">FARHAN</span> AHMAD
            </h1>
          </div>

          <div
            className={`transition-all duration-700 ease-out transform mt-2 sm:mt-4 ${
              step >= 3
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
            }`}
          >
            <p className="text-[11px] sm:text-sm font-sans text-muted-foreground font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 sm:mb-8 px-4 leading-relaxed max-w-2xl mx-auto">
              Philomath • Full-Stack Developer • Micro-SaaS & AI Builder
            </p>
          </div>

          <div
            className={`transition-all duration-700 ease-out transform ${
              step >= 4
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-95 pointer-events-none"
            }`}
          >
            {/* <button
              onClick={handleEnterRealm}
              className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-5 sm:py-7 rounded-full font-bungee font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase text-xs sm:text-sm bg-primary text-primary-foreground shadow-2xl border border-border hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute -inset-[2px] rounded-full overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="absolute inset-[-100%] animate-[spin_1s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_70%,#ffffff_100%)]" />
              </span>
              <span className="relative z-10 flex items-center gap-3">
                <span>Explore Portfolio</span>
              </span>
            </button> */}
            <button
              onClick={handleEnterRealm}
              className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-5 sm:py-7 rounded-full font-bungee font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase text-xs sm:text-sm bg-primary text-primary-foreground shadow-2xl border border-border hover:scale-105 transition-all duration-300"
            >
              {/* Ring of light that travels around the edge */}
              <span className="border-beam opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="relative z-10 flex items-center gap-3">
                <span>Explore Portfolio</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-4 right-4 text-center z-10 text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.4em] uppercase font-sans text-muted-foreground font-medium px-2">
        Next.js • React • TypeScript • Node.js • AI Systems
      </div>
    </div>
  );
}

