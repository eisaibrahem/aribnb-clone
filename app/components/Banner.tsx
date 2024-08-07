import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] xl:h-[550px] ">
      <Image
        alt="banner"
        className="relative object-cover object-left "
        src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fill
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-sm sm:text-lg">Not Sure where to go? Perfect.</p>
        <button
          type="button"
          className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          I am flexiable
        </button>
      </div>
    </div>
  );
};

export default Banner;
