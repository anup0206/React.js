import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-gray-100 p-4 text-xl">
      <div className="text-2xl font-bold">
        <a href="/" aria-label="Portfolio Home">
          Portfolio
        </a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 transition-all duration-300`}
      >
        <li>
          <a
            href="#home"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors duration-200"
            aria-label="Home"
          >
            <FaHome /> Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors duration-200"
            aria-label="Services"
          >
            <GrServices /> Services
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors duration-200"
            aria-label="About"
          >
            <IoPersonOutline /> About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors duration-200"
            aria-label="Contact Us"
          >
            <IoMdContact /> Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;