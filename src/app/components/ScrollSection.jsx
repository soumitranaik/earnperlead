"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const imagesRef = useRef([]);

  const content = [
    {
      title: "Know Someone? Get Paid",
      description:
        "People around you need websites and apps built. You know us, we build amazing stuff. Connect us = you get rich. It's that easy.",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
    },
    {
      title: "Your Phone = Your ATM",
      description:
        "Everyone in your contact list knows someone who needs a website, app, or software. Make the intro, we do the work, you collect the cash.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
    },
    {
      title: "Find Leads, Earn Big",
      description:
        "Businesses everywhere need better websites and apps. Find them, send them to us, and collect massive commissions when they sign up.",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
    },
    {
      title: "Hunt For Leads, Cash In",
      description:
        "Businesses with terrible websites are money waiting to happen. Find them, send them our way, and earn huge commissions for your detective work.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = imagesRef.current;

      // Set initial states
      gsap.set(images.slice(1), { opacity: 0, scale: 1.1 });

      // Create individual ScrollTriggers for each content section
      content.forEach((_, index) => {
        if (index > 0) {
          gsap.to(images[index - 1], {
            opacity: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: leftColumnRef.current.children[index],
              start: "top center",
              end: "center center",
              scrub: true,
            },
          });

          gsap.to(images[index], {
            opacity: 1,
            scrollTrigger: {
              trigger: leftColumnRef.current.children[index],
              start: "top center",
              end: "center center",
              scrub: true,
            },
          });
          gsap.fromTo(
            images[index],
            { opacity: 0, scale: 1.1 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              scrollTrigger: {
                trigger: leftColumnRef.current.children[index],
                start: "top center",
                end: "center center",
                scrub: 1,
              },
            }
          );
        }
      });

      // Main pinning ScrollTrigger
      ScrollTrigger.create({
        trigger: rightColumnRef.current,
        start: "top top",
        end: () =>
          `+=${leftColumnRef.current.scrollHeight - window.innerHeight}`,
        pin: true,
        anticipatePin: 1,
        // markers: true // uncomment for debugging
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white">
      <div ref={sectionRef} className="relative">
        <div className="w-screen mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Scrolling Content */}
            <div ref={leftColumnRef} className="px-12 py-20">
              {content.map((item, index) => (
                <div key={index} className="h-screen flex items-center mb-20">
                  <div className="space-y-6">
                    <h2 className="text-6xl italic font-[700] uppercase text-gray-900  leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-xl text-gray-700 font-[200] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Sticky Images */}
            <div
              ref={rightColumnRef}
              className="relative h-screen sticky top-0"
            >
              <div className="relative w-full h-full">
                {content.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => (imagesRef.current[index] = el)}
                    className="absolute inset-0 overflow-hidden shadow-2xl"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
