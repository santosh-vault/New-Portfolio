// App.js
import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Hero from "./Components/Hero";
import "./App.css";
import { CiMenuBurger } from "react-icons/ci";

const socialLinks = [
  { link: "https://www.behance.net/santoshsub", a: "Behance" },
  { link: "https://www.linkedin.com/in/santoshsubedi75/", a: "LinkedIn" },
  { link: "https://github.com/santosh-vault", a: "GitHub" },
  { link: "https://twitter.com/subediwrites", a: "Twitter" },
  { link: "https://www.instagram.com/santoshsub_75/", a: "Instagram" },

];

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex">
      <div
        className={`fixed inset-0 bg-black opacity-10 ${
          isSidebarOpen || !isMobile ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      <Sidebar
        socialLinks={socialLinks}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex-1">
        {isMobile && (
          <button
            className="md:hidden text-white fixed top-14 right-4 z-50 p-2"
            onClick={toggleSidebar}
          >
            <CiMenuBurger />
          </button>
        )}
        <Hero />
      </div>
    </div>
  );
};

export default App;
