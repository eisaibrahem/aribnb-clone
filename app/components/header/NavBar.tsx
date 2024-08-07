import { GlobeAltIcon, MenuIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex space-x-4 items-center justify-end text-gray-500">
      <p className="hidden md:inline cursor-pointer">Become a host</p>
      <GlobeAltIcon className="h-6 cursor-pointer" />
      <div className="flex space-x-2 border-2 p-2 rounded-full">
        <MenuIcon className="h-6" />
        <UserIcon className="h-6" />
      </div>
    </div>
  );
};

export default NavBar;
