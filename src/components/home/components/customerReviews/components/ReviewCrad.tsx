import { CustomImagePreview } from "@/components/shared/CustomImagePreview";
import { StaticImageData } from "next/image";
import React from "react";

type Props = {
  reviewMessage: string;
  reviewUserName: string;
  department: string;
  skill: string;
  image: string | StaticImageData;
};

const ReviewCrad = ({
  department,
  image,
  reviewMessage,
  reviewUserName,
  skill,
}: Props) => {
  return (
    <div className="p-[25px] flex flex-col gap-8 bg-black-A100 border border-black-700 rounded-[10px] max-w-[423px]">
      <span className="text-common-white">{reviewMessage}</span>
      <div className="flex gap-4">
        <div className="relative w-[48px] h-[48px]">
          <CustomImagePreview image={image} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg text-common-white font-bold leading-5 tracking-[0.36px]">
            {reviewUserName}
          </span>
          <span className="text-base leading-[22px] tracking-[0.36px] text-SoftBlue ">
            {department} /{" "}
            <span className="text-base font-bold text-lightBlue leading-[22px]">
              {skill}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCrad;
