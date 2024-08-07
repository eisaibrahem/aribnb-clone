import React from "react";
import { LiveItem } from "../types/app";
import Image from "next/image";

type LiveCardProps = LiveItem;
const LiveCard = ({ img, title }: LiveCardProps) => {
  return (
    <div className=" cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative  h-80 w-80">
        <Image alt="live-img" src={img} fill className="rounded-2xl" />
      </div>

      <h3 className=" text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default LiveCard;
