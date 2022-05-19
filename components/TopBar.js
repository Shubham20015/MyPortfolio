import Image from "next/image";
import Logo from "../public/images/logo.svg";
import { Icon } from "@iconify/react";
import close from "@iconify/icons-codicon/close";
import fullwindow from "@iconify/icons-codicon/chrome-maximize";
import smallwindow from "@iconify/icons-codicon/chrome-minimize";
export default function TopBar() {
  return (
    <div className="flex justify-between bg-light-black text-gray-300 w-full cursor-default">
      <div className="flex">
        <Image src={Logo} objectFit="contain" />
        <ul className="flex text-sm items-center -sm:hidden">
          <li className="mx-2">File</li>
          <li className="mx-2">Edit</li>
          <li className="mx-2">View</li>
          <li className="mx-2">Go</li>
          <li className="mx-2">Run</li>
          <li className="mx-2">Terminal</li>
          <li className="mx-2">Help</li>
        </ul>
      </div>
      <h1 className="flex text-sm items-center">
        Shubham Jain - Visual Studio Code
      </h1>
      <div className="flex">
        <div className="hover:bg-royal-grey">
          <Icon className="my-1 mx-2" icon={smallwindow} />
        </div>
        <div className="hover:bg-royal-grey">
          <Icon className="my-1 mx-2" icon={fullwindow} />
        </div>
        <div className="hover:bg-red-500">
          <Icon className="my-1 mx-2" icon={close} />
        </div>
      </div>
    </div>
  );
}
