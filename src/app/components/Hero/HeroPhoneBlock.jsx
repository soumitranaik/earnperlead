"use client"

import React, { useEffect, useRef } from "react";
import image from "../../../../public/images/phone.png";
// import video from "../../../../public/videos/video3.webm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroPhoneBlock = () => {
  const laptopRef = useRef(null);

  useEffect(() => {
    const intro = () => {
      const tl = gsap.timeline();
      tl.fromTo(
        laptopRef.current,
        {
          y: 200,
        },
        {
          y: 0,
          duration: 1,
        }
      );
      return tl;
    };
    const stopTrigger = () => {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: laptopRef.current,
          start: "top top",
          end: "+=800",
          pin: true,
          scrub: true,
        },
      });
      tl.to(laptopRef.current,{ scale:1.2},{scale:"+=0.2"} );
      tl.to('.hero-container', {backgroundColor: "#000000"}, {duration: 0.25});
      return tl;
    };
    const master = gsap.timeline();
    master.add(intro());
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1000);
  }, []);

  return (
    <div className="hero-laptop-block" ref={laptopRef}>
      <div
        className="hero-laptop-template"
        style={{ backgroundImage: "url('/images/phone.png')" }}
      >
        <video
          className="collage-element"
          autoPlay
          playsInline=""
          webkit-playsinline=""
          loop
          src="/videos/video3.mp4"
        />
      </div>
    </div>
  );
};

export default HeroPhoneBlock;
