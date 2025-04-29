import React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";

const Navbar =()=>{
return(
    <nav className="flex justify-between item-center bg-gray-800 text-2xl p-4 text-white">
        <div className="">Portfolio</div>
        <ul className="flex justify-evenly  item-center space-x-8">
            <li ><a href="#" className="flex items-center gap-2 "> <FaHome />Home</a></li>
            <li ><a href="#" className="flex items-center gap-2"><GrServices /> Services</a></li>
            <li ><a href="#" className="flex items-center gap-2"><IoPersonOutline />About</a></li>
            <li ><a href="#" className="flex items-center gap-2"><IoMdContact />Contact us</a></li>
        </ul>
    </nav>
)

}
export default Navbar;