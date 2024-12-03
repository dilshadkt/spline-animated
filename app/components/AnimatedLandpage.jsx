"use client";
import React, { Suspense, lazy, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Lazy load Spline to improve initial load time
// const SplineLazy = lazy(() => import("@splinetool/react-spline/next"));

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedLandpage() {
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(() => {
    // GSAP animations
    gsap.set("#landpage-frame", {
      clipPath: "polygon(14% 0, 78% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from("#landpage-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#landpage-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  // Loading effect
  const LoadingSpinner = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );

  // Optimization for Spline model
  const handleLoadSpline = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* {isLoading && <LoadingSpinner />} */}

      {/* <Suspense fallback={<LoadingSpinner />}> */}
      <div
        id="landpage-frame"
        className="h-screen w-screen relative overflow-hidden bg-black z-50"
      >
        <div className="w-full h-full relative z-50">
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dob1zdjnp/video/upload/v1725109168/an4z7gxzw1gtapwk9s57.mp4"
              type="video/mp4"
            />
          </video>
          {/* <SplineLazy
              scene="https://prod.spline.design/OeYqPGEPIf0QMYPX/scene.splinecode"
              onLoad={handleLoadSpline}
              style={{
                opacity: isLoading ? 0 : 1,
                transition: "opacity 0.5s ease-in-out",
              }}
            /> */}
        </div>

        <div className="absolute w-40 h-10 z-50 rounded-l-xl  bottom-5 right-0"></div>

        <h1 className="special-font hero-heading text-white absolute bottom-5 pr-2 right-3 z-50  text-blue-75">
          O<b>R</b>IG<b>A</b>
        </h1>

        <div className="absolute left-0 top-0 z-50">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Empowering Businesses with <br /> Cutting-Edge Technology
            </p>
          </div>
        </div>
      </div>
      {/* </Suspense> */}

      <h1 className="special-font hero-heading text-black absolute -z-20 bottom-5 pr-2 right-3 text-blue-75">
        O<b>R</b>IG<b>A</b>
      </h1>
    </div>
  );
}
