import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";

const App=() =>{
  return(
    <>
    <div className="text-blue-500"> 

      <Navbar/>
      <Hero />
      <About />
    </div>
    </>
  );
}
export default App;
