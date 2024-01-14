import React from "react";
import { useNavigate } from "react-router-dom";
import igorn from "../assets/images/igorn.png";
import MessageIcon from "../assets/icons/MessageIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import StackIcon from "../assets/icons/StackIcon";
import ProjectIcon from "../assets/icons/ProjectIcon";
import AboutIcon from "../assets/icons/AboutIcon";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="fixed w-1/4 bg-zinc-950 text-white font-Manrope-Regular flex flex-col rounded-lg items-center gap-6 py-4 border-2 border-zinc-800 h-screen">
      <img
        className="pt-5 transition duration-300 ease-in-out transform hover:scale-150"
        src={igorn}
        width={100}
        alt="portfolio"
      />

      <button className="transition duration-300 ease-in-out transform hover:scale-150 flex justify-start bg-bg-primary text-black rounded-xl px-6 font-Manrope-extraBold border-2 border-green-200 mt-10">
        <span className="animate-ping absolute inline-flex h-full w-[70px] rounded-full bg-green-500 opacity-75"></span>
        available
      </button>
      <div className="text-white font-Manrope-thin flex flex-col gap-16 pt-10">
        <span className="flex gap-3 hover:bg-zinc-700 rounded-lg cursor-pointer">
          <HomeIcon />
          <a className="scroll-smooth" href="#Home">
            Home
          </a>
        </span>
        <span className="flex gap-3 hover:bg-zinc-700 rounded-lg cursor-pointer">
          <AboutIcon />
          <a href="#testimonial">Testimonial</a>
        </span>
        <span className="flex gap-3 hover:bg-zinc-700 rounded-lg cursor-pointer">
          <StackIcon />
          <a href="#Stack">Stack</a>
        </span>
        <span className="flex gap-3 hover:bg-zinc-700 rounded-lg cursor-pointer">
          <ProjectIcon />
          <a href="#Project">Project</a>
        </span>
        <span
          className="flex gap-3 hover:bg-zinc-700 rounded-lg cursor-pointer"
          onClick={() => navigate("contact")}
        >
          <MessageIcon />
          Contact Me
        </span>
      </div>
    </div>
  );
}
