import React from "react";
import luffy from "./assets/luffy.jpg";
const About = () => {
    return (
      <section className="py-12 px-4">
        <div className="max-w-5xl  mx-auto flex items-start space-x-8">
          <div className="w-1/3">
            <img
              src={luffy}
              alt="Profile"
              className="rounded-lg border-4 border-white-400 h-96 w-full object-cover"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-4">React Developer</h2>
            <p className="text-gray-400 mb-6">
              I'm a React developer with a strong interest in front-end and back-end technologies. My area of expertise is creating minimal and useful codes along with effective server-side systems to support them.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-400">Name:<br/> <span className="text-white">Monkey D. Luffy</span></p> <br/>
                <p className="text-gray-400">Location:<br/> <span className="text-white">East Blue</span></p>
                
              </div>
              <div>
              <p className="text-gray-400">Email: <br/><span className="text-white">luffytaro@gmail.com</span></p> <br/>
                <p className="text-gray-400">Availability:<br/> <span className="text-white">  Full-time</span></p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;