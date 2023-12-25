  import React from "react";
  import Bike1 from "../assets/out-2.png";

  const Hero = () => {
    return (
      <div id="Hero" className="bg-black text-white h-screen relative">
        {/* text */}

        <div className="absolute left-[20px]">
          <div className="relative  top-[210px]">
            <span className="text-yellow-500 text-2xl font-medium font-['Fredoka'] uppercase leading-[48px] tracking-[2.88px]">
              A
            </span>
            <span className="text-yellow-500 text-2xl font-medium font-['Fredoka'] lowercase leading-[48px] tracking-[2.88px]">
              i
            </span>
            <span className="text-yellow-500 text-2xl font-medium font-['Fredoka'] uppercase leading-[48px] tracking-[2.88px]">
              RYY Rides
            </span>
            <span className="text-white text-2xl font-medium font-['Fredoka'] uppercase leading-[48px] tracking-[2.88px]">
              {" "}
            </span>
            <span className="text-yellow-400 text-opacity-80 text-2xl font-medium font-['Fredoka'] uppercase leading-[48px] tracking-[2.88px]">
              !<br />
            </span>
            <span className="text-white text-xl font-medium font-['Fredoka'] uppercase leading-[48px] tracking-widest">
              Rent-Return-Repete
            </span>
            <span className="text-white text-[45px] font-medium font-['Fredoka'] capitalize leading-[48px] tracking-[5.40px]">
              .
            </span>
          </div>
          <div className="relative top-[240px] z-10">
          <div className="w-[145px] h-[38px] px-4 py-5 bg-white rounded-md justify-center items-center gap-3.5 inline-flex">
            <div className="text-black text-sm font-semibold font-['Inter'] leading-[18px]">
              Contact Now
            </div>
          </div>
        </div>
      </div>

      {/* Image and gradient background */}
      <div className="w-screen left-[25vw] top-[23.5rem] relative">
        <img
          className="xs:w-[22rem] xs:h-[20rem] z-20" // Increased z-index for the image
          alt="Activas"
          src={Bike1}
          style={{ borderRadius: 9999, position: "absolute" }}
        />
        <div className="absolute xs:-left-[45vw] xs:-top-[18vh] z-1">
          <div
            className="absolute h-[1000px] w-[1450px] bg-gradient-to-b from-yellow-400 via-transparent to-transparent rounded-[743.5px/595.5px]"
            style={{
              position: "relative",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;