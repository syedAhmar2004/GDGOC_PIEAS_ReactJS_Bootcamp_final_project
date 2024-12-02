import React, { useState } from 'react';
import heroDesk from '../assets/heroDesk.png'; 
import Footer from '../components/Footer';

function Section() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-white p-6 md:p-10 flex flex-col justify-center">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 w-full max-w-screen-xl mx-auto">
        
       
        <div className="relative w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <img
            src={heroDesk}
            alt="Hero Desk"
            className="w-4/5 md:w-3/4 lg:w-[500px] h-auto"
          />
        </div>

       
        <div className="w-full md:w-1/2 order-0 md:order-1">
          <h1 className="text-4xl md:text-7xl font-bold mb-2">Make</h1>
          <h1 className="text-4xl md:text-7xl font-bold mb-14">remote work</h1>

          <p className="text-gray-600 mb-14 text-lg md:text-xl">
            Get your team in sync, no matter your location. <br />
            Streamline processes, create team rituals, and <br /> watch productivity soar.
          </p>

          <button
            className={`px-8 py-3 text-lg md:text-xl rounded-xl text-white font-medium transition duration-300 ease-in-out ${
              isHovered ? 'bg-gray-800' : 'bg-black'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Learn more
          </button>

          <div className="mt-20">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
