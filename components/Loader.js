import Image from "next/image";
import GIF from "../public/images/loading.gif";
export default function Loader() {
  return (
    <div className="absolute w-full h-screen z-50 bg-black flex flex-col justify-center items-center">
      <div className="w-64">
        <Image src={GIF} objectFit={"contain"} priority />
      </div>
      <h1 className="text-5xl text-gray-200">
        Hang On
        <span className="animate-ping">.</span>
        <span className="animate-ping delay-75">.</span>
        <span className="animate-ping delay-100">.</span>
      </h1>
    </div>
  );
}
