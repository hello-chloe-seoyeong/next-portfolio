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
  return (
    <motion.div
      className="w-[300px] h-[450px] md:w-[600px] md:h-[800px] lg:w-[900px] lg:h-[600px] bg-white flex flex-col items-center justify-between p-5"
      layoutId={layoutId}
    >
      <h2 className="font-bold">{postCardTitle}</h2>
      <div className="flex-grow w-full h-full">{children}</div>
      <hr className="border-t-2 border-black w-full text-center pt-3" />
    </motion.div>
  );
};

export default Postcard;
