import React, { useState, useEffect } from "react";

const Sidebar = ({ socialLinks, isOpen, toggleSidebar, isMobile }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-[#0b0b0b] z-50 transition-transform duration-300 ease-in-out ${
        isMobile
          ? isOpen
            ? "translate-x-0 w-80"
            : "-translate-x-full w-80"
          : "translate-x-0 w-64"
      }`}
      style={{
        zIndex: isMobile ? 50 : 10,
      }}
    >
      <div className="p-6 h-full">
        {/* Mobile Close Button */}
        {isMobile && (
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={toggleSidebar}
          >
            ✕
          </button>
        )}

        <div className="mt-2">
          <div className="mb-2">
            <span
              className="bg-purple-600 ml-2 h-3 w-3 inline-block mr-2"
              style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
            ></span>
            <span
              className="bg-purple-600 h-3 w-3 inline-block mr-2"
              style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
            ></span>
            <h2 className="text-lg mb-4 text-gray-100 font-bold inline-block">
              Social Highways
            </h2>
          </div>

          <div className="grid gap-3">
            {socialLinks.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="flex items-center bg-purple-900 rounded-lg p-3 transition-all duration-300 hover:bg-purple-700"
                  style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
                >
                  <span className="bg-gray-100 h-5 w-1 mr-3"></span>
                  <span className="text-sm text-gray-50 md:text-base">
                    {socialLink.a}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-100">
              <span
                className="bg-purple-600 h-3 w-3 inline-block mr-2"
                style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
              ></span>
              <span
                className="bg-purple-600 h-3 w-3 inline-block mr-2"
                style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
              ></span>
              Contact
            </h2>
          </div>
          <p className="text-gray-300 mb-2 text-sm">
            Email me at{" "}
            <a
              href="mailto:santoshsub.33@gmail.com"
              className="text-purple-500 hover:text-purple-400"
            >
              santoshsub.33@gmail.com
            </a>
          </p>
          <p className="text-gray-300 text-sm">
            Bharatpur, 44200 <br />
            Nepal
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
