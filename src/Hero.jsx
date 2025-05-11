import React from "react";

const Hero = () => {
  return (
    <section className="starry-bg h-[90.8vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4"> Orewa <br/>  <br/>
      React Developer</h1>
      <p className="text-xl mb-8">
        Creating minimal and useful codes that <br/> <span className="text-blue-400">inspire</span>
      </p>
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
          Explore My Work
        </button>
        <button className="border border-blue-400 text-blue-400 px-6 py-3 rounded-full hover:bg-blue-400 hover:text-white hover:scale-105 transition-transform duration-300">
          Let's Connect
        </button>
      </div>
    </section>
  );
};

export default Hero;
