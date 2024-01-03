import React from 'react'
import Fade from "react-reveal/Fade"; 

const About = () => {
  return (
    <div id="NewRootRoot" className="flex flex-row w-full  snap-center snap-mandatory   items-start">
      <div
        id="About"
        className="overflow-hidden     relative flex flex-row w-full font-['Inter'] items-start pt-[0px] px-[209px]"
      >
        <div
          id="Ellipse"
          className="w-4/6 h-[870px] bg-[linear-gradient(180deg,_#ffd600_0%,rgba(10,_10,_9,_0)_88%)] opacity-60 bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute  left-[-84px] flex flex-col gap-24 items-start top-[7.6rem] rounded-[50%]"
        ></div>
        <div
          id="Ellipse1"
          className="w-[45rem] h-[1017px] bg-[linear-gradient(73deg,_rgba(17,_16,_15,_0.3)_13%,rgba(238,_200,_0,_0)_82%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-[7.6rem] left-[866px] flex flex-row justify-end items-start pt-[203px] px-16 rounded-[50%]"
        >
          <Fade right>
            <img
              className="-mt-14"
              src="https://file.rendit.io/n/rH5LwF78dqiwZ10YKfVp.png"
              alt="Vecteezypeopleworkingandmeetingillustration"
            />
          </Fade>
        </div>
        <Fade left>
          <div className="text-justify text-xl font-poppins leading-[23px] dark:text-white relative w-2/5 mt-40 mb-[213px]">
            <div className="text-3xl font-poppins font-bold leading-[36px] dark:text-gray-300 w-1/1">
              About Us
            </div>
            <div className="text-2xl font-bold font-poppins leading-[56px] dark:text-gray-300 w-1/1">
              AiRYY Rides! Ride, Return, Repeat.
            </div>
            <p className="leading-[30px]">
              {" "}
              Welcome to AiRYY Rides, where we go beyond just providing bikes;
              we're dedicated to creating unforgettable experiences.Our
              commitment to sustainable urban mobility fuels our mission tooffer
              a diverse fleet of meticulously maintained bikes, ensuring that
              every AiRYY ride is not only smooth and safe but also packed with
              adventure. Visit us at Bhawarkua, Indore, and embark on a journey
              with AiRYY that transforms your commute into a memorable
              adventure. Get ready to explore the city with ease, style, and a
              touch of excitement.
            </p>

            <br />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About
