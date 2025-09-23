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
                delayChildren: stagger(0.2),
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
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
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
                className="grid grid-cols-3 grid-rows-2 gap-2 mt-4"
            >
                <motion.div variants={children}>
                    <Image src="/next.png" width={100} height={100} alt="next image" />
                </motion.div>

                <motion.div variants={children}>
                    <Image src="/react.png" width={100} height={100} alt="react image" />
                </motion.div>

                <motion.div variants={children}>
                    <Image src="/js.png" width={100} height={100} alt="js image" />
                </motion.div>

                <motion.div variants={children}>
                    <Image
                        src="/tailwind.png"
                        width={100}
                        height={100}
                        alt="tailwind image"
                    />
                </motion.div>

                <motion.div variants={children}>
                    <Image src="/mysql.png" width={100} height={100} alt="mysql image" />
                </motion.div>

                <motion.div variants={children}>
                    <Image
                        src="/docker.png"
                        width={100}
                        height={100}
                        alt="docker image"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
