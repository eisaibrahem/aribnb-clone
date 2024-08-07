import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

export default function Header({ placeholder }: { placeholder?: string }) {
  return (
    <header className="sticky top-0 z-50 shadow-md bg-white py-5">
      <div className="container  grid grid-cols-3 items-center">
        <Link className=" relative flex items-center h-10 my-auto" href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="icon-image"
            fill
            className=" object-contain object-left"
          />
        </Link>
        <SearchBar placeholder={placeholder} />
        <NavBar />
      </div>
    </header>
  );
}
