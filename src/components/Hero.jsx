import React from "react";
import Bike1 from "../assets/ActivaFive.png";
const Hero = () => {
  return (
    <div id="Hero" className="bg-black text-white h-screen">
      <div className="relative top-[100px]   ">
          <img
            className="w-56 flex relative top-[50vh] xs:left-[30%]  z-10"
            alt="Activas"
            src={Bike1}
          />
        <div className=" left-0 absolute top-0 w-[10px]">
          <div
            className="absolute h-[1000px]  w-[1000px] top-[180px]  bg-gradient-to-b from-yellow-400 via-transparent to-transparent"
            style={{
              borderRadius: "743.5px/595.5px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
