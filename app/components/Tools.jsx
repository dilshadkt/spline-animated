"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Technologies = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const items = itemsRef.current;

    // Ensure container and items exist
    if (!container || !items.length) return;

    const itemWidth = container.offsetWidth / 3; // Width of each item
    const totalScrollWidth = (items.length - 1) * itemWidth;

    // Set up the horizontal scrolling
    gsap.to(items, {
      x: -totalScrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "center center",
        end: () => `+=${totalScrollWidth}`,
        pin: true,
        scrub: 1.5,
        snap: 1 / (items.length - 1),
        // markers: true, // Uncomment to debug ScrollTrigger
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleItemRef = (index, element) => {
    itemsRef.current[index] = element;
  };

  return (
    <>
      <div className="px-10 ">
        <p className="font-circular-web bento-title text-lg text-blue-50">
          Technologies We Master
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
      </div>
      <div
        className="h-[60vh]  bg-black overflow-hidden"
        ref={containerRef}
        style={{ position: "relative" }} // Ensure proper positioning
      >
        <div className="flex h-full items-center">
          {[
            {
              icon: "javascript.png",
              title: "Node Js",
            },
            {
              icon: "flutter.png",
              title: "Flutter",
            },
            {
              icon: "react.png",
              title: "Flutter",
            },
            {
              icon: "laravel-framework.png",
              title: "Laravel",
            },
            {
              icon: "vue.png",
              title: "Android",
            },
            {
              icon: "python.png",
              title: "Python",
            },
            {
              icon: "wordpress.png",
              title: "Python",
            },
            {
              icon: "tailwind.png",
              title: "Python",
            },
            {
              icon: "angularjs.png",
              title: "Python",
            },
            {
              icon: "android.png",
              title: "Python",
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(element) => handleItemRef(index, element)}
              className="flex-shrink-0 h-2/3 rounded-full w-full md:w-1/3 backdrop-blur-lg mx-4 p-4 flex flex-col items-center justify-center"
            >
              <div className="flex items-center ">
                <img
                  src={`/tools/${item.icon}`}
                  alt={item.title}
                  className="h-28 w-28"
                />
                <div className="flex flex-col bento-title special-font ml-4  text-[3rem] text-white">
                  <b>{item.title}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Technologies;
