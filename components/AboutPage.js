import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import MyPic from "../public/images/myImage.jpeg";
import Hello from "../public/images/hello.gif";
import { motion } from "framer-motion";

export default function AboutPage() {
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
    <motion.div
      variants={pageAnimation}
      initial="enter"
      animate="in"
      exit="out"
      className="-sm:absolute h-full flex items-start flex-col"
    >
      <div className="flex justify-center w-full">
        <h1 className="text-4xl py-4 text-gray-100 font-medium">About Me</h1>
      </div>
      <div className="flex justify-around items-center w-full h-full -mt-16 -sm:mt-2 -sm:flex-col">
        <div className="relative w-[20rem] h-[20rem] -sm:w-[10rem] -sm:h-[10rem] bg-white bg-opacity-5 border-2 border-lightish-orange">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -left-2.5 top-3.5 -sm:left-0 -sm:top-0"
          >
            <Image src={MyPic} objectFit="contain" placeholder="blur" />
          </motion.span>
        </div>
        <div className="flex flex-col w-2/5 -sm:w-full -sm:p-6">
          <div className="flex flex-col justify-center text-gray-100 text-[18px] -sm:text-[16px] leading-7 ">
            <div>
              Hello <Image src={Hello} /> My name is Shubham and I enjoy
              creating things that live on the internet. My interest in web
              development started back in 2019 when I tried to open chrome
              Developer tools — turns out hacking together a custom static
              website taught me a lot about HTML & CSS !
            </div>
            <br />
            <p>
              Fast-forward to today, and I've had the privilege of studing
              B.tech Computer Science at ADGITM,India. My main focus these days
              is building accessible, inclusive products and creating my digital
              presence.
            </p>
          </div>
          <span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="btn btn-3 font-semibold p-4 mt-4"
            >
              <Link href="https://github.com/Shubham20015/Shubham20015/blob/main/assets/Shubham_CV.pdf">
                <a className="flex items-center" target="_blank">
                  <Icon icon="fa-solid:cloud-download-alt" className="mr-2" />
                  Resume
                </a>
              </Link>
            </motion.button>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
