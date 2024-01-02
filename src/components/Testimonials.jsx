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
        <img
          className="w-[64.13px] h-[70.24px] rounded-full"
          src="https://via.placeholder.com/54x70"
        />
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
          s.moveToIdx(5, true, {
            duration: animationDuration,
            easing: (t) => t,
          });
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

      const keenSliderPrevious = document.getElementById(
        "keen-slider-previous"
      );
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
  }, [animationDuration, sliderRef]);

  return (
    <>
      <div id='Testimonials' className="Testimonials  flex flex-row justify-between items-center px-40">
        <div className="relative  top-0 left-60 right-0 -z-10 h-[400px] w-full">
          <svg
            className="absolute"
            width="1132"
            height="632"
            viewBox="0 0 1422 832"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1703.06 203.649C1780.49 502.793 1664.93 791.459 1444.94 848.402C1224.95 905.345 82.0719 713.38 4.63986 414.236C-72.7922 115.091 944.542 -177.952 1164.53 -234.896C1384.52 -291.839 1625.63 -95.4956 1703.06 203.649Z"
              fill="url(#paint0_linear_65_327)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_65_327"
                x1="1164.53"
                y1="-234.895"
                x2="1444.94"
                y2="848.402"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFD600" />
                <stop offset="0.878674" stop-color="#0A0A09" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* text */}
        <div className="flex relative right-72 bottom-40 ">
          <div className="text-white    font-poppins">
            <div className="flex flex-col font-poppins">
              <span className="xl:-left-24 text-[34px] font-poppins">
                Testimonials
              </span>
              <span className="xl:-left-24  text-[32px] font-poppins">
                What Our Riders Say.
              </span>
            </div>

            <div className="w-[300px]  h-[25.31px] text-white sm:text-5xl lg:text-2xl  font-poppins">
              <div className="text-white mt-8  sm:text-[25px] xl:text-[18px]   font-poppins leading-9 w-[250px] text-justify">
                Don't just take our word for it hear from our satisfied riders
                who have experienced the joy of AiRYY Rides.
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        {/* Card */}
        <link
          href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
          rel="stylesheet"
        />
        <div className="flex-col">
          <div className="w-[42rem]  bg-white rounded-[4rem]">
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
                <BlockquoteComponent
                  key={index}
                  index={index}
                  monial={monial}
                />
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden   lg:mt-8 lg:flex justify-center lg:gap-4">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous-desktop"
              className="rounded-full  border border-[#FFD600] p-3  text-[#FFD600] transition hover:bg-[#FFD600] hover:text-black dark:text-black"
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
              className="rounded-full border border-[#FFD600] p-3  text-[#FFD600] transition hover:bg-[#FFD600] hover:text-black dark:text-black"
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
      </div>
    </>
  );
};

export default Testimonials;