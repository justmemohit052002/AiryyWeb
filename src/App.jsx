import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Bikes from "./components/Bikes";
import Footer from "./components/Footer";
import SmoothScroll from "smooth-scroll";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  return (
    <div>

      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Bikes />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;



// https://www.minimal.gallery
// https://www.darkmodedesign.com/
// https://www.awwwards.com/
// https://refero.design/
// https://stacksorted.com/