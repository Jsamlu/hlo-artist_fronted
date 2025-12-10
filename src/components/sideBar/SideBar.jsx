import React from "react";
import { MdArrowBackIos } from "react-icons/md";
// import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";

const SideBar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="">
      <aside
        className={` ${
          expanded ? "w-60" : "w-24"
        } h-screen float-left bg-white border-r shadow-md hidden sm:block transition-width duration-300 ease-in-out overflow-hidden`}
      >
        <nav className="h-full flex flex-col ">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img src="/asset/logo.svg" className="w-32" alt="" />
            <button
              className="text-xl font-bold text-gray-800"
              onClick={() => setExpanded(!expanded)}
            >
              <MdArrowBackIos />
            </button>
          </div>
        </nav>
      </aside>

      <aside className="absolute bottom-0 left-0 right-0 py-5 px-3 border-t rounded-t-2xl sm:hidden">
        <div className="flex items-center justify-around">
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
            <p>h</p>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
