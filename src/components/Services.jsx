import React from 'react'
import Fade from 'react-reveal/Fade'; 
import S1 from '../assets/S1.png';
import S2 from '../assets/S2.png';
import S3 from '../assets/S3.png';
const Services = () => {
  return (
    <div className="Services h-screen mt-20 relative  xs:w-full">
      {/* Parent container with opacity */}
      <div className="w-full h-[450px] bg-gradient-to-t opacity-20 from-black via-yellow-400 to-yellow-400 rounded-3xl flex items-center justify-right absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* This container has opacity, and the heading is outside it */}
      </div>

      {/* Heading outside the parent container with opacity */}
      <h1 className="text-white text-center font-poppins xs:text-[15px] ss:text-[20px] text-[35px] font-bold mb-4 md:mb-0 md:col-span-3">
        Why Choose AiRYY Rides?
      </h1>
      <Fade top>
        <div className="flex flex-row gap-10 items-center justify-center mt-16 xs:overflow-x-auto ss:overflow-x-auto xs:w-full">
          {/* Box 1 */}
          <div className="group xs:snap-center xs:w-[50px] xs:h-[70px] w-[250px] h-[327px]  px-[35px] py-[95px] bg-slate-50 hover:bg-gradient-to-t from-black to-amber-400 rounded-[30px] shadow flex-col justify-center items-center inline-flex transition-all duration-500">
            <div className="flex-col justify-center items-center gap-[35px] flex">
              <div className="self-stretch font-poppins text-center text-black text-[20px] font-bold">
                24/7 Service
              </div>
              <div className="flex-col justify-center items-center gap-[45px] flex">
                <div className="w-[162px] font-poppins h-[73px] text-black group-hover:text-white  text-base font-normal px-3 leading-6 text-justify">
                  24/7 Service: We are at your service 24/7, ensuring you can
                  embark on your adventure day or night.
                </div>
                <div className="px-2 py-2 bg-black rounded-md mt-8 border border-slate-50 justify-start items-start gap-2 inline-flex group-hover:bg-white transition-all duration-300">
                  <div className="text-white group-hover:text-black font-poppins  text-base font-semibold leading-[18px]">
                    Get Started Today
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="group xs:snap-center xs:w-[200px] xs:h-[270px] w-[250px] h-[327px] flex-col justify-center items-center gap-[25px] inline-flex bg-slate-50 hover:bg-gradient-to-t from-black to-amber-400 rounded-[30px] transition-all duration-500">
            <img className="xs:w-12 xs:h-12 w-20 h-20" src={S1} />
            <div className="text-neutral-700 group-hover:text-black text-[20px] font-bold font-poppins">
              Budget-Friendly
            </div>
            <div className="flex-col justify-center items-center gap-[35px] flex">
              <div className="xs:w-[220px] w-[262px] h-[73px] group-hover:text-white text-black text-base font-normal font-poppins px-6  leading-5 text-justify">
                Our budget-friendly choices make urban commuting affordable,
                ensuring you enjoy the thrill of riding without straining your
                finances.
              </div>
              <div className="px-4 py-2.5 rounded-[10px]  justify-start items-start gap-2 inline-flex">
                {/* <div className="text-pink-50 text-[15px] font-semibold font-['Inter'] leading-[18px]">
                  Learn More
                </div> */}
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="group xs:snap-center xs:w-[200px] xs:h-[270px] w-[250px] h-[327px] flex-col justify-center items-center gap-[25px] inline-flex bg-slate-50 hover:bg-gradient-to-t from-black to-amber-400 rounded-[30px] transition-all duration-500">
            <img className="xs:w-12 xs:h-12 w-20 h-20" src={S2} />
            <div className="text-neutral-700 group-hover:text-black text-[20px] font-bold font-poppins">
              Quality and Safety
            </div>
            <div className="flex-col justify-center items-center gap-[35px] flex">
              <div className="xs:w-[220px] w-[262px] h-[73px] group-hover:text-white text-black text-base font-normal font-poppins px-5  leading-5 text-justify">
                Prioritizing safety, our bikes undergo regular maintenance to
                guarantee a secure and worry-free riding experience.
              </div>
              <div className="px-4 py-2.5 rounded-[10px] justify-start items-start gap-2 inline-flex">
                {/* <div className="text-pink-50 text-[15px] font-semibold font-['Inter'] leading-[18px]">
                  Learn More
                </div> */}
              </div>
            </div>
          </div>

          {/* Box 4 */}
          <div className="group xs:snap-center xs:w-[200px] xs:h-[270px] w-[250px] h-[327px] flex-col justify-center items-center gap-[25px] inline-flex bg-slate-50 hover:bg-gradient-to-t from-black to-amber-400 rounded-[30px] transition-all duration-500">
            <img className="xs:w-12 xs:h-12 w-20 h-20" src={S3} />
            <div className="text-neutral-700 group-hover:text-black text-[20px] font-bold font-poppins">
              Easy Booking
            </div>
            <div className="flex-col justify-center items-center gap-[35px] flex">
              <div className="xs:w-[220px] w-[262px] h-[73px] group-hover:text-white text-black text-base font-normal font-poppins px-7  leading-5 text-justify">
                Easy Booking: Hassle-free online and offline booking with
                flexible rental options.
              </div>
              <div className="px-4 py-2.5 rounded-[10px]justify-start items-start gap-2 inline-flex">
                {/* <div className="text-pink-50 text-[15px] font-semibold font-['Inter'] leading-[18px]">
                  Learn More
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Services