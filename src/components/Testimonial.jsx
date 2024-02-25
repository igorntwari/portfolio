import StarIcon from "../assets/icons/StarIcon"

export default function TestimonialComponent(){
    return <div className="bg-zinc-800 flex flex-col sm:gap-8 justify-center sm:p-8 rounded-2xl p-4 gap-8">
    <h1 className="flex items-center justify-center">
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </h1>
    <p className="font-Manrope-Regular text-xs sm:text-xl">
      "Working with Igor as a freelancer has been a fantastic experience.
      She's talented designer and an excellent communicator. She
      consistently delivers exceptional designs that align with our brand
      identity. We highly recommend her services."
    </p>
    <div className="flex items-center gap-4 justify-center">
      <img
        className="rounded-full sm:w-[50px] w-[40px]"
        src={'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'}
        alt="testimonial-1"
      />
      <h1 className="sm:flex sm:flex-col flex flex-col text-[8px] sm:text-[6px] ">
        <span>Dmatt</span>
        <span>ceo of ejo heza </span>
      </h1>
    </div>
  </div>
}