import { Icon } from "@iconify/react";
import Link from "next/link";
import { pages } from "../json/panel";

export default function PageBar() {
  return (
    <div className="flex w-full h-[50px] -sm:overflow-scroll">
      {pages.map((page, index) => {
        return (
          <div
            className="h-full flex items-center px-4 cursor-pointer bg-regal-blue border-b-2 border-transparent hover:bg-gray-700 hover:border-glow-blue"
            key={index}
          >
            <Link href={page.link}>
              <a className="flex items-center text-lg">
                <Icon icon={page.icon} />
                <h1 className="ml-2 text-gray-100">{page.name}</h1>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
