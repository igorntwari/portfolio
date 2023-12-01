import React from "react";
import LocationIcon from "../assets/icons/LocationIcon";
import rectangleImage from "../assets/images/Rectangle 7.jpg";
import SlideIcon from "../assets/icons/SlideIcon";
import BarIcon from "../assets/icons/BarIcon";
export default function HelloPage() {
  return (
    <div className="text-white px-8">
      <div className="flex justify-between pt-4 items-center lg:hidden">
        <BarIcon />
        <div>
          <img
            className="pt-5"
            src={rectangleImage}
            width={100}
            alt="portfolio"
          />
          <button className="flex justify-start bg-bg-primary text-black rounded-xl px-6 font-Manrope-extraBold border-2 border-green-200 mt-10">
            available
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-10 ">
        <h1 className="font-Manrope-Regular text-5xl">
          Hello! I'm IGOR NTWALI
        </h1>
        <h1 className="font-Manrope-bold text-4xl">
          I am{" "}
          <span className="bg-gradient-to-r from-bg-primary  via-green-400 to-green-950 text-transparent bg-clip-text">
            Full-Stack Developer
          </span>
        </h1>
        <p className="font-Manrope-medium leading-7">
          Born to ignite positive change, I thrive alongside passionate souls
          <br />
          who value their work. My compass points toward excellence, driven by a{" "}
          <br />
          thirst for learning. Teamwork, to me, is the elixir of lasting
          <br />
          success. I'm drawn to those who hustle hard, and when I'm not shaping{" "}
          <br />
          the future, you'll find me conquering peaks on hiking trails <br />
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="flex gap-2">
          <LocationIcon />
          Kigali, Rwanda
        </h1>
        <span className="h-[1px] bg-white w-[30rem]" />
        <button className="bg-zinc-950 py-2 px-4 rounded-2xl border-2 border-zinc-800">
          Contact Me
        </button>
      </div>

      <h1 className="font-Manrope-Regular py-10">Recent Projects</h1>
      <div className="flex gap-10">
        <div className="bg-zinc-800 rounded-xl flex flex-col gap-2">
          <img
            className="object-contain"
            src={rectangleImage}
            alt="projectImage"
          />
          <div className="flex justify-between px-4 items-center">
            <div className=" flex flex-col gap-2">
              <h1 className="font-Manrope-Regular text-green-700">
                App Design
              </h1>
              <h1 className="font-Manrope-Regular">
                Team Wave In React Router
              </h1>
            </div>
            <SlideIcon />
          </div>
        </div>
        <div className="bg-zinc-800 rounded-xl flex flex-col gap-2">
          <img
            className="object-contain"
            src={rectangleImage}
            alt="projectImage"
          />
          <div className="flex justify-between px-4 items-center">
            <div className=" flex flex-col gap-2">
              <h1 className="font-Manrope-Regular text-green-700">
                App Design
              </h1>
              <h1 className="font-Manrope-Regular">
                Team Wave In React Router
              </h1>
            </div>
            <SlideIcon />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-8">
        <h1 className="flex gap-2">More Projects</h1>
        <span className="h-[1px] bg-white w-[30rem]" />
        <button className="bg-zinc-950 py-2 px-4 rounded-2xl border-2 border-zinc-800">
          View All Projects
        </button>
      </div>
    </div>
  );
}
