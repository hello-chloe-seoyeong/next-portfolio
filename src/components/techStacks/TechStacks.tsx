import { Marquee } from "@/components/magicui/marquee";
import { Stacks } from "@/components/techStacks/stacks";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

const firstRow = Stacks.slice(0, Stacks.length / 2);
const secondRow = Stacks.slice(Stacks.length / 2);

const TechStacks = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "relative flex w-full h-full items-center justify-center overflow-hidden",
        isMobile ? "flex-row" : "flex-col"
      )}
    >
      <Marquee pauseOnHover className="[--duration:20s]" vertical={isMobile}>
        {firstRow.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.title}
              className="flex flex-col items-center justify-center w-20 text-sm"
            >
              <Icon size={40} color={tech.color} />
              <span className="mt-1 text-xs text-gray-700">{tech.title}</span>
            </div>
          );
        })}
      </Marquee>
      {!isMobile && <hr className="w-full h-15 border-none" />}

      <Marquee
        reverse
        pauseOnHover
        className="[--duration:20s]"
        vertical={isMobile}
      >
        {secondRow.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.title}
              className="flex flex-col items-center justify-center w-20 text-sm"
            >
              <Icon size={40} color={tech.color} />
              <span className="mt-1 text-xs text-gray-700">{tech.title}</span>
            </div>
          );
        })}
      </Marquee>
      {isMobile ? (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </>
      )}
    </div>
  );
};

export default TechStacks;
