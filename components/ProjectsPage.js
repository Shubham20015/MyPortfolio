import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import { projects } from "../json/projects";

export default function ProjectsPage() {
  const [showModal, setShowModal] = useState(false);
  const [projectData, setProjectData] = useState({});

  const handleClick = (project) => {
    setProjectData(project);
    setShowModal(true);
  };

  const textMotion = {
    rest: {
      transform: "translateX(100%)",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
    rest_out: {
      transform: "translateX(-100%)",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      transform: "translateX(0%)",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="absolute w-full h-full">
      <div className="relative grid grid-cols-3 grid-rows-3 -sm:grid-cols-1 -sm:grid-rows-5 -sm:gap-y-48 justify-items-center mx-16 h-full py-4">
        {projects.map((project, index) => {
          return (
            <motion.div
              initial={project.animate}
              whileHover="hover"
              animate={project.animate}
              className={`relative w-72 h-48 -sm:w-60 -sm:h-40 cursor-pointer rounded-md overflow-hidden ${project.css}`}
              onClick={() => handleClick(project)}
              key={index}
            >
              <img
                className="absolute z-0 w-full h-full bg-cover"
                src={project.image}
              ></img>
              <motion.div
                variants={textMotion}
                className="box absolute z-10 flex justify-center items-center w-full h-full"
              >
                <h1 className="text-3xl font-bold text-center">
                  {project.name}
                </h1>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        data={projectData}
      />
    </div>
  );
}
