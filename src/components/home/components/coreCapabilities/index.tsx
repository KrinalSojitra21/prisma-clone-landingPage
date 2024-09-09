import React, { useEffect, useRef, useState } from "react";
import Build from "./components/Build";
import Fortify from "./components/Fortify";
import Grow from "./components/Grow";

const CoreCapabilities = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    let isScrolling = false;
    const handleScroll = () => {
      if (!isScrolling && containerRef.current && sectionsRef.current) {
        isScrolling = true;
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

        setScrollPercentage(scrollPercentage);
        console.log({ scrollPercentage });

        let newActiveSection;
        if (scrollPercentage < 0.45) {
          newActiveSection = 0;
        } else if (scrollPercentage < 0.97) {
          newActiveSection = 1;
        } else {
          newActiveSection = 2;
        }

        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);

          // Smooth scroll to the new section
          containerRef.current.scrollTo({
            top: (newActiveSection / 2) * (scrollHeight - clientHeight),
            behavior: "smooth",
          });

          // Apply transform to sections
          const translateX = -newActiveSection * 33.33; // 33.33% for each section
          sectionsRef.current.style.transform = `translateX(${translateX}%)`;
        }

        // Reset isScrolling after animation
        setTimeout(() => {
          isScrolling = false;
        }, 1000); // Adjust this value to match your scroll animation duration
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [activeSection]);

  const sections = [
    { title: "Build", Component: Build },
    { title: "Fortify", Component: Fortify },
    { title: "Grow", Component: Grow },
  ];

  return (
    <div className="lg:h-screen overflow-hidden w-full flex justify-center">
      <div
        ref={containerRef}
        className={`h-full lg:max-h-[670px] lg:overflow-y-scroll bg-black-900 mt-[60px]  hide-scrollbar rounded-3xl ${
          scrollPercentage > 0.1 && scrollPercentage < 0.99
            ? "w-full"
            : "max-w-[1240px]"
        }`}
      >
        <div className="h-[300vh] px-[145px] hidden lg:block ">
          <div className="sticky top-0 left-0 overflow-hidden flex flex-col max-w-[1240px]">
            <div className="hidden md:flex justify-between items-center gap-8  py-12 px-[90px]">
              {sections.map(({ title }, index) => (
                <React.Fragment key={title}>
                  <span
                    className={`text-[32px] lg:text-5xl font-bold leading-9 lg:leading-[52.8px] -tracking-[0.96px] transition-colors duration-300 ${
                      index === activeSection ? "text-white" : "text-black-600"
                    }`}
                  >
                    {title}
                  </span>
                  {index < 2 && (
                    <div className="bg-black-600 h-[1px] w-full relative">
                      <span
                        className="absolute top-0 left-0 h-full bg-purple transition-all duration-300"
                        style={{
                          width:
                            index === 0
                              ? `${Math.min(scrollPercentage * 200, 100)}%`
                              : scrollPercentage > 0.5
                              ? `${Math.max(
                                  (scrollPercentage - 0.5) * 200,
                                  0
                                )}%`
                              : "0%",
                        }}
                      ></span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div
              ref={sectionsRef}
              className="flex flex-1 transition-transform duration-1000 ease-in-out max-h-[500px]"
              style={{ width: `${sections.length * 100}%` }}
            >
              {sections.map(({ Component }, index) => (
                <div
                  key={index}
                  className="w-[33.33%] h-fit flex-shrink-0 px-2 "
                >
                  <Component />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden flex flex-col gap-20 py-20 px-5 sm:px-10">
          <Build />
          <Fortify />
          <Grow />
        </div>
      </div>
    </div>
  );
};

export default CoreCapabilities;
