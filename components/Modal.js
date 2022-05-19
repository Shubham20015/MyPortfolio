import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

const Modal = ({ show, onClose, data }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show && (
    <div
      className="z-50 bg-black bg-opacity-50 absolute top-0 left-0 flex justify-center items-center w-full h-screen"
      onClick={handleCloseClick}
    >
      <div
        className="flex -sm:flex-col bg-royal-grey rounded-lg w-3/5 h-3/5 -sm:w-5/6 -sm:h-5/6"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative w-3/5 -sm:w-full h-full -sm:h-2/6 rounded-lg object-contain">
          <Image
            src={data.image}
            alt={`${data.name} Pic`}
            layout="fill"
            className="rounded-lg"
            priority
          />
        </div>
        <div className="flex flex-col justify-between relative h-full -sm:h-3/5 p-5 w-1/2 -sm:w-full text-gray-100">
          <a
            href="#"
            onClick={handleCloseClick}
            className="absolute right-4 float-right bg-gray-800 px-3 py-1 rounded-full"
          >
            x
          </a>
          <h1 className="text-xl -sm:text-lg font-extrabold">{"{"}</h1>
          <div className="ml-6">
            <p>
              Name :{" "}
              <span className="text-lg -sm:text-base font-bold">
                {data.name}
              </span>
            </p>
            <p>
              Description :{" "}
              <span className="text-lg -sm:text-base">{data.description}</span>
            </p>
            <p>
              Tech Stack :
              <br />
              <span className="flex flex-wrap">
                {data.tags?.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-card-blue text-gray-800 py-1 px-2 rounded text-sm font-bold m-1"
                    >
                      {tag}
                    </span>
                  );
                })}
              </span>
            </p>
          </div>
          <h1 className="text-xl -sm:text-lg font-extrabold">{"}"}</h1>
          <div className="flex justify-between mt-3">
            <a
              href={data.live}
              target="_blank"
              className="btn bg-black hover:bg-white hover:text-black py-3 px-3 cursor-pointer"
            >
              Live Site
            </a>
            <a
              href={data.github}
              target="_blank"
              className="btn bg-black hover:bg-white hover:text-black py-3 px-3 cursor-pointer"
            >
              Github Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
