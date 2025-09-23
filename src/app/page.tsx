
'use client'
import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import MyStack from "./components/MyStack";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className=" w-full flex flex-col items-center gap-4 p-2">
      <HeroSection/>
      
      <AboutMe/>
      
      <Projects/>
      
      <MyStack/>
    </main>
  );
}
