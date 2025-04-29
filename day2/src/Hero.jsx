import React from "react";
import luffy from "./assets/luffy.jpg";

const Hero = () => {
  return (
    <div className="flex items-center justify-center p-15 text-2xl bg-gray-500 text-white">
      <div className="flex flex-col items-center">
        <img
          src={luffy}
          alt="Luffy"
          className="rounded-full w-[250px] h-[250px] object-cover mb-8 transform hover:scale-130 hover:shadow-2xl transition-all duration-300 ease-in-out"
        />
        <h1 className="text-center">React Developer</h1>
        <p className="text-center">
          Konne chuwa, ore da ore, Anupam! <br />
          "Experienced React developer building beautiful and user-friendly websites. I'm driven by innovation and creating seamless online experiences."
        </p>
        <div className="py-2 space-x-6 mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Explore Project
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;