import React, { useState } from "react";
import emailjs from "emailjs-com";
import XIcon from "../assets/icons/XIcon.jsx";
import InstagramIcon from "../assets/icons/InstagramIcon.jsx";
import GitHubIcon from "../assets/icons/GithubIcon.jsx";
import CodewarsIcon from "../assets/icons/CodewarsIcon.jsx";
import  LinkedinIcon from '../assets/icons/LinkedinIcon.jsx'
import { useNavigate } from "react-router-dom";
function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    second_Name: "",
    email: "",
    message: "",
  });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i9d6f3n",
        "template_ugfjrs9",
        e.target,
        "Gn2I0TR3AxPHCypzP"
      )
      .then(
        (result) => {
          console.log("Success block executed:", result);
          console.log(result.text);
          setFormData({
            first_name: "",
            second_Name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error block executed:", error);
          console.log(error.text);
        }
      );
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen text-white font-Manrope-extralight">
      <div className="flex justify-center py-20 items-center">
        <h1 className="uppercase font-Manrope-Regular md:text-7xl sm:text-5xl text-4xl">
          Contact me
        </h1>
        <h1 onClick={() => navigate("/")} className="cursor-pointer px-9">
          back
        </h1>
      </div>
      <div className="flex md:flex-row md:justify-between px-10 flex-col">
        <div className="flex flex-col md:gap-20 sm:gap-10 sm:text-base text-xs gap-6 py-4">
          <h1>Your  Message, My word – A Perfect Match.</h1>
          <h1>Get In Touch: igorntwari28@gmail.COM.</h1>
          <h1 className="uppercase text-xl">find me on :</h1>
          <div className="flex gap-6">
            <a
              href="https://twitter.com/nyiramacumu"
              target="_blank"
              rel="noreferrer"
            >
              <XIcon />
            </a>
            <a
              href="https://www.instagram.com/ntwali_igor/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a href="https://github.com/igorntwari" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.codewars.com/users/igorntwari" target="_blank" rel="noreferrer">
              <CodewarsIcon />
            </a>
            <a href="https://www.linkedin.com/in/igorntwali/" target="_blank" rel="noreferrer">
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <form className="grid grid-cols-2 gap-4" onSubmit={sendEmail}>
          <input
            className="bg-slate-800 border-2 border-gray-500 rounded-lg pl-4 sm:h-12 h-8"
            value={formData.first_name}
            onChange={handleInputChange}
            type="text"
            name="first_name"
            placeholder="First Name"
          />
          <input
            className="bg-slate-800 border-2 border-gray-500 rounded-lg pl-4"
            value={formData.second_Name}
            onChange={handleInputChange}
            type="text"
            name="second_Name"
            placeholder="Last Name"
          />
          <input
            className="bg-slate-800 border-2 border-gray-500 rounded-lg pl-4 col-span-2 sm:h-12 h-8"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            name="email"
            placeholder="email@mail"
          />
          <input
            className="bg-slate-800 border-2 border-gray-500 rounded-lg pl-4  col-span-2 sm:h-52 h-36"
            value={formData.message}
            onChange={handleInputChange}
            type="text"
            name="message"
            placeholder="your Message"
          />
          <button
            type="submit"
            value="Send"
            className="font-Manrope-extralight bg-slate-500 w-full col-span-full rounded-lg sm:h-12 h-8"
          >
            Get In Touch
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
