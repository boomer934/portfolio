"use client";
import { motion, stagger, useInView, Variants } from "framer-motion";
import React, { useRef } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
            className="w-full h-auto grid mb-12"
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
                className="grid grid-cols-3 grid-rows-2 gap-4 mt-4"
            >
                <motion.div 
                variants={children}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 2 }} 
                className="bg-white rounded-xl hover:shadow-2xl hover:shadow-white">
                    <Link href={"https://nextjs.org/"} target="_blank" prefetch={true}>
                        <Image 
                        src="/next.png" 
                        width={100} 
                        height={100} 
                        alt="next image" 
                        className="rounded-full"/>
                    </Link>
                </motion.div>

                <motion.div 
                variants={children} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 2 }}
                className=" bg-sky-800 rounded-full relative hover:shadow-2xl hover:shadow-sky-800">
                    <Link href={"https://react.dev/"} target="_blank" prefetch={true}>
                        <Image 
                        src="/react.png" 
                        fill
                        alt="react image" 
                        className=" p-1"/>
                    </Link>
                </motion.div>

                <motion.div 
                variants={children} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 2 }}
                className="relative hover:shadow-2xl hover:shadow-yellow-300 rounded-2xl">
                    <Link href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} target="_blank" prefetch={true}>
                        <Image 
                        src="/js.png" 
                        fill 
                        alt="js image" 
                        className="rounded-2xl"/>
                    </Link>
                </motion.div>

                <motion.div 
                variants={children} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 2 }}
                className="rounded-full relative hover:shadow-2xl hover:shadow-sky-800">
                    <Link href={"https://www.tailwindcss.com/"} target="_blank" prefetch={true}>
                        <Image
                            src="/tailwind.webp"
                            fill
                            alt="tailwind image"
                            className="rounded-full"
                        />
                    </Link>
                </motion.div>

                <motion.div 
                variants={children}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 2 }} 
                className="bg-white rounded-xl relative hover:shadow-2xl hover:shadow-white">
                    <Link href={"https://www.mysql.com/it/"} target="_blank" prefetch={true}>
                        <Image
                            src="/mysql.webp"
                            fill
                            alt="mysql image"
                            className="rounded-full"
                        />
                    </Link>
                </motion.div>

                <motion.div 
                variants={children}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 2 }} 
                className="bg-white rounded-xl relative hover:shadow-2xl hover:shadow-white">
                    <Link href={"https://www.docker.com/"} target="_blank" prefetch={true}>
                        <Image
                            src="/docker.svg"
                            fill
                            alt="docker image"
                        />
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
