"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  BookOpen,
  Atom,
  MessageSquare,
  Award,
  Users,
} from "lucide-react";

export function OrganizersSection() {
  const organizers = [
    {
      name: "Physics & Astronomy Club",
      subtitle: "Chittagong College",
      icon: <Atom className="w-8 h-8 text-primary" />,
      description:
        "Dedicated to unraveling the cosmos, exploring theoretical mechanics, and fostering astronomical passion among young minds across Bangladesh.",
      sigil: "🔭",
    },
    {
      name: "English Language & Literature Club",
      subtitle: "Chittagong College",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      description:
        "Champions of literary arts, critical discourse, eloquent prose, and theatrical mastery, inspiring students to wield language with power.",
      sigil: "📜",
    },
    {
      name: "Debating Society",
      subtitle: "Chittagong College",
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      description:
        "The intellectual citadel of rhetoric, parliamentary reasoning, and critical debate, forging legendary speakers and national champions.",
      sigil: "⚔️",
    },
  ];

  return (
    <section
      id="organizers"
      className="relative py-28 px-6 bg-card/50 border-y border-border overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
            <Shield className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              The Noble Houses
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-got tracking-tight mb-4 text-foreground">
            Organizing Societies
          </h2>
          <p className="text-muted-foreground font-sans text-sm sm:text-base leading-relaxed">
            United under one banner by Chittagong College to orchestrate the
            most magnificent winter festival in the nation.
          </p>
        </motion.div>

        {/* Organizers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizers.map((org, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 45, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-8 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {org.sigil}
              </div>

              <p className="text-xs font-sans uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-2">
                {org.subtitle}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold font-got text-foreground mb-4 group-hover:text-primary transition-colors">
                {org.name}
              </h3>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                {org.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
