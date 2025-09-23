'use client'
import AboutMe from "./components/AboutMe";
import GetInTouch from "./components/GetInTouch";
import HeroSection from "./components/HeroSection";
import MyStack from "./components/MyStack";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center gap-4 p-2 scroll-smooth">
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 bg-[url('/grid.png')] bg-repeat"></div>

      <section id="hero"><HeroSection/></section>
      <section id="about"><AboutMe/></section>
      <section id="projects"><Projects/></section>
      <section id="stack"><MyStack/></section>
      <section id="contact"><GetInTouch/></section>

      <Navbar/>
    </main>
  );
}
