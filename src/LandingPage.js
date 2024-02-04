import React from "react";
// import "animate.css";
import { HiChevronDoubleRight } from "react-icons/hi";
import landingImage from "./VijayJangal.png";
const LandingPage = ({ onExploreClick }) => {
    
  return (
    <div className="flex flex-col h-screen justify-center items-center animate__animated animate__zoomInDown">
      <div className="lg:text-8xl md:text-6xl sm:text-4xl font-bold mb-8">
        Welcome to My Website
      </div>
      <img
        src={landingImage}
        alt="Landing Image"
        className=" h-1/2 rounded-full"
      />
      <button
        onClick={onExploreClick}
        className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-16 animate-pulse"
      >
        Explore <HiChevronDoubleRight className="ml-2" />
      </button>
    </div>
  );
};

export default LandingPage;
