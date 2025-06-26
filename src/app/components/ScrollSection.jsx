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
      title: "Wedding Celebrations",
      description:
        "Transform your special day into an unforgettable celebration with our comprehensive wedding services. From intimate ceremonies to grand receptions, we handle every detail with precision and care.",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
    },
    {
      title: "Corporate Events",
      description:
        "Elevate your business gatherings with our professional corporate event management services. We create impactful experiences that align with your brand and objectives.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
    },
    {
      title: "Gourmet Catering",
      description:
        "Delight your guests with our exquisite culinary offerings. Our master chefs create memorable dining experiences using the finest ingredients and innovative techniques.",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
    },
    {
      title: "Birthday Parties",
      description:
        "Make every birthday celebration magical with our creative party planning services. We design unique experiences tailored to the birthday person's personality and preferences.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    },
    {
      title: "Festival Events",
      description:
        "Celebrate cultural festivals and special occasions with our authentic event management services. We honor traditions while adding modern flair to create meaningful experiences.",
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
    },
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
            }
          });

          gsap.to(images[index], {
            opacity: 1,
            scrollTrigger: {
              trigger: leftColumnRef.current.children[index],
              start: "top center",
              end: "center center",
              scrub: true,
            }
          });
          gsap.fromTo(images[index], 
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
              }
            }
          );
        }
      });

      // Main pinning ScrollTrigger
      ScrollTrigger.create({
        trigger: rightColumnRef.current,
        start: "top top",
        end: () => `+=${leftColumnRef.current.scrollHeight - window.innerHeight}`,
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
                    <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Sticky Images */}
            <div ref={rightColumnRef} className="relative h-screen sticky top-0">
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