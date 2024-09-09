import CustomButton from "@/components/shared/CustomButton";
import CustomIconButton from "@/components/shared/CustomIconButton";
import CloseIcon from "@/utils/icons/common/CloseIcon";
import DrawerIcon from "@/utils/icons/common/DrawerIcon";
import GithubIcon from "@/utils/icons/common/GithubIcon";
import PrismaIcon from "@/utils/icons/common/PrismaIcon";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  isNavbarExtended: boolean;
  setIsNavbarExtended: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ isNavbarExtended, setIsNavbarExtended }: Props) => {
  useEffect(() => {
    if (isNavbarExtended) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isNavbarExtended]);
  return (
    <>
      <div className="w-full z-20 px-6 max-w-[1248px] flex flex-col h-full relative">
        <div className={`flex w-full justify-between `}>
          <div className="flex gap-3 lg:gap-6 items-center">
            <div className="cursor-pointer">
              <PrismaIcon />
            </div>
            <div className="md:flex lg:gap-2.5 gap-0.5 hidden">
              <span className="lg:px-4 px-3 py-3 text-base font-semibold text-common-white hover:text-blue cursor-pointer">
                Products
              </span>
              <span className="lg:px-4 px-3 py-3 text-base font-semibold text-common-white hover:text-blue cursor-pointer">
                Pricing
              </span>
              <span className="lg:px-4 px-3 py-3 text-base font-semibold text-common-white hover:text-blue cursor-pointer">
                Resources
              </span>
              <span className="lg:px-4 px-3 py-3 text-base font-semibold text-common-white hover:text-blue cursor-pointer">
                Blog
              </span>
            </div>
          </div>
          <div className="gap-3 md:flex items-center hidden ">
            <CustomIconButton
              style="hidden lg:block"
              icon={
                <div className="text-common-white">
                  <GithubIcon />
                </div>
              }
            />
            <CustomButton
              title="Log in"
              className="text-base font-bold text-purple px-[13px] py-1.5 border border-purple h-fit leading-[22.5px] w-fit  hover:border-lightBlue hover:text-lightBlue"
            />
            <CustomButton
              title="Get started"
              className="text-base font-bold text-common-white px-[13px] py-1.5 border border-purple bg-purple h-fit leading-[22.5px] w-fit  hover:bg-darkBlue hover:border-darkBlue"
            />
          </div>
          <div
            className="text-common-white px-3 py-[5px] cursor-pointer flex md:hidden rounded-lg hover:bg-blue min-w-[48px] min-h-[36px] justify-center items-center"
            onClick={() => setIsNavbarExtended(!isNavbarExtended)}
          >
            {isNavbarExtended ? <CloseIcon /> : <DrawerIcon />}
          </div>
        </div>
      </div>
      {isNavbarExtended && (
        <div className="w-full h-full bg-black bg-opacity-75 z-30 flex flex-col p-6 bg-black-A100">
          <div className="w-full border-b !border-black-600 mr-8 py-6 text-base font-semibold text-common-white hover:text-blue cursor-pointer">
            Products
          </div>
          <div className="w-full border-b !border-black-600 mr-8 py-6 text-base font-semibold text-common-white hover:text-blue cursor-pointer">
            Pricing
          </div>
          <div className="w-full border-b !border-black-600 mr-8 py-6 text-base font-semibold text-common-white hover:text-blue cursor-pointer">
            Resource
          </div>
          <div className="w-full mr-8 py-6 text-base font-semibold text-common-white hover:text-blue cursor-pointer">
            Blog
          </div>
          <div className="w-full flex flex-col gap-6">
            <CustomButton
              title="Log in"
              className="text-xl font-medium text-purple px-[13px] py-1.5 border border-purple h-fit  w-full  hover:border-lightBlue hover:text-lightBlue"
            />
            <CustomButton
              title="Get started"
              className="text-xl font-medium text-common-white px-[13px] py-1.5 border border-purple bg-purple h-fit  w-full hover:bg-darkBlue hover:border-darkBlue"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
