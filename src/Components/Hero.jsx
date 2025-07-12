import React from "react";
import Navbar from "./Navbar";
import ProjectContainer from "./ProjectContainer";
import Footer from "./Footer";
import SkillContainer from "./SkillContainer";
import heroImage from "../assets/hero.png";
import About from "./About";
import Hire from "./Hire";
import GraphicsProject from "./GraphicsProject";

const Hero = () => {
  return (
    <section
      className="flex flex-col sliding-animation min-h-screen"
      style={{ backgroundColor: "#0b0b0b", minHeight: "100vh" }}
    >
      <div className="hidden md:block md:w-1/6 lg:w-1/5 xl:w-1/6" />
      <div className="flex-1">
        <div
          className="hero-image m-1 sm:m-2 md:m-0 w-full relative"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="aspect-[16/9] sm:aspect-[18/9] md:aspect-[21/9] lg:aspect-[28/9] xl:aspect-[32/9] w-full min-h-[180px] sm:min-h-[200px] md:min-h-[250px]">
            <Navbar />
          </div>
        </div>

        <div className="p-2 sm:p-4 md:p-6 lg:p-8">
          <ProjectContainer />
          <GraphicsProject />
          <SkillContainer />
          <Hire />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Hero;
