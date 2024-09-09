import FlashIcon from "@/utils/icons/common/FlashIcon";
import HotspotIcon from "@/utils/icons/common/HotspotIcon";
import NextArrow from "@/utils/icons/common/NextArrow";
import React, { useState } from "react";

const Grow = () => {
  const [ACCELERATEHover, setACCELERATEHover] = useState(false);
  const [PULSEHover, setPULSEHover] = useState(false);
  return (
    <div className="flex flex-col gap-11">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row text-lg lg:text-xl leading-[18px] lg:leading-5 tracking-wide text-black-500 font-bold uppercase  items-center  gap-7 lg:gap-1 text-center lg:text-left">
          <span className="text-common-white capitalize lg:uppercase text-[32px] lg:text-xl">
            Grow.
          </span>{" "}
          ADAPT AS YOUR APP EVOLVES
        </div>
        <span className="text-base lg:text-lg leading-[22px] lg:leading-[25.2px] text-black-500 text-center lg:text-start">
          Scale confidently with infrastructure that adapts to your application.
          Prisma expands your application's capabilities to handle increased
          traffic and work with your database in completely new ways.
        </span>
      </div>
      <div className="flex gap-10 justify-between flex-col items-center lg:flex-row">
        <div
          className={`p-6 flex flex-col border   rounded-2xl gap-5 bg-black-800 max-w-[470px] ${
            ACCELERATEHover
              ? "border-celeste bg-lightGreen-gradient"
              : "border-lightGreen"
          }`}
        >
          <div className="flex gap-6 items-center">
            <div className="h-[84px] w-[84px] bg-green opacity-70 rounded-[10.5px] flex justify-center items-center">
              <div className="text-lightGreen">
                <FlashIcon />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold left-5 tracking-wide text-SoftBlue uppercase">
                Accelerate
              </span>
              <span className="text-[22px] font-bold text-common-white leading-[26px] -tracking-[0.48px]">
                Up to 1000x faster queries{" "}
              </span>
            </div>
          </div>
          <span className="text-base text-SoftBlue">
            Easily set up a global cache and a connection pool for your database
            to enable a lightning-fast experience for your users as your
            application grows.
          </span>
          <div
            className="cursor-pointer underline text-lg leading-[18px] text-lightGreen flex gap-1 group font-bold  hover:text-celeste w-fit"
            onMouseEnter={() => setACCELERATEHover(true)}
            onMouseLeave={() => setACCELERATEHover(false)}
          >
            Explore Prisma Accelerate
            <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1">
              <NextArrow />
            </div>
          </div>
        </div>
        <div
          className={`p-6 flex flex-col border   rounded-2xl gap-5 bg-black-800 max-w-[470px] ${
            PULSEHover
              ? "border-celeste bg-lightGreen-gradient"
              : "border-lightGreen"
          }`}
        >
          <div className="flex gap-6 items-center">
            <div className="min-w-[84px] h-[84px] w-[84px] bg-green opacity-70 rounded-[10.5px] flex justify-center items-center">
              <div className="text-lightGreen">
                <HotspotIcon />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold left-5 tracking-wide text-SoftBlue uppercase">
                Pulse
              </span>
              <span className="text-[22px] font-bold text-common-white leading-[26px] -tracking-[0.48px]">
                Database-event driven compute
              </span>
            </div>
          </div>
          <span className="text-base text-SoftBlue">
            Power real-time functionality with simplified, type-safe database
            subscriptions. Easily enable workflows and actions that react to
            changes in your database.
          </span>
          <div
            className="cursor-pointer underline text-lg leading-[18px] text-lightGreen flex gap-1 group font-bold  hover:text-celeste w-fit"
            onMouseEnter={() => setPULSEHover(true)}
            onMouseLeave={() => setPULSEHover(false)}
          >
            Explore Prisma Pulse
            <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1">
              <NextArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grow;
