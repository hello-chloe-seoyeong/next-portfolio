"use client";
import * as motion from "motion/react-client";

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

interface OverlayProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Overlay = ({ onClose, children }: OverlayProps) => {
  return (
    <motion.div
      className="w-full h-full absolute top-0 flex justify-center items-center bg-black/5 z-20"
      variants={overlay}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </motion.div>
  );
};

export default Overlay;
