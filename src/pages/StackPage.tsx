import React from "react";
import TailwindIcon from "../assets/icons/TailwindIcon";
import Bootstrap from "../assets/icons/Bootstrap";
import ReactIcon from "../assets/icons/ReactIcon";
import TypescriptIcon from "../assets/icons/TypescriptIcon";
import VueIcon from "../assets/icons/VueIcon";
import NodeIcon from "../assets/icons/NodeIcon";
import NextjsIcon from "../assets/icons/NextjsIcon";
import NestIcon from "../assets/icons/NestIcon";
import MongoIcon from "../assets/icons/MongoIcon";
import JsIcon from "../assets/icons/JsIcon";
import PostgreIcon from "../assets/icons/PostgreIcon";

function StackPage() {
  return (
    <div className="px-8 text-white py-20">
      <h1 className="font-Manrope-bold text-3xl">stack</h1>
      <p className="font-Manrope-thin pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime non
        ducimus ut. Beatae, ipsam reiciendis vero dolorum alias incidunt
        corporis sunt cum similique maiores necessitatibus harum quae laboriosam
        ab hic?
      </p>
      <div className="pt-10 text-[10px] sm:text-base">
          <h1 className="uppercase font-Manrope-extraBold">Front End tools</h1>
        <div className="sm:grid sm:grid-cols-5 grid grid-cols-4 gap-6 py-6">
        <button className="bg-zinc-700 px-8 rounded-2xl border-2 border-lime-600 flex flex-col items-center gap-1">
            <h1 className="font-Manrope-semiBold">Javascript</h1>
            <JsIcon className="h-[2rem] w-[2rem]" />
          </button>
          <button className="bg-zinc-700 px-8 rounded-2xl border-2 border-lime-600 flex flex-col items-center gap-1">
            <h1 className="font-Manrope-semiBold">Tailwind</h1>
            <TailwindIcon className="h-[2rem] w-[2rem]" />
          </button>
          <button className="bg-zinc-700 px-8 rounded-2xl border-2 border-lime-600 flex flex-col items-center gap-1">
            <h1 className="font-Manrope-semiBold">Bootstrap</h1>
            <Bootstrap className="h-[2rem] w-[2rem]" />
          </button>
          <button className="bg-zinc-700 px-8 rounded-2xl border-2 border-lime-600 flex flex-col items-center gap-1">
            <h1 className="font-Manrope-semiBold">React</h1>
            <ReactIcon className="h-[2rem] w-[2rem]" />
          </button>
          <button className="bg-zinc-700 px-8 rounded-2xl border-2 border-lime-600 flex flex-col items-center gap-1">
            <h1 className="font-Manrope-semiBold">Tailwind</h1>
            <TypescriptIcon className="h-[2rem] w-[2rem]" />
          </button>
          <button className="bg-zinc-700 px-8 rounded-2xl border-2 border-lime-600 flex flex-col items-center gap-1">
            <h1 className="font-Manrope-semiBold">Vue</h1>
            <VueIcon className="h-[2rem] w-[2rem]" />
          </button>
          <button className="bg-zinc-700 px-8 rounded-2xl border-2 border-lime-600 flex flex-col items-center gap-1">
            <h1 className="font-Manrope-semiBold">Next js</h1>
            <NextjsIcon className="h-[2rem] w-[2rem]" />
          </button>
        </div>
      </div>
      <div className="pt-10 text-[10px] sm:text-base">
          <h1 className="uppercase font-Manrope-extraBold">back End tools</h1>
        <div className="sm:grid sm:grid-cols-5 grid grid-cols-4 gap-6 py-6">
          <button className="bg-zinc-700 px-8 rounded-2xl border-2 border-lime-600 flex flex-col items-center gap-1">
            <h1 className="font-Manrope-semiBold">Node js</h1>
            <NodeIcon className="h-[2rem] w-[2rem]"/>
          </button>       
          <button className="bg-zinc-700 px-8 rounded-2xl border-2 border-lime-600 flex flex-col items-center gap-1">
            <h1 className="font-Manrope-semiBold">Nest js</h1>
            <NestIcon className="h-[2rem] w-[2rem]" />
          </button>
          <button className="bg-zinc-700 px-8 rounded-2xl border-2 border-lime-600 flex flex-col items-center gap-1">
            <h1 className="font-Manrope-semiBold">Express</h1>
            <MongoIcon className="h-[2rem] w-[2rem]" />
          </button>
          <button className="bg-zinc-700 px-8 rounded-2xl border-2 border-lime-600 flex flex-col items-center gap-1">
            <h1 className="font-Manrope-semiBold">PostgreSQL</h1>
            <PostgreIcon className="h-[2rem] w-[2rem]" />
          </button>
        </div>
      </div>
       <h1 className="uppercase font-Manrope-Regular sm:text-7xl text-4xl    flex justify-center pt-10 animate-bounce">let's connect</h1>
    </div>
  );
}

export default StackPage;
