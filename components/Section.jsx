import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-reveal";
import Footer from "./Footer";

const Section = ({
  title,
  backgroundImage,
  backgroundImageSmall,
  leftButtonText,
  rightButtonText,
  showDownArrow,
  footer,
  id,
}) => {
  return (
    <>
      <div
        className="relative w-full h-[100vh] flex flex-col justify-between items-center snap-start  "
        id={`${id}`}
      >
        <div className="w-full ">
          <div className="hidden sm:block">
            <Image
              src={`/images/${backgroundImage}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="sm:hidden ">
            <Image
              src={`/images/${backgroundImageSmall || backgroundImage}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Fade>
            <div className=" pt-24 md:pt-28 text-center">
              <h1 className="text-2xl md:text-4xl  font-semibold tracking-wider">
                {title}
              </h1>
              <p className="text-sm md:text-base py-2 md:py-3 tracking-wide">
                Order Online for{" "}
                <Link
                  href={"/"}
                  // `/support/taking-delivery`
                >
                  <span className="underline cursor-pointer hover:font-medium">
                    Touchless Delivery
                  </span>
                </Link>
              </p>
            </div>
          </Fade>
          <div className="flex flex-col lg:pt-96 mdx:pt-[60vh] ms:pt-[26rem] xs:pt-96 sm:pt-[30rem] pt-72 short:pt-64 medium:pt-80">
            <Fade bottom>
              <div className="flex flex-col md:flex-row gap-4 lg:gap-8 flex-1 items-center justify-center">
                <button className="cursor-pointer h-10 w-64 bg-[#171a20] bg-opacity-80 text-white rounded  font-medium">
                  {leftButtonText}
                </button>
                {rightButtonText && (
                  <button className="bg-gray-200 rounded font-medium cursor-pointer h-10 w-64 bg-opacity-70">
                    {rightButtonText}
                  </button>
                )}
              </div>
            </Fade>
            {showDownArrow && (
              <ChevronDownIcon className="h-6 absolute bottom-4 sm:bottom-10 right-[49%] left-[49%] animate-bounce" />
            )}
          </div>
        </div>
      </div>
      {footer && <Footer />}
    </>
  );
};

export default Section;
