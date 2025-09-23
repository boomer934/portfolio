"use client"
import React, { useEffect, useRef } from 'react'
import {motion, useInView} from 'framer-motion'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
        subsets: ['latin']
    })

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref,{once:false})
    
    useEffect(()=>{
        console.log(inView)
    },[inView])
    const children = {
        visible:{
            opacity:1,
            x:0
        },
        hidden:{
            opacity:0,
            x:-100
        }
    }
  return (
    <div className='flex flex-col items-center w-full'>
        <motion.h1
        ref={ref}
        variants={children}
        initial="hidden"
        animate={inView?"visible":"hidden"}
        transition={{duration:1,ease:"easeInOut"}}
        className={`font-semibold font-serif text-3xl m-4 ${montserrat.className}`}>
            Boomer934
        </motion.h1>
        <motion.div 
        variants={children}
        initial="hidden"
        animate={inView?"visible":"hidden"}
        transition={{duration:1,ease:"easeInOut"}}
        className=' bg-white h-[1px] w-[95vw]'></motion.div>
    </div>
  )
}
