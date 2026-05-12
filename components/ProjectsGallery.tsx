"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { bungee } from "@/lib/font-config";
import posthog from "posthog-js";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  status: "live" | "in-progress" | "in-use" | "archived";
}

const projects: Project[] = [
  {
    id: 1,
    title: "memora",
    description:
      "brainwave's big brother, FSRS based revision, adaptive quizzes, and next-gen study tools",
    image: "/images/memora.png",
    link: "#",
    status: "in-progress",
  },
  {
    id: 2,
    title: "autoinsight",
    description: "AI-powered meeting analysis platform",
    image: "/images/autoinsight.webp",
    link: "https://autoinsight-app.vercel.app",
    status: "live",
  },
  {
    id: 3,
    title: "momentum",
    description: "Fitness tracking and workout planning application",
    image: "/images/momentum.png",
    link: "https://momentum-fit.vercel.app",
    status: "live",
  },
  {
    id: 4,
    title: "brainwave",
    description: "An AI-powered learning and notetaking platform",
    image: "/images/brainwave.png",
    link: "#",
    status: "in-use",
  },
  {
    id: 5,
    title: "cash",
    description: "Expenses tracking app",
    image: "/images/cash.png",
    link: "#",
    status: "in-use",
  },
  {
    id: 6,
    title: "stride",
    description: "Class and lecture tracker",
    image: "/images/stride.png",
    link: "#",
    status: "in-use",
  },
  {
    id: 7,
    title: "BAM",
    description: "Free learning resources",
    image: "/images/bam.webp",
    link: "#",
    status: "archived",
  },
  {
    id: 8,
    title: "Sivjar",
    description: "Completely autonomous multifunctional AI agent",
    image: "/images/sivjar.png",
    link: "#",
    status: "in-use",
  },

  // {
  //   id: 8,
  //   title: "BAM",
  //   description: "Business automation and management system",
  //   image: "/images/bam.webp",
  //   link: "#",
  //   status: "archived",
  // },
];

function getStatusConfig(status: Project["status"]) {
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

export function ProjectsGallery() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2
            className={`${bungee.className} text-3xl font-normal text-[#ebfae4] sm:text-4xl`}
          >
            Projects
          </h2>
          <p className="max-w-2xl text-sm text-[#ebfae4]/70 sm:text-base">
            Focused on building lean, practical products with sharp UX and
            strong technical depth.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const isLive = project.status === "live";
            const isExternal = project.link.startsWith("http");
            const statusConfig = getStatusConfig(project.status);

            return (
              <motion.article
                key={project.id}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-[#0b1308]/70 p-5 backdrop-blur"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#040901]/80 via-[#040901]/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-[#b0ea87]/40 bg-[#040901]/60 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#b0ea87]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-5 flex flex-1 flex-col gap-2">
                  <h3 className="text-lg uppercase tracking-[0.15em] text-[#ebfae4]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#ebfae4]/70">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  {isLive ? (
                    <a
                      href={project.link}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition hover:-translate-y-0.5 ${statusConfig.buttonClass}`}
                      onClick={() =>
                        posthog.capture("project_link_clicked", {
                          project_title: project.title,
                          project_link: project.link,
                          project_status: project.status,
                        })
                      }
                    >
                      View Project
                      <span className="text-base">
                        {isExternal ? "↗" : "→"}
                      </span>
                    </a>
                  ) : (
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] ${statusConfig.buttonClass}`}
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
