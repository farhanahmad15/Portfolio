"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { PORTFOLIO_COLORS } from "@/lib/constants";

export function FloatingParticleEffect() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-45">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/70 shadow-[0_0_8px_rgba(176,234,135,0.6)]"
          initial={{
            x: `${(i * 37) % 100}vw`,
            y: `${(i * 53) % 100}vh`,
            scale: 1,
            opacity: 0.8,
          }}
          animate={{
            y: [`${(i * 53) % 100}vh`, `${((i * 53) % 100) - 20}vh`],
            x: [
              `${(i * 37) % 100}vw`,
              `${((i * 37) % 100) + ((i % 5) - 2) * 5}vw`,
            ],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 8 + (i % 8),
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function triggerConfettiBurst() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: [
      PORTFOLIO_COLORS.primaryGreen,
      PORTFOLIO_COLORS.secondaryPurple,
      PORTFOLIO_COLORS.accentCrimson,
      "#76d7ff",
      "#f6c453",
    ],
  });
}

