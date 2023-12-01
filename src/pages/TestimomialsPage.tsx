import React from "react";
import Ellipse from "../assets/images/Ellipse 4.jpg"
import StarIcon from "../assets/icons/StarIcon";
export default function TestimomialsPage() {
  return (
    <div className="text-white px-6 flex gap-6 py-8">
     <div className="bg-zinc-800 flex flex-col gap-8 justify-center p-8 rounded-2xl">
        <h1 className="flex items-center justify-center">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </h1>
        <p>
          "Working with Igor as a freelancer has been a fantastic experience.
          She's talented designer and an excellent communicator. She
          consistently delivers exceptional designs that align with our brand
          identity. We highly recommend her services."
        </p>
        <div className="flex items-center gap-4 justify-center">
          <img className="rounded-full" src={Ellipse} alt="testimonial-1" />
          <h1 className="flex flex-col">
            <span>Dmatt</span>
            <span>ceo of ejo heza </span>
          </h1>
        </div>
      </div>
      <div className="bg-zinc-800 flex flex-col gap-8 justify-center p-8 rounded-2xl">
        <h1 className="flex items-center justify-center">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </h1>
        <p>
          "Working with Igor as a freelancer has been a fantastic experience.
          She's talented designer and an excellent communicator. She
          consistently delivers exceptional designs that align with our brand
          identity. We highly recommend her services."
        </p>
        <div className="flex items-center gap-4 justify-center">
          <img className="rounded-full" src={Ellipse} alt="testimonial-1" />
          <h1 className="flex flex-col">
            <span>Dmatt</span>
            <span>ceo of ejo heza </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
