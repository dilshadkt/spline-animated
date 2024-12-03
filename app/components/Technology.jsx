"use client";
import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.2) * 25;
    const tiltY = (relativeX - 0.2) * -25;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full bg-violet-300 min-h-fit backdrop-blur-lg rounded-lg">
      {/* <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      /> */}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font  text-black">{title}</h1>
          {description && (
            <p className="mt-3 max-w- text-xs md:text-base text-gray-800">
              {description}
            </p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex mt-5 md:mt-0 w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-[10px] md:text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20 text-xl" />
            <p className="relative z-20 text-gray-400  py-2 md:py-3">
              Connect Us
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const AnimatedFeatures = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web bento-title text-lg text-blue-50">
          Your Perfect Business Solution
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
      </div>

      <div className="grid md:h-[135vh] w-full md:grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                W<b>e</b>b Devel<b>o</b>pment
              </>
            }
            description="Transform your digital presence with stunning designs, turning your dreams into successful realities and building a strong online presence."
            isComingSoon
          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
          <BentoCard
            src="videos/feature.mp4"
            title={
              <>
                Mo<b>b</b>ile <b>A</b>pp Devel<b>o</b>pment
              </>
            }
            description="Seamlessly and efficiently elevate your business with our mobile app solutions, promising extensive growth and enhanced performance."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1  md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature.mp4"
            title={
              <>
                <b>A</b>MC
              </>
            }
            description="Our AMC service provides proactive and reactive support for your web applications, mobile apps, ERP solutions, and other IT products. Our experts ensure your systems run smoothly, maintaining optimal performance and avoiding downtime."
            isComingSoon
          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                <b>E</b>comme<b>r</b>ce De<b>v</b>elopment
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            isComingSoon
          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 row-span-1  md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature.mp4"
            title={<>ERP Development</>}
            description="Expert guidance throughout the ERP development process, including planning, analysis, implementation, and ongoing support to ensure smooth operations."
            isComingSoon
          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={<>Digital Marketing and Branding</>}
            description="Our experienced Branding and Digital Marketing services will help you increase the visibility and reach of your brand."
            isComingSoon
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default AnimatedFeatures;
