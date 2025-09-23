"use client"
import React,{useRef} from 'react'
import {motion} from 'framer-motion'
export default function Navbar() {
  return (
    <nav className='fixed bottom-0 w-full mb-5 flex items-center justify-center'>
        <ul className='flex justify-center items-center gap-4 min-w-[230px] p-2 rounded-full backdrop-blur-xl bg-black/30 text-red-400'>
            <motion.li 
            whileTap={{scale: 0.9}}
            whileHover={{scale: 1.1}}><a href="#about">About me</a></motion.li>
            <motion.li 
            whileTap={{scale: 0.9}}
            whileHover={{scale: 1.1}}><a href="#projects">Projects</a></motion.li>
            <motion.li 
            whileTap={{scale: 0.9}}
            whileHover={{scale: 1.1}}><a href="#stack">Stack</a></motion.li>
            <motion.li 
            whileTap={{scale: 0.9}}
            whileHover={{scale: 1.1}}><a href="#contact">Get in touch</a></motion.li>
        </ul>
    </nav>
  )
}
