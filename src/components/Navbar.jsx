import React from "react";
import CanvasModel from "./3dLogo/CanvasModel";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../assets/airryLogo.webp"
const Navbar = () => {
  // Scroll to the target section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className=" fixed z-[100]">
        <div className="xs:hidden bg-blend-color bg-no-repeat ss:hidden  sm:hidden absolute md:flex   md:left-[10px]    lg:left-[60px] xl:left-[20px] top-[20px] lg:top-[0px]  w-screen   z-[100] text-white md:p-8 lg:py-8 lg:px-12  flex-row items-center justify-between">
          <img className="w-24 bg-blend-color bg-no-repeat" src={Logo} alt=''/>
          

          <div className="flex flex-row gap-4 lg:gap-8 relative md:left-[8rem] sm:text-[1.7rem] md:text-3xl lg:text-xl  items-center">
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection("Hero")}
            >
              Home
            </a>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection("About")}
            >
              About
            </a>
            <a
              className="cursor-pointer"
              onClick={() => scrollToSection("Contact")}
            >
              Contact
            </a>
          </div>
          <div className="w-[292.61px]  md:left-[10rem] lg:left-[8rem] cursor-pointer  relative justify-start items-center gap-[25px] inline-flex">
            <div className="px-4 py-2.5 bg-white rounded-md justify-center items-center gap-2.5 flex">
              <div className="text-black text-sm font-semibold font-['Inter'] leading-[18px]">
                Contact Now
              </div>
            </div>
          </div>
        </div>






        

        <div className="md:hidden sm:flex xs:text-4xl ss:text-4xl sm:text-5xl w-screen fixed z-[100] bg-[#000]  text-white p-8 xs:flex xs:flex-row ss:flex ss:flex-row items-center justify-between">
          {/* logo */}
          <img className="w-24 bg-blend-color bg-no-repeat" src={Logo} alt=''/>
          {/* menu */}
          <div className="">
            <CiMenuBurger/>
          </div>
        </div>
      </div>

      
      
      
      <div className="xs:hidden ss:hidden sm:hidden  xl:hidden">
      <div className="w-[1487px] h-[1191px] left-[281px] top-[153px] absolute bg-gradient-to-b from-yellow-400 via-neutral-950 to-transparent rounded-full" />

      <div className="w-[872px] h-9 left-[76px] top-[55px] absolute justify-between items-center inline-flex">
        <div className="w-24 h-[44px] justify-center items-center flex">
        AiRYY Rides
        </div>
        
        <div className="justify-start items-center gap-[45px] flex">
          <div className="text-white text-base font-medium font-['Inter'] leading-none">
            Home
          </div>
          <div className="text-white text-base font-medium font-['Inter'] leading-none">
            About
          </div>
          <div className="text-white text-base font-medium font-['Inter'] leading-none">
            Contact
          </div>
        </div>
        <div className="justify-start items-center gap-[25px] flex">
          <div className="px-4 py-2.5 bg-white rounded-md justify-center items-center gap-2.5 flex">
            <div className="text-black text-sm font-semibold font-['Inter'] leading-[18px]">
              Contact Now
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
