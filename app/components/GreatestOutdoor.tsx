import React from "react";
import MainHeading from "./MainHeading";
import Mysection from "./Mysection";
import Image from "next/image";
import Link from "next/link";

type GreatestOutdoorProps = {
  img: string;
  title: string;
  description: string;
  linkText: string;
};
const GreatestOutdoor = ({
  img,
  title,
  description,
  linkText,
}: GreatestOutdoorProps) => {
  return (
    <div className="container relative my-6">
      <div className="relative h-96 min-w-[300px]">
        <Image
          alt="GreatestOutdoor-img"
          src={img}
          fill
          className="rounded-2xl -z-10"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <Link
          href="/"
          className="text-sm px-4 py-2 mt-5 block w-fit rounded-lg
           text-white border-b bg-gray-900 hover:scale-105 transition transform duration-200 ease-out"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default GreatestOutdoor;
