import React, { useRef } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ActivaOne from "../assets/ActivaOne.png";
import ActivaTwo from "../assets/ActivaTwo.png";
import ActivaThree from "../assets/ActivaThree.png";
import ActivaFour from "../assets/ActivaFour.png";
import ActivaFive from "../assets/ActivaFive.png";

const ImageCarousel = () => {
  const sliderRef = useRef(null);
  const sliderImages = [
    ActivaTwo,
     ActivaThree ,
    ActivaFour,
    ActivaOne,
   
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="flex flex-row items-center justify-evenly">
      <button className="button mx-2" onClick={previous}>
        <KeyboardArrowLeftIcon />
      </button>
      <div className="w-[220px] mt-4 sm:w-96">
        <Slider ref={sliderRef} {...settings}>
          {sliderImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-[200px] sm:h-80 sm:w-96"
            />
          ))}
        </Slider>
      </div>

      <button className="button mx-2" onClick={next}>
        <KeyboardArrowRightIcon/>
      </button>
    </div>
  );
};

export default ImageCarousel;
