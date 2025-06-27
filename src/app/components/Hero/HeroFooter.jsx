"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroFooter = () => {
  const ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        scrub: true,
      },
    });
    tl.to(".hero-container", { backgroundColor: "#ffffff", duration: 0.5 });
  }, []);

  return (
    <div ref={ref} className="hero-text-section">
      <h1 className="hero-text text-4xl">
        ₹2000 to ₹15000 per referral. Guaranteed. Your phone contacts just
        became your paycheck.
      </h1>
    </div>
  );
};

export default HeroFooter;
