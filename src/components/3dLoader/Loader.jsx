import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import "../../index.css"
import videos from "../../assets/airyylogo2.mp4";
const Loader = () => {
  const [loading, setloading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(
      {},
      {
        duration: 1.2,
        onComplete: () => {
          tl.to(".mini-loader", { scale: 0 });
          tl.to(".blinder", { scaleY: 0, stagger: 0.5, ease: "power3.out" });
          tl.eventCallback("onComplete", () => setloading(false));
        },
      }
    );
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      window.history.scrollRestoration = "manual";
      gsap.to(videoRef.current, { opacity: 1, duration: 1 });
      videoRef.current.play();
      videoRef.current.playbackRate = 0.5;
    } else {
      document.body.style.overflowY = "visible";
      gsap.to(videoRef.current, { opacity: 0, duration: 1 });
    }
  }, [loading]);

  return (
    <div className={`loader ${loading ? "z-[1000]" : "hidden"} h-screen`}>
      <div className="blinder-container">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="blinder"></div>
        ))}
      </div>
      <video
        ref={videoRef}
        autoPlay
        src={videos}
        loop
        muted
        className="video"
        style={{ opacity: 0 }}
      ></video>
    </div>
  );
};

export default Loader;
