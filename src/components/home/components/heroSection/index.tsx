import React from "react";
import TriangleLinesBg from "@/utils/images/TriangleLinesBg";
import CustomButton from "@/components/shared/CustomButton";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import FormBricks from "@/utils/icons/companiesLogo/FormBricks";
import Rapha from "@/utils/icons/companiesLogo/Rapha";
import Documenso from "@/utils/icons/companiesLogo/Documenso";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Gatsby from "@/utils/icons/companiesLogo/Gatsby";
import Dub from "@/utils/icons/companiesLogo/Dub";

const HeroSection = () => {
  const queryCachingTexts = [
    "query caching",
    "database subscriptions",
    "database migrations",
    "readable data models",
    "database queries",
    "connection pooling",
  ];

  const figureOutHowTexts = [
    "figure out how",
    "manage it",
    "get a PhD in it",
    "know how it works",
    "worry about them",
    "explain them",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex flex-col items-center relative pt-[58px] max-w-[1248px]  w-full">
      <div className="-mt-[26.5rem] absolute">
        <TriangleLinesBg />
      </div>
      <div className="flex flex-col z-10 w-full gap-28 items-center   ">
        <div className="flex flex-col gap-10 w-full  overflow-x-hidden px-6">
          <div className="flex flex-col gap-2 sm:gap-4 w-full items-center">
            <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
              <span className="text-[28px] sm:text-[44px] md:text-[64px] font-bold text-common-white leading-10 sm:leading-[44px] md:leading-[84px] -tracking-[1.25px]">
                We simplify
              </span>
              <span className="text-[28px] sm:text-[44px] md:text-[64px] font-bold text-corner-gradient leading-10 sm:leading-[44px] md:leading-[84px] -tracking-[1.25px]">
                query caching
              </span>
            </div>
            <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
              <span className="text-[28px] sm:text-[44px] md:text-[64px] font-bold text-common-white leading-10 sm:leading-[44px] md:leading-[84px] -tracking-[1.25px]">
                so you don't have to
              </span>
              <span className="text-[28px] sm:text-[44px] md:text-[64px] font-bold text-corner-gradient leading-10 sm:leading-[44px] md:leading-[84px] -tracking-[1.25px]">
                figure out how
              </span>
            </div>
          </div>
          <div className="w-full text-center text-lg sm:text-2xl text-black-400">
            Let your team ship features faster, and
            <br /> leave the database complexities to us.
          </div>
          <div className="flex justify-center">
            <CustomButton
              title="Get started"
              className="text-xl text-common-white font-bold px-[25px] py-[17px] bg-blue border-blue w-fit leading-5 hover:bg-darkBlue hover:border-darkBlue"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center w-full lg:overflow-hidden">
          <div className="text-lg sm:text-xl font-bold text-SoftBlue leading-5 tracking-wide uppercase">
            Trusted by teams at
          </div>
          <div className="flex w-full relative">
            <div className="lg:flex w-full absolute h-full z-10 hidden">
              <div className="w-full bg-darkBlue-dark-to-transparent"></div>
              <div className="w-full bg-darkBlue-transparent-to-dark"></div>
            </div>
            <Splide
              options={{
                type: "loop",
                drag: false,
                focus: "center",
                arrows: false,
                pagination: false,
                clones: 3,
                autoScroll: {
                  speed: 1,
                  pauseOnHover: false,
                  pauseOnFocus: false,
                },
              }}
              extensions={{ AutoScroll }}
            >
              <SplideSlide className="w-fit">
                <div className="flex justify-center items-center ">
                  <div className="px-[31px] py-4">
                    <FormBricks />
                  </div>
                  <div className="px-[31px] py-4">
                    <Rapha />
                  </div>
                  <div className="px-[31px] py-4">
                    <Documenso />
                  </div>
                  <div className="px-[31px] py-4">
                    <Gatsby />
                  </div>
                  <div className="px-[31px] py-4">
                    <Dub />
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
