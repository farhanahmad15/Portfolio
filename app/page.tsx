"use client";

import { HamburgerMenu } from "@/components/HamburgerMenu";
import { TextScramble } from "@/components/TextScramble";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { ContactForm } from "@/components/ContactForm";
import { ParallaxHero } from "@/components/ParallaxHero";
import { EasterEgg } from "@/components/EasterEgg";
import { ConsoleArt } from "@/components/ConsoleArt";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ConsoleArt />
      <HamburgerMenu />

      {/* Logo */}
      <div className="fixed top-0 left-0 z-100 px-8">
        <h3 className="text-lg font-semibold uppercase tracking-[2px] leading-16 text-white">
          Farhan <span className="font-light">Ahmad</span>
        </h3>
      </div>

      {/* Main Container */}
      <main className="relative min-h-screen w-full overflow-hidden z-5">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative z-1">
          <div className="absolute inset-0  from-transparent via-transparent to-black/20 pointer-events-none" />

          <div className="max-w-2xl text-center px-8 relative z-10">
            <TextScramble
              text="FARHAN AHMAD"
              className="text-[2.7rem] font-bold text-black mb-6"
            />

            <motion.h4
              className="text-base text-black font-semibold leading-relaxed mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              As a{" "}
              <i
                title="Philomath: A person who loves learning"
                className="italic font-bold text-black"
              >
                Philomath
              </i>{" "}
              and self-taught developer with 5555+ hours of experience, I
              specialize in creating Responsive Sites using Next.JS and Discord
              Bots using Discord.JS. My passion lies in building innovative and
              practical applications. Despite my age, I am committed to
              achieving excellence in the field of technology.
            </motion.h4>

            <motion.div
              className="flex gap-6 justify-center mb-12"
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1, delay: 0 }}
            >
              <a
                href="https://github.com/farhanahmad15"
                target="_blank"
                rel="noopener noreferrer"
                title="View My GitHub Projects"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src="/icons/github.svg"
                  alt="Github"
                  width={30}
                  height={30}
                />
              </a>
              <Link
                href="#contact"
                title="Contact Me"
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src="/icons/mail.svg"
                  alt="Contact"
                  width={30}
                  height={30}
                />
              </Link>
            </motion.div>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link
                href="#projects"
                className="inline-flex flex-col items-center text-black no-underline cursor-pointer"
              >
                {/* Scroll down */}
                <div className="mt-2 animate-bounce">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-black"
                  >
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Parallax Hero for Mobile */}
        <ParallaxHero />

        {/* Projects Gallery Section */}
        <ProjectsGallery />

        {/* Contact Section */}
        <ContactForm />

        {/* Footer with Easter Egg */}
        <EasterEgg />
      </main>
    </>
  );
}
