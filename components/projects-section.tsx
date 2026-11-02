"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA, ProjectItem, PORTFOLIO_COLORS } from "@/lib/constants";

function getStatusConfig(status: ProjectItem["status"]) {
  switch (status) {
    case "live":
      return {
        label: "Live",
        buttonClass:
          "border-[#b0ea87]/60 bg-[#b0ea87] text-[#040901] hover:bg-[#c8f0a9]",
      };
    case "in-progress":
      return {
        label: "In Progress",
        buttonClass:
          "border-[#dd3a51]/50 text-[#dd3a51] bg-[#dd3a51]/10 hover:bg-[#dd3a51]/20",
      };
    case "in-use":
      return {
        label: "Locally Used",
        buttonClass:
          "border-[#7a1a95]/60 text-[#e5b8ff] bg-[#7a1a95]/20 hover:bg-[#7a1a95]/30",
      };
    case "archived":
      return {
        label: "Archived",
        buttonClass: "border-white/15 text-[#ebfae4]/50 bg-white/5",
      };
    default:
      return {
        label: "In Progress",
        buttonClass:
          "border-[#dd3a51]/50 text-[#dd3a51] bg-[#dd3a51]/10 hover:bg-[#dd3a51]/20",
      };
  }
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative pt-16 pb-28 px-6 bg-background overflow-hidden">
      {/* Top transition blend gradient */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none z-[5]" />

      {/* Ambient connection glow bridging Hero and Projects */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[160px] pointer-events-none opacity-50"
        style={{ backgroundColor: `${PORTFOLIO_COLORS.primaryGreen}12` }}
      />

      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: `${PORTFOLIO_COLORS.primaryGreen}08` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-md text-primary mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Selected Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-bungee tracking-tight mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground font-sans text-sm sm:text-base leading-relaxed">
            Focused on building lean, practical products with sharp UX and strong technical depth.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => {
            const isLive = project.status === "live";
            const isExternal = project.link.startsWith("http");
            const statusConfig = getStatusConfig(project.status);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group flex flex-col h-full rounded-3xl border border-border bg-card/80 p-5 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                {/* Project Image Banner */}
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border/80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-primary/40 bg-background/80 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-primary font-bold backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6 flex flex-1 flex-col gap-2">
                  <h3 className="text-xl font-bold uppercase tracking-[0.15em] text-foreground font-bungee group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-4 border-t border-border/60">
                  {isLive ? (
                    <a
                      href={project.link}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 ${statusConfig.buttonClass}`}
                      onClick={() => {}}
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] ${statusConfig.buttonClass}`}
                    >
                      {statusConfig.label}
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
