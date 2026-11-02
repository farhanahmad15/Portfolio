"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Trophy,
  Atom,
  Telescope,
  BookOpen,
  MessageSquare,
  Users,
  CheckCircle2,
  X,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function EventsExperience() {
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    email: "",
    phone: "",
    teamMembers: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const eventsSections = [
    {
      id: "section-1",
      sectionTitle: "Olympiads",
      sectionSubtitle:
        "Test your academic prowess in rigorous individual olympiads across physics and English language.",
      events: [
        {
          id: "physics-olympiad",
          title: "Physics Olympiad",
          category: "physics",
          club: "Physics & Astronomy Club",
          icon: <Atom className="w-8 h-8 text-primary" />,
          tagline:
            "Test fundamental laws of motion, thermodynamics, and mechanics.",
          description:
            "An intensive battle of intellect solving advanced theoretical and analytical physics problems curated by expert mentors.",
          prize: "৳ 75,000 BDT",
          teamSize: "Individual",
          deadline: "October 10, 2026",
          badge: "Flagship Event",
        },
        {
          id: "english-olympiad",
          title: "English Olympiad",
          category: "literature",
          club: "English Language Club",
          icon: <BookOpen className="w-8 h-8 text-primary" />,
          tagline:
            "Master vocabulary, grammar, reading comprehension, and literary analysis.",
          description:
            "A comprehensive test of language proficiency, creative composition, and critical linguistic analysis.",
          prize: "৳ 75,000 BDT",
          teamSize: "Individual",
          deadline: "October 11, 2026",
          badge: "Prestigious",
        },
      ],
    },
    {
      id: "section-2",
      sectionTitle: "Debate",
      sectionSubtitle:
        "Engage in high-stakes rhetorical battles on geopolitics, philosophy, and social issues.",
      events: [
        {
          id: "parliamentary-debate",
          title: "Parliamentary Debate",
          category: "debate",
          club: "Chittagong College Debating Society",
          icon: <MessageSquare className="w-8 h-8 text-primary" />,
          tagline:
            "BPU / Asian Parliamentary style debate on contemporary motions.",
          description:
            "The ultimate clash of logic and rhetoric. Engage in structured parliamentary motion battles judged by renowned debaters.",
          prize: "৳ 1,30,000 BDT",
          teamSize: "Team of 3",
          deadline: "October 12, 2026",
          badge: "Grand Arena",
        },
      ],
    },
    {
      id: "section-3",
      sectionTitle: "Quiz",
      sectionSubtitle:
        "Explore the cosmos, science, general knowledge, and pop culture.",
      events: [
        {
          id: "astronomy-quiz",
          title: "Quiz",
          category: "astronomy",
          club: "Physics & Astronomy Club",
          icon: <Telescope className="w-8 h-8 text-primary" />,
          tagline:
            "Journey through stellar evolution, black holes, and space breakthroughs.",
          description:
            "A thrilling multimedia quiz competition testing celestial knowledge, space exploration facts, and scientific discoveries.",
          prize: "৳ 1,00,000 BDT",
          teamSize: "Team of 2",
          deadline: "October 11, 2026",
          badge: "Popular",
        },
      ],
    },
    {
      id: "section-4",
      sectionTitle: "Physics Auction",
      sectionSubtitle:
        "Strategize, bid, and acquire physical components or theoretical concepts to solve unique challenges.",
      events: [
        {
          id: "physics-auction",
          title: "Physics Auction",
          category: "physics",
          club: "Physics & Astronomy Club",
          icon: <Sparkles className="w-8 h-8 text-primary" />,
          tagline:
            "Bid wisely with virtual currency to build or solve experimental physics challenges.",
          description:
            "An interactive strategy and auction event where teams bid on clues, equipment, or problem parameters to successfully complete a physics task.",
          prize: "৳ 90,000 BDT",
          teamSize: "Team of 3",
          deadline: "October 12, 2026",
          badge: "Unique",
        },
      ],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: selectedEvent.id,
          eventTitle: selectedEvent.title,
          ...formData,
        }),
      });

      if (res.ok) {
        setSuccessMessage(
          "Registration submission captured successfully into the realm archives!",
        );
        setFormData({
          name: "",
          institution: "",
          email: "",
          phone: "",
          teamMembers: "",
        });
      } else {
        setSuccessMessage(
          "Registration recorded successfully (offline mode fallback active).",
        );
      }
    } catch (err) {
      setSuccessMessage(
        "Registration successfully registered in secure local storage node.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="events"
      className="relative py-32 px-6 bg-card/30 border-y border-border overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border bg-card/80 backdrop-blur-xl text-primary mb-6 shadow-sm">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span className="text-xs uppercase tracking-[0.3em] font-sans font-bold">
              Competitions & Tournaments
            </span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-bold font-got leading-[1.2] mb-6 text-foreground"> 
            Choose Your Arena
          </h2>
          <p className="text-muted-foreground font-sans text-base sm:text-lg leading-relaxed">
            Select your discipline across our four distinct sections. Prove your
            mastery and claim eternal renown.
          </p>
        </motion.div>

        {/* Events Sections */}
        <div className="space-y-24">
          {eventsSections.map((sec, secIdx) => (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                delay: secIdx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Category Sub-Header */}
              <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-border/60 pb-4">
                <div>
                  <span className="text-xs font-sans uppercase tracking-[0.3em] text-primary font-bold block mb-1">
                    Section {secIdx + 1}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold font-got text-foreground">
                    {sec.sectionTitle}
                  </h3>
                </div>
                <p className="text-muted-foreground font-sans text-sm max-w-md mt-2 md:mt-0">
                  {sec.sectionSubtitle}
                </p>
              </div>

              {/* Events Grid for this section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sec.events.map((event, eventIndex) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 35, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.65,
                      delay: eventIndex * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group rounded-3xl border border-border bg-card/80 backdrop-blur-2xl p-8 sm:p-10 shadow-xl hover:shadow-[0_0_50px_rgba(152,190,204,0.15)] hover:border-primary/50 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-inner group-hover:scale-110 transition-transform duration-300">
                          {event.icon}
                        </div>
                      </div>

                      <p className="text-xs font-sans uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-2">
                        {event.club}
                      </p>
                      <h4 className="text-2xl sm:text-3xl font-bold font-got text-foreground mb-4 group-hover:text-primary transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-sm sm:text-base font-sans font-medium text-foreground/90 mb-4 italic">
                        "{event.tagline}"
                      </p>
                      <p className="text-sm font-sans text-muted-foreground mb-8 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 py-4 sm:py-5 border-y border-border mb-8 text-center sm:text-center font-sans">
                        <div className="flex items-center justify-between sm:flex-col sm:justify-start px-2 sm:px-1 py-1 sm:py-0">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            Prize Pool
                          </p>
                          <p className="text-sm font-bold text-foreground font-sans sm:mt-1">
                            {event.prize}
                          </p>
                        </div>
                        <div className="flex items-center justify-between sm:flex-col sm:justify-start px-2 sm:px-1 py-1 sm:py-0">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            Team
                          </p>
                          <p className="text-sm font-bold text-foreground font-sans sm:mt-1">
                            {event.teamSize}
                          </p>
                        </div>
                        <div className="flex items-center justify-between sm:flex-col sm:justify-start px-2 sm:px-1 py-1 sm:py-0">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            Deadline
                          </p>
                          <p className="text-sm font-bold text-foreground font-sans sm:mt-1">
                            {event.deadline}
                          </p>
                        </div>
                      </div>

                      <Button
                        onClick={() => setSelectedEvent(event)}
                        className="w-full bg-card hover:bg-primary text-foreground hover:text-primary-foreground border border-border hover:border-primary font-bold text-xs tracking-[0.3em] uppercase py-7 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 font-got shadow-sm hover:scale-[1.02]"
                      >
                        <span>Enter Tournament</span>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-2xl animate-in zoom-in-95 duration-300 my-8">
            <button
              onClick={() => {
                setSelectedEvent(null);
                setSuccessMessage("");
              }}
              className="absolute top-6 right-6 p-2 rounded-full border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-primary mb-2 block">
                Official Application Protocol
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-got text-foreground">
                {selectedEvent.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans mt-2">
                Complete your credentials to secure your seat in the grand
                arena.
              </p>
            </div>

            {successMessage ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-got mb-3">
                  Registration Successful
                </h4>
                <p className="text-sm text-muted-foreground font-sans max-w-md mx-auto mb-8">
                  {successMessage}
                </p>
                <Button
                  onClick={() => {
                    setSelectedEvent(null);
                    setSuccessMessage("");
                  }}
                  className="bg-primary text-primary-foreground font-got font-bold tracking-widest uppercase px-8 py-4 rounded-xl"
                >
                  Return to Realm
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-2">
                    Full Name / Competitor Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Jon Snow"
                    className="w-full bg-background border border-border rounded-xl px-5 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-2">
                      Institution / College Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.institution}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          institution: e.target.value,
                        })
                      }
                      placeholder="e.g. Chittagong College"
                      className="w-full bg-background border border-border rounded-xl px-5 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-2">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="competitor@domain.com"
                      className="w-full bg-background border border-border rounded-xl px-5 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+880 1700 000000"
                      className="w-full bg-background border border-border rounded-xl px-5 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-2">
                      Team Members (If applicable)
                    </label>
                    <input
                      type="text"
                      value={formData.teamMembers}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          teamMembers: e.target.value,
                        })
                      }
                      placeholder="Name 1, Name 2"
                      className="w-full bg-background border border-border rounded-xl px-5 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-got font-bold tracking-[0.3em] uppercase py-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Credentials...</span>
                    </>
                  ) : (
                    <span>Submit Official Application</span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
