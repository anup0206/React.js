import React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-4 border-b border-gray-700">
      <div className="w-full max-w-6xl flex justify-between items-center px-4">
        <div className="text-xl font-bold">MUGI WARA</div>
        <div className="space-x-6 flex justify-evenly ">
          <a href="#" className="flex items-center text-blue-400 hover:text-blue-300">
            <FaHome className="mr-2" /> Home
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-blue-300">
            <IoPersonOutline className="mr-2" /> About
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-blue-300">
            <FaAngleLeft className="mr-2" />
            <FaAngleRight  />
            Skills
            
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-300">Projects</a>
          <a href="#" className="flex items-center text-gray-300 hover:text-blue-300">
            <GrServices className="mr-2" /> Services
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-blue-300">
            <IoMdContact className="mr-2" /> Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;