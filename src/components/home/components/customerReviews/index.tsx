import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import ReviewCrad from "./components/ReviewCrad";
import {
  reviewImage1,
  reviewImage2,
  reviewImage3,
  reviewImage4,
  reviewImage5,
  reviewImage6,
} from "@/utils/images/reviewImage";

const CustomerReviews = () => {
  return (
    <div className="bg-gradient-transparent-to-dark w-full flex justify-center">
      <div className="pt-20 flex flex-col gap-[60px]  w-full max-w-[1248px]">
        <span className="text-[32px] lg:text-5xl font-bold text-common-white leading-[35px] lg:leading-[52.8px] -tracking-[0.96px] text-center px-2 sm:px-8">
          Loved by developers globally and across industries
        </span>
        <div className="flex gap-[20px] max-h-[680px] relative flex-wrap lg:flex-nowrap mx-3 xl:px-0 justify-center overflow-y-hidden">
          <div className="absolute bottom-0 bg-gradient-transparent-to-dark h-[30%] z-10 w-full"></div>
          <div className="absolute top-0 bg-black-dark-to-transparent h-[30%] z-10 w-full"></div>
          <Splide
            options={{
              type: "loop",
              drag: false,
              focus: "center",
              arrows: false,
              pagination: false,
              clones: 3,
              direction: "ttb",
              autoScroll: {
                speed: 0.2,
              },
              height: "100%",
              gap: "24px",
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide className="h-fit ">
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="">
                  <ReviewCrad
                    reviewUserName="Matti Nannt"
                    image={reviewImage1}
                    department="Co-Founder"
                    skill="Formbricks"
                    reviewMessage="Thanks to Prisma, we can seamlessly scale our applications without concerns about data layer performance"
                  />
                </div>
                <div className="">
                  <ReviewCrad
                    reviewUserName="Steven Tey"
                    image={reviewImage6}
                    department="Founder"
                    skill="Dub.co"
                    reviewMessage="Entire SaaS businesses have been built on top
                  of the Prisma ecosystem— including OSS ones
                  like Dub.co. Have been loving the recent
                  performance improvements as well 🔥"
                  />
                </div>
              </div>
            </SplideSlide>
          </Splide>
          <Splide
            options={{
              type: "loop",
              drag: false,
              focus: "center",
              arrows: false,
              pagination: false,
              clones: 3,
              direction: "ttb",
              autoScroll: {
                speed: -0.2,
              },
              height: "100%",
              gap: "24px",
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide className="h-fit ">
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="">
                  <ReviewCrad
                    reviewUserName="Ricardo Almeida"
                    image={reviewImage2}
                    department="Software Engineer"
                    skill="Grover"
                    reviewMessage="Prisma has a low learning curve. Productivity
                  becomes higher because it gets combined with
                  end-to-end type-safety using TypeScript."
                  />
                </div>
                <div className="">
                  <ReviewCrad
                    reviewUserName="Nicolás Torres"
                    image={reviewImage3}
                    department="Fullstack Engineer"
                    skill="Backbase"
                    reviewMessage="It's the kind of DX that lets me get stuff done in
                  between my daughter's naps."
                  />
                </div>
              </div>
            </SplideSlide>
          </Splide>
          <Splide
            options={{
              type: "loop",
              drag: false,
              focus: "center",
              arrows: false,
              pagination: false,
              clones: 3,
              direction: "ttb",
              autoScroll: {
                speed: 0.2,
              },
              height: "100%",
              gap: "24px",
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide className="h-fit ">
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="">
                  <ReviewCrad
                    reviewUserName="Daniel Cranney"
                    image={reviewImage2}
                    department="Developer Advocate"
                    skill="WeAreDevelopers"
                    reviewMessage="I like how the Prisma docs made it easy to jump
                  straight into using it without needing to do a
                  huge amount of reading, and I instantly felt the
                  benefits."
                  />
                </div>
                <div className="">
                  <ReviewCrad
                    reviewUserName="Jake Colling"
                    image={reviewImage4}
                    department="Experimenting with LLM"
                    skill="powered apps"
                    reviewMessage="Huge fan of Prisma! The Schema file is great for
                  Cursor. You literally never have to write a CRUD
                  operation again."
                  />
                </div>
              </div>
            </SplideSlide>
          </Splide>
          <div className="absolute bottom-0 w-full h-48"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
