import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 px-2">
      <ul className="flex flex-col md:flex-row md:space-x-4 items-start md:items-center">
        <h1 className="text-3xl font-bold text-left py-4 text-white w-full">
          Flowbite
        </h1>
        <li className="text-3xl font-bold text-right py-2 text-white w-full">
          <a href="#">Home</a>
        </li>
        <li className="text-3xl font-bold text-right py-2 text-white w-full">
          <a href="#">Dropdown</a>
        </li>
        <li className="text-3xl font-bold text-right py-2 text-white w-full">
          <a href="#">Services</a>
        </li>
        <li className="text-3xl font-bold text-right py-2 text-white w-full">
          <a href="#">Pricing</a>
        </li>
        <li className="text-3xl font-bold text-right py-2 text-white w-full">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
