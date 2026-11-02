"use client";

import React, { useState } from "react";
import { CinematicIntro } from "@/components/cinematic-intro";
import { Navbar } from "@/components/navbar";
import { HeroExperience } from "@/components/hero-experience";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ScheduleSection } from "@/components/schedule-section";
import { Footer } from "@/components/footer";
import { FloatingParticleEffect } from "@/components/immersive-effects";
import { ConsoleArt } from "@/components/console-art";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative overflow-x-hidden">
      <ConsoleArt />
      <FloatingParticleEffect />
      {!hasEntered && <CinematicIntro onEnter={() => setHasEntered(true)} />}

      {hasEntered && <Navbar />}
      <HeroExperience />
      <ProjectsSection />
      <SkillsSection />
      <ScheduleSection />
      <Footer />
    </main>
  );
}
