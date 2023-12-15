import React from "react";
import rectangleImage from "../assets/images/Rectangle 6.png";
import MessageIcon from "../assets/icons/MessageIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import StackIcon from "../assets/icons/StackIcon";
import ProjectIcon from "../assets/icons/ProjectIcon";
import AboutIcon from "../assets/icons/AboutIcon";
export default function LandingPage() {
  return (
    <div className="fixed w-1/4 bg-zinc-950 text-white font-Manrope-Regular flex flex-col rounded-lg items-center gap-6 py-4 border-2 border-zinc-800 h-screen">
      <img className="pt-5" src={rectangleImage} width={100} alt="portfolio" />

      <button className="flex justify-start bg-bg-primary text-black rounded-xl px-6 font-Manrope-extraBold border-2 border-green-200 mt-10">
        available
      </button>
      <div className="text-white font-Manrope-thin flex flex-col gap-16 pt-10">
        <span className=" flex gap-3">
          <HomeIcon /> Home
        </span>
        <span className="flex gap-3">
          <AboutIcon />
          About Me
        </span>
        <span className="flex gap-3">
          <StackIcon />
          Stack
        </span>
        <span className="flex gap-3">
          <ProjectIcon />
          Project
        </span>
        <span className="flex gap-3">
          <MessageIcon />
          Contact Me
        </span>
      </div>
    </div>
  );
}
