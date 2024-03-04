import React from "react";
import { useNavigate } from "react-router-dom";

export default function Skills() {
  const navigate = useNavigate();
  return (
    <section className="text-white px-6 my-12">
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
      <article className="w-full h-screen mt-12 p-8">
        <iframe
          src="/embed/skills.html"
          className="w-full h-full"
          title="skill"
        ></iframe>
      </article>
      <h1
        onClick={() => navigate("/contact")}
        className="cursor-pointer uppercase font-Manrope-Regular sm:text-7xl text-4xl flex justify-center pt-10 animate-bounce"
      >
        let's connect
      </h1>
    </section>
  );
}
