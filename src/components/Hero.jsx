import React from "react";
import Bike1 from "../assets/out-2.png";

const Hero = () => {
  return (
    <div id="Hero" className="h-screen relative">
      {/* Mobile */}

      <div className="absolute sm:hidden   left-[20px] sm:left-[55px]">
        <div className="relative z-10 top-[210px] ">
          <span className="text-yellow-500 xs:text-5xl  ss:text-5xl  sm:text-6xl   font-medium font-['Fredoka'] uppercase leading-[48px] tracking-[2.88px]">
            A
          </span>
          <span className="text-yellow-500 xs:text-5xl ss:text-5xl  sm:text-6xl   font-medium font-['Fredoka'] lowercase leading-[48px] tracking-[2.88px]">
            i
          </span>
          <span className="text-yellow-500 xs:text-5xl ss:text-5xl  sm:text-6xl   font-medium font-['Fredoka'] uppercase leading-[48px] tracking-[2.88px]">
            RYY Rides
          </span>

          <span className="text-yellow-400 text-opacity-80 xs:text-5xl ss:text-5xl  sm:text-6xl   font-medium font-['Fredoka'] uppercase leading-[48px] tracking-[2.88px]">
            !<br />
          </span>
          <span className="text-white xs:text-2xl ss:text-3xl sm:text-4xl  font-medium font-['Fredoka'] uppercase leading-[48px] tracking-widest">
            Rent-Return-Repete
          </span>
          <span className="text-white text-[45px] font-medium font-['Fredoka'] capitalize leading-[48px] tracking-[5.40px]">
            .
          </span>
        </div>

        <div className=" cursor-pointer sm:hidden relative top-[240px]   z-10">
          <div className="w-[145px] h-[38px] px-4 py-5 bg-white rounded-md justify-center items-center gap-3.5 inline-flex">
            <div className="text-black text-sm font-semibold font-['Inter'] leading-[18px]">
              Contact Now
            </div>
          </div>
        </div>
      </div>



 {/* Screen */}
      <div className=" xs:hidden ss:hidden h-[135px] left-[46px]  lg:left-[90px]  top-[344px] lg:top-[254px] z-20 absolute">

        <div className="w-[483.30px] text-yellow-500 left-0 top-0 absolute text-[54px] font-medium font-['Fredoka'] uppercase tracking-[6.48px]">
          AiRYY Rides!
        </div>
        <div className="w-[565px] left-0 top-[112px] absolute text-[37px] font-medium font-['Fredoka'] uppercase leading-[23px] tracking-[4.44px]">
          Rent, Return, Repeat.
        </div>
      </div>



     
      <div className="xs:hidden ss:hidden w-[595px] h-[49px] left-[46px] md:left-[86px] top-[539px] lg:top-[439px] z-20 absolute text-white text-[19px] font-semibold font-['Inter'] leading-[18px]">
        Your journey, your vehicle – experience travel like never before.
        <br />
      </div>
      <div className="xs:hidden cursor-pointer ss:hidden px-4 py-2.5  left-[46px] md:left-[86px] top-[627px] lg:top-[527px] absolute z-20 rounded-[10px] border-2 border-yellow-500 justify-start items-start gap-2 inline-flex">
        <div className="text-yellow-400 text-[15px] font-semibold font-['Inter'] leading-[18px]">
          Learn More
        </div>
      </div>



      {/* Image and gradient background */}
      <div className="xs:left-[35vw] ss:left-[43vw] sm:left-[20vw] lg:left-[48vw]  xl:-bottom-[30vh]  -bottom-[60vh]   relative  sm:-bottom-[48vh] lg:-bottom-[40vh]  xl:left-[60vw]">
        <img
          className="xs:w-[22rem] xs:h-[20rem] ss:w-[22rem] ss:h-[20rem]  sm:w-[1115px] sm:h-[785px]  lg:w-[615px] lg:h-[485px]   z-10" // Increased z-index for the image
          alt="Activas"
          src={Bike1}
          style={{ borderRadius: 9999, position: "absolute" }}
        />

   
        <div className=" absolute xs:-left-[45vw] xs:-top-[20vh] ss:-left-[45vw] ss:-top-[18vh]  sm:-left-[20vw] sm:-top-[15vh] xl:-top-[25ch]  -z-10">
          <div
            className="absolute h-[1000px] xl:h-[1300px] w-[1450px]  sm:h-[130rem] sm:w-[205rem] bg-gradient-to-b from-yellow-400 via-transparent to-transparent rounded-[743.5px/595.5px]"
            style={{
              position: "relative",
            }}
          />
        </div>
      </div>



          {/* Screen Image */}



    </div>
  );
};

export default Hero;
