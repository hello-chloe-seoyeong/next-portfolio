"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import About from "../about/About";
import { PostCard } from "@/types/postcard";
import Contact from "@/components/contact/Contact";
import { useCardOpenStore } from "@/stores/cardOpen.store";
import Overlay from "@/components/postcard/Overlay";
import Works from "@/components/works/Works";
import Postcard from "@/components/postcard/Postcard";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import TechStacks from "@/components/techStacks/TechStacks";
import { colorchips } from "@/components/postcard/colorChips";
import { usePaletteStore } from "@/stores/theme.store";

const cards: PostCard[] = [
  {
    title: "About",
    colors: ["#A3E635", "#65A30D", "#22C55E", "#16A34A"],
  },
  {
    title: "Works",
    colors: ["#FF6B6B", "#FFD93D", "#FF9A8B", "#FF6CAB"],
  },
  {
    title: "Skills",
    colors: ["#6EE7B7", "#3B82F6", "#9333EA", "#38BDF8"],
  },
  {
    title: "Contact",
    colors: ["#FF5EDF", "#04C8DE", "#FEE440", "#FF6F91"],
  },
];

const MainContainer = () => {
  const { cardId, setCardId } = useCardOpenStore();
  const [isHover, setIsHover] = useState<number | null>(null);
  const { palette } = usePaletteStore((state) => state);

  useEffect(() => {}, [palette]);

  return (
    <motion.div className="w-screen min-h-screen items-center justify-center flex py-30 px-5 ">
      <motion.div className="grid grid-cols-2 w-2/3 gap-5">
        {cards.map((card, index) => {
          const isHovered = isHover === index;

          const originX = isHovered ? (index % 2 === 0 ? 1 : 0) : 0.5;
          const originY = isHovered
            ? index === 0 || index === 1
              ? 1
              : 0
            : 0.5;

          return (
            <motion.div
              style={{ originX, originY }}
              key={card.title}
              className={`w-full aspect-[2/3] md:aspect-[3/2] relative `}
              layoutId={card.title}
              onClick={() => setCardId(card.title)}
              initial={false}
              animate={{
                background: colorchips[palette][index].color,
                color:
                  colorchips[palette][index].class === "is-light"
                    ? "#191919"
                    : "#fff",
              }}
              whileHover={{
                scale: 1.1,
                background: `linear-gradient(180deg, ${
                  colorchips[palette][index].color
                } 0%, ${colorchips[palette][index + 1].color} 100%)`,
                transition: { duration: 0.3 },
              }}
              onMouseEnter={() => setIsHover(index)}
              onMouseLeave={() => setIsHover(null)}
            >
              <div className="relative z-10 shadow-md p-3 h-full">
                <motion.div
                  className={cn(
                    "text-4xl md:text-6xl lg:text-7xl flex flex-col justify-start items-start md:justify-center md:items-center h-full font-italian",
                    index === 0
                      ? "justify-end items-end"
                      : index === 1
                      ? "justify-end"
                      : index === 2
                      ? "justify-start items-end"
                      : "justify-start items-start"
                  )}
                >
                  <span>{card.title}</span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <AnimatePresence>
        {cardId ? (
          <Overlay onClose={() => setCardId(null)}>
            <Postcard postCardTitle={cardId} layoutId={cardId}>
              {cardId === "About" && <About />}
              {cardId === "Works" && <Works />}
              {cardId === "Skills" && <TechStacks />}
              {cardId === "Contact" && <Contact />}
            </Postcard>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};

export default MainContainer;
