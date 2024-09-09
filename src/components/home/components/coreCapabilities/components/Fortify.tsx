import { CustomImagePreview } from "@/components/shared/CustomImagePreview";
import Analytics from "@/utils/icons/common/Analytics";
import NextArrow from "@/utils/icons/common/NextArrow";
import { fortifyImage } from "@/utils/images";
import React, { useState } from "react";

const Fortify = () => {
  const [OPTIMIZEHover, setOPTIMIZEHover] = useState(false);
  const [STUDIOHover, setSTUDIOHover] = useState(false);

  return (
    <div className="flex flex-col gap-11">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row text-lg lg:text-xl leading-[18px] lg:leading-5 tracking-wide text-black-500 font-bold uppercase  items-center  gap-7 lg:gap-1  text-center lg:text-left">
          <span className="text-common-white capitalize lg:uppercase text-[32px] lg:text-xl">
            Fortify.
          </span>
          CONSISTENT PERFORMANCE
        </div>
        <span className="text-base lg:text-lg leading-[22px] lg:leading-[25.2px] text-black-500 text-center lg:text-start">
          Ensure that your database and queries are running at peak performance
          and efficiency. Easily handle connections to your database and scale
          with your traffic with Accelerate, with no infrastructure to manage.
        </span>
      </div>
      <div className="flex gap-10 justify-between flex-col items-center lg:flex-row">
        <div
          className={`p-6 flex flex-col border   rounded-2xl gap-5 bg-black-800 max-w-[470px] ${
            OPTIMIZEHover
              ? "border-celeste bg-lightGreen-gradient"
              : "border-lightGreen"
          }`}
        >
          <div className="flex gap-6 items-center">
            <div className="h-[84px] w-[84px] bg-green opacity-70 rounded-[10.5px] flex items-center justify-center">
              <div className="scale-[0.77] text-lightGreen">
                <Analytics />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold left-5 tracking-wide text-SoftBlue uppercase">
                Optimize
              </span>
              <span className="text-[22px] font-bold text-common-white leading-[26px] -tracking-[0.48px]">
                AI-driven query analysis
              </span>
            </div>
          </div>
          <span className="text-base text-SoftBlue">
            Gain deep insights and get actionable recommendations to improve
            your database queries, making your app run faster.
          </span>
          <div
            className="cursor-pointer underline text-lg leading-[18px] text-lightGreen flex gap-1 group font-bold hover:text-celeste w-fit"
            onMouseEnter={() => setOPTIMIZEHover(true)}
            onMouseLeave={() => setOPTIMIZEHover(false)}
          >
            Explore Prisma ORM
            <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1">
              <NextArrow />
            </div>
          </div>
        </div>
        <div className="relative w-full h-[264px] max-w-[470px]">
          <CustomImagePreview image={fortifyImage} />
        </div>
      </div>
    </div>
  );
};

export default Fortify;
