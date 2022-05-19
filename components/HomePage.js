import Image from "next/image";
import HeroImage from "../public/images/heroImage.png";
import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function HomePage() {
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
    },
  };

  return (
    <div className="-sm:absolute w-full h-full flex items-center justify-around">
      <div className="flex justify-around items-center -sm:flex-col-reverse w-full h-full">
        <motion.div
          variants={pageAnimation}
          initial="enter"
          animate="in"
          exit="enter"
          className="flex flex-col justify-center -sm:text-center px-14 -sm:px-4 w-3/5 -sm:w-full h-full"
        >
          <h1 className="text-7xl -sm:text-6xl text-gray-100">Shubham Jain</h1>
          <h1 className="text-5xl -sm:text-2xl text-gray-100 my-8 uppercase">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Backend Developer",
                  "Web Developer",
                  "Tech Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </h1>
          <div>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-4 btn btn-1"
              >
                View my work
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mx-7 -sm:mx-3 p-4 btn btn-2"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={pageAnimation}
          initial="out"
          animate="in"
          exit="out"
          className="w-2/5 h-full -sm:w-full"
        >
          <Image src={HeroImage} placeholder="blur" priority />
        </motion.div>
      </div>
    </div>
  );
}
