import React from "react";
import XIcon from "../assets/icons/XIcon.jsx";
import InstagramIcon from "../assets/icons/InstagramIcon.jsx";
import GitHubIcon from "../assets/icons/GithubIcon.jsx";
import CodewarsIcon from "../assets/icons/CodewarsIcon.jsx";
import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen text-white font-Manrope-extralight">
      <div className="flex justify-center py-20 items-center">
        <h1 className="uppercase font-Manrope-Regular md:text-7xl sm:text-5xl text-4xl">
          Contact me
        </h1>
        <h1 onClick={()=> navigate('/')} className="cursor-pointer px-9">back</h1>
      </div>
      <div className="flex md:flex-row md:justify-between px-10 flex-col">
        <div className="flex flex-col md:gap-20 sm:gap-10 sm:text-base text-xs gap-6 py-4">
          <h1>YOUR MESSAGE, MY WORDS – A PERFECT MATCH.</h1>
          <h1>GET IN TOUCH: igorntwari28@gmail.COM.</h1>
          <h1 className="uppercase text-xl">find me on :</h1>
          <div className="flex gap-6">
            <XIcon />
            <InstagramIcon />
            <GitHubIcon />
            <CodewarsIcon />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            className="bg-slate-800 border-2 border-gray-500 rounded-lg pl-4 sm:h-12 h-8"
            type="text"
            placeholder="First Name"
          />
          <input
            className="bg-slate-800 border-2 border-gray-500 rounded-lg pl-4"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="bg-slate-800 border-2 border-gray-500 rounded-lg pl-4 col-span-2 sm:h-12 h-8"
            type="text"
            placeholder="email@mail"
          />
          <input
            className="bg-slate-800 border-2 border-gray-500 rounded-lg pl-4  col-span-2 sm:h-52 h-36"
            type="text"
            placeholder="your Message"
          />
          <button className="font-Manrope-extralight bg-slate-500 w-full col-span-full rounded-lg sm:h-12 h-8">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
