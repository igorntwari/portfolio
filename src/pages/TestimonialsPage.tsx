import React from "react";
import Ellipse from "../assets/images/Ellipse 4.jpg";
import StarIcon from "../assets/icons/StarIcon";
import '../assets/testimonial.css'
import TestimonialComponent from "../components/Testimonial";
export default function TestimonialsPage() {
  return (
    <div id="testimonial" className="text-white px-6 ">
      <h1 className="uppercase text-center text-xl">testimonials</h1>
      <article className="relative mb-96">
      <section className="min-w-[200%] text-white grid grid-cols-4 gap-6 py-8 bg-black overflow-hidden bg-green-400 slider absolute top-0 left-0">
        <TestimonialComponent/>
        <TestimonialComponent/>
        <TestimonialComponent/>
        <TestimonialComponent/>
      </section>
      <section className="min-w-[200%] text-white grid grid-cols-4 gap-6 py-8 bg-black overflow-hidden bg-red-500 slider2 absolute top-0 left-[202%]">
        <TestimonialComponent/>
        <TestimonialComponent/>
        <TestimonialComponent/>
        <TestimonialComponent/>
      </section>
      </article>
    </div>
  );
}
