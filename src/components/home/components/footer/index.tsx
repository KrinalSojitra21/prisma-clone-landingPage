import Discord from "@/utils/icons/common/Discord";
import DownArrow from "@/utils/icons/common/DownArrow";
import GDPRIcon from "@/utils/icons/common/GDPRIcon";
import GithubIcon from "@/utils/icons/common/GithubIcon";
import HippaIcon from "@/utils/icons/common/HippaIcon";
import NextArrow from "@/utils/icons/common/NextArrow";
import PrismaIcon from "@/utils/icons/common/PrismaIcon";
import Whatsapp from "@/utils/icons/common/Whatsapp";
import Youtube from "@/utils/icons/common/Youtube";
import React from "react";

const Footer = () => {
  return (
    <div className="px-6 pt-[46px] pb-[100px] flex flex-col gap-16 max-w-[1248px] w-full">
      <div className="flex gap-6 lg:gap-2 justify-center flex-col lg:flex-row">
        <div className="flex flex-col sm:flex-row lg:flex-col gap-6 lg:max-w-[240px] w-full justify-between lg:justify-normal items-center">
          <div className="scale-[1.42] sm:ml-5 lg:ml-10">
            <PrismaIcon />
          </div>
          <div className="flex gap-4 text-black-500 items-center">
            <div className="scale-[1.15] cursor-pointer hover:text-blue">
              <Discord />
            </div>
            <div className="scale-[0.96] cursor-pointer hover:text-blue">
              <Youtube />
            </div>
            <div className="scale-[0.96] cursor-pointer hover:text-blue">
              <Whatsapp />
            </div>
            <div className="scale-75 cursor-pointer hover:text-blue">
              <GithubIcon />
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-grow flex-wrap md:flex-nowrap">
          <div className="flex flex-col gap-3 max-w-[240px] w-fit md:w-full">
            <div className="text-base  font-bold leading-[26px] text-black-400 tracking-[1.6px] uppercase">
              Product
            </div>
            <div className="flex flex-col ">
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                ORM
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Studio
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer flex gap-2">
                Optimize{" "}
                <span className="text-[8px] font-bold text-common-white bg-blue px-2 py-1.5 rounded-full leading-[8px]  flex items-center">
                  Early Access
                </span>
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Accelerate
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Pulse
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Pricing
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Changelog
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer flex items-center gap-1">
                Data Platform status{" "}
                <span className="-rotate-45">
                  {" "}
                  <NextArrow />
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-[240px] w-fit md:w-full">
            <div className="text-base  font-bold leading-[26px] text-black-400 tracking-[1.6px] uppercase">
              Resources
            </div>
            <div className="flex flex-col ">
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Docs
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Ecosystem
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer flex items-center gap-1">
                Playground{" "}
                <span className="-rotate-45">
                  {" "}
                  <NextArrow />
                </span>
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer flex items-center gap-1">
                ORM Benchmarks{" "}
                <span className="-rotate-45">
                  {" "}
                  <NextArrow />
                </span>
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Customer stories
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Pulse
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Data guide
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-[240px] w-fit md:w-full">
            <div className="text-base  font-bold leading-[26px] text-black-400 tracking-[1.6px] uppercase">
              Contact us
            </div>
            <div className="flex flex-col ">
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Community
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Support
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Enterprise{" "}
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Partners
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                OSS Friends
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-[240px] w-fit md:w-full">
            <div className="text-base  font-bold leading-[26px] text-black-400 tracking-[1.6px] uppercase">
              Company
            </div>
            <div className="flex flex-col ">
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                About
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Blog
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer flex items-center gap-1">
                Data DX{" "}
                <span className="-rotate-45">
                  {" "}
                  <NextArrow />
                </span>
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer">
                Careers
              </span>
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer flex items-center gap-1">
                Security & Compliance{" "}
                <span className="-rotate-45">
                  {" "}
                  <NextArrow />
                </span>
              </span>{" "}
              <span className="text-base py-1 font-medium text-black-500 leading-[22.2px] hover:text-blue cursor-pointer flex items-center gap-1">
                Data DX{" "}
                <span className="">
                  {" "}
                  <DownArrow />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-black-700"></div>
      <div className="flex justify-between flex-wrap">
        <span className="text-base leading-[25.2px] text-black-500">
          © 2024 Prisma Data, Inc.
        </span>
        <div className="flex gap-14 text-black-500">
          <div className="cursor-pointer">
            <GDPRIcon />
          </div>
          <div className="cursor-pointer">
            <HippaIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
