"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "autoinsight",
    description: "AI-powered automotive analysis platform",
    image: "/images/autoinsight.webp",
    link: "#",
  },
  {
    id: 2,
    title: "momentum",
    description: "Fitness tracking and workout planning application",
    image: "/images/momentum.webp",
    link: "#",
  },
  {
    id: 3,
    title: "brainwave",
    description: "Business automation and management system",
    image: "/images/bam.webp",
    link: "#",
  },
  {
    id: 4,
    title: "cash",
    description: "Expenses tracking app",
    image: "/images/cash.png",
    link: "#",
  },
  {
    id: 5,
    title: "stride",
    description: "Class and lecture tracker",
    image: "/images/stride.png",
    link: "#",
  },
  {
    id: 6,
    title: "BAM",
    description: "Business automation and management system",
    image: "/images/bam.webp",
    link: "#",
  },
  {
    id: 7,
    title: "apanker",
    description: "Feature-rich Discord bot with moderation tools",
    image: "/images/discord.webp",
    link: "#",
  },
  {
    id: 8,
    title: "BAM",
    description: "Business automation and management system",
    image: "/images/bam.webp",
    link: "#",
  },
];

export function ProjectsGallery() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="w-full max-w-285">
        <motion.h2
          className="text-[30px] leading-10 font-bold text-black text-center mb-15"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="flex flex-wrap gap-0 border-[5px] border-[#065F6A] rounded-[10px]">
          {/* First Row - First 4 items */}
          <div className="flex gap-0 h-[70vh] w-full">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                className="relative overflow-hidden cursor-pointer"
                style={{
                  flex: expandedId === project.id ? 10 : 1,
                  borderRadius:
                    index === 0 && projects.length <= 4
                      ? "10px 0 0 10px"
                      : index === 3 || index === projects.slice(0, 4).length - 1
                      ? projects.length <= 4
                        ? "0 10px 10px 0"
                        : "0"
                      : "0",
                  transition: "all 0.8s ease",
                }}
                onMouseEnter={() => setExpandedId(project.id)}
                onMouseLeave={() => setExpandedId(null)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                {/* Border on hover */}
                <motion.div
                  className="absolute inset-0 border-[0.2rem] border-[#086b78] rounded-[inherit] pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: expandedId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Project Title - Hides on Hover */}
                {/* <motion.div
                className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[80%] text-center"
                initial={{ opacity: 1 }}
                animate={{
                  opacity: expandedId === project.id ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white bg-black/60 rounded-md text-[1.2rem] py-2 px-4">
                  {project.title}
                </h3>
              </motion.div> */}

                {/* Description - Shows on Hover */}
                <motion.div
                  className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[80%] text-center bg-black/60 text-white text-[1.2rem] py-2 px-4 rounded-[5px]"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: expandedId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}: {project.description}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - Remaining items if more than 4 */}
          {projects.length > 4 && (
            <div className="flex gap-0 h-[70vh] w-full">
              {projects.slice(4).map((project, index) => (
                <motion.div
                  key={project.id}
                  className="relative overflow-hidden cursor-pointer"
                  style={{
                    flex: expandedId === project.id ? 10 : 1,
                    borderRadius:
                      index === 0
                        ? "10px 0 0 10px"
                        : index === projects.slice(4).length - 1
                        ? "0 10px 10px 0"
                        : "0",
                    transition: "all 0.8s ease",
                  }}
                  onMouseEnter={() => setExpandedId(project.id)}
                  onMouseLeave={() => setExpandedId(null)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  {/* Border on hover */}
                  <motion.div
                    className="absolute inset-0 border-[0.2rem] border-[#086b78] rounded-[inherit] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: expandedId === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Project Title - Hides on Hover
                  <motion.div
                    className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[80%] text-center"
                    initial={{ opacity: 1 }}
                    animate={{
                      opacity: expandedId === project.id ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-white bg-black/60 rounded-md text-[1.2rem] py-2 px-4">
                      {project.title}
                    </h3>
                  </motion.div> */}

                  {/* Description - Shows on Hover */}
                  <motion.div
                    className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[80%] text-center bg-black/60 text-white text-[1.2rem] py-2 px-4 rounded-[5px]"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: expandedId === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
