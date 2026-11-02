import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Globe } from "lucide-react";
import { GithubIcon } from "@/components/github-icon";
import { EasterEgg } from "@/components/easter-egg";
import { PORTFOLIO_COLORS } from "@/lib/constants";
import { SlSocialLinkedin } from "react-icons/sl";

export function Footer() {
  return (
    <footer className="relative bg-card text-card-foreground border-t border-border pt-20 pb-12 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: `${PORTFOLIO_COLORS.primaryGreen}08` }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-border">
          {/* Brand Col */}
          <div className="md:col-span-1 flex flex-col items-start">
            <div className="w-16 h-16 mb-4 flex items-center justify-start">
              <Image
                src="/images/logo.png"
                alt="Farhan Ahmad Logo"
                width={40}
                height={62}
                className="h-12 w-auto object-contain"
              />
            </div>
            <h3 className="text-xl font-bold font-bungee mb-3 text-foreground">
              FARHAN AHMAD
            </h3>
            <p className="text-xs font-sans text-muted-foreground leading-relaxed">
              Philomath & self-taught full-stack developer building practical,
              high-impact products across Web, AI, and Mobile platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-foreground mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills & Tools
                </Link>
              </li>
              <li>
                <Link
                  href="#timeline"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Project Journey
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-foreground mb-6">
              Connect
            </h4>
            <ul className="space-y-3 font-sans text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <SlSocialLinkedin className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/farhan-ahmad-909959409/"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="https://github.com/farhanahmad15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Easter Egg & Copyright */}
        <div className="pt-8">
          <EasterEgg />
        </div>
      </div>
    </footer>
  );
}

