'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const menuItems = [
    { href: 'https://github.com/farhanahmad15', label: 'Github' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
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
            backgroundColor: isOpen ? 'transparent' : '#eeeeee',
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
          <motion.nav
            className="fixed w-[30%] h-full top-0 right-0 flex justify-center items-center z-[50]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="list-none">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  className="text-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  {item.href.startsWith('http') ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white no-underline uppercase text-3xl font-bold py-8 relative hover:text-[#089099] transition-colors duration-300"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white no-underline uppercase text-3xl font-bold py-8 relative hover:text-[#089099] transition-colors duration-300"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main Content Wrapper - 3D Transform Effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[5]"
        animate={{
          transform: isOpen
            ? 'perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5)'
            : 'perspective(1300px) rotateY(0deg) translateZ(0px) scale(1)',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{
          transformOrigin: 'left',
          transformStyle: 'preserve-3d',
        }}
      />
    </>
  );
}
