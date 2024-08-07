import React from "react";
import { ExploreItem } from "../types/app";
import Image from "next/image";

type ExploreCardProps = ExploreItem;
const ExploreCard = ({ img, location, distance }: ExploreCardProps) => {
  return (
    <div className="flex gap-4 items-center cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
      <div className="relative w-16 h-16">
        <Image alt="explore-img" src={img} fill className="rounded-2xl" />
      </div>
      <div>
        <h3>{location}</h3>
        <h4 className="text-gray-500">{distance}</h4>
      </div>
    </div>
  );
};

export default ExploreCard;
