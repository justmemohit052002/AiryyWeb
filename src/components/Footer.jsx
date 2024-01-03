import React from "react";
import FooterImg from "../assets/FooterImg6.png";
import Zoom from "react-reveal/Zoom";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import Logo from "../assets/airryLogo.webp";
function Footer() {
  const gradientStyle = {
    background: "linear-gradient(to bottom, black, #1d1b1c)",
  };

  return (
    <div id="Footer" className="w-full snap-center   h-3/6" style={gradientStyle}>
      <div className="ss:flex-col xs:flex-col flex flex-row items-center justify-around px-14">
        <div className="xs:flex xs:flex-col xs:justify-center xs:items-center">
        
              <div className="flex-auto">
                <a
                  className="cursor-pointer outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7"
                  onClick={() => scrollToSection("Hero")}
                >
                  <img
                    className="w-44 bg-blend-color bg-no-repeat"
                    src={Logo}
                    alt=""
                  />
                </a>
              </div>
          <h2 className="text-gray-300 font-poppins mt-1  xs:text-[18px] text-[20px] font-medium">
            Rent it now!
          </h2>
          <p className="text-gray-300  ss:text-[20px] ss:text-center  font-poppins mt-1 xs:hidden xs:text-[18px] text-[25px]">
            Explore the city with ease. Rent a bike today!
          </p>
        </div>
        <Zoom bottom>
          <img
            src={FooterImg}
            alt="Footer Img"
            className="rounded-2xl xs:flex xs:items-center xs:justify-center xs:mr-12"
            height={300}
            width={450}
          />
        </Zoom>
      </div>
      <div className="flex flex-row ss:ml-0 ss:px-4 xs:justify-between xs:ml-0 xs:px-8 xs:py-3 justify-around items-center ml-20 py-6">
        <div>
          <h1 className="text-bold font-poppins pb-2 ss:text-[18px] xs:text-[18px] text-[25px] border-yellow-200">
            Contact US
          </h1>
          <ul>
            <li>
              <PhoneInTalkOutlinedIcon className="text-yellow-400" /> 9826977757
            </li>
            <li>
              <AttachEmailOutlinedIcon className="text-yellow-400" />{" "}
              airyyrides@gmail.com
            </li>
            <li className="">
              <PlaceOutlinedIcon className="text-yellow-400" /> 160/4, Bholaram
              Ustad Marg, Indrapuri Colony, Bhanwar Kuwa, Indore, Madhya Pradesh
              452001
            </li>
          </ul>
          <div className="flex flex-row gap-4 h-[5rem]  py-4">
          <CiFacebook size={28}/>
            <RiTwitterXLine className="cursor-pointer" size={28} />
            <FaInstagram className="cursor-pointer" size={28} />
          </div>
        </div>
        <div>
          <h1 className=" ss:text-[14px] text-bold font-poppins pb-2  xs:text-[15px] text-[25px]">
            useful Links
          </h1>
          <ul>
            <li className="hover:underline cursor-pointer xs:text-[13px]">
              FAQ
            </li>
            <li className="hover:underline cursor-pointer xs:text-[13px]">
              Terms and Conditions
            </li>
            <li className="hover:underline pb-24 cursor-pointer xs:text-[13px]">
              Fee Policy
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
