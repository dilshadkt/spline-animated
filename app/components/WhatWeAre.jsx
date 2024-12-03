"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function WhatWeAre() {
  const squaresRef = useRef([]);
  const containersRef = useRef([]);

  // Clear refs to prevent duplicates
  squaresRef.current = [];
  containersRef.current = [];

  useEffect(() => {
    squaresRef.current.forEach((square, index) => {
      const container = containersRef.current[index];

      if (!square || !container) return;

      // GSAP timeline for hover effects
      const tl = gsap.timeline({ paused: true });

      tl.to(square, {
        scale: 4,
        rotationX: 0,
        rotationY: 0,
        transformPerspective: 700,
        opacity: 1,
        ease: "power2.out",
        duration: 0.7,
      });

      // Mouse move 3D rotation
      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const relativeX = (e.clientX - rect.left) / rect.width;
        const relativeY = (e.clientY - rect.top) / rect.height;

        // Calculate 3D tilt angles
        const tiltX = (relativeY - 0.5) * 40;
        const tiltY = (relativeX - 0.5) * -40;

        gsap.to(square, {
          rotationX: tiltX,
          rotationY: tiltY,
          scaleX: 6,
          scaleY: 5,
          transformPerspective: 700,
          ease: "power1.out",
          duration: 0.5,
        });

        if (!tl.isActive()) {
          tl.play();
        }
      };

      // Mouse leave reset
      const handleMouseLeave = () => {
        tl.reverse();

        gsap.to(square, {
          scaleX: 1,
          scaleY: 1,
          rotationX: 0,
          rotationY: 0,
          ease: "power2.out",
          duration: 0.8,
        });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const addSquareRef = (element) => {
    if (element && !squaresRef.current.includes(element)) {
      squaresRef.current.push(element);
    }
  };

  const addContainerRef = (element) => {
    if (element && !containersRef.current.includes(element)) {
      containersRef.current.push(element);
    }
  };

  return (
    <div
      className="font-extrabold font-zentry text-[3rem] md:text-[6rem] flex flex-col
     items-center justify-center h-screen"
    >
      <span className="leading-[80px] tracking-tight md:tracking-[.5rem]">
        We're building
      </span>
      <span className="leading-[80px] tracking-tight md:tracking-[.5rem] flex items-center relative">
        a new
        <div
          ref={addContainerRef}
          className="w-12 bg-black h-12 cursor-pointer relative flex items-center justify-center group mx-2"
        >
          <div
            ref={addSquareRef}
            className="absolute bg-black w-12 h-12 overflow-hidden rounded-sm group"
          >
            <img
              src="hero4.jpg"
              alt=""
              className="w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300 object-cover"
            />
          </div>
        </div>
        reality
      </span>
      <span className="leading-[80px] tracking-tight md:tracking-[.5rem]">
        that rewards
      </span>
      <div className="leading-[80px] tracking-tight md:tracking-[.5rem] flex items-center">
        players
        <div
          ref={addContainerRef}
          className="w-12 bg-black h-12 cursor-pointer relative flex items-center justify-center group mx-2"
        >
          <div
            ref={addSquareRef}
            className="absolute bg-black w-12 h-12 overflow-hidden rounded-sm group"
          >
            <img
              src="hero3.jpg"
              alt=""
              className="w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300 object-cover"
            />
          </div>
        </div>
        and
      </div>
      <span className="leading-[80px] tracking-tight md:tracking-[.5rem]">
        encourages
      </span>
      <span className="leading-[80px] tracking-tight md:tracking-[.5rem]">
        communities
      </span>
      <div className="leading-[80px] flex items-center tracking-tight md:tracking-[.5rem]">
        <div
          ref={addContainerRef}
          className="w-12 bg-black h-12 cursor-pointer relative flex items-center justify-center group mx-2"
        >
          <div
            ref={addSquareRef}
            className="absolute bg-black w-12 h-12 overflow-hidden rounded-sm group"
          >
            <img
              src="hero.jpg"
              alt=""
              className="w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300 object-cover"
            />
          </div>
        </div>
        to thrive
      </div>
    </div>
  );
}

export default WhatWeAre;
