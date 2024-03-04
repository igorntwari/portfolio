import React, { useRef } from "react";
import TestimonialComponent from "../components/Testimonial.tsx";
import arstide from "../assets/images/arstide.jpg";
import eligrand from "../assets/images/eligrand.jpg";
import lionel from "../assets/images/lionel.png";
import junior from "../assets/images/junior.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
interface Testimonial {
  stars: number;
  description: string;
  img: string;
  name: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    stars: 5,
    description: `Igor Ntwali is an exceptional collaborator, possessing remarkable intellect and an insatiable thirst for knowledge. His adept problem-solving skills and innovative mindset make him invaluable to any team. Working alongside him is inspiring, as he injects ingenious ideas and unwavering enthusiasm into every project. Igor epitomizes intelligence, creativity, and reliability, making him an ideal candidate for any professional pursuit.`,
    img: arstide,
    name: "Aristide Isingizwe",
    position: "Software Developer",
  },
  {
    stars: 5,
    description:
      "I recently collaborated with my friend on a project, and their expertise, dedication, and pleasant approach made it an immensely rewarding experience. Their valuable contributions significantly enhanced the project's success. Based on this fruitful collaboration, I highly recommend them for any future endeavors, confident that their skills and dedication will continue to bring great value to any team or project.",
    img: eligrand,
    name: "Eligrand Nezerwa",
    position: "Software Developer",
  },
  {
    stars: 5,
    description:
      "Igor Ntwali is highly recommended for any project. With expertise in modern technology and an unwavering commitment to excellence, they consistently deliver efficient and top-notch results, making them an indispensable asset to any team or organization fortunate enough to collaborate with them. Igor's dedication and proficiency ensure successful outcomes in various professional endeavors.",
    img: lionel,
    name: "Lionel Kaneza",
    position: "Software Developer",
  },
  {
    stars: 5,
    description: `Igor is an exceptional software developer, bringing both passion and hard work to every project. His dedication to innovation is inspiring, and he consistently goes above and beyond to meet deadlines and deliver high-quality work. Igor's collaborative nature fosters a supportive team environment, making him a pleasure to work with. I highly recommend Igor to any organization seeking a talented and driven team player.`,
    img: junior,
    name: "Junior Hirwa",
    position: "Software Developer",
  },
];

export default function TestimonialPage() {
  const trigger = useRef(null);
  const slider = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top 15%",
        pin: true,
        scrub: true,
      },
    });

    timeline.to(slider.current, {
      translateX: "-110%",
    });
  });
  return (
    <article ref={trigger} className="overflow-hidden">
      <h1 className="text-center text-white font-Manrope-bold text-3xl mt-4 mb-8">
        Testimonials
      </h1>

      <div className="text-white">
        <div className="flex gap-4 max-w-full" ref={slider}>
          {testimonials.map((testimonial, index) => (
            <TestimonialComponent
              key={index}
              stars={testimonial.stars}
              description={testimonial.description}
              img={testimonial.img}
              name={testimonial.name}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
