"use client";

import { motion, PanInfo, useAnimation, Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const envelopeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [envelopeSize, setEnvelopeSize] = useState<number>(0);
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > envelopeSize / 2) {
      setIsOpen(true);
      controls.start({
        x: envelopeSize,
        transition: { type: "spring", stiffness: 100 },
      });
      setTimeout(() => {
        router.push("/portfolio");
        setIsOpen(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (ref.current) {
      setEnvelopeSize(ref.current.offsetWidth - 32);
    }
  }, []);
  return (
    <motion.div
      className="relative w-1/2 aspect-[2/3] md:aspect-[3/2] rounded-xs overflow-hidden shadow-lg"
      ref={ref}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={envelopeVariants}
    >
      <hr className="border-dotted border-black mt-5" />

      <motion.div
        className="absolute top-3 left-0 h-4 w-8 z-10 rounded-l-md"
        drag="x"
        dragConstraints={{ left: 0, right: envelopeSize }}
        onDragEnd={(event, info) => handleDragEnd(event, info)}
        animate={controls}
        style={{ cursor: "grab" }}
      >
        <div className="w-full h-4 flex justify-center items-center">
          <span className="transform rotate-270">✂️</span>
        </div>
      </motion.div>
      {!isOpen && (
        <motion.div className="grid grid-cols-2 h-[calc(100%-10px)] w-full justify-between py-8 px-5">
          <div className="text-lg self-end">
            From. <span className="font-semibold">Chloe Seoyeong</span>
          </div>
          <div className="flex flex-col justify-between">
            <Image
              src="/images/stamp.png"
              width={50}
              height={50}
              alt="stamp"
              className="self-end"
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Envelope;
