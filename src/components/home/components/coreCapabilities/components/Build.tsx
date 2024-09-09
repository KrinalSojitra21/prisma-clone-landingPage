import Database from "@/utils/icons/common/Database";
import NextArrow from "@/utils/icons/common/NextArrow";
import TableIcon from "@/utils/icons/common/TableIcon";
import React, { useState } from "react";

const Build = () => {
  const [ORMHover, setORMHover] = useState(false);
  const [STUDIOHover, setSTUDIOHover] = useState(false);
  return (
    <div className="flex flex-col gap-11">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row text-lg lg:text-xl leading-[18px] lg:leading-5 tracking-wide text-black-500 font-bold uppercase  items-center  gap-7 lg:gap-1  text-center lg:text-left">
          <span className="text-common-white capitalize lg:uppercase text-[32px] lg:text-xl">
            Build.
          </span>
          STREAMLINE YOUR DEVELOPMENT
        </div>
        <span className="text-base lg:text-lg leading-[22px] lg:leading-[25.2px] text-black-500 text-center lg:text-start">
          Easily build applications with our intuitive tools, simplifying
          database interactions, schema evolution, and data management. Lay a
          solid foundation for your application while ensuring adaptability to
          future needs.
        </span>
      </div>
      <div className="flex gap-10 justify-between flex-col items-center lg:flex-row">
        <div
          className={`p-6 flex flex-col border   rounded-2xl gap-5 bg-black-800 max-w-[470px] ${
            ORMHover ? "border-lightBlue bg-lightBlue-gradient" : "border-blue"
          }`}
        >
          <div className="flex gap-6 items-center">
            <div className="h-[84px] w-[84px] bg-secondaryBlue opacity-70 rounded-[10.5px] flex justify-center items-center">
              <div className="scale-[0.77] text-blue">
                <Database />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold left-5 tracking-wide text-SoftBlue uppercase">
                orm
              </span>
              <span className="text-[22px] font-bold text-common-white leading-[26px] -tracking-[0.48px]">
                Talk to your database easily
              </span>
            </div>
          </div>
          <span className="text-base text-SoftBlue">
            Open source Node.js and TypeScript ORM with a readable data model,
            automated migrations, type-safety, and auto-completion.
          </span>
          <div
            className="cursor-pointer underline text-lg leading-[18px] text-blue flex gap-1 group font-bold hover:text-lightBlue w-fit"
            onMouseEnter={() => setORMHover(true)}
            onMouseLeave={() => setORMHover(false)}
          >
            Explore Prisma ORM
            <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1">
              <NextArrow />
            </div>
          </div>
        </div>
        <div
          className={`p-6 flex flex-col border   rounded-2xl gap-5 bg-black-800 max-w-[470px] ${
            STUDIOHover
              ? "border-lightBlue bg-lightBlue-gradient"
              : "border-blue"
          }`}
        >
          <div className="flex gap-6 items-center ">
            <div className="h-[84px] w-[84px] bg-secondaryBlue opacity-70 rounded-[10.5px] flex justify-center items-center">
              <div className="scale-[0.77] text-blue">
                <TableIcon />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold left-5 tracking-wide text-SoftBlue uppercase">
                Studio
              </span>
              <span className="text-[22px] font-bold text-common-white leading-[26px] -tracking-[0.48px] ">
                Explore and manipulate data
              </span>
            </div>
          </div>
          <span className="text-base text-SoftBlue">
            With a simple tabular interface you can quickly have a look at the
            data of your local database and check if your app is working
            correctly.
          </span>
          <div
            className="cursor-pointer underline text-lg leading-[18px] text-blue flex gap-1 items-center font-bold group hover:text-lightBlue w-fit"
            onMouseEnter={() => setSTUDIOHover(true)}
            onMouseLeave={() => setSTUDIOHover(false)}
          >
            Explore Prisma Studio
            <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1">
              <NextArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
