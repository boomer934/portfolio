import React from "react";
import { motion } from "framer-motion";
import projectsData from "@/app/projects.json";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Projects() {
  return (
    <motion.div>
      <h2 className="w-full text-center text-2xl font-medium mt-16">
        My projects
      </h2>
      <motion.div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 py-8 ">
        {projectsData?.projects?.map((project, index) => {
          return (
            <motion.div
              key={index}
              className={`bg-gray-900  outline-1 rounded-lg sm:row-start-${index + 1} sm:even:col-start-2 sm:odd:col-start-1`}
            >  
              <motion.h3
              className={`bg-gray-800 p-4 text-lg font-bold ${montserrat.className}`}
              >
                {project.name}
              </motion.h3>
              <motion.div className="flex justify-center p-6">
                <Image
                  src={project.image}
                  width={200}
                  height={200}
                  alt={project.name}
                  className=" min-h-[100px] min-w-[200px] shadow-2xl shadow-red-600 scale-110"
                />
              </motion.div>
              <motion.p 
              className="p-4"
              >
                {project.description}
              </motion.p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
