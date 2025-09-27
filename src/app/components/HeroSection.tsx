"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function HeroSection() {
  const lineRef = useRef<HTMLDivElement>(null);

  const titleVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const emojiCash = {
    hidden: { opacity: 0, y: 10, rotate: 0 },
    visible: {
      opacity: 0.5,
      y: [10, -10, -5, 10],
      x: [0, 20, 40, 0],
      rotate: 90,
    },
  };

  const emojiShuttle = {
    hidden: { opacity: 0, y: 10, rotate: 0 },
    visible: {
      opacity: 0.5,
      y: [10, -10, -5, 10],
      x: [0, -20, -40, 0],
      rotate: -480,
    },
  };

  return (
    <div className="relative flex flex-col items-center w-full mt-[70px]">
      {/* Titolo */}
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`font-semibold font-serif text-3xl m-4 ${montserrat.className} glow-text`}
      >
        Boomer934
      </motion.h1>

      {/* Linea animata */}
      <motion.div
        ref={lineRef}
        className="w-[50vw] h-[1px] bg-white mb-10"
        initial={{ x: 0 }}
        animate={{ x: [-200, 200] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Emoji 💰 */}
      <motion.div
        variants={emojiCash}
        initial="hidden"
        animate="visible"
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 7,
          delay: 4,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-15 scale-150 opacity-50 -z-10"
      >
        💰
      </motion.div>

      {/* Emoji 🚀 */}
      <motion.div
        variants={emojiShuttle}
        initial="hidden"
        animate="visible"
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 7,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute top-0 left-15 scale-150 opacity-50 -z-10"
      >
        🚀
      </motion.div>
    </div>
  );
}
