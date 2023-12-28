import React, { useRef } from "react";
import Slider from "react-slick";

import BIke1 from "../assets/out-2.png"
import ActivaOne from "../assets/ActivaOne.png";
import ActivaTwo from "../assets/ActivaTwo.png";
import ActivaThree from "../assets/ActivaThree.png";
import ActivaFour from "../assets/ActivaFour.png";
import ActivaFive from "../assets/ActivaFive.png";

const ImageCarousel = () => {
  const sliderRef = useRef(null);
  const sliderImages = [
    BIke1,
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
      
      <div className="xs:w-[22rem] xs:h-[20rem] ss:w-[22rem] ss:h-[20rem]  sm:w-[1115px] sm:h-[785px]  lg:w-[615px] lg:h-[485px]   z-10" >
        <Slider ref={sliderRef} {...settings}>
          {sliderImages.map((image, index) => (

            <img
            
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              
            />
          ))}
        </Slider>
      </div>

  
    </div>
  );
};

export default ImageCarousel;
