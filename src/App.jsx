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
<<<<<<< HEAD
=======

>>>>>>> 37f68c545358e86ea460dcf8f3ec97522272b92e
];

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Close sidebar on larger screens
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
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
    <div className="relative flex min-h-screen bg-[#0b0b0b]">
      {/* Mobile Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <Sidebar
        socialLinks={socialLinks}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
      />

      {/* Main Content */}
      <div
        className={`flex-1 w-full transition-all duration-300 ${
          !isMobile ? "lg:ml-64" : ""
        }`}
      >
        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            className="fixed top-4 right-4 z-50 p-3 bg-purple-600 rounded-lg text-white shadow-lg hover:bg-purple-700 transition-colors"
            onClick={toggleSidebar}
          >
            <CiMenuBurger size={24} />
          </button>
        )}

        <Hero />
      </div>
    </div>
  );
};

export default App;
