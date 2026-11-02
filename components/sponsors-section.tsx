"use client";

import React from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles, Star, Award, Shield } from "lucide-react";
import Image from "next/image";
import { sponsorsData } from "@/lib/sponsors";

export function SponsorsSection() {
  const platinumSponsor =
    sponsorsData.find((s) => s.tier === "platinum") || sponsorsData[0];
  const diamondSponsors = sponsorsData.filter((s) => s.tier === "diamond");
  const goldSponsors = sponsorsData.filter((s) => s.tier === "gold");
  const silverSponsors = sponsorsData.filter((s) => s.tier === "silver");

  return (
    <section
      id="sponsors"
      className="relative py-28 px-6 bg-card/40 border-y border-border overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
              Patrons of the Realm
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-got tracking-tight mb-4 text-foreground">
            Our Esteemed Sponsors
          </h2>
          <p className="text-muted-foreground font-sans text-sm sm:text-base leading-relaxed">
            Honoring the legendary houses and corporations whose generous
            contributions make this grand winter assembly possible.
          </p>
        </motion.div>

        {/* Platinum Title Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Crown className="w-5 h-5 text-amber-500 animate-pulse" />
            <h3 className="text-xs sm:text-sm font-sans uppercase tracking-[0.3em] font-bold text-amber-500">
              Platinum Title Presenter
            </h3>
          </div>

          <div className="relative group rounded-xl p-8 sm:p-12 border-2 border-amber-500/40 bg-gradient-to-br from-card via-card/90 to-amber-500/10 shadow-2xl backdrop-blur-xl overflow-hidden text-center transition-all duration-500 hover:border-amber-500/80 hover:shadow-amber-500/20">
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500 pointer-events-none" />

            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center p-3 shadow-inner relative overflow-hidden">
              <Image
                src={platinumSponsor.logo}
                alt={platinumSponsor.name}
                fill
                className="object-contain p-2 filter drop-shadow"
              />
            </div>

            <p className="text-xs font-sans uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400 font-semibold mb-2">
              {platinumSponsor.subtitle}
            </p>
            <h4
              className={`text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 ${platinumSponsor.customFontClass}`}
            >
              {platinumSponsor.name}
            </h4>
            <p className="text-sm sm:text-base text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
              {platinumSponsor.description}
            </p>
          </div>
        </motion.div>

        {/* Diamond Tier */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-4 h-4 text-cyan-500" />
            <h3 className="text-xs sm:text-sm font-sans uppercase tracking-[0.3em] font-bold text-cyan-500 dark:text-cyan-400">
              Diamond Tier Sponsors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diamondSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group p-6 sm:p-8 rounded-xl border border-cyan-500/30 bg-card/80 backdrop-blur-xl shadow-lg hover:border-cyan-500/60 hover:shadow-cyan-500/10 transition-all duration-300 flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center relative overflow-hidden flex-shrink-0 p-2">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                    {sponsor.subtitle}
                  </p>
                  <h4
                    className={`text-lg sm:text-xl font-bold text-foreground ${sponsor.customFontClass}`}
                  >
                    {sponsor.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gold Tier */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="w-4 h-4 text-yellow-500" />
            <h3 className="text-xs sm:text-sm font-sans uppercase tracking-[0.3em] font-bold text-yellow-600 dark:text-yellow-500">
              Gold Tier Sponsors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goldSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group p-6 rounded-xl border border-yellow-500/30 bg-card/80 backdrop-blur-xl shadow-md hover:border-yellow-500/60 hover:shadow-yellow-500/10 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center relative overflow-hidden mb-4 p-2">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-yellow-600 dark:text-yellow-500 font-semibold mb-1">
                  {sponsor.subtitle}
                </p>
                <h4
                  className={`text-base sm:text-lg font-bold text-foreground ${sponsor.customFontClass}`}
                >
                  {sponsor.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Silver Tier */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-4 h-4 text-slate-400" />
            <h3 className="text-xs sm:text-sm font-sans uppercase tracking-[0.3em] font-bold text-slate-500 dark:text-slate-400">
              Silver Tier Sponsors
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {silverSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group p-6 rounded-xl border border-border bg-card/80 backdrop-blur-xl shadow-sm hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-muted border border-border flex items-center justify-center relative overflow-hidden mb-3 p-2">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
                <p className="text-[9px] font-sans uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-1">
                  {sponsor.subtitle}
                </p>
                <h4
                  className={`text-sm sm:text-base font-bold text-foreground ${sponsor.customFontClass}`}
                >
                  {sponsor.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
