import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useRef } from "react";
import { Fade } from "react-reveal";
import AppHead from "../components/AppHead";
import Header from "../components/Header";

const Roadster = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <>
      <AppHead
        title={"Roadster | Tesla"}
        description="An all-electric vehicle, the Tesla Roadster is the quickest car in the world, with record-setting acceleration, range and performance. Reserve yours today."
      />
      <Header />
      <div className="flex flex-col w-full">
        {/* hero--section */}
        <div className="relative w-full h-[100vh] ">
          <div className="w-full">
            <div className="hidden sm:block">
              <Image
                src={`/images/roadster.jpg`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="sm:hidden ">
              <Image
                src={`/images/roadster(2).jpg`}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <Fade>
              <div className=" pt-24 md:pt-20 text-center">
                <h1 className="text-4xl md:text-5xl font-medium tracking-wide text-gray-600">
                  Roadster
                </h1>
              </div>
            </Fade>

            <div className="flex flex-col lg:pt-96 mdx:pt-[60vh] ms:pt-[26rem] xs:pt-80 sm:pt-[30rem] pt-72 short:pt-64 medium:pt-72">
              <Fade bottom>
                <div className="flex  items-center justify-center my-2">
                  <div className="text-sm md:text-lg max-w-sm mx-2 xs:mx-10 tracking-wide text-white">
                    ​The quickest car in the world, with record-setting
                    acceleration, range and performance.
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row w-5xl mx-auto gap-x-8 md:gap-x-20 gap-y-4 mt-2 items-center justify-center">
                  <div className="flex text-white gap-x-4 xs:gap-x-8 md:gap-x-20 gap-y-4">
                    <div className="flex flex-col">
                      <div className="flex ">
                        <svg
                          className="xs:h-6 md:h-10  h-6 p-0"
                          width="32px"
                          height="32px"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="var(--ci-primary-color, currentColor)"
                            d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"
                            className="ci-primary"
                          />
                          <rect
                            width="32"
                            height="32"
                            x="80"
                            y="264"
                            fill="var(--ci-primary-color, currentColor)"
                            className="ci-primary"
                          />
                          <rect
                            width="32"
                            height="32"
                            x="240"
                            y="128"
                            fill="var(--ci-primary-color, currentColor)"
                            className="ci-primary"
                          />
                          <rect
                            width="32"
                            height="32"
                            x="136"
                            y="168"
                            fill="var(--ci-primary-color, currentColor)"
                            className="ci-primary"
                          />
                          <rect
                            width="32"
                            height="32"
                            x="400"
                            y="264"
                            fill="var(--ci-primary-color, currentColor)"
                            className="ci-primary"
                          />
                          <path
                            fill="var(--ci-primary-color, currentColor)"
                            d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"
                            className="ci-primary"
                          />
                        </svg>
                        <p className="font-medium xs:text-xl md:text-3xl">
                          1.9 <span className="text-lg">s</span>
                        </p>
                      </div>
                      <div className="text-sm text-center">0-60 mph</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-medium xs:text-xl md:text-3xl">
                        +250 mph
                      </div>
                      <div className="text-sm text-center">Top Speed</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-medium xs:text-xl md:text-3xl">
                        620 mi
                      </div>
                      <div className="text-sm text-center">range</div>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center items-center border-2 border-white rounded px-20 text-white py-1 hover:bg-white hover:bg-opacity-30 transition duration-200 ease-in font-medium cursor-pointer">
                    {" "}
                    Reserve Now{" "}
                  </div>
                </div>
              </Fade>

              <ChevronDownIcon className="h-6 text-white absolute bottom-4 right-[49%] left-[49%] animate-bounce" />
            </div>
          </div>
        </div>
        {/* specs */}
      </div>
    </>
  );
};

export default Roadster;
