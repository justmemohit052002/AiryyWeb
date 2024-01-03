import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Theme = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);
  const [isInitialRenderComplete, setIsInitialRenderComplete] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const isDarkMode =
      localStorage.theme === "dark" ||
      (localStorage.theme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsLightMode(!isDarkMode);

    // Apply the theme to the document
    document.documentElement.classList.toggle("dark", isDarkMode);

    // If the theme is explicitly set in local storage, make sure to update it
    if (localStorage.theme) {
      localStorage.theme = isDarkMode ? "dark" : "light";
    }

    // Mark the initial render as complete
    setIsInitialRenderComplete(true);
  }, []);

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
    <div className={`fixed z-[1001] ${scrolling ? "z-[10000]" : ""} flex justify-end items-center h-full cursor-pointer right-0 md:-mr-9 xl:-mr-1 ${scrolling ? "md:py-5 " : "md:py-0 "} bg-transparent`}>
      {isInitialRenderComplete && isLightMode !== undefined && ( // Check if the initial render is complete and isLightMode is defined
        isLightMode ? (
          <FaMoon
            onClick={toggleTheme}
            style={{ height: "50px" }}
            className={`xl:mx-5 text-black sm:mr-10`}
          />
        ) : (
          <FaSun
            onClick={toggleTheme}
            style={{ height: "50px" }}
            className={`xl:mx-5 text-[#FDB813] sm:mr-10`}
          />
        )
      )}
    </div>
  );
};

export default Theme;
