export interface Sponsor {
  id: string;
  name: string;
  tier: "platinum" | "diamond" | "gold" | "silver";
  subtitle: string;
  description?: string;
  logo: string;
  customFontClass: string;
}

export const sponsorsData: Sponsor[] = [
  {
    id: "akij-biri",
    name: "Akij Biri",
    tier: "platinum",
    subtitle: "Title Presenting Sponsor",
    description:
      "The supreme benefactor of Carnaval da Chittagong College 2026. Empowering leadership, scientific rigor, and academic excellence across the realm.",
    logo: "/logo-light-transparent.png",
    customFontClass: "font-serif tracking-widest font-extrabold",
  },
  {
    id: "pubali-bank",
    name: "Pubali Bank",
    tier: "diamond",
    subtitle: "Diamond Tech Partner",
    logo: "/logo-dark-transparent.png",
    customFontClass: "font-sans font-bold tracking-tight",
  },
  {
    id: "rupali-bank",
    name: "Rupali Bank",
    tier: "diamond",
    subtitle: "Diamond Infrastructure Sponsor",
    logo: "/logo-light-transparent.png",
    customFontClass: "font-serif italic font-semibold",
  },
  {
    id: "ironbank-global",
    name: "Ironbank Global Capital",
    tier: "gold",
    subtitle: "Gold Financial Partner",
    logo: "/logo-dark-transparent.png",
    customFontClass: "font-sans font-black tracking-wider",
  },
  {
    id: "citadel-quantum",
    name: "Citadel Quantum Labs",
    tier: "gold",
    subtitle: "Gold Research Partner",
    logo: "/logo-light-transparent.png",
    customFontClass: "font-mono font-bold",
  },
  {
    id: "stark-vanguard",
    name: "Stark Vanguard Logistics",
    tier: "gold",
    subtitle: "Gold Operations Partner",
    logo: "/logo-dark-transparent.png",
    customFontClass: "font-sans font-semibold tracking-wide",
  },
  {
    id: "bravos-book",
    name: "Bravos Book Guild",
    tier: "silver",
    subtitle: "Silver Publication Partner",
    logo: "/logo-light-transparent.png",
    customFontClass: "font-serif font-bold",
  },
  {
    id: "kingslanding-media",
    name: "Kingslanding Media Network",
    tier: "silver",
    subtitle: "Silver Broadcast Partner",
    logo: "/logo-dark-transparent.png",
    customFontClass: "font-sans font-bold tracking-tight",
  },
  {
    id: "dragonstone-edtech",
    name: "Dragonstone EdTech",
    tier: "silver",
    subtitle: "Silver Education Partner",
    logo: "/logo-light-transparent.png",
    customFontClass: "font-sans font-medium tracking-widest",
  },
  {
    id: "winterfell-culinary",
    name: "Winterfell Culinary Arts",
    tier: "silver",
    subtitle: "Silver Hospitality Partner",
    logo: "/logo-dark-transparent.png",
    customFontClass: "font-serif italic font-medium",
  },
];
