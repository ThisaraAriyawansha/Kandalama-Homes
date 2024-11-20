import React from "react";

const Navbar = () => {
  return (
    <div className="text-white bg-gray-900">
      <nav
        className="flex items-center justify-between px-8 py-4 text-black bg-white shadow-md"
        style={{
          width: "768px", // Set the width to 100% to ensure it spans the full screen
          height: "100px", // Set the height to 100px
          top: "0", // Position the navbar at the top of the screen
          right: "0",
          position: "fixed", // Fix the navbar at the top of the page
          borderBottomLeftRadius: "345px", // Apply the bottom-left border radius
          zIndex: "1000", // Ensure navbar stays above other content
          fontFamily: "'Poppins', sans-serif", // Apply the Poppins font
          fontWeight: "300", // Set font weight to 300
          fontSize: "24px", // Set font size to 24px
          lineHeight: "36px", // Set line height to 36px
        }}
      >
        {/* Left side content can go here if needed, like a logo */}
        <ul className="flex ml-auto space-x-6 text-lg font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-gray-700"
              style={{ color: "#000000" }} // Set link color to #000000 (black)
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-gray-700"
              style={{ color: "#000000" }} // Set link color to #000000 (black)
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-700"
              style={{ color: "#000000" }} // Set link color to #000000 (black)
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-700"
              style={{ color: "#000000" }} // Set link color to #000000 (black)
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-700"
              style={{ color: "#000000" }} // Set link color to #000000 (black)
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
