"use client";

import { Badge } from "@/components/ui/badge";
import { works } from "@/components/works/works";
import { cn } from "@/lib/utils";
import { AnimatedDivProps } from "@/types/motion";
import { AnimatePresence, Variants, wrap } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const worksVariants: Variants = {
  start: (direction: 1 | -1) => ({ x: direction * 300, opacity: 0 }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.1, type: "spring" },
  },
  exit: (direction: 1 | -1) => ({
    x: direction * -300,
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};

const Works: React.FC<AnimatedDivProps> = ({ className }) => {
  const [selectedItem, setSelectedItem] = useState(works[0].id);
  const [direction, setDirection] = useState<1 | -1>(1);

  const setSlide = (newDirection: 1 | -1) => {
    const nextItem = wrap(1, works.length + 1, selectedItem + newDirection);
    setSelectedItem(nextItem);
    setDirection(newDirection);
  };

  return (
    <motion.div
      className={cn([
        className,
        "flex gap-5 justify-center items-center h-full font-red-hat-display overflow-hidden",
      ])}
    >
      <motion.button onClick={() => setSlide(-1)} style={button}>
        <FaArrowLeft />
      </motion.button>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={selectedItem}
          custom={direction}
          variants={worksVariants}
          initial="start"
          animate="animate"
          exit="exit"
          style={workBox}
        >
          <div className="relative w-1/2 h-1/4 mb-10">
            <Image
              src={works[selectedItem - 1].image}
              alt={works[selectedItem - 1].title}
              fill
              className="object-contain"
            />
          </div>
          <a
            className="text-2xl font-bold text-center"
            href={works[selectedItem - 1].link}
            target="_blank"
          >
            {works[selectedItem - 1].title}
          </a>
          <p className="text-muted-foreground text-center">
            {works[selectedItem - 1].position}
          </p>
          <div className="flex gap-2 flex-wrap justify-center mt-5">
            {works[selectedItem - 1].skills.map((skill, index) => (
              <Badge key={index}>#{skill}</Badge>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      <motion.button onClick={() => setSlide(1)} style={button}>
        <FaArrowRight />
      </motion.button>
    </motion.div>
  );
};

export default Works;

/** Style */
const workBox: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // border: "1px solid #191919",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  width: "75%",
  height: "75%",
  padding: "24px",
};

const button: React.CSSProperties = {
  width: 50,
  height: 50,
  fontSize: "20px",
  fontWeight: "bold",
  border: "1px solid #dedede",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
