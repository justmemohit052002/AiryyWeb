import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const scrollRef = useRef(null);



  const [isVisible, setIsVisible] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  useEffect(() => {



    // Attach the scroll event listener to the ref
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Wrapper ref={scrollRef}>
      {isHomePage && (
        <a
          onClick={() => {
            scrollToSection("Nav");
          }}
          className={`top-btn fixed z-[1001] ${scrolling ? "z-[10000000]" : ""
            } text-white    flex justify-end items-end h-10 cursor-pointer right-0 bottom-10 md:-mr-9 xl:mr-0 ${scrolling ? "md:py-5 " : "md:py-0 "
            } bg-transparent`}
        >
          <FaArrowUp
            onClick={() => scrollToSection("Nav")}
            style={{ height: "18px" }}
            className="top-btn--icon "
          />
        </a>
      )}
    </Wrapper>
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

export default GoToTop;