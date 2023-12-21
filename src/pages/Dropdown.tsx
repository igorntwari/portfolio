import { Menu, Transition } from "@headlessui/react";
import AboutIcon from "../assets/icons/AboutIcon";
import BarIcon from "../assets/icons/BarIcon";
import StackIcon from "../assets/icons/StackIcon";
import ProjectIcon from "../assets/icons/ProjectIcon";
import MessageIcon from "../assets/icons/MessageIcon";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import React from "react";
import image_2 from "../assets/images/image_2.png";

export default function Dropdown() {
  const navigate = useNavigate();
  return (
    <Menu as="div" className="relative z-50 inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center gap-x-1 font-inter text-sm font-semibold leading-6">
          {<BarIcon />}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="h-74 bg-zinc-900 z-50 w-[20rem] md:w-[40rem] border-1 border-slate-700 rounded-r-xl">
          <div className="sm:flex sm:gap-48 px-2 flex gap-12">
            <div className="flex flex-col gap-10 py-4 font-Manrope-Regular">
              <span
                className="flex gap-3 items-center rounded-lg cursor-pointer hover:bg-zinc-700 w-full"
                onClick={() => navigate("/testimonials")}
              >
                <AboutIcon />
                About Me
              </span>
              <span
                className="flex gap-3 items-center rounded-lg cursor-pointer hover:bg-zinc-700 w-full"
                onClick={() => navigate("/stack")}
              >
                <StackIcon className={undefined} />
                Stack
              </span>
              <span
                className="flex gap-3 items-center rounded-lg cursor-pointer hover:bg-zinc-700 w-full"
                onClick={() => navigate("project")}
              >
                <ProjectIcon />
                Project
              </span>
              <span
                className="flex gap-3 items-center rounded-lg cursor-pointer hover:bg-zinc-700 w-full"
                onClick={() => navigate("contact")}
              >
                <MessageIcon />
                Contact Me
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                className="pt-5 md:w-[300px] sm:w-[100px] w-[100px]"
                src={image_2}
                alt="portfolio"
              />
              <button className="bg-bg-primary text-black  sm:w-[10rem] rounded-xl font-Manrope-extraBold border-2 border-green-200 mt-10 px-4">
                <span className="animate-ping absolute inline-flex h-4 w-[70px] rounded-full bg-green-500 opacity-75" />
                available
              </button>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
