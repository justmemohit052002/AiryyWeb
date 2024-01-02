import React from "react";
import FooterImg from "../assets/FooterImg6.png";
import Zoom from "react-reveal/Zoom";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Twitter from '../assets/Twitter.png'
import Insta from '../assets/Insta.png'
import Fb from '../assets/Fb.png'
function Footer() {
  const gradientStyle = {
    background: "linear-gradient(to bottom, black, #1d1b1c)",
  };

  return (
    <div className="w-full h-3/6" style={gradientStyle}>
      <div className="ss:flex-col xs:flex-col flex flex-row items-center justify-around px-5">
        <div className="xs:flex xs:flex-col xs:justify-center xs:items-center">
          <h2 className="text-gray-300 font-poppins xs:text-[18px] font-medium">
            ARYY RIDES
          </h2>
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
          <h1 className="text-bold font-poppins ss:text-[18px] xs:text-[18px] text-[25px] border-yellow-200">
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
          <div className="flex flex-row  py-4">
            <span>
              <img
                src={Insta}
                alt="img Instagram"
                height={30}
                width={30}
                className="cursor-pointer"
              />
            </span>
            <span>
              {" "}
              <img
                src={Twitter}
                alt="img Twitter"
                height={30}
                width={30}
                className="cursor-pointer"
              />
            </span>
            <span>
              {" "}
              <img
                src={Fb}
                alt="img Facebook"
                height={30}
                width={30}
                className="cursor-pointer"
              />
            </span>
          </div>
        </div>
        <div>
          <h1 className=" ss:text-[14px] text-bold font-poppins   xs:text-[15px] text-[25px]">
            useful Links
          </h1>
          <ul>
            <li className="hover:underline cursor-pointer xs:text-[13px]">
              FAQ
            </li>
            <li className="hover:underline cursor-pointer xs:text-[13px]">
              Terms and Conditions
            </li>
            <li className="hover:underline cursor-pointer xs:text-[13px]">
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
