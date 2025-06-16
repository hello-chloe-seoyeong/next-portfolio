import Envelope from "@/components/envelope/Envelope";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open it",
};

const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Envelope />
    </div>
  );
};

export default Home;
