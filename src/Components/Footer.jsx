// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white py-6 md:py-8 mt-10 border-t border-gray-800"
      style={{ backgroundColor: "#0b0b0b" }}
    >
      <div className="container mx-auto text-center px-4">
        <p className="text-xs md:text-sm mb-2">
          © {new Date().getFullYear()} Santosh. All rights reserved.
        </p>
        <p className="text-xs md:text-sm">
          Designed by{" "}
          <a href="#" className="underline hover:text-purple-400 transition-colors">
            Santosh
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
