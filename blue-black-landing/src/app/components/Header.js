"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons from react-icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  return (
    <header className="bg-blue-900 text-white py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and Text */}
        <div className="flex items-center space-x-3">
          <img src="/bb-icon.jpg" alt="Logo" className="h-10" />
          <h1
            className="text-md font-bold bg-gradient-to-r from-blue-400 via-blue-950 to-black bg-clip-text text-transparent animate-gradient"
          >
            BLUE BLACK
          </h1>
        </div>

        {/* Hamburger Icon for Mobile and Tablet */}
        <button
          className="block sm:block md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen
              ? "block bg-blue-950" // Show background when menu is open
              : "hidden"
          } absolute top-16 left-0 w-full sm:bg-blue-950 md:bg-transparent md:static md:w-auto md:flex md:space-x-3`}
        >
          <a
            href="#home"
            className="block px-5 py-2 sm:py-1 md:inline hover:text-orange-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-5 py-2 sm:py-1 md:inline hover:text-orange-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="block px-5 py-2 sm:py-1 md:inline hover:text-orange-300"
          >
            Projects
          </a>
          <a
            href="#team"
            className="block px-5 py-2 sm:py-1 md:inline hover:text-orange-300"
          >
            Team
          </a>
          <a
            href="#contact"
            className="block px-5 py-2 sm:py-1 md:inline hover:text-orange-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
