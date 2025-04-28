import React from "react";

const Navbar = () => {
  return (
    <div>
    
    <ul >
        <h1 className="text-3xl font-bold text-left py-4 bg-gray-800 text-white">
      Flowbite
        </h1>
        <li className="text-3xl font-bold text-right py-2bg-gray-800 text-white"><a href="#">Home</a></li>
        <li className="text-3xl font-bold text-right py-2bg-gray-800 text-white"><a href="#">Dropdown</a></li>
        <li className="text-3xl font-bold text-right py-2bg-gray-800 text-white"><a href="#">Services</a></li>
        <li className="text-3xl font-bold text-right py-2bg-gray-800 text-white"><a href="#">Pricing</a></li>
        <li className="text-3xl font-bold text-right py-2bg-gray-800 text-white"><a href="#">Contact</a></li>
    </ul>
    </div>
  );
};

export default Navbar;
