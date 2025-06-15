// import { TextReveal } from "@/components/magicui/text-reveal";
import { cn } from "@/lib/utils";
import { MotionProps } from "motion/react";
import * as motion from "motion/react-client";
import { SiGithub, SiLinkedin, SiMaildotcom } from "react-icons/si";

interface AnimatedDivProps extends MotionProps {
  layoutId: string;
  className?: string;
}

const AboutMotion: React.FC<AnimatedDivProps> = ({
  layoutId,
  className,
  ...motionProps
}) => {
  return (
    <motion.div
      className={cn([className, "z-50 p-5 space-y-5"])}
      layoutId={layoutId}
      {...motionProps}
    >
      <div className="grid grid-cols-3 gap-5 h-full">
        <div className="col-span-2">
          <div className="py-10">
            <h1 className="text-[70px]">👋 HELLO,</h1>
            <h2 className="text-[50px]">there,</h2>
          </div>
          <div className="text-2xl">
            {/* <TextReveal> */}
            Starting as a Publisher in Korea focusing on HTML/CSS
            implementation, I expanded my skills through continuous learning and
            growth. Now I work as a Front-End Developer, creating complete
            interactive web experiences with advanced frameworks and
            technologies.
            {/* </TextReveal> */}
          </div>
        </div>

        <div className="border-l-2 flex flex-col justify-between">
          <ul className="flex gap-3 items-center">
            <li>
              <a href="https://github.com/hello-chloe-seoyeong">
                <SiGithub className="text-4xl text-black" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com">
                <SiLinkedin className="text-4xl text-black" />
              </a>
            </li>
            <li>
              <a href="mailto:chloe.seoyeong@gmail.com">
                <SiMaildotcom className="text-4xl text-black" />
              </a>
            </li>
          </ul>
          <p>From. Chloe</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMotion;
