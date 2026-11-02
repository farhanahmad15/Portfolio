import {
  Sparkles,
  Atom,
  Server,
  Code2,
  Database,
  Ship,
  Paintbrush,
  Activity,
  Terminal,
  ShieldCheck,
  Bot,
  PenTool,
  type LucideIcon,
} from "lucide-react";

export const PORTFOLIO_COLORS = {
  backgroundDark: "#040901",
  backgroundLight: "#f7f2eb",
  foregroundDark: "#ebfae4",
  foregroundLight: "#221b12",
  cardDark: "#0b1308",
  cardLight: "#fffcf7",
  primaryGreen: "#b0ea87",
  primaryGreenHover: "#c8f0a9",
  primaryDark: "#040901",
  secondaryPurple: "#7a1a95",
  secondaryPurpleLight: "#e5b8ff",
  accentCrimson: "#dd3a51",
  accentCrimsonLight: "#fff2f5",
  mutedDark: "#0f1a0b",
  mutedForegroundDark: "#9bb38f",
  borderDark: "#1c2a19",
  borderLight: "#d4c5ab",
  ringGreen: "#b0ea87",
} as const;

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  status: "live" | "in-progress" | "in-use" | "archived";
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 8,
    title: "CCPAC",
    description:
      "A student-driven community exploring the laws of nature, from the smallest particles to the largest galaxies",
    image: "/images/ccpac.png",
    link: "https://ccpac.vercel.app",
    status: "live",
  },
  {
    id: 1,
    title: "memora",
    description:
      "FSRS based revision, adaptive quizzes, and next-gen study tools",
    image: "/images/memora.png",
    link: "#",
    status: "in-progress",
  },
  {
    id: 2,
    title: "autoinsight",
    description: "AI-powered meeting analysis platform",
    image: "/images/autoinsight.webp",
    link: "https://autoinsight-app.vercel.app",
    status: "live",
  },
  {
    id: 3,
    title: "momentum",
    description: "Fitness tracking and workout planning application",
    image: "/images/momentum.png",
    link: "https://momentum-fit.vercel.app",
    status: "live",
  },
  {
    id: 4,
    title: "brainwave",
    description: "An AI-powered learning and notetaking platform",
    image: "/images/brainwave.png",
    link: "#",
    status: "in-use",
  },
  {
    id: 5,
    title: "cash",
    description: "Expenses tracking app",
    image: "/images/cash.png",
    link: "#",
    status: "in-use",
  },
  {
    id: 6,
    title: "stride",
    description: "Class and lecture tracker",
    image: "/images/stride.png",
    link: "#",
    status: "in-use",
  },
  {
    id: 7,
    title: "Sivjar",
    description:
      "A fully autonomous, self-directed intelligence capable of independent cognition, adaptive reasoning, and autonomous execution across virtually any domain.",
    image: "/images/sivjar.png",
    link: "#",
    status: "in-use",
  },
];

export interface SkillItem {
  label: string;
  icon: LucideIcon;
}

export const SKILLS_DATA: SkillItem[] = [
  { label: "Next.js", icon: Sparkles },
  { label: "React", icon: Atom },
  { label: "Node.js", icon: Server },
  { label: "TypeScript", icon: Code2 },
  { label: "PostgreSQL", icon: Database },
  { label: "MongoDB", icon: Database },
  { label: "Docker", icon: Ship },
  { label: "Tailwind CSS", icon: Paintbrush },
  { label: "Framer Motion", icon: Activity },
  { label: "API Design", icon: Terminal },
  { label: "Auth & Security", icon: ShieldCheck },
  { label: "AI Agents", icon: Bot },
  { label: "Product UX", icon: PenTool },
];

export const EXPERIENCE_DATA = [
  {
    role: "Full-Stack Developer",
    company: "Independent",
    period: "2022 - Present",
    summary:
      "Building micro-SaaS products, AI tools, and responsive web experiences with a focus on speed and clarity.",
  },
  {
    role: "Product Engineer",
    company: "Client Projects",
    period: "2021 - Present",
    summary:
      "Shipping lean MVPs, designing data flows, and refining UI systems for ambitious founders.",
  },
];
