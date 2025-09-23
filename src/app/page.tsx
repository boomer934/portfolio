
'use client'
import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Projects from "./components/Projects";

export default function Home() {
      const { scrollYProgress } = useScroll();
      const [scrollStatus,setScrollStatus] = useState<number>(0)
    useMotionValueEvent(scrollYProgress, "change", (latest)=>{
        setScrollStatus(latest)
        console.log(scrollStatus)
    })
  return (
    <main className="h-full w-full flex flex-col items-center gap-4">
      <HeroSection/>
      
      <AboutMe/>
      {scrollStatus >= 0.2 &&(
        <Projects/>
      )}
    </main>
  );
}
