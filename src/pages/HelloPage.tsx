import React from "react";
import Pixel from '../assets/images/Pixel.jpg'
import skyper from '../assets/images/skyper.webp'
import LocationIcon from "../assets/icons/LocationIcon";
import SlideIcon from "../assets/icons/SlideIcon";
import Dropdown from "./Dropdown.tsx";
import { useNavigate } from "react-router-dom";
export default function HelloPage() {
  const navigate = useNavigate();
  return (
    <div className="text-white px-8">
      <div className="flex justify-between pt-6 lg:hidden">
        <Dropdown />
      </div>
      <div
        id="Home"
        className="lg:flex lg:flex-col lg:gap-4 lg:py-10 md:items-start flex flex-col gap-10 items-start py-10"
      >
        <h1 className="font-Manrope-Regular sm:text-5xl lg:text-4xl text-2xl">
          Hello! I'm IGOR NTWALI
        </h1>
        <h1 className="font-Manrope-bold sm:text-4xl lg:text-3xl text-2xl">
          I am{" "}
          <span className="bg-gradient-to-r from-bg-primary via-green-400 to-green-950 text-transparent bg-clip-text">
            Full-Stack Developer
          </span>
        </h1>
        <p className="font-Manrope-medium lg:leading-7 sm:leading-9 leading-5">
          Born to ignite positive change, I thrive alongside passionate souls
          <br />
          who value their work. My compass points toward excellence, driven by a
          <br />
          thirst for learning. Teamwork, to me, is the elixir of lasting
          <br />
          success. I'm drawn to those who hustle hard, and when I'm not shaping
          <br />
          the future, you'll find me conquering peaks on hiking trails <br />
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="lg:flex lg:gap-2 md:flex sm:gap-2 md:text-xs md:gap-2 sm:flex sm:items-center flex gap-2">
          <LocationIcon />
          <a href="https://www.google.com/maps/place/Kigali,+Rwanda" className="cursor-pointer" target="_blank" rel="noreferrer">Kigali, Rwanda</a>

        </h1>
        <span className="h-[1px] bg-white lg:w-[26rem] md:w-[25rem] sm:w-[15rem]" />
        <button
          className="bg-zinc-950 py-2 px-4 rounded-2xl border-2 border-zinc-800"
          onClick={() => navigate("contact")}
        >
          Contact Me
        </button>
      </div>

      <h1 id="Project" className="font-Manrope-Regular py-10">
        Recent Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-10">
        <div className="bg-zinc-800 rounded-xl grid grid-rows-3 gap-2">
          <img className="row-span-2 object-cover w-full h-full"  src={Pixel} alt="project-2" />
          <div className="flex justify-between px-4 items-center">
            <div className="flex flex-col gap-2">
              <h1 className="font-Manrope-Regular text-green-700 text-sm sm:text-xl">
                Pixelo Agency
              </h1>
              <h1 className="font-Manrope-Regular sm:text-sm text-xs">
              Ready to take your Business Growth to the next level
              </h1>
            </div>
            <div className="overflow-hidden">
              <a href="https://pixelo-agency.vercel.app/" target="_blank" rel="noreferrer"><SlideIcon className="transition-all duration-500 ease-in-out transform hover:translate-x-1/3" /></a>
            </div>
          </div>
        </div>
        <div className="bg-zinc-800 rounded-xl grid grid-rows-3 gap-2">
          <img className="row-span-2 object-cover w-full h-full"  src={skyper} alt="projectImage" />
          <div className="flex justify-between px-4 items-center">
            <div className="flex flex-col object-contain gap-2">
              <h1 className="font-Manrope-Regular text-green-700 text-sm sm:text-xl">
                SKYPER
              </h1>
              <h1 className="font-Manrope-Regular sm:text-sm text-xs">
                 E-commerce where the limit is the sky
              </h1>
            </div>
            <div className="overflow-hidden">
              <a href="https://skyper.onrender.com/" target="_blank" rel="noreferrer"><SlideIcon className="transition-all duration-500 ease-in-out transform hover:translate-x-1/3" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-8">
        <h1 className="flex gap-2">More Projects</h1>
        <span className="h-[1px] bg-white lg:w-[26rem] md:w-[25rem] sm:w-[15rem]" />
        <button
          className="bg-zinc-950 py-2 px-4 rounded-2xl border-2 border-zinc-800"
          onClick={() => navigate("/project")}
        >
          View All Projects
        </button>
      </div>
    </div>
  );
}
