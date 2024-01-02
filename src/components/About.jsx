import React from 'react'

const About = () => {
  return (
    <div id="NewRootRoot" className="flex flex-row w-full items-start">
      <div
        id="About"
        className="overflow-hidden bg-black relative flex flex-row w-full font-['Inter'] items-start pt-[213px] px-[209px]"
      >
        <div
          id="Ellipse"
          className="w-4/6 h-[970px] bg-[linear-gradient(180deg,_#ffd600_0%,rgba(10,_10,_9,_0)_88%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-[-45px] left-[-54px] flex flex-col gap-24 items-start pl-64 py-64 rounded-[50%]"
        >
          <div className="text-5xl font-semibold leading-[16px] text-white w-1/1">
            About Us
          </div>
          <div className="text-xl font-semibold leading-[16px] text-white w-1/1">
            AiRYY Rides! Ride, Return, Repeat.
          </div>
        </div>
        <div
          id="Ellipse1"
          className="w-4/2 h-[1017px] bg-[linear-gradient(73deg,_rgba(17,_16,_15,_0.3)_13%,rgba(238,_200,_0,_0)_82%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-[-92px] left-[826px] flex flex-row justify-end items-start pt-[203px] px-16 rounded-[50%]"
        >
          <img
            src="https://file.rendit.io/n/rH5LwF78dqiwZ10YKfVp.png"
            alt="Vecteezypeopleworkingandmeetingillustration"
          />
        </div>
        <div className="text-justify text-xl leading-[23px] text-white relative w-2/5 mt-40 mb-[213px]">
          Welcome to AiRYY Rides, where we go beyond just providing bikes; we're
          dedicated to creating unforgettable experiences.Our commitment to
          sustainable urban mobility fuels our mission tooffer a diverse fleet of
          meticulously maintained bikes, ensuring that every AiRYY ride is not only
          smooth and safe but also packed with adventure. Visit us at Bhawarkua,
          Indore, and embark on a journey with AiRYY that transforms your commute
          into a memorable adventure. Get ready to explore the city with ease,
          style, and a touch of excitement.
          <br />
        </div>
      </div>
    </div>

  )
}

export default About
