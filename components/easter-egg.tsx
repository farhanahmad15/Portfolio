"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { bungee } from "@/lib/font-config";

export function EasterEgg() {
  const [isVisible, setIsVisible] = useState(false);
  const colorPalette = ["#b0ea87", "#7a1a95", "#dd3a51", "#ebfae4", "#9bb38f"];

  const toggleBobby = () => {
    setIsVisible((prev) => !prev);
  };

  const renderColoredText = (text: string) => {
    return text.split("").map((letter, index) => {
      const color = colorPalette[index % colorPalette.length];
      return (
        <span key={index} style={{ color }}>
          {letter}
        </span>
      );
    });
  };

  return (
    <>
      <div className="py-8 text-center">
        <button
          type="button"
          className={`${bungee.className} cursor-pointer text-sm font-semibold uppercase tracking-[0.2em] text-[#ebfae4]/70 hover:text-[#ebfae4] transition-colors`}
          onClick={toggleBobby}
        >
          {renderColoredText(
            `© ${new Date().getFullYear()} Farhan Ahmad. All rights reserved.`,
          )}
        </button>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-0 left-1/2 z-[999]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              y: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{
              x: "-50%",
            }}
          >
            <Image
              src="/images/BOBBY.webp"
              alt="Easter Egg"
              width={150}
              height={150}
              className="pointer-events-none"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
