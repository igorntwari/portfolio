import React from "react";
import "../assets/testimonial.css";
import TestimonialComponent from "../components/Testimonial";

export default function TestimonialPage() {
  return (
    <article>
      <h1 className="text-center text-white font-Manrope-bold text-3xl mt-4 mb-8">
        Testimonials
      </h1>
      <div className="slider text-white">
        <div className="slide-track flex gap-4">
          <TestimonialComponent />
          <TestimonialComponent />
          <TestimonialComponent />
          <TestimonialComponent />
        </div>
      </div>
    </article>
  );
}
