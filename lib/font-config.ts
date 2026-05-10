import { Bungee, Manrope } from "next/font/google";

export const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const bungee = Bungee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bungee",
});
