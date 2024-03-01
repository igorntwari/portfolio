import React from "react";
import StarIcon from "../assets/icons/StarIcon";

interface TestimonialProps {
  stars: number;
  description: string;
  img: string;
  name: string;
  position: string;
}

export default function TestimonialComponent({
  stars,
  description,
  img,
  name,
  position,
}: TestimonialProps) {
  return (
    <div className="bg-zinc-800 flex flex-col sm:gap-8 justify-center sm:p-8 rounded-2xl p-4 gap-8 w-[30rem] h-[18rem] md:w-[40rem] md:h-[26rem]">
      <h1 className="flex items-center justify-center">
        {Array.from({ length: stars }).map((_, index) => (
          <StarIcon key={index} />
        ))}
      </h1>
      <p className="font-Manrope-Regular text-xs sm:text-xl">{description}</p>
      <div className="flex items-center gap-4 justify-center">
        <img
          className="rounded-full sm:w-[50px] w-[40px]"
          src={img}
          alt="Testimonial"
        />
        <h1 className="sm:flex sm:flex-col flex flex-col text-[8px] sm:text-[6px] ">
          <span>{name}</span>
          <span>{position}</span>
        </h1>
      </div>
    </div>
  );
}
