"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Different parallax speeds for each layer
  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const mountainsBackY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const mountainsFrontY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen overflow-hidden md:hidden"
      style={{
        background: "linear-gradient(to bottom, #2b1055 0%, #1c0522 100%)",
      }}
    >
      {/* Stars Layer */}
      <motion.div className="absolute inset-0 z-0" style={{ y: starsY }}>
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: "url('/images/stars.png')",
            backgroundSize: "cover",
          }}
        />
      </motion.div>

      {/* Moon Layer */}
      <motion.div
        className="absolute top-[10%] right-[10%] z-10"
        style={{ y: moonY }}
      >
        <img
          src="/images/moon.png"
          alt="Moon"
          className="w-32 h-32 sm:w-48 sm:h-48"
        />
      </motion.div>

      {/* Mountains Behind Layer */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20"
        style={{ y: mountainsBackY }}
      >
        <img
          src="/images/mountains_behind.png"
          alt="Mountains Behind"
          className="w-full"
        />
      </motion.div>

      {/* Text Layer */}
      <motion.div
        className="absolute inset-0 z-30 flex items-center justify-center"
        style={{ y: textY }}
      >
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold text-center px-4">
          FARHAN AHMAD
        </h1>
      </motion.div>

      {/* Mountains Front Layer */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-40"
        style={{ y: mountainsFrontY }}
      >
        <img
          src="/images/mountains_front.png"
          alt="Mountains Front"
          className="w-full"
        />
      </motion.div>
    </div>
  );
}
