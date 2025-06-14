import React, { useState, lazy, Suspense } from "react";
import Navbar from "./Sections/Navbar";

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

const App = () => {
  const [issplash, setsplash] = useState(false);

  const toggleSplash = () => {
    setsplash(!issplash);
  };

  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <button
        onClick={toggleSplash}
        className="fixed z-50 flex items-center gap-2 px-4 py-2 text-lg cursor-pointer transition-all  rounded-lg bottom-5 right-5 hover:scale-110 duration-200"
      >
        {issplash ? "Disable" : "Enable"} Splash
        <img src="/assets/cursor.svg" alt="cursor" className="w-4 h-4" />
      </button>
      <Suspense fallback={<div className="loading">Loading...</div>}>
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
