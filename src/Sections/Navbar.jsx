import React, { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a
          href="#home"
          className="nav-link"
          onClick={(e) => handleScroll(e, "#home")}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a
          href="#work"
          className="nav-link"
          onClick={(e) => handleScroll(e, "#work")}
        >
          Work
        </a>
      </li>
      <li className="nav-li">
        <a
          href="#about"
          className="nav-link"
          onClick={(e) => handleScroll(e, "#about")}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a
          href="#contact"
          className="nav-link"
          onClick={(e) => handleScroll(e, "#contact")}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
// ...existing code...
const Navbar = () => {
    const [isOpen,setisOpen]=useState(false);

    
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex justify-between items-center py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white duration-300"
          >
            Vidit
          </a>
          <button onClick={()=>{setisOpen(!isOpen)}} className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
            <img src={isOpen ? "assets/close.svg":"/assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
          </button>
          <nav className="hidden sm:flex ">
            <Navigation/>
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div className="block overflow-hidden text-center sm:hidden" initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}}  style={{maxHeight:"100vh"}} transition={{duration:0.5}}>
        <nav className="pb-5">
            <Navigation />
        </nav>
      </motion.div>
      )
      }
    </div>
  );
};

export default Navbar;
 