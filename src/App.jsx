// App.js
import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Hero from "./Components/Hero";
import LoadingScreen from "./Components/LoadingScreen";
import "./App.css";
import { CiMenuBurger } from "react-icons/ci";

const socialLinks = [
  { link: "https://www.behance.net/santoshsub", a: "Behance" },
  { link: "https://www.linkedin.com/in/santoshsubedi75/", a: "LinkedIn" },
  { link: "https://github.com/santosh-vault", a: "GitHub" },
  { link: "https://twitter.com/subediwrites", a: "Twitter" },
  { link: "https://www.instagram.com/santoshsub_75/", a: "Instagram" },
  { link: "https://santoshnart.netlify.app/", a: "Portfolio" },
];

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="relative flex min-h-screen">
      {/* Mobile overlay */}
      {isMobile && (
        <div
          className={`fixed inset-0 bg-black opacity-50 z-30 ${
            isSidebarOpen ? "block" : "hidden"
          }`}
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Sidebar - 25% width on desktop, full width overlay on mobile */}
      <Sidebar
        socialLinks={socialLinks}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
      />
      
      {/* Main content - 75% width on desktop, full width on mobile */}
      <div className={`${isMobile ? 'w-full' : 'w-3/4 ml-1/4'} min-h-screen`}>
        {isMobile && (
          <button
            className="text-white fixed top-4 right-4 z-40 p-3 bg-purple-800 rounded-full hover:bg-purple-600 transition-colors shadow-lg"
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
