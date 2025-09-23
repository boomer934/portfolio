"use client";
import { motion, stagger, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function MyStack() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: false, amount: 0.1 });

    const parent: Variants = {
        hidden: {
            opacity: 1,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
                when: "beforeChildren",
                delayChildren: stagger(0.3),
            },
        },
    };

    const children: Variants = {
        hidden: {
            opacity: 0,
            y: 10,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-auto grid"
        >
            <motion.h2
                className={`text-center text-2xl font-medium ${montserrat.className}`}
            >
                My Stack
            </motion.h2>
            <motion.div
                variants={parent}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-3 grid-rows-2 gap-2 mt-4"
            >
                <motion.div 
                variants={children} 
                className="bg-white rounded-xl">
                    <Image 
                    src="/next.png" 
                    width={100} 
                    height={100} 
                    alt="next image" 
                    className="rounded-full"/>
                </motion.div>

                <motion.div 
                variants={children} 
                className=" bg-sky-800 rounded-full relative">
                    <Image 
                    src="/react.png" 
                    fill
                    objectFit="contain"
                    alt="react image" 
                    className=" p-1"/>
                </motion.div>

                <motion.div 
                variants={children} 
                className="relative">
                    <Image 
                    src="/js.png" 
                    fill
                    objectFit="contain" 
                    alt="js image" 
                    className="rounded-2xl"/>
                </motion.div>

                <motion.div 
                variants={children} 
                className="rounded-full relative">
                    <Image
                        src="/tailwind.webp"
                        fill
                        objectFit="contain"
                        alt="tailwind image"
                        className="rounded-full"
                    />
                </motion.div>

                <motion.div 
                variants={children} 
                className="bg-white rounded-xl relative">
                    <Image 
                    src="/mysql.webp" 
                    fill
                    objectFit="contain"
                    alt="mysql image" 
                    className="rounded-full"/>
                </motion.div>

                <motion.div 
                variants={children} 
                className="bg-white rounded-xl relative">
                    <Image
                        src="/docker.svg"
                        fill
                        objectFit="contain"
                        alt="docker image"
                        className=""
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
