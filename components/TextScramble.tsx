"use client";

import { useState, useEffect, useRef } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
}

export function TextScramble({ text, className = "" }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(text);
      return;
    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iteration = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          if (letter === " ") return " ";
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      setDisplayText(scrambled);

      if (iteration >= text.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }

      iteration += 1 / 3;
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, text]);

  return (
    <h1
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </h1>
  );
}
