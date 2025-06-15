// import { TextReveal } from "@/components/magicui/text-reveal";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCardOpenStore } from "@/stores/cardOpen.store";
import { AnimatedDivProps } from "@/types/motion";
import * as motion from "motion/react-client";
import { SiGithub, SiLinkedin, SiMaildotcom } from "react-icons/si";

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
      <div className="grid grid-cols-3 w-full h-full gap-5 ">
        <div className="col-span-2">
          <div>
            <h2 className="text-[50px]">👋 HELLO, there</h2>
          </div>
          <div className="text-2xl space-y-4">
            <TypingAnimation
              className="text-xl font-normal"
              duration={20}
              delay={1000}
            >
              I&apos;m a frontend developer who enjoys turning creative ideas
              into interactive user experiences.
            </TypingAnimation>
            <TypingAnimation
              className="text-xl font-normal"
              duration={20}
              delay={3000}
            >
              In Korea, I mainly used HTML and CSS to build web pages, but now
              I&apos;ve expanded my skill set to include modern frontend
              technologies like JavaScript, TypeScript, and React.
            </TypingAnimation>
            <TypingAnimation
              className="text-xl font-normal"
              duration={20}
              delay={6000}
            >
              I&apos;m passionate about learning new tools and improving the way
              users interact with the web. My goal is to create intuitive and
              visually engaging applications that bring ideas to life.
            </TypingAnimation>
          </div>
        </div>

        <div className="border-l-2 border-black pl-5 flex flex-col justify-end items-end space-y-6">
          <p className="text-lg">From. Chloe</p>

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
              <Button onClick={() => setCardId("Contact")}>
                <SiMaildotcom className="text-4xl text-black" />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMotion;
