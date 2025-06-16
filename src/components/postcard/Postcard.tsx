import { Variants } from "motion/react";
import * as motion from "motion/react-client";

const Postcard = ({
  children,
  postCardTitle,
  layoutId,
}: {
  children: React.ReactNode;
  postCardTitle: string;
  layoutId: string;
}) => {
  const postCardVariants: Variants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      className="w-[360px] aspect-[2/3] md:w-[700px] md:h-[440px] lg:w-[750px] lg:h-[500px] bg-white flex flex-col items-center justify-between p-5 font-red-hat-display"
      layoutId={layoutId}
      variants={postCardVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <h2 className="font-bold">{postCardTitle}</h2>
      <div className="flex-grow w-full h-full">{children}</div>
      <hr className="border-t-2 border-black w-full text-center pt-3" />
    </motion.div>
  );
};

export default Postcard;
