import type { Metadata } from "next";
import { Bungee, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";

import { ThemeProvider } from "@/components/theme-provider";

const bungee = Bungee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bungee",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Farhan Ahmad",
  description:
    "As a Philomath and self-taught developer with 6000+ hours of experience, I specialize in creating Responsive Sites using Next.JS and Discord Bots using Discord.JS. My passion lies in building innovative and practical applications. Despite my age, I am committed to achieving excellence in the field of technology.",
  keywords: [
    "Farhan",
    "Farhan Ahmad",
    "Farhan Ahmad Portfolio",
    "Farhan Ahmad Github",
    "Farhan Github",
  ],
  authors: [{ name: "Farhan Ahmad" }],
  openGraph: {
    type: "website",
    url: "https://farhanahmad.vercel.app/",
    title: "Farhan Ahmad",
    description:
      "As a Philomath and self-taught developer with 6000+ hours of experience, I specialize in creating Responsive Sites using Next.JS and Discord Bots using Discord.JS. My passion lies in building innovative and practical applications. Despite my age, I am committed to achieving excellence in the field of technology.",
    images: [
      {
        url: "https://farhanahmad.vercel.app/images/logo.png",
        alt: "Farhan Ahmad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Ahmad",
    description:
      "As a Philomath and self-taught developer with 6000+ hours of experience, I specialize in creating Responsive Sites using Next.JS and Discord Bots using Discord.JS. My passion lies in building innovative and practical applications. Despite my age, I am committed to achieving excellence in the field of technology.",
    images: ["https://farhanahmad.vercel.app/images/logo.png"],
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        bungee.variable,
        manrope.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
