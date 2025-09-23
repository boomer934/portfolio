"use client";

import React, { useRef, useEffect } from "react";
import { motion, Variants, useInView } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Projects() {
  const ref = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const parentViewRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: false, amount: 0.1 });
  const inView2 = useInView(ref2, { once: false, amount: 0.1 });
  const inView3 = useInView(ref3, { once: false, amount: 0.1 });
  const inViewParent = useInView(parentViewRef, { once: false, amount: 0.1 });

  useEffect(() => {
    console.log("Projects in view:", inView);
  }, [inView]);

  // Variants per il container -> gestisce delay e stagger
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1], // cubic-bezier (equivalente a easeInOut)
        when: "beforeChildren",
        delayChildren: 0.3,
      },
    },
  };

  // Variants per i figli
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <section className="py-8">
      <motion.div
        ref={parentViewRef}
        initial="hidden"
        animate={inViewParent ? "visible" : "hidden"}
        className="w-full"
      >
        {/* Titolo */}
        <motion.h2
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center text-2xl font-medium mt-16 md:scale-125"
        >
          My projects
        </motion.h2>

        {/* Grid container con delayChildren + staggerChildren */}
        <motion.div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 py-8">
          {/* Progetto 1 */}
          <motion.article
            ref={ref}
            variants={containerVariants}
            animate={inView ? "visible" : "hidden"}
            className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-red-600 hover:outline-2 hover:outline-red-600 hover:outline-offset-2"
          >
            <motion.h3
              className={`bg-gray-800 p-4 text-lg font-bold ${montserrat.className}`}
            >
              Watchlist
            </motion.h3>
            <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 2 }}
            className="flex justify-center p-6">
              <div className="min-h-[100px] min-w-[200px] scale-110">
                <Link
                  href={"https://watchlist-site.vercel.app/"}
                  target="_blank"
                  prefetch={true}
                >
                  <Image
                    src="/watchlist.png"
                    width={200}
                    height={200}
                    alt="Watchlist"
                    className="shadow-2xl shadow-red-600 rounded-md"
                  />
                </Link>
              </div>
            </motion.div>
            <motion.p className="p-4">
              Una web app ideata e creata per gestire le serie che hai in
              programma o che hai già visto tramite l'aggiunta alla tua
              watchlist personalizzata.
            </motion.p>
          </motion.article>

          {/* Progetto 2 */}
          <motion.article
            ref={ref2}
            animate={inView2 ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-green-600 hover:outline-2 hover:outline-green-600 hover:outline-offset-2"
          >
            <h3
              className={`bg-gray-800 p-4 text-lg font-bold ${montserrat.className}`}
            >
              Portfolio
            </h3>
            <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 2 }}
            className="flex justify-center p-6">
              <div className="min-h-[100px] min-w-[200px] scale-110">
                <Image
                  src="/portfolio.png"
                  width={200}
                  height={200}
                  alt="Portfolio"
                  className="shadow-2xl shadow-green-600 rounded-md"
                />
              </div>
            </motion.div>
            <p className="p-4">
              Il sito che stai vedendo: creato con Next.js, TailwindCSS e Framer
              Motion per mostrare i miei progetti in modo dinamico.
            </p>
          </motion.article>

          {/* Progetto 3 */}
          <motion.article
            ref={ref3}
            animate={inView3 ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-sky-600 hover:outline-2 hover:outline-sky-600 hover:outline-offset-2"
          >
            <h3
              className={`bg-gray-800 p-4 text-lg font-bold ${montserrat.className}`}
            >
              Bibo Virtual Assistant
            </h3>
            <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 2 }}
            className="flex justify-center p-6">
              <div className="min-h-[100px] min-w-[200px] scale-110">
                <Link
                  href={"https://bibo-virtual-assistant.vercel.app/"}
                  target="_blank"
                  prefetch={true}
                >
                  <Image
                    src="/bibo-intero.png"
                    width={200}
                    height={200}
                    alt="Task Manager"
                    className="shadow-2xl shadow-sky-600 rounded-md min-h-[110px]"
                  />
                </Link>
              </div>
            </motion.div>
            <p className="p-4">
              Assistente virtuale interattivo basato su chatbot, utile per
              organizzare task e rispondere a domande.
            </p>
          </motion.article>
        </motion.div>
      </motion.div>
    </section>
  );
}
