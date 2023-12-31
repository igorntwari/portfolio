import React from "react";
import skyper from "../assets/images/skyper.webp";
import Pixel from "../assets/images/Pixel.jpg";
import LPGFitness from "../assets/images/LPGFitness.png";
import GithubIcon from "../assets/icons/GithubIcon";
import MoreIcon from "../assets/icons/MoreIcon";
import GlobalIcon from "../assets/icons/GlobalIcon";
import BackIcon from "../assets/icons/BackIcon";
import { useNavigate } from "react-router-dom";
const ProjectsPages = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white p-8 h-[200vh]">
      <span onClick={() => navigate(-1)}>
        <BackIcon className="text-2xl cursor-pointer" />
      </span>
      <h1 className="text-center text-7xl uppercase font-Manrope-extralight py-12">
        my work
      </h1>
      <p className="text-center font-thin text-2xl">
        here some of my work tha i have been working from past to the recent as
        Developer{" "}
      </p>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-10 px-8 py-8 md:justify-center">
        <button className="bg-bg-primary text-black hover:bg-lime-950 hover:text-white font-Manrope-extraBold rounded-md py-2 px-8">
          Recent
        </button>
        <button className="bg-bg-primary text-black hover:bg-lime-950 hover:text-white font-Manrope-extraBold rounded-md py-2 px-8">
          Full-Stack
        </button>
        <button className="bg-bg-primary text-black hover:bg-lime-950 hover:text-white font-Manrope-extraBold rounded-md py-2 px-8">
          Front-End
        </button>
        <button className="bg-bg-primary text-black hover:bg-lime-950 hover:text-white font-Manrope-extraBold rounded-md py-2 px-8">
          Designs
        </button>
      </div>
      <div className="flex gap-8">
        <div className="relative w-[20rem] sm:w-[25rem] overflow-hidden rounded-lg border border-gray-300">
          <div className="group relative h-full">
            <img
              src={skyper}
              className="transition-opacity h-full object-cover duration-500 ease-in-out group-hover:opacity-50"
              alt="first-project"
            />
            <h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-center font-Manrope-extraBold py-2 px-6 cursor-pointer group-hover:opacity-0">
              Skyper
            </h1>
            <div className="flex justify-around py-2 opacity-0 transition-opacity duration-500 ease-in-out absolute top-0 left-0 right-0 group-hover:opacity-100">
              <a
                href="https://skyper.onrender.com/"
                target="_blank"
                className="cursor-pointer"
                rel="noreferrer"
              >
                <GlobalIcon />
              </a>
              <a
                href="https://github.com/igorntwari/skyper"
                target="_blank"
                className="cursor-pointer"
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
              <a href="#link" className="cursor-pointer">
                <MoreIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-[20rem] sm:w-[25rem] overflow-hidden rounded-lg border border-gray-300">
          <div className="group relative">
            <img
              src={Pixel}
              className="transition-opacity duration-500 ease-in-out group-hover:opacity-50"
              alt="first-project"
            />
            <h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-center font-Manrope-extraBold py-2 px-6 cursor-pointer group-hover:opacity-0">
              Pixelo Agency
            </h1>
            <div className="flex justify-around py-2 opacity-0 transition-opacity duration-500 ease-in-out absolute top-0 left-0 right-0 group-hover:opacity-100">
              <a
                href="https://pixelo-agency.vercel.app/"
                target="_blank"
                className="cursor-pointer"
                rel="noreferrer"
              >
                <GlobalIcon />
              </a>
              <a
                href="https://github.com/igorntwari/pixelo-agency--nextjs"
                target="_blank"
                className="cursor-pointer"
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
              <a href="#link" className="cursor-pointer">
                <MoreIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-[20rem] sm:w-[25rem] overflow-hidden rounded-lg border border-gray-300">
          <div className="group relative">
            <img
              src={LPGFitness}
              className="transition-opacity duration-500 ease-in-out group-hover:opacity-50"
              alt="first-project"
            />
            <h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-center font-Manrope-extraBold py-2 px-6 cursor-pointer group-hover:opacity-0">
              LPGFitness
            </h1>
            <div className="flex justify-around py-2 opacity-0 transition-opacity duration-500 ease-in-out absolute top-0 left-0 right-0 group-hover:opacity-100">
              <a
                href="https://lpg-fitness.vercel.app/#h"
                target="_blank"
                className="cursor-pointer"
                rel="noreferrer"
              >
                <GlobalIcon />
              </a>
              <a
                href="https://github.com/igorntwari/lpg-fitness--nextjs"
                target="_blank"
                className="cursor-pointer"
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
              <a
                href="#link"
                className="cursor-pointer"
                onClick={() => navigate("/Reviews")}
              >
                <MoreIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPages;
