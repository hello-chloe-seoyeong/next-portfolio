import {
  Geist,
  Geist_Mono,
  Lacquer,
  Noto_Serif_Display,
  Bodoni_Moda,
  Italiana,
} from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const lacquer = Lacquer({
  weight: "400",
  variable: "--font-lacquer",
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
