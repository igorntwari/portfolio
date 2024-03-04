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
import { useNavigate } from "react-router-dom";

function StackPage() {
  const navigate = useNavigate();
  return (
    <div id="Stack" className="px-8 text-white py-20">
      <h1 className="font-Manrope-bold text-3xl">stack</h1>
      <p className="font-Manrope-medium pt-4 leading-8">
        My development stack comprises JavaScript as the foundation,
        strengthened by TypeScript for robustness. React and Vue.js enable
        dynamic interfaces, complemented by Tailwind CSS for efficient styling.
        On the backend, Node.js facilitates seamless server-client
        communication. MongoDB and PostgreSQL handle data storage needs. Nest.js
        organizes complex applications with its modular structure and TypeScript
        support. This stack—JavaScript, TypeScript, React, Vue.js, Node.js,
        Tailwind CSS, MongoDB, PostgreSQL, and Nest.js—empowers me to create
        agile, scalable, and feature-rich applications.
      </p>
      <div className="pt-10 text-[10px] sm:text-base">
        <h1 className="uppercase font-Manrope-extraBold">Front End tools</h1>
        <div className="flex flex-wrap gap-2 md:gap-6 py-6">
          <button className="bg-zinc-700 px-6 rounded-2xl border-2 border-lime-600 flex flex-col items-center py-1 gap-1 w-[30%] sm:w-[20%] md:w-[13%]">
            <h1 className="font-Manrope-semiBold">Javascript</h1>
            <JsIcon className="h-[2rem] w-[2rem] object-contain" />
          </button>
          <button className="bg-zinc-700 px-6 rounded-2xl border-2 border-lime-600 flex flex-col items-center py-1 gap-1 w-[30%] sm:w-[20%] md:w-[13%]">
            <h1 className="font-Manrope-semiBold">Tailwind</h1>
            <TailwindIcon className="h-[2rem] w-[2rem] object-contain" />
          </button>
          <button className="bg-zinc-700 px-6 rounded-2xl border-2 border-lime-600 flex flex-col items-center py-1 gap-1 w-[30%] sm:w-[20%] md:w-[13%]">
            <h1 className="font-Manrope-semiBold">Bootstrap</h1>
            <Bootstrap className="h-[2rem] w-[2rem] object-contain" />
          </button>
          <button className="bg-zinc-700 px-6 rounded-2xl border-2 border-lime-600 flex flex-col items-center py-1 gap-1 w-[30%] sm:w-[20%] md:w-[13%]">
            <h1 className="font-Manrope-semiBold">React</h1>
            <ReactIcon className="h-[2rem] w-[2rem] object-contain" />
          </button>
          <button className="bg-zinc-700 px-6 rounded-2xl border-2 border-lime-600 flex flex-col items-center py-1 gap-1 w-[30%] sm:w-[20%] md:w-[13%]">
            <h1 className="font-Manrope-semiBold">Tailwind</h1>
            <TypescriptIcon className="h-[2rem] w-[2rem] object-contain" />
          </button>
          <button className="bg-zinc-700 px-6 rounded-2xl border-2 border-lime-600 flex flex-col items-center py-1 gap-1 w-[30%] sm:w-[20%] md:w-[13%]">
            <h1 className="font-Manrope-semiBold">Vue</h1>
            <VueIcon className="h-[2rem] w-[2rem] object-contain" />
          </button>
          <button className="bg-zinc-700 px-6 rounded-2xl border-2 border-lime-600 flex flex-col items-center py-1 gap-1 w-[30%] sm:w-[20%] md:w-[13%]">
            <h1 className="font-Manrope-semiBold">Next js</h1>
            <NextjsIcon className="h-[2rem] w-[2rem] object-contain" />
          </button>
        </div>
      </div>
      <div className="pt-10 text-[10px] sm:text-base">
        <h1 className="uppercase font-Manrope-extraBold">back End tools</h1>
        <div className="flex gap-2 md:gap-6 flex-wrap py-6">
          <button className="bg-zinc-700 px-6 rounded-2xl border-2 border-lime-600 flex flex-col items-center py-1 w-[30%] sm:w-[20%] md:w-[13%]">
            <h1 className="font-Manrope-semiBold">Node js</h1>
            <NodeIcon className="h-[2rem] w-[2rem] object-contain" />
          </button>
          <button className="bg-zinc-700 px-6 rounded-2xl border-2 border-lime-600 flex flex-col items-center py-1 w-[30%] sm:w-[20%] md:w-[13%]">
            <h1 className="font-Manrope-semiBold">Nest js</h1>
            <NestIcon className="h-[2rem] w-[2rem] object-contain" />
          </button>
          <button className="bg-zinc-700 px-6 rounded-2xl border-2 border-lime-600 flex flex-col items-center py-1 w-[30%] sm:w-[20%] md:w-[13%] gap-1">
            <h1 className="font-Manrope-semiBold">Express</h1>
            <MongoIcon className="h-[2rem] w-[2rem] object-contain" />
          </button>
          <button className="bg-zinc-700 px-6 rounded-2xl border-2 border-lime-600 flex flex-col items-center py-1 w-[30%] sm:w-[20%] md:w-[13%] gap-1">
            <h1 className="font-Manrope-semiBold">PostgreSQL</h1>
            <PostgreIcon className="h-[2rem] w-[2rem] object-contain" />
          </button>
        </div>
      </div>
      <h1
        onClick={() => navigate("/contact")}
        className="cursor-pointer uppercase font-Manrope-Regular sm:text-7xl text-4xl flex justify-center pt-10 animate-bounce"
      >
        let's connect
      </h1>
    </div>
  );
}

export default StackPage;
