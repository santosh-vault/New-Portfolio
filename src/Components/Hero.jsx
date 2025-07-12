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
      className="flex flex-col sliding-animation min-h-screen w-full"
      style={{ backgroundColor: "#0b0b0b", minHeight: "100vh" }}
    >
      <div className="flex-1">
        <div
          className="hero-image w-full relative"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="aspect-[16/9] sm:aspect-[18/9] md:aspect-[20/9] lg:aspect-[24/9] xl:aspect-[28/9] w-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
            <Navbar />
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8 lg:p-10 w-full">
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
