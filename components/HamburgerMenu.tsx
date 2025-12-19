"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const menuItems = [
    { href: "https://github.com/farhanahmad15", label: "Github" },
    { href: "#projects", label: "Projects" },
    // { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-0 right-[70px] z-[100] h-16 w-12 flex items-center justify-end cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <motion.div
          className="relative w-[1.9rem] h-[1.5px] bg-white rounded-sm"
          animate={{
            rotate: isOpen ? 360 : 0,
            backgroundColor: isOpen ? "transparent" : "#eeeeee",
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="absolute w-full h-full bg-white left-0"
            animate={{
              translateY: isOpen ? 0 : -9,
              rotate: isOpen ? 45 : 0,
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.span
            className="absolute w-full h-full bg-white left-0"
            animate={{
              translateY: isOpen ? 0 : 9,
              rotate: isOpen ? -45 : 0,
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </button>

      {/* Navigation Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed w-[30%] h-screen top-0 right-0 flex justify-center items-center z-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="list-none">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  className="text-center z-40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block z-50 text-[#eee] no-underline uppercase text-base font-light tracking-wider py-3 hover:text-white transition-colors duration-300"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block z-50 text-[#eee] no-underline uppercase text-base font-light tracking-wider py-3 hover:text-white transition-colors duration-300"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
