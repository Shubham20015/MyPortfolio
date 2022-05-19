import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import a from "next/link";

export default function SocialBadge() {
  const textMotion = {
    rest: {
      opacity: 0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex md:flex-col justify-end -sm:justify-center items-end text-3xl py-2 -sm:p-0 m-10 -sm:m-0 text-icon-grey w-1/3 -sm:w-full">
      <a href="#">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="flex items-center"
          onClick={(e) => {
            window.location = "mailto:no-reply@example.com";
            e.preventDefault();
          }}
        >
          <motion.h1 variants={textMotion} className="mx-5 -sm:hidden">
            jainshubham0189
          </motion.h1>
          <Icon
            className="my-3 -sm:mx-2 cursor-pointer text-5xl hover:text-black"
            icon="bytesize:mail"
          />
        </motion.div>
      </a>
      <a href="https://www.linkedin.com/in/jain-shubhamdev/" target="_blank">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="flex items-center"
        >
          <motion.h1 variants={textMotion} className="mx-5 -sm:hidden">
            jain-shubhamdev
          </motion.h1>
          <Icon
            className="my-3 -sm:mx-2 cursor-pointer text-5xl hover:text-[#0077b5]"
            icon="raphael:linkedin"
          />
        </motion.div>
      </a>
      <a href="https://github.com/Shubham20015" target="_blank">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="flex items-center"
        >
          <motion.h1 variants={textMotion} className="mx-5 -sm:hidden">
            Shubham20015
          </motion.h1>
          <Icon
            className="my-3 -sm:mx-2 cursor-pointer text-5xl hover:text-black"
            icon="cib:github"
          />
        </motion.div>
      </a>
      <a href="https://www.instagram.com/iamsj_20/" target="_blank">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="flex items-center"
        >
          <motion.h1 variants={textMotion} className="mx-5 -sm:hidden">
            iamsj_20
          </motion.h1>
          <Icon
            className="my-3 -sm:mx-2 cursor-pointer text-5xl hover:text-[#ce62c8]"
            icon="ri:instagram-fill"
          />
        </motion.div>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100008496467992"
        target="_blank"
      >
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="flex items-center"
        >
          <motion.h1 variants={textMotion} className="mx-5 -sm:hidden">
            Shubham Jain
          </motion.h1>
          <Icon
            className="my-3 -sm:mx-2 cursor-pointer text-5xl hover:text-[#3b5998]"
            icon="cib:facebook"
          />
        </motion.div>
      </a>
    </div>
  );
}
