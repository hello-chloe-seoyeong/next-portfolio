import Envelope from "@/components/envelope/Envelope";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open it",
};

const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <div className="font-noto-serif-display text-center space-y-3">
        <h1 className="text-2xl ">
          I&apos;ve prepared four postcards to share my story with you.
        </h1>
        <p className="text-muted-foreground mb-5">
          ✉️ Let&apos;s begin by opening the envelope.
        </p>
      </div>
      <Envelope />
    </div>
  );
};

export default Home;
