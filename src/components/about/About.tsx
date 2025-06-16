// import { TextReveal } from "@/components/magicui/text-reveal";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCardOpenStore } from "@/stores/cardOpen.store";
import { AnimatedDivProps } from "@/types/motion";
import * as motion from "motion/react-client";
import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";

const AboutMotion: React.FC<AnimatedDivProps> = ({
  // layoutId,
  className,
  ...motionProps
}) => {
  const { setCardId } = useCardOpenStore();
  return (
    <motion.div
      className={cn([className, "h-full p-5 space-y-5"])}
      {...motionProps}
    >
      <div className="flex flex-col justify-between md:grid md:grid-cols-3 w-full h-full gap-5 ">
        <div className="col-span-2">
          <h2 className="text-[25px] lg:text-[40px] mb-2 lg:mb-5">
            👋 HELLO, there
          </h2>
          <div className="space-y-5">
            <TypingAnimation
              className="text-sm md:text-md font-normal"
              duration={10}
              delay={1000}
            >
              I&apos;m a frontend developer who enjoys turning creative ideas
              into interactive user experiences.
            </TypingAnimation>
            <TypingAnimation
              className="text-sm md:text-md font-normal"
              duration={10}
              delay={2500}
            >
              In Korea, I mainly used HTML and CSS to build web pages, but now
              I&apos;ve expanded my skill set to include modern frontend
              technologies like JavaScript, TypeScript, and React.
            </TypingAnimation>
            <TypingAnimation
              className="text-sm md:text-md font-normal"
              duration={10}
              delay={5000}
            >
              I&apos;m passionate about learning new tools and improving the way
              users interact with the web. My goal is to create intuitive and
              visually engaging applications that bring ideas to life.
            </TypingAnimation>
          </div>
        </div>

        <div className="border-t-2 md:border-l-2 md:border-t-0 border-black pl-5 flex flex-col justify-end items-end md:space-y-6">
          <p className="mt-4 md:mt-0 text-lg">From. Chloe</p>

          <ul className="flex gap-3 items-center">
            <li>
              <a href="https://github.com/hello-chloe-seoyeong" target="_blank">
                <SiGithub className="text-4xl text-black" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank">
                <SiLinkedin className="text-4xl text-black" />
              </a>
            </li>
            <li>
              <Button
                onClick={() => setCardId("Contact")}
                variant={"link"}
                size={"icon"}
              >
                <SiMaildotru className="size-8" />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMotion;
