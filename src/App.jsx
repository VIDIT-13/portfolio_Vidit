import React, { useState, lazy, Suspense, useEffect } from "react";
import Navbar from "./Sections/Navbar";
import MobileAlert from "./Components/MobileAlert";


// Lazy load components with meaningful chunk names
const Hero = lazy(() =>
  import(/* webpackChunkName: "hero" */ "./Sections/Hero")
);
const About = lazy(() =>
  import(/* webpackChunkName: "about" */ "./Sections/About")
);
const Projects = lazy(() =>
  import(/* webpackChunkName: "projects" */ "./Sections/Projects")
);
const Experiences = lazy(() => import("./Sections/Experiences"));
const Contact = lazy(() => import("./Sections/Contact"));
const Footer = lazy(() => import("./Sections/Footer"));
import SplashCursor from "../Reactbits/SplashCursor/SplashCursor";
import { Loader } from "@react-three/drei";

const App = () => {
  const [issplash, setsplash] = useState(false);
  const [showMobileAlert, setShowMobileAlert] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSplash = () => {
    if (isMobile && !issplash) {
      setShowMobileAlert(true);
    } else {
      setsplash(!issplash);
    }
  };

  const handleMobileAlertClose = () => {
    setShowMobileAlert(false);
    setsplash(true);
  };

  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <button
        onClick={toggleSplash}
        className="fixed z-40 flex items-center gap-2 px-4 py-2 text-lg cursor-pointer transition-all rounded-lg bottom-5 right-5 hover:scale-110 duration-200 bg-neutral-800/80 backdrop-blur-sm"
      >
        {issplash ? "Disable" : "Enable"} Splash
        <img src="/assets/cursor.svg" alt="cursor" className="w-4 h-4" />
      </button>
      {showMobileAlert && <MobileAlert onClose={handleMobileAlertClose} />}
      <Suspense fallback={<Loader />}>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About></About>
        </section>
        <section id="work">
          <Projects />
          <Experiences />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
        {issplash && <SplashCursor />}
      </Suspense>
    </div>
  );
};

export default App;
