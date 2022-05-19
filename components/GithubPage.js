import Image from "next/image";
import GitWeb from "../public/images/gitweb.png";
import GitCard from "./GitCard";
import { motion } from "framer-motion";

export default function GithubPage({ data }) {
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

  const GitRepos = data.sort(() => Math.random() - Math.random()).slice(0, 8);

  return (
    <motion.div
      variants={pageAnimation}
      initial="enter"
      animate="in"
      exit="out"
      className="flex flex-col h-full text-gray-100 -sm:absolute"
    >
      <div className="w-full py-4 flex -sm:flex-col items-center justify-center text-xl flex-wrap">
        <div className="flex justif-center items-center -sm:flex-col">
          <div className="mr-5">
            <Image
              width="52rem"
              height="52rem"
              src="https://avatars.githubusercontent.com/u/61053050?v=4"
              className="rounded-full"
            />
          </div>
          <h1>Shubham20015</h1>
        </div>
        <h1 className="p-3 md:border-r-2 md:border-l-2 border-glow-blue mx-5">
          Repositories: {data.length}
        </h1>
        <h1>Total Contributions: 120</h1>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="relative w-2/3 h-full flex -sm:flex-wrap justify-center items-center text-card-blue">
          <div className="-sm:hidden">
            <Image src={GitWeb} />
          </div>
          <GitCard width="left-50" height="top-10" gitData={GitRepos[0]} />
          <GitCard width="left-16" height="top-24" gitData={GitRepos[1]} />
          <GitCard width="left-6" height="top-50" gitData={GitRepos[2]} />
          <GitCard width="left-50" height="bottom-10" gitData={GitRepos[3]} />
          <GitCard width="left-16" height="bottom-24" gitData={GitRepos[4]} />
          <GitCard width="right-6" height="bottom-50" gitData={GitRepos[5]} />
          <GitCard width="right-16" height="top-24" gitData={GitRepos[6]} />
          <GitCard width="right-16" height="bottom-24" gitData={GitRepos[7]} />
        </div>
      </div>
    </motion.div>
  );
}
