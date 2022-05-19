import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectPanel() {
  const [closed, setClosed] = useState(false);
  return (
    <div className="p-7 text-gray-300 -sm:hidden">
      <h1 className="text-xl">EXPLORER</h1>
      <div className="mt-5">
        <div
          className="flex items-center text-lg"
          onClick={() => setClosed(!closed)}
        >
          <motion.span
            animate={closed ? { rotate: "-90deg" } : { rotate: "0deg" }}
            className="cursor-pointer"
          >
            <Icon icon="akar-icons:chevron-right" />
          </motion.span>
          <h1 className="font-semibold ml-2">Portfolio</h1>
        </div>
        <motion.ul
          animate={
            closed
              ? { clipPath: "inset(0% 0% 100% 0%)" }
              : { clipPath: "inset(0% 0% 0% 0%)" }
          }
          transition={{ duration: 0.5 }}
          className="px-5 py-3 text-base"
        >
          <motion.li
            whileHover={{ x: 15, scale: 1.1 }}
            className="mb-1 cursor-pointer hover:bg-gray-700"
          >
            <Link href="/">
              <a className="flex items-center">
                <Icon icon="vscode-icons:file-type-reactjs" />
                <h1 className="ml-2">home.jsx</h1>
              </a>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ x: 15, scale: 1.1 }}
            className="mb-1 cursor-pointer hover:bg-gray-700"
          >
            <Link href="/projects">
              <a className="flex items-center">
                <Icon icon="vscode-icons:file-type-js-official" />
                <h1 className="ml-2">projects.js</h1>
              </a>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ x: 15, scale: 1.1 }}
            className="mb-1 cursor-pointer hover:bg-gray-700"
          >
            <Link href="/about">
              <a className="flex items-center">
                <Icon icon="vscode-icons:file-type-html" />
                <h1 className="ml-2">about.html</h1>
              </a>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ x: 15, scale: 1.1 }}
            className="mb-1 cursor-pointer hover:bg-gray-700"
          >
            <Link href="/skills">
              <a className="flex items-center">
                <Icon icon="logos:nodejs-icon" />
                <h1 className="ml-2">skills.json</h1>
              </a>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ x: 15, scale: 1.1 }}
            className="mb-1 cursor-pointer hover:bg-gray-700"
          >
            <Link href="/contact">
              <a className="flex items-center">
                <Icon icon="vscode-icons:file-type-css" />
                <h1 className="ml-2">contact.css</h1>
              </a>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ x: 15, scale: 1.1 }}
            className="mb-1 cursor-pointer hover:bg-gray-700"
          >
            <Link href="/github">
              <a className="flex items-center">
                <Icon icon="mdi:language-markdown" color="#699bf7" />
                <h1 className="ml-2">github.md</h1>
              </a>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}
