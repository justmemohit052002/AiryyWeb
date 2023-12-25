import React from "react";
import CanvasModel from "./3d/CanvasModel";

import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      <div className=" xs:hidden ss:hidden  md:flex  w-screen fixed z-1 p-8  flex-row items-center justify-between ">
        <CanvasModel />

        <div className=" flex flex-row gap-4 items-center ">
          <a href="#Hero">Home</a>
          <div>About</div>
          <a href="#Contact">Contact</a>
        </div>
      </div>

      <div className=" md:hidden    w-screen fixed z-1 p-8 flex flex-row items-center justify-between">
        {/* logo */}
        <div>AiRYY Rides</div>
        {/* menu */}
        <div>
          <CiMenuBurger size={26} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
