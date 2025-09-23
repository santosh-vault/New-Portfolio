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
      style={{ backgroundColor: "#0b0b0b" }}
    >
      <div className="flex-1 w-full">
        <div className="md:hidden">
          <Navbar />
        </div>

        {/* Hero Image Section */}
        <div className="hero-image relative w-full mb-2">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-auto object-contain max-h-[300px] md:max-h-[400px] lg:max-h-[500px]"
          />
          {/* Navbar overlay only on desktop */}
          <div className="hidden md:block absolute inset-0">
            <Navbar />
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 py-2 md:px-8 md:py-2 lg:px-12">
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
