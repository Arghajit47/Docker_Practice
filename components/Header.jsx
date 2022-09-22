import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const cars = [
  "Model 3",
  "Model Y",
  "Model S",
  "Model X",
  "Solar Roof",
  "Solar Panels",
];

const sidebarItems = [
  "Existing Inventory",
  "Used Inventory",
  "Trade-In",
  "Test Drive",
  "Insurance",
  "Cybertruck",
  "Roadster",
  "Semi",
  "Charging",
  "Powerwall",
  "Commercial Energy",
  "Utilities",
  "Find Us",
  "Support",
  "Investor Relations",
];

const Header = ({ landing }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div>
      <div
        className="fixed lg:px-14 xs:px-8 px-4 top-0 left-0 right-0 flex items-center justify-between min-h-[60px] w-full z-10"
        id="header-wrapper"
      >
        <div className="relative h-6 w-28 cursor-pointer" id="header-logo">
          <Link href="/">
            <Image src="/images/logo.svg" layout="fill" objectFit="contain" />
          </Link>
        </div>
        <div
          className="hidden lg:inline-flex items-center justify-center flex-1 "
          id="header-cars"
        >
          <div className="flex items-center space-x-4">
            {cars &&
              cars.map((car, index) => (
                <Link href={`#${car}`} key={index}>
                  <span className="font-medium py-0.5 px-2 hover:bg-gray-200  rounded transition duration-300 ease-in flex-nowrap cursor-pointer">
                    {car}
                  </span>
                </Link>
              ))}
          </div>
        </div>
        <div className="flex items-center space-x-4" id="header-right">
          {landing && (
            <Link href={`/`}>
              <span className="font-medium py-0.5 px-2 hover:bg-gray-200  rounded transition duration-300 ease-in flex-nowrap cursor-pointer hidden md:inline-flex">
                Shop
              </span>
            </Link>
          )}
          {landing && (
            <Link href={`/`}>
              <span className="font-medium py-0.5 px-2 hover:bg-gray-200  rounded transition duration-300 ease-in flex-nowrap cursor-pointer hidden md:inline-flex">
                Account
              </span>
            </Link>
          )}
          <button
            className="font-medium py-0.5 px-2 hover:bg-gray-200  rounded transition duration-300 ease-in flex-nowrap cursor-pointer"
            onClick={() => setOpenSidebar((prev) => !prev)}
            id="toggle-sidebar"
          >
            Menu
          </button>
        </div>
      </div>
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar((prev) => !prev)}
          className="fixed cursor-pointer z-40 inset-0 bg-gray-600/20"
        ></div>
      )}
      <div
        className={`${
          openSidebar
            ? "bg-white overflow-x-hidden z-[100]  overflow-y-scroll translate-x-[0%] duration-500 drop-shadow-[0_35px_135px_rgba(0,0,0,0.5)] px-6 pt-6 h-full fixed w-[90%] md:w-[60%] lg:w-[45%] xl:w-[25%]  right-0 bottom-0"
            : "bg-white  translate-x-[300%] duration-500 drop-shadow-[0_35px_135px_rgba(0,0,0,0.5)] px-6 pt-6 h-full fixed w-[25%]  right-0 bottom-0"
        }`}
        id="sidebar-wrapper"
      >
        <div className={`flex flex-col items-center `}>
          <div className="w-full flex justify-end" id="cross-icon">
            <XMarkIcon
              className="h-10 p-2 rounded hover:bg-gray-200 cursor-pointer"
              onClick={() => setOpenSidebar((prev) => !prev)}
            />
          </div>
          <div className="flex flex-col  w-full ">
            {sidebarItems &&
              sidebarItems.map((item, index) => (
                <Link
                  href="/"
                  key={index}
                  // {`/${item.toLowerCase()}`}
                >
                  <span className="font-medium text-sm md:text-base px-3 py-2 flex justify-start flex-1 hover:bg-gray-200  rounded transition duration-300 ease-in flex-nowrap cursor-pointer">
                    {item}
                  </span>
                </Link>
              ))}
          </div>
          <div className="w-full flex space-x-4 p-2 rounded hover:bg-gray-200 cursor-pointer items-center">
            <GlobeAltIcon
              className="h-6 text-gray-600"
              onClick={() => setOpenSidebar((prev) => !prev)}
            />
            <div className="flex flex-col">
              <span className="font-medium tracking-wider">India</span>
              <span className="text-gray-600 text-sm hover:underline">
                English
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
