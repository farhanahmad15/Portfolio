"use client";

import { useState, useEffect, useRef } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
}

function getScrambleSeed(text: string) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return text
    .split("")
    .map((char) => {
      if (char === " ") return " ";
      return letters[Math.floor(Math.random() * letters.length)];
    })
    .join("");
}

export function TextScramble({ text, className = "" }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [scrambleTrigger, setScrambleTrigger] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
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
    }, 50);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [scrambleTrigger, text]);

  useEffect(() => {
    setDisplayText(getScrambleSeed(text));
    setScrambleTrigger((prev) => prev + 1);
  }, [text]);

  function handleMouseEnter() {
    setScrambleTrigger((prev) => prev + 1);
  }

  function handleMouseLeave() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setDisplayText(text);
  }

  return (
    <h1
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </h1>
  );
}
