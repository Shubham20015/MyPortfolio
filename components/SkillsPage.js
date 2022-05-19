import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { skills } from "../json/skills";

export default function SkillsPage() {
  const Frontend = skills[0]["Frontend"];
  const Backend = skills[0]["Backend"];
  const ML = skills[0]["Machine Learning"];

  const pageAnimation = {
    enter: {
      x: "-100vh",
      opacity: 0,
    },
    in: {
      x: 0,
      opacity: 1,
    },
    out: {
      x: "100vh",
      opacity: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      variants={pageAnimation}
      initial="enter"
      animate="in"
      exit="out"
      className="-sm:absolute w-full"
    >
      <div className="grid grid-cols-2 -sm:grid-cols-1 grid-rows-3 gap-x-24 -sm:gap-y-16 justify-between my-6 mx-24 -sm:mx-2 h-full">
        <div className="bg-gray-800 text-gray-100 rounded-md p-5 -sm:px-2 shadow-md">
          <h1 className="text-4xl font-semibold text-center">Frontend</h1>
          <div className="flex justify-around  py-5 text-lg -sm:text-sm">
            {Frontend.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center bg-royal-grey shadow-xl rounded-lg w-1/5 p-2 cursor-pointer hover:scale-125"
                >
                  <Icon icon={item.icon} className="text-4xl -sm:text-3xl" />
                  <h1>{item.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-gray-800 text-gray-100 row-start-2 col-start-2 -sm:col-start-1 rounded-md p-5 -sm:px-2 shadow-md">
          <h1 className="text-4xl font-semibold text-center">Backend</h1>
          <div className="flex justify-around  py-5 text-lg -sm:text-sm">
            {Backend.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center bg-royal-grey shadow-xl rounded-lg w-1/5 p-2 cursor-pointer hover:scale-125"
                >
                  <Icon icon={item.icon} className="text-4xl -sm:text-3xl" />
                  <h1>{item.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-gray-800 text-gray-100 row-start-3 rounded-md p-5 -sm:px-2 shadow-md">
          <h1 className="text-4xl font-semibold text-center">
            Machine Learning
          </h1>
          <div className="flex justify-around  py-5 text-lg -sm:text-sm">
            {ML.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center bg-royal-grey shadow-xl rounded-lg w-1/5 p-2 cursor-pointer hover:scale-125"
                >
                  <Icon icon={item.icon} className="text-4xl -sm:text-3xl" />
                  <h1>{item.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
