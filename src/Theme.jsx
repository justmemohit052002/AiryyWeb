import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import styled from "styled-components";

const Theme = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);
  const [isInitialRenderComplete, setIsInitialRenderComplete] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true); // Added state for home page check
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 720;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);


  useEffect(() => {
    // Your existing code...


    // Mark the initial render as complete
    setIsInitialRenderComplete(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    const newTheme = isLightMode ? "dark" : "light";
    localStorage.theme = newTheme;
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle("dark", !isLightMode);
  };

  const respectOsPreference = () => {
    localStorage.removeItem("theme");

    // Apply the theme based on the operating system preference
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsLightMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };





  return (
    <>
      <div className={`fixed z-[1001] ${scrolling ? "z-[10000000]" : ""} flex justify-end items-center h-full cursor-pointer right-0 md:-mr-9 xl:-mr-1 ${scrolling ? "md:py-5 " : "md:py-0 "} bg-transparent`}>
        {isInitialRenderComplete && isLightMode !== undefined && (
          isLightMode ? (
            <FaSun
              onClick={toggleTheme}
              style={{ height: "50px" }}
              className={`xl:mx-5 text-[#FDB813] sm:mr-10`}
            />
          ) : (
            <FaMoon
              onClick={toggleTheme}
              style={{ height: "50px" }}
              className={`xl:mx-5 text-black sm:mr-10`}
            />
          )
        )}
      </div>

      {/* {isHomePage && ( // Conditionally render the BsArrowUp based on the home page state
        <Wrapper >
          <a onClick={() => { scrollToSection('Nav') }} className={`top-btn fixed z-[1001] ${scrolling ? "z-[10000000]" : ""} text-white    flex justify-end items-end h-10 cursor-pointer right-0 bottom-10 md:-mr-9 xl:mr-0 ${scrolling ? "md:py-5 " : "md:py-0 "} bg-transparent`}>
            <BsArrowUp
              onClick={() => scrollToSection('Nav')}
              style={{ height: "15px" }}
              className="top-btn--icon "
            />
          </a>
        </Wrapper>
      )} */}
    </>
  );
};

const Wrapper = styled.section` 

  .top-btn {
    font-size: 2.4rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: #FDB813; 
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 50%;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    



    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: 768px) { 
    .top-btn {
      right: 0;
      left: 40%;
    }
  }
    
`;

export default Theme;
