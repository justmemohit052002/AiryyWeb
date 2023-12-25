import React from "react";
import CanvasModel from "./3d/CanvasModel";

import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      <div className=" xs:hidden   md:flex  w-screen fixed z-20 text-white p-8  flex-row items-center justify-between ">
        <CanvasModel />

        <div className=" flex flex-row gap-4 items-center ">
          <a href="#Hero">Home</a>
          <div>About</div>
          <a href="#Contact">Contact</a>
        </div>
      </div>

      <div className="w-screen fixed z-10 text-white p-8 flex flex-row items-center justify-between">
        {/* logo */}
        <div>AiRYY Rides</div>
        {/* menu */}
        <div className="">
          <CiMenuBurger  size={24} width={'20px'} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
