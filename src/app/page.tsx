
'use client'
import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import MyStack from "./components/MyStack";
import Projects from "./components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full flex flex-col items-center gap-4 p-2">
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 bg-[url('/grid.png')] bg-repeat"></div>

      <HeroSection/>
      
      <AboutMe/>
      
      <Projects/>
      
      <MyStack/>
    </main>
  );
}
