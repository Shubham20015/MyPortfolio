import GIF from "../public/images/404.gif";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Custom404() {
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
    <div className="flex -sm:flex-col justify-center items-center w-full h-screen">
      <motion.div
        variants={pageAnimation}
        initial="enter"
        animate="in"
        exit="enter"
      >
        <Image src={GIF} />
      </motion.div>
      <motion.div
        variants={pageAnimation}
        initial="out"
        animate="in"
        exit="out"
        className="flex flex-col items-center justify-center w-1/2 h-full"
      >
        <h1 className="text-6xl -sm:text-5xl -sm:text-center font-extrabold text-gray-100">
          AWWW...DON’T WORRY.
        </h1>
        <p className="text-center text-xl text-gray-300 my-10 leading-relaxed">
          It's just a 404 Error!
          <br />
          What you’re looking for may have been misplaced in Long Term Memory.
        </p>
        <Link href="/">
          <button className="btn btn-5 px-8 py-5 text-green-50">Go back</button>
        </Link>
      </motion.div>
    </div>
  );
}
