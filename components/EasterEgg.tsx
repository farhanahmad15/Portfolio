"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function EasterEgg() {
  const [isVisible, setIsVisible] = useState(false);
  const colorPalette = [
    "#000000",
    "#6a040f",
    "#ee9b00",
    "#ca6702",
    "#bb3e03",
    "#ae2012",
    "#9b2226",
  ];

  const toggleBobby = () => {
    setIsVisible(!isVisible);
  };

  // Generate colored letters for the footer text using deterministic colors
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
      <footer className="relative h-8 bg-transparent">
        <p
          className="text-center cursor-pointer text-sm select-none font-bold"
          onClick={toggleBobby}
        >
          {renderColoredText("© 2025 Farhan Ahmad. All rights reserved.")}
        </p>
      </footer>

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
