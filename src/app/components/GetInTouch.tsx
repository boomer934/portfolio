"use client";
import React, { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { stagger } from "framer-motion";
import { Montserrat } from "next/font/google";
import handleSubmit from "../handlers/handlers";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function GetInTouch() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false });
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | undefined>("");

  const char = "Get in touch".split("");

  const parent: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        when: "beforeChildren",
        delayChildren: stagger(0.1),
      },
    },
  };

  const children = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const formChildren = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ x: 0 }}
        animate={inView && { x: [-200, 200] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-[50vw] h-[1px] bg-sky-600 mb-10"
      ></motion.div>
      <motion.div className="flex flex-col gap-4">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={parent}
          className={`text-3xl ${montserrat.className} font-medium text-center`}
        >
          {char.map((char, index) => (
            <motion.span variants={children} key={index}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({ email, message, setEmail, setMessage });
          }}
          variants={parent}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-4 mb-4 items-center"
        >
          <motion.input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variants={formChildren}
            type="email"
            name="email"
            placeholder="e.g email@example.com"
            required
            className="bg-white focus:outline-none p-1 rounded-xl caret-black text-black placeholder:text-black/80 md:px-4 md:py-2"
          />
          <motion.textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variants={formChildren}
            name="text"
            placeholder="(optional) type your message here"
            className="bg-white p-2 min-h-[140px] focus:outline-none rounded-lg text-black break-words placeholder:text-black/80 resize-none w-full"
          />
          <motion.button
            variants={formChildren}
            type="submit"
            className="bg-white p-2 rounded-2xl min-w-[80px] max-w-[80px] text-black hover:scale-105 focus:scale-95 transition duration-300 ease-in-out mb-[60px]"
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
