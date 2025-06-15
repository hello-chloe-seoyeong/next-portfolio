"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import About from "../about/About";
// import { AuroraText } from "../magicui/aurora-text";s
import { PostCard } from "@/types/postcard";
import Contact from "@/components/contact/Contact";
import { useCardOpenStore } from "@/stores/cardOpen.store";
import Overlay from "@/components/postcard/Overlay";
import Works from "@/components/works/Works";
import Postcard from "@/components/postcard/Postcard";

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
  return (
    <div className="w-screen min-h-screen items-center justify-center flex py-30">
      <motion.div className="grid grid-cols-2 min-w-1/2 gap-5">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className={`h-48 w-80 relative`}
            layoutId={card.title}
            onClick={() => setCardId(card.title)}
          >
            <div className="relative z-10 shadow-md p-3 bg-white h-full">
              <div
                className={`text-4xl md:text-3xl lg:text-7xl flex justify-center items-center h-full font-[family-name:var(--font-italian)]`}
              >
                {card.title}
              </div>
            </div>
            <div className="absolute -top-2 -left-2 w-[50px] h-[50px] border-t-[25px] border-l-[25px] border-[#f9f9f9] border-b-[25px] border-r-[25px] border-b-transparent border-r-transparent  z-20"></div>
            <div className="absolute -bottom-2 -right-2 w-[50px] h-[50px] border-b-[25px] border-r-[25px] border-[#f9f9f9] border-t-[25px] border-l-[25px] border-t-transparent border-l-transparent  z-20"></div>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {cardId ? (
          <Overlay onClose={() => setCardId(null)}>
            <Postcard postCardTitle={cardId} layoutId={cardId}>
              {cardId === "About" && <About />}
              {cardId === "Works" && <Works />}
              {/* {cardId === "Skills" && <Skills/>} */}
              {cardId === "Contact" && <Contact />}
            </Postcard>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default MainContainer;
