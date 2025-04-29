import React from "react";
import luffy from "./assets/luffy.jpg";

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 text-2xl bg-gray-800 text-gray-100">
      <div className="flex flex-col items-center max-w-2xl">
        <img
          src={luffy}
          alt="Luffy"
          className="rounded-full w-[250px] h-[250px] object-cover mb-8 transform hover:scale-130 hover:shadow-2xl transition-all duration-700 ease-in-out"
        />
        <h1 className="text-center text-4xl font-bold">React Developer</h1>
        <p className="text-center text-blue-300 mt-4">
          Konne chuwa, ore da ore, Anupam! <br />
          "Experienced React developer building beautiful and user-friendly websites. I'm driven by innovation and creating seamless online experiences."
        </p>
        <div className="py-4 space-x-6 mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-gray-100 font-bold py-2 px-6 rounded-full transition-colors duration-700">
            Explore Project
          </button>
          <button className="bg-amber-500 hover:bg-amber-600 text-gray-100 font-bold py-2 px-6 mb-2 rounded-full transition-colors duration-700">
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;