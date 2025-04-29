import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 px-4 flex items-center justify-between py-4">
      <h1 className="text-3xl font-bold text-white">Flowbite</h1>
      <ul className="flex flex-col md:flex-row md:space-x-6 items-start md:items-center">
        <li className="text-white text-lg py-2 md:py-0">
          <a href="#">Home</a>
        </li>
        <li className="text-white text-lg py-2 md:py-0">
          <a href="#">Dropdown</a>
        </li>
        <li className="text-white text-lg py-2 md:py-0">
          <a href="#">Services</a>
        </li>
        <li className="text-white text-lg py-2 md:py-0">
          <a href="#">Pricing</a>
        </li>
        <li className="text-white text-lg py-2 md:py-0">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
