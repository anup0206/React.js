import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 px-4">
      <ul className="flex flex-col md:flex-row md:space-x-4 items-start md:items-center">
        <h1 className="text-3xl font-bold text-left py-4 text-white w-full">
          Flowbite
        </h1>
        {["Home", "Dropdown", "Services", "Pricing", "Contact"].map((item, index) => (
          <li
            key={index}
            className="text-3xl font-bold text-right py-2 text-white w-full 
              hover:text-yellow-400 transition duration-300"
          >
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
