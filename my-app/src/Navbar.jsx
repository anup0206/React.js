import React from "react";

const Navbar = () => {
  return (
    <div>
    <h1 className="text-3xl font-bold text-left py-4 bg-gray-800 text-white">
      Navbar
    </h1>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Dropdown</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    </div>
  );
};

export default Navbar;
