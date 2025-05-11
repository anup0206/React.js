import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skill  from "./Skill";

const App=() =>{
  return(
    <>
    <div className="text-blue-500"> 

      <Navbar/>
      <Hero />
      <About />
      <Skill />

    </div>
    </>
  );
}
export default App;
