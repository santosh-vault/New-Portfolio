// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white py-4 mt-6 sm:mt-10 mx-1 sm:mx-0 rounded-lg sm:rounded-none"
      style={{ backgroundColor: "#0b0b0b" }}
    >
      <div className="container mx-auto text-center">
        <p className="text-xs sm:text-sm px-2">
          © {new Date().getFullYear()} Santosh. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm px-2">
          Designed by{" "}
          <a href="#" className="underline">
            Santosh
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
