import About from "./components/AnimatedAbout";
import AnimatedLandpage from "./components/AnimatedLandpage";
import NavBar from "./components/AnimatedNavbar";
import AnimatedFeatures from "./components/Technology";
import Technologies from "./components/Tools";
import WhatWeAre from "./components/WhatWeAre";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <AnimatedLandpage />
      <About />
      <div className="bg-black">
        <AnimatedFeatures />
        <Technologies />
      </div>
      <WhatWeAre />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Banner /> */}
      {/* <Industries /> */}
      {/* <Features /> */}
      {/* <Stat /> */}
      {/* <ClientLogo /> */}
      {/* <Blogs /> */}
      {/* <Testimonial /> */}
      {/* <Contact /> */}
      {/* <Whatsapp /> */}
    </div>
  );
}
