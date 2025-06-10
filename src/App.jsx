import React, { useState } from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Experiences from './Sections/Experiences'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import SplashCursor from '../Reactbits/SplashCursor/SplashCursor'
const App = () => {
  const [issplash, setsplash] = useState(false);
  
  const toggleSplash = () => {
    setsplash(!issplash);
  };

  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <button
        onClick={toggleSplash}
       className="fixed z-50 flex items-center gap-2 px-4 py-2 text-lg cursor-pointer transition-all  rounded-lg bottom-5 right-5 hover:scale-110 duration-200"

      >
        {issplash ? 'Disable' : 'Enable'} Splash
        <img 
          src="/assets/cursor.svg" 
          alt="cursor" 
          className="w-4 h-4"
        />
      </button>
      <section id='home'><Hero/></section>
      <section id='about'><About></About></section>
      <section id='work'>
        <Projects />
        <Experiences />
      </section>
      <section id='contact'><Contact /></section>
      <Footer/>
      {issplash && <SplashCursor />}
    </div>
  )
}

export default App