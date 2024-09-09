import NextArrow from "@/utils/icons/common/NextArrow";
import CockroachDb from "@/utils/icons/technologyLogo/CockroachDb";
import MongoDb from "@/utils/icons/technologyLogo/MongoDb";
import MySQL from "@/utils/icons/technologyLogo/MySQL";
import PlanetScale from "@/utils/icons/technologyLogo/PlanetScale";
import SQLite from "@/utils/icons/technologyLogo/SQLite";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Hapi from "@/utils/icons/technologyLogo/Hapi";
import Nest from "@/utils/icons/technologyLogo/Nest";
import Express from "@/utils/icons/technologyLogo/Express";
import Apollo from "@/utils/icons/technologyLogo/Apollo";
import NextJs from "@/utils/icons/technologyLogo/NextJs";
import GraphQl from "@/utils/icons/technologyLogo/GraphQl";
import CoreLogo from "@/utils/icons/common/CoreLogo";

const WorksWithYourStack = () => {
  return (
    <div className="flex flex-col py-[120px] items-center max-w-[1248px] w-full">
      <div className="py-10 px-9 flex flex-col gap-10 items-center  w-full">
        <span className=" text-[32px] lg:text-5xl font-bold text-common-white text-center">
          Works with your stack
        </span>
        <div className="flex flex-col gap-1 items-center">
          <span className="text-center text-base lg:text-lg text-black-400">
            Bring your own database and framework, and change it as you’d like.
            We’ll make sure everything continues to work seamlessly so you have
            the flexibility to evolve without constraints.
          </span>
          <div className="cursor-pointer underline text-lg leading-[18px] text-lightGreen flex items-end gap-1 group font-bold hover:text-green w-fit text-center">
            Learn more about Prisma in your stack
            <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 ">
              <NextArrow />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  max-w-[1248px] mt-10 relative w-full">
        <div className="flex w-full absolute h-full z-10">
          <div className="w-full bg-darkBlue-dark-to-transparent"></div>
          <div className="w-full bg-darkBlue-transparent-to-dark"></div>
        </div>
        <div className="">
          <Splide
            options={{
              type: "loop",
              drag: false,
              focus: "center",
              arrows: false,
              pagination: false,
              clones: 3,
              direction: "rtl",
              autoScroll: {
                speed: 0.3,
                pauseOnHover: false,
                pauseOnFocus: false,
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide className="w-fit">
              <div className="flex justify-center items-center ">
                <div className="px-[31px] py-4">
                  <MongoDb />
                </div>
                <div className="px-[31px] py-4">
                  <PlanetScale />
                </div>
                <div className="px-[31px] py-4">
                  <CockroachDb />
                </div>
                <div className="px-[31px] py-4">
                  <SQLite />
                </div>
                <div className="px-[31px] py-4">
                  <MySQL />
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="sm:flex justify-center w-full px-5 hidden ">
          <CoreLogo />
        </div>
        <div>
          <Splide
            options={{
              type: "loop",
              drag: false,
              focus: "center",
              arrows: false,
              pagination: false,
              clones: 3,
              autoScroll: {
                speed: 0.3,
                pauseOnHover: false,
                pauseOnFocus: false,
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide className="w-fit">
              <div className="flex justify-center items-center ">
                <div className="px-[31px] py-4">
                  <Hapi />
                </div>
                <div className="px-[31px] py-4">
                  <Nest />
                </div>
                <div className="px-[31px] py-4">
                  <Express />
                </div>
                <div className="px-[31px] py-4">
                  <Apollo />
                </div>
                <div className="px-[31px] py-4">
                  <NextJs />
                </div>
                <div className="px-[31px] py-4">
                  <GraphQl />
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default WorksWithYourStack;
