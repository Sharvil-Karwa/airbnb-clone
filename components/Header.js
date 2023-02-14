import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400 ml-2"
          placeholder="Search"
        />
        <SearchIcon className="hidden md:inline h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeIcon className="h-6" />
        <div className="flex border-2 rounded-full p-2 cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
