import About from "./components/AnimatedAbout";
import AnimatedLandpage from "./components/AnimatedLandpage";
import NavBar from "./components/AnimatedNavbar";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = await import("locomotive-scroll").default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <AnimatedLandpage />
      <About />
      <div className="h-dvh bg-black"></div>
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
