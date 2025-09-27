"use client";
import React from "react";
import { motion, stagger, Variants } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  const children: Variants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",

        when: "beforeChildren",
        delayChildren: stagger(0.02),
      },
    },
  };

  const title: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        when: "beforeChildren",
        delayChildren: stagger(0.02),
      },
    },
  };

  const typeWriter: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const text =
    "Sono uno sviluppatore appassionato di web e software, con esperienza in Node.js, Python, React e database. Amo costruire applicazioni web funzionali, imparare nuove tecnologie e affrontare sfide complesse.";
  const splitText = text.split("");

  const h2 = "About me";
  const splitH2 = h2.split("");

  return (
    <>
      <motion.h2
        variants={title}
        initial={"hidden"}
        animate={"visible"}
        className="text-2xl font-medium w-full text-left sm:text-center md:scale-125"
      >
        {splitH2.map((char, i) => (
          <motion.span key={i} variants={typeWriter} className="text-white ">
            {char}
          </motion.span>
        ))}
      </motion.h2>
      <motion.div
        variants={children}
        initial="hidden"
        animate="visible"
        className=" bg-gray-900 w-auto p-3 flex flex-col rounded-lg shadow-xl max-w-[470px] hover:outline-2 hover:outline-red-600 focus:outline-2 focus:outline-red-600 ring-1 ring-white md:scale-125 md:mt-10"
      >
        <motion.div className="flex flex-row gap-2">
          <motion.p variants={children} className=" text-[15px]">
            {splitText.map((char, i) => (
              <motion.span key={i} variants={typeWriter} className="text-white">
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={"/me-ghibli.jpg"}
              width={200}
              height={200}
              alt="me"
              className=" rounded-full min-h-[170px] min-w-[170px] shadow-lg shadow-red-600"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
