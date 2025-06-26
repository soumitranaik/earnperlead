"use client"

import React, { useEffect } from "react";
import gsap from "gsap";

const HeroHeader = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      }
    );
  });
  return (
    <div className="hero-text-section">
      <h1 className="hero-text text-6xl">Your Connections Are Worth Money – Start Earning Today</h1>
    </div>
  );
};

export default HeroHeader;
