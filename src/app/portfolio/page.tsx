import Header from "@/components/layout/Header";
import MainContainer from "@/components/main/MainContainer";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

const Portfolio = () => {
  return (
    <>
      <Header />
      <MainContainer />
      <Footer />
    </>
  );
};

export default Portfolio;
