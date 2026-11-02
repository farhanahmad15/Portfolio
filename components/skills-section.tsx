"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2 } from "lucide-react";
import { SKILLS_DATA, PORTFOLIO_COLORS } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-card/40 border-y border-border overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: `${PORTFOLIO_COLORS.accentCrimson}0A` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-md text-primary mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Capabilities & Tools
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-bungee tracking-tight mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground font-sans text-sm sm:text-base leading-relaxed">
            Building full-stack web products with modern frameworks, robust APIs, AI integrations, and high-performance user interfaces.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
        >
          {SKILLS_DATA.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group flex items-center gap-3 rounded-full border border-border bg-card/80 backdrop-blur-md px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wide text-foreground shadow-md hover:border-primary/60 hover:shadow-[0_0_20px_rgba(176,234,135,0.25)] transition-all duration-300"
              >
                <Icon
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: PORTFOLIO_COLORS.primaryGreen }}
                />
                <span>{skill.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
