import React, { useState, useEffect } from "react";

const Sidebar = ({ socialLinks, isOpen, toggleSidebar }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      className={`text-white fixed h-full max-w-64 mt-10 p-6 z-1 ${
        !isMobile || isOpen
          ? "translate-x-0"
          : "-translate-x-full md:translate-x-0"
      } transition-transform duration-300 ease-in-out`}
      style={{ backgroundColor: "#0b0b0b", zIndex: 1 }}
    >
      {isMobile && !isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 p-2"
          onClick={toggleSidebar}
        >
          Open Menu
        </button>
      )}
      <div className="">
        <div className="mb-4">
          <span
            className="bg-purple-600 ml-2 h-3 w-3 inline-block mr-2"
            style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
          ></span>
          <span
            className="bg-purple-600  h-3 w-3 inline-block mr-2"
            style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
          ></span>
          <h2 className="text-lg mb-2 text-gray-100 font-bold inline-block">
            Social Highways
          </h2>
        </div>

        <div className="grid gap-4">
          {socialLinks.map((socialLink, index) => (
            <a
              key={index}
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex items-center bg-purple-900 rounded p-3 transition-all duration-300 hover:bg-purple-700"
                style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
              >
                <span className="bg-gray-100 h-5 w-1 mr-2"></span>
                <span className="_blank">{socialLink.a}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className=" mt-10">
        <div className="">
          <h2 className="text-lg mb-2 font-bold text-gray-100">
            <span
              className="bg-purple-600 h-3 w-3 inline-block mr-2 "
              style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
            ></span>
            <span
              className="bg-purple-600 h-3 w-3 inline-block mr-2 "
              style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
            ></span>
            Contact
          </h2>
        </div>
        <p className="text-gray-300 mb-1">
          Email me at{" "}
          <a href="mailto:santoshsub.33@gmail.com" className="text-purple-500">
            santoshsub.33@gmail.com
          </a>
        </p>
        <p className="text-gray-300">
          Bharatpur, 44200 <br />
          Nepal
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
