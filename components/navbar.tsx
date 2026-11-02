"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 animate-in slide-in-from-top-10 fade-in ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-lg shadow-black/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 items-center">
        <Link href="/" className="flex items-center justify-start group">
          <div className="relative w-12 h-12 transition-transform group-hover:scale-105 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Farhan Ahmad Logo"
              width={40}
              height={62}
              priority
              className="h-10 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium whitespace-nowrap">
          <Link
            href="#projects"
            className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.2em] text-xs font-semibold"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.2em] text-xs font-semibold"
          >
            Skills
          </Link>
          <Link
            href="#timeline"
            className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.2em] text-xs font-semibold"
          >
            Journey
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center justify-end gap-4">
          <ThemeToggle />
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-md border border-border font-bungee text-xs tracking-wider px-5 py-2.5 h-auto flex items-center justify-center leading-none rounded-full"
            onClick={() => {
              window.open("mailto:thefarhan@duck.com", "_blank");
            }}
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center justify-end gap-3 md:hidden col-span-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border py-6 px-6 flex flex-col gap-4 shadow-2xl md:hidden animate-in slide-in-from-top-4">
          <Link
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border flex items-center justify-between font-bungee"
          >
            <span>Projects</span>
          </Link>
          <Link
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border flex items-center justify-between font-bungee"
          >
            <span>Skills</span>
          </Link>
          <Link
            href="#timeline"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border flex items-center justify-between font-bungee"
          >
            <span>Journey</span>
          </Link>
          <Button
            className="w-full mt-2 bg-primary text-primary-foreground font-semibold font-bungee tracking-wider py-3 rounded-full"
            onClick={() => {
              setMobileMenuOpen(false);
              window.open("mailto:thefarhan@duck.com", "_blank");
            }}
          >
            Let&apos;s Talk
          </Button>
        </div>
      )}
    </header>
  );
}
