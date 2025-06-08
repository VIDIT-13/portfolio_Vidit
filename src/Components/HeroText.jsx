import React from 'react';
import { FlipWords } from './FlipWords';
import { motion } from 'framer-motion'; // Make sure you're importing from 'framer-motion', not 'motion/react'



const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1 initial={{opacity:0,x:-50}} animate={{opacity:1, x:0}} transition={{delay:0.4}} className="text-4xl font-medium">Hi I'm Vidit</motion.h1>
        <div className="flex flex-col items-start">
          <motion.p initial={{opacity:0,x:-50}} animate={{opacity:1, x:0}} transition={{delay:0.6}}  className="text-5xl font-medium text-neutral-300">
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div initial={{opacity:0,x:-50}} animate={{opacity:1, x:0}} transition={{delay:0.8}}>
            <FlipWords
            
              words={['Secure', 'Modern', 'Scalable']}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p initial={{opacity:0,x:-50}} animate={{opacity:1, x:0}} transition={{delay:1}} className="text-4xl text-neutral-300 font-medium">
            Web Solutions
          </motion.p>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p initial={{opacity:0,x:-50}} animate={{opacity:1, x:0}} transition={{delay:0.4}} className="text-4xl font-medium">Hi I'm Vidit</motion.p>
        <div>
          <motion.p initial={{opacity:0,x:-50}} animate={{opacity:1, x:0}} transition={{delay:0.6}} className="text-5xl font-black text-neutral-300">Building</motion.p>
          <motion.div initial={{opacity:0,x:-50}} animate={{opacity:1, x:0}} transition={{delay:0.8}}>
            <FlipWords
              words={['Secure', 'Modern', 'Scalable']}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p initial={{opacity:0,x:-50}} animate={{opacity:1, x:0}} transition={{delay:1}} className="text-4xl font-black text-neutral-300">
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
