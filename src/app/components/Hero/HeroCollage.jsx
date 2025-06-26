"use client"

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const photos = [
  {
    src: "https://lh3.googleusercontent.com/e6W12HucjyEIRg_nLzpW489zhl65yttWZZlU6IvG5CJe3wURC9tmcBCoHh8TU3-L0MmjGysnXYIG-dgyLsPFPMrzJIq0V3GmeKq03w=s0",
    title: "Image 1",
    description: "Description 1",
  },
  {
    src: "https://lh3.googleusercontent.com/WTVf7YDXhBKR_Mr48EPvuEjsU4zvSGsHl2yBp0S2EHv-a3LT6JqMvEdzxIqWOCV0lS0LuskC429JKYGvMWtohM36qpeeHCeWvhfv=s0",
    title: "Image 2",
    description: "Description 2",
  },
  {
    src: "https://lh3.googleusercontent.com/8-v56O_QtAGD8rHwrrzb1EFdxv3wauakHDxMfAO6Wd45EdAyOHEaGUw9S1RAOnld7juYQT43lY5bihOnKwiHe-E5UOBVxvNkCsk91w=s0",
    title: "Image 3",
    description: "Description 3",
  },
  {
    src: "https://lh3.googleusercontent.com/Qq1Xlfwa7QS9MWZOHe4G8NHPzbre9uJr8wa1FUXafR52FnCTn6v0PqAt9oIhKzoQNC95ZumfqPsbA-56NPKqBfSLn734K7bafSY0zYE=s0",
    title: "Image 4",
    description: "Description 4",
  },
];

const videos = [
  {
    src: "/videos/video1.mp4",
    title: "Video 1",
    description: "Description 1",
  },
  {
    src: "/videos/video2.mp4",
    title: "Video 1",
    description: "Description 1",
  },
];

const VideoElement = ({ src }) => {
  return (
    <div className="hero-element">
      <video
        className="collage-element"
        autoPlay
        playsInline=""
        webkitplaysinline=""
        loop
        muted
        src={src}
      />
    </div>
  );
};

const ImageElement = ({ src }) => {
  return (
    <div className="hero-element">
      <img className="collage-element" src={src} />
    </div>
  );
};

const HeroCollage = () => {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);

  const [leftVideo, rightVideo] = videos;
  console.log(rightVideo, "rightvideo");

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5,
    });

    tl.fromTo(
      ".hero-element",
      { y: 300 },
      {
        y: 0,
        duration: 1,
        delay: function (index) {
          return 0.2 * index;
        },
      }
    );
  }, []);

  return (
    <div className="hero-collage">
      <div className="left-column">
        {leftImages.map((leftImage, index) => {
          return <ImageElement key={index} src={leftImage.src} />;
        })}
        <VideoElement src={leftVideo.src} />
      </div>
      <div className="right-column">
        {rightImages.map((rightImage, index) => {
          return <ImageElement key={index} src={rightImage.src} />;
        })}
        <VideoElement src={rightVideo.src} />
      </div>
    </div>
  );
};

export default HeroCollage;
