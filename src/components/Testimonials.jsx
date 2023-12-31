import React, { useEffect, useState, useRef } from "react";
import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
import { monials } from "../Monials";
const BlockquoteComponent = ({ monial, index }) => {
  return (
    <div className="p-10 keen-slider__slide text-black flex flex-row justify-between">
      <div className="flex flex-col h-60 justify-between">
        {/* text */}
        <span className="text-black text-[40px] font-bold font-['Judson'] leading-tight">
          “
        </span>
        {/* button */}
        <div className="text-justify lg:text-2xl overflow-clip w-44 sm:w-80 lg:w-full lg:overflow-visible lg:mb-20 mb-10">
          {monial.Discription}
        </div>
      </div>

      <div className="flex flex-col mt-12 ml-8 sm:ml-10 h-60 justify-between">
        {/* Image */}
        <img className="w-[64.13px] h-[70.24px] rounded-full" src="https://via.placeholder.com/54x70" />
        {/* name */}
        <div className="mb-28 sm:ml-2">{monial.name}</div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [animationDuration, setAnimationDuration] = useState(50000);
  const sliderRef = useRef(null);

  // Function to handle intersection observer callback
  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setAnimationDuration(50000000000);
    } else {
      setAnimationDuration(50000);
    }
  };
  useEffect(() => {
    // Creating an intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    // Observing the slider element
    observer.observe(sliderRef.current);

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    
    if (sliderRef.current) {
    const keenSlider = new KeenSlider("#keen-slider", {
      loop: true,

      renderMode: "performance",
      drag: true,

      created(s) {
        s.moveToIdx(5, true, { duration: animationDuration, easing: (t) => t });;
      },

      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      dragStart(s) {
        // Pause the slider animation when dragging starts
        s.pause();
      },
      dragEnd(s) {
        // Resume the slider animation when dragging ends
        s.unpause();
        // Ensure the slider is in the correct position after dragging ends
        const slideIndex = Math.round(
          s.details().progressNormalized * (s.details().size - 1)
        );
        s.moveToSlide(slideIndex);
      },
      slides: {
        origin: "center",
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 400px)": {
          slides: {
            origin: "auto",
            perView: 1,
            spacing: 32,
          },
        },
        "(min-width: 700px)": {
          slides: {
            origin: "auto",
            perView: 1,
            spacing: 32,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    const keenSliderPreviousDesktop = document.getElementById(
      "keen-slider-previous-desktop"
    );
    const keenSliderNextDesktop = document.getElementById(
      "keen-slider-next-desktop"
    );

    keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    keenSliderNext.addEventListener("click", () => keenSlider.next());

    keenSliderPreviousDesktop.addEventListener("click", () =>
      keenSlider.prev()
    );
    keenSliderNextDesktop.addEventListener("click", () => keenSlider.next());
    return () => {
      keenSlider.destroy();
    };
  }
  }, [animationDuration,sliderRef]);


  return (
    <div className="Testimonials -mt-60 lg:-mt-40 xl:mt-20 h-screen flex flex-col justify-center relative items-center ">
       <div className="relative opacity-30 ">

<svg className=" absolute -left-[14rem] ss:-left-[29rem] sm:-left-[29rem]  md:-left-[32rem] xl:-left-[48rem]  -top-20 -z-10   xs:w-[32rem]  ss:w-[50rem] sm:w-[55rem]  md:w-[65rem]  xl:w-[98rem] xl:h-[78rem]   "  viewBox="0 0 360 498" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M526.831 158.736C568.898 321.254 392.396 473.378 305 496C217.604 518.622 -126.432 321.253 -168.499 158.736C-210.566 -3.78159 205.023 -71.9455 292.418 -94.5674C379.814 -117.189 484.764 -3.78154 526.831 158.736Z" fill="url(#paint0_linear_143_585)"/>
<defs>
<linearGradient id="paint0_linear_143_585" x1="292.418" y1="-94.5674" x2="444.756" y2="493.961" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD600"/>
<stop offset="0.878674" stop-color="#0A0A09" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
</div>

      <div className="flex justify-start  w-96 xs:w-72 sm:mb-28  sm:w-[32rem] md:w-[48rem] ">
        
        <div className="w-[435.36px]   h-[186.95px] sm:w-[425.36px] xl:relative xl:-left-20 sm:h-[154.95px] text-white text-3xl sm:text-6xl lg:text-7xl flex-col font-semibold font-['Inter'] leading-none">
          <span className="relative lg:-left-2 ">Testimonials</span>
          <br />
          <div className="w-[983.28px]  h-[25.31px] text-white sm:text-5xl lg:text-6xl font-medium font-['Inter'] leading-10">
            What Our Riders Say
            <div className="w-[88vw] xl:w-[85vw] bottom-4 relative text-white mt-10 text-[15px] sm:text-[25px] xl:text-[28px]  font-medium font-['Inter'] leading-none">
              Don't just take our word for it hear from our satisfied riders who
              have experienced the joy of AiRYY Rides.
            </div>
          </div>
        </div>
      </div>

      {/* Card */}
      <link
          href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
          rel="stylesheet"
        />
        
      <div className="w-80 ss:w-96 h-80 sm:w-[32rem] md:w-[48rem] lg:w-[58rem]  bg-white rounded-[4rem]">
        <div
          onMouseLeave={() => {
            setAnimationDuration(50000);
          }}
          onMouseEnter={() => {
            setAnimationDuration(50000000000);
          }}
          id="keen-slider"
          ref={sliderRef}
          className="keen-slider  "
        >
          {/* Your card content goes here */}
          {monials.map((monial, index) => (
            <BlockquoteComponent key={index} index={index} monial={monial} />
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="hidden   lg:mt-8 lg:flex justify-center lg:gap-4">
        <button
          aria-label="Previous slide"
          id="keen-slider-previous-desktop"
          className="rounded-full  border border-[#FB9039] p-3  text-[#FB9039] transition hover:bg-[#FB9039] hover:text-white dark:text-black"
          style={{
            width: "52px",
            height: "52px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 rtl:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          aria-label="Next slide"
          id="keen-slider-next-desktop"
          className="rounded-full border border-[#FB9039] p-3  text-[#FB9039] transition hover:bg-[#FB9039] hover:text-white dark:text-black"
          style={{
            width: "52px",
            height: "52px",
          }}
        >
          <svg
            className="h-5 w-5 rtl:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      {/* Arrow 2 */}

      <div className="mt-8 flex justify-center gap-4 lg:hidden">
        <button
          aria-label="Previous slide"
          id="keen-slider-previous"
          className="rounded-full border border-[#FB9039] p-4 text-[#FB9039] transition hover:bg-[#FB9039] hover:text-white dark:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 rtl:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          aria-label="Next slide"
          id="keen-slider-next"
          className="rounded-full border border-[#FB9039] p-4 text-[#FB9039] transition hover:bg-[#FB9039] hover:text-white dark:text-black"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
