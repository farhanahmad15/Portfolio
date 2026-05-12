import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { bungee, manrope } from "@/lib/font-config";
import "./globals.css";

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
    url: "https://farhanahmad15.github.io/Portfolio/",
    title: "Farhan Ahmad",
    description:
      "As a Philomath and self-taught developer with 6000+ hours of experience, I specialize in creating Responsive Sites using Next.JS and Discord Bots using Discord.JS. My passion lies in building innovative and practical applications. Despite my age, I am committed to achieving excellence in the field of technology.",
    images: [
      {
        url: "https://farhanahmad15.github.io/Portfolio/images/photo.png",
        alt: "Farhan Ahmad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Ahmad",
    description:
      "As a Philomath and self-taught developer with 6000+ hours of experience, I specialize in creating Responsive Sites using Next.JS and Discord Bots using Discord.JS. My passion lies in building innovative and practical applications. Despite my age, I am committed to achieving excellence in the field of technology.",
    images: ["https://farhanahmad15.github.io/Portfolio/photo.png"],
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${bungee.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
