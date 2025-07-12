import React, { useState, useEffect } from "react";

const Sidebar = ({ socialLinks, isOpen, toggleSidebar, isMobile }) => {

  return (
    <aside
      className={`text-white z-40 ${
        isMobile 
          ? `fixed inset-y-0 left-0 w-80 max-w-[90vw] p-6 transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`
          : 'fixed left-0 top-0 w-1/4 h-full p-6'
      } ${
        isMobile && isOpen
          ? "translate-x-0"
          : ""
      }`}
      style={{ backgroundColor: "#0b0b0b" }}
    >
      <div className="h-full overflow-y-auto flex flex-col">
        <div className="mb-6">
          <span
            className="bg-purple-600 ml-2 h-3 w-3 inline-block mr-2"
            style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
          ></span>
          <span
            className="bg-purple-600 h-3 w-3 inline-block mr-2"
            style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
          ></span>
          <h2 className="text-lg mb-2 text-gray-100 font-bold inline-block">
            Social Highways
          </h2>
        </div>

        <div className="grid gap-4 flex-1">
          {socialLinks.map((socialLink, index) => (
            <a
              key={index}
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex items-center bg-purple-900 rounded p-3 transition-all duration-300 hover:bg-purple-700 text-base"
                style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
              >
                <span className="bg-gray-100 h-5 w-1 mr-2"></span>
                <span className="_blank">{socialLink.a}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-purple-800">
          <div>
            <h2 className="text-lg mb-2 font-bold text-gray-100">
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
          <p className="text-gray-300 mb-1 text-base">
            Email me at{" "}
            <a href="mailto:santoshsub.33@gmail.com" className="text-purple-500 break-all">
              santoshsub.33@gmail.com
            </a>
          </p>
          <p className="text-gray-300 text-base">
            Bharatpur, 44200 <br />
            Nepal
          </p>
        </div>
      </div>
    </aside>
  );
};
            <span
              className="bg-purple-600 h-2 w-2 md:h-3 md:w-3 inline-block mr-1 md:mr-2"
              style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
            ></span>
            <span
              className="bg-purple-600 h-2 w-2 md:h-3 md:w-3 inline-block mr-1 md:mr-2"
              style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
            ></span>
            Contact
          </h2>
        </div>
        <p className="text-gray-300 mb-1 text-sm md:text-base">
          Email me at{" "}
          <a href="mailto:santoshsub.33@gmail.com" className="text-purple-500 break-all">
            santoshsub.33@gmail.com
          </a>
        </p>
        <p className="text-gray-300 text-sm md:text-base">
          Bharatpur, 44200 <br />
          Nepal
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
