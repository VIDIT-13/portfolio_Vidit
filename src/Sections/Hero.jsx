import React, { useEffect, useRef, Suspense } from 'react'
import HeroText from '../Components/HeroText'
import ParellalBackground from '../Components/ParallelBackground'
import {Astronaut} from '../Components/Astronaut'
import {Canvas, useFrame} from "@react-three/fiber"
import{ useMediaQuery} from "react-responsive"
import {easing} from "maath"
import { Float} from '@react-three/drei'

const Hero = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Try to play on mount (some browsers require user interaction)
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3; // Set volume as needed
        audioRef.current.play().catch(() => {});
      }
    };
    window.addEventListener('click', playAudio, { once: true });
    return () => window.removeEventListener('click', playAudio);
  }, []);

    const isMobile=useMediaQuery({maxWidth:853});

  return (
    <section className='flex items-start  justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space '>
<HeroText/>
<ParellalBackground />
<figure className='absolute inset-0 ' style={{width:"100vw",height:"100vh"}}>
    <Canvas camera={{position:[0,1,3]}}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense >
             <Float>
            <Astronaut
              scale={isMobile ? 0.06 : 0.07}
              position={isMobile ? [0, -0.91, 0] : [1.1, -0.7, 0]}
            />
        </Float>
        </Suspense>
       
        <Rig />
    </Canvas>
</figure>
<audio
        ref={audioRef}
        src="/music/space-ambient-cinematic-music-345394.mp3" // Place your music file in public/music/
        autoPlay
        loop
        style={{ display: "none" }}
      />
    </section>
  )

}

function Rig(){
    return useFrame((state ,delta)=>{
        easing.damp3(state.camera.position,[state.mouse.x / 10 ,1+state.mouse.y/10,3],0.5,delta)
    })
}

export default Hero
