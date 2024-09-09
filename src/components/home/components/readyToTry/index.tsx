import CustomButton from "@/components/shared/CustomButton";
import CustomIconButton from "@/components/shared/CustomIconButton";
import Discord from "@/utils/icons/common/Discord";
import NextArrow from "@/utils/icons/common/NextArrow";
import React from "react";

const ReadyToTry = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className=" bg-black-800 pt-20 flex justify-center">
        <div className="flex flex-col gap-10 px-6 pb-20 max-w-[1248px] w-full items-center md:items-start">
          <span className="text-2xl font-bold text-common-white leading-6 -tracking-[0.48px]">
            Stay updated
          </span>
          <div className="flex justify-between w-full lg:pr-9 flex-col md:flex-row items-center md:items-start gap-10 md:gap-0">
            <div className="flex flex-col gap-4 max-w-[384px] w-full">
              <div className="border border-black-700 pl-[13px] pr-[7px] py-1.5 rounded-lg flex  w-full justify-between  bg-black-A100">
                <input
                  placeholder="Email Address"
                  className="text-base text-black-600 bg-black-A100"
                />
                <CustomIconButton
                  style="py-[9px] px-[25px] bg-blue rounded-md hover:bg-darkBlue"
                  icon={
                    <div className="text-common-white">
                      <NextArrow />
                    </div>
                  }
                />
              </div>
              <div className="text-lg text-black-500 leading-[25.2px] ">
                Get product updates, tutorials, and more delivered to your inbox
                monthly.
              </div>
            </div>
            <div className="flex gap-2 w-fit h-fit flex-col sm:flex-row">
              <CustomButton
                title="Join us"
                className="w-full text-xl font-bold text-common-white py-[11px] px-[25px] bg-blue border-blue max-w-[151px] gap-0 items-center hover:bg-darkBlue hover:border-darkBlue flex-nowrap min-w-[159px]"
                startIcon={
                  <div className="text-common-white">
                    <Discord />
                  </div>
                }
              />
              <CustomButton
                title="Follow us"
                className="text-xl font-bold text-common-white py-[11px] px-[25px] bg-blue border-blue  gap-0 items-center hover:bg-darkBlue hover:border-darkBlue min-w-[159px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-dark-to-transparent flex justify-center px-10">
        <div className="flex flex-col items-center gap-8 w-full pt-28 pb-16 max-w-[1248px]">
          <span className="text-[32px] lg:text-5xl font-bold leading-[35px] lg:leading-[53px] text-common-white">
            Ready to try?
          </span>
          <span className="text-base lg:text-lg text-common-white leading-[25.2px] text-center">
            Integrate into your existing project, start from scratch, or just
            take things for a spin.
          </span>
          <CustomButton
            title="Get started now"
            className="w-fit py-[17px] px-[25px] bg-blue hover:bg-darkBlue rounded-md text-lg font-bold text-common-white leading-[18px] border-blue hover:border-darkBlue"
            endIcon={
              <div>
                <NextArrow />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ReadyToTry;
