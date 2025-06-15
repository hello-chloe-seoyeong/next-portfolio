import {
  Geist,
  Geist_Mono,
  Noto_Serif_Display,
  Bodoni_Moda,
  Italiana,
  Lexend,
  Red_Hat_Display,
  Montserrat,
} from "next/font/google";

export const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const notoSerifDisplay = Noto_Serif_Display({
  variable: "--font-noto-serif-display",
  subsets: ["latin"],
});

export const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
});

export const italian = Italiana({
  weight: "400",
  variable: "--font-italian",
  subsets: ["latin"],
});
